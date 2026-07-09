import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const OUT = path.resolve("assets/images/frontend");
const BASE = "https://talki-frontend.vercel.app";
const EMAIL = "alejo.demo.av4@upc.edu.pe";
const PASS = "Demo1234!";

const MOCK_FEEDBACKS = [
  {
    id: 1,
    feedbackType: "ai_resumen",
    content:
      "¡Muy bien! Tu desempeño general es sólido (78/100). Mantené un ritmo constante y cerrá cada idea con una frase clara.",
    createdAt: "2026-07-09T20:15:00",
  },
  {
    id: 2,
    feedbackType: "ai_muletillas",
    content:
      "Detecté 2 muletillas: «este» (1), «o sea» (1). Reemplazalas con una pausa de 1 segundo: el silencio transmite más seguridad que un «este».",
    createdAt: "2026-07-09T20:15:00",
  },
  {
    id: 3,
    feedbackType: "ai_velocidad",
    content:
      "Ritmo adecuado (132 PPM). Estás en el rango recomendado para exposiciones académicas.",
    createdAt: "2026-07-09T20:15:00",
  },
  {
    id: 4,
    feedbackType: "ai_fluidez",
    content:
      "Tu discurso fluye con naturalidad. Seguí practicando con escenarios de mayor presión (entrevista o defensa).",
    createdAt: "2026-07-09T20:15:00",
  },
];

async function injectCoachFeedback(page) {
  await page.evaluate(
    ({ items, score }) => {
      const empty = [...document.querySelectorAll("p")].find((p) =>
        p.textContent?.includes("grabador flotante"),
      );
      const content = empty?.closest('[data-slot="card-content"]');
      if (!content) return;
      const labels = {
        ai_resumen: "Resumen",
        ai_muletillas: "Muletillas",
        ai_velocidad: "Ritmo",
        ai_fluidez: "Fluidez",
      };
      const badge = document.querySelector('[data-slot="card-header"] .text-sm');
      if (badge) badge.textContent = `${score}/100`;
      content.innerHTML = `<ul class="space-y-3">${items
        .map(
          (item) => `
        <li class="rounded-lg border border-primary/10 bg-primary/5 p-4">
          <div class="mb-2 flex items-center gap-2">
            <span class="inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-medium">${labels[item.feedbackType] ?? item.feedbackType}</span>
            ${item.feedbackType === "ai_resumen" ? '<span class="text-xs text-muted-foreground">09/07/2026, 3:15 p. m.</span>' : ""}
          </div>
          <p class="text-sm leading-relaxed">${item.content}</p>
        </li>`,
        )
        .join("")}</ul>`;
    },
    { items: MOCK_FEEDBACKS, score: 78 },
  );
}

async function injectSessionFeedback(page) {
  const empty = page.getByText(/Todavía no hay análisis/i);
  const count = await empty.count();
  if (!count) {
    console.warn("injectSessionFeedback: empty state not found");
    return;
  }
  await empty.evaluate((el, payload) => {
    const { items, score } = payload;
    const content =
      el.closest('[data-slot="card-content"]') ??
      el.parentElement?.closest('[data-slot="card-content"]') ??
      el.parentElement;
    if (!content) return;
    const labels = {
      ai_resumen: "Resumen",
      ai_muletillas: "Muletillas",
      ai_velocidad: "Ritmo",
      ai_fluidez: "Fluidez",
    };
    const card =
      el.closest('[data-slot="card"]') ??
      el.closest(".rounded-xl") ??
      content.parentElement;
    const badge = card?.querySelector(
      '[data-slot="card-header"] .px-3, [data-slot="card-header"] .text-sm',
    );
    if (badge) badge.textContent = `${score}/100`;
    content.innerHTML = `<ul class="space-y-3">${items
      .map(
        (item) => `
        <li class="rounded-lg border border-primary/10 bg-primary/5 p-4">
          <div class="mb-2 flex items-center gap-2">
            <span class="inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-medium">${labels[item.feedbackType] ?? item.feedbackType}</span>
            ${item.feedbackType === "ai_resumen" ? '<span class="text-xs text-muted-foreground">09/07/2026, 3:15 p. m.</span>' : ""}
          </div>
          <p class="text-sm leading-relaxed">${item.content}</p>
        </li>`,
      )
      .join("")}</ul>`;
  }, { items: MOCK_FEEDBACKS, score: 78 });
  const hasMuletillas = await page.getByText("Muletillas").count();
  console.log("injectSessionFeedback: Muletillas visible =", hasMuletillas > 0);
}

async function login(context, page) {
  const res = await context.request.post(`${BASE}/api/auth/login`, {
    data: { email: EMAIL, password: PASS },
  });
  if (!res.ok()) throw new Error(`Login failed: ${res.status()}`);
  await page.goto(`${BASE}/dashboard`, { waitUntil: "networkidle" });
}

async function main() {
  await mkdir(OUT, { recursive: true });
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1280, height: 900 },
    locale: "es-PE",
  });
  const page = await context.newPage();

  await login(context, page);

  await page.goto(`${BASE}/coach`, { waitUntil: "networkidle" });
  await page.waitForSelector("text=Live Coach", { timeout: 30000 });
  await page.waitForTimeout(1500);
  await injectCoachFeedback(page);
  await page.waitForTimeout(500);
  await page.screenshot({
    path: path.join(OUT, "07-coach-ai-feedback.png"),
    fullPage: true,
  });

  await page.goto(`${BASE}/sessions/11`, { waitUntil: "domcontentloaded" });
  await page.waitForSelector("text=Transcripción en vivo", { timeout: 30000 });
  await page.waitForSelector("text=Todavía no hay análisis", { timeout: 30000 });
  await page.waitForTimeout(1500);
  await page.screenshot({
    path: path.join(OUT, "08-session-recording.png"),
    fullPage: false,
  });

  await injectSessionFeedback(page);
  await page.waitForTimeout(500);
  await page.screenshot({
    path: path.join(OUT, "09-session-ai-feedback.png"),
    fullPage: true,
  });

  await browser.close();
  console.log("Screenshots saved to", OUT);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
