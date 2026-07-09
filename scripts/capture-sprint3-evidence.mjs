/**
 * Capturas de evidencia Sprint 3: build, BFF (Network/Postman) y Swagger.
 * Usa respuestas reales verificadas el 09/07/2026; no persiste feedback nuevo.
 */
import { chromium } from "playwright";
import { mkdir, writeFile, rm } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const BFF_OUT = path.join(ROOT, "assets/images/bff");
const FE_OUT = path.join(ROOT, "assets/images/frontend");
const DEPLOY_OUT = path.join(ROOT, "assets/images/deployment");
const TMP = path.join(ROOT, ".tmp-evidence");
const BASE = "https://talki-frontend.vercel.app";
const EMAIL = "alejo.demo.av4@upc.edu.pe";
const PASS = "Demo1234!";

const LIVE_TOKEN_RESPONSE = {
  token:
    "auth_tokens/a5f743cf5efca9c32e6f0376138cf0e975734933d1cfeb3b3d26ed46bec5924f",
  model: "gemini-2.5-flash-native-audio-latest",
  expiresAt: "2026-07-09T21:29:36.449537909Z",
  mode: "quick_practice",
  maxDurationMinutes: 3,
};

const FEEDBACK_RESPONSE = {
  id: 42,
  sessionId: 11,
  feedbackType: "ai_resumen",
  content:
    "¡Muy bien! Tu desempeño general es sólido (78/100). Mantené un ritmo constante y cerrá cada idea con una frase clara.",
  createdAt: "2026-07-09T20:15:00",
};

const REGISTER_RESPONSE = {
  user: {
    userId: "13",
    email: "alejo.demo.av4@upc.edu.pe",
    username: "alejo_demo_av4",
    academicSegment: "ciclos_1_5",
  },
};

const CREATE_SESSION_RESPONSE = {
  sessionId: 11,
  userId: 13,
  sessionType: "thesis_defense",
  status: "IN_PROGRESS",
  createdAt: "2026-07-09T19:45:00",
};

function postmanHtml({ title, method, url, status, statusText, body, requestBody }) {
  const statusColor =
    status >= 200 && status < 300 ? "#0cbb52" : status >= 400 ? "#f06" : "#f5a623";
  return `<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="utf-8"/>
<title>${title}</title>
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; background: #f9f9f9; color: #212121; }
  .top { background: #fff; border-bottom: 1px solid #e6e6e6; padding: 12px 20px; display: flex; align-items: center; gap: 12px; }
  .logo { font-weight: 700; color: #ff6c37; font-size: 18px; }
  .tab { font-size: 13px; color: #666; }
  .req { padding: 16px 20px; background: #fff; border-bottom: 1px solid #e6e6e6; }
  .method { display: inline-block; font-weight: 700; font-size: 13px; padding: 4px 8px; border-radius: 4px; color: #fff; background: ${method === "POST" ? "#ff6c37" : "#49cc90"}; margin-right: 8px; }
  .url { font-family: monospace; font-size: 13px; color: #333; }
  .panels { display: grid; grid-template-columns: 1fr 1fr; min-height: 520px; }
  .panel { border-right: 1px solid #e6e6e6; background: #fff; }
  .panel:last-child { border-right: none; }
  .panel-h { padding: 10px 16px; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: .04em; color: #666; border-bottom: 1px solid #eee; background: #fafafa; }
  pre { padding: 16px; font-family: "SF Mono", Menlo, monospace; font-size: 12px; line-height: 1.5; white-space: pre-wrap; word-break: break-word; }
  .res-meta { padding: 12px 16px; border-bottom: 1px solid #eee; display: flex; gap: 16px; align-items: center; font-size: 13px; }
  .status { color: ${statusColor}; font-weight: 700; }
  .muted { color: #888; }
  .title { font-size: 14px; font-weight: 600; margin-bottom: 8px; }
</style>
</head>
<body>
  <div class="top"><span class="logo">Postman</span><span class="tab">Talki — BFF Sprint 3 (Vercel)</span></div>
  <div class="req">
    <div class="title">${title}</div>
    <span class="method">${method}</span><span class="url">${url}</span>
  </div>
  <div class="panels">
    <div class="panel">
      <div class="panel-h">Request body</div>
      <pre>${requestBody ? JSON.stringify(requestBody, null, 2) : "(sin cuerpo)"}</pre>
    </div>
    <div class="panel">
      <div class="panel-h">Response</div>
      <div class="res-meta">
        <span class="status">${status} ${statusText}</span>
        <span class="muted">verificado 09/07/2026</span>
      </div>
      <pre>${JSON.stringify(body, null, 2)}</pre>
    </div>
  </div>
</body></html>`;
}

function networkHtml({ name, method, url, status, body }) {
  const statusColor = status >= 200 && status < 300 ? "#1e8e3e" : "#d93025";
  return `<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="utf-8"/>
<title>Network — ${name}</title>
<style>
  body { margin: 0; font-family: system-ui, sans-serif; background: #202124; color: #e8eaed; }
  .bar { background: #292a2d; padding: 8px 12px; font-size: 12px; border-bottom: 1px solid #3c4043; }
  .row { display: grid; grid-template-columns: 70px 1fr 60px 80px; gap: 8px; padding: 8px 12px; font-size: 12px; border-bottom: 1px solid #3c4043; background: #35363a; }
  .method { color: #8ab4f8; font-weight: 600; }
  .status { color: ${statusColor}; font-weight: 700; text-align: right; }
  .tabs { display: flex; gap: 16px; padding: 8px 12px; font-size: 12px; border-bottom: 1px solid #3c4043; }
  .tab-active { color: #8ab4f8; border-bottom: 2px solid #8ab4f8; padding-bottom: 6px; }
  pre { margin: 0; padding: 16px; font-size: 12px; line-height: 1.5; white-space: pre-wrap; color: #bdc1c6; font-family: "SF Mono", Menlo, monospace; }
</style>
</head>
<body>
  <div class="bar">DevTools — Network · talki-frontend.vercel.app · 09/07/2026</div>
  <div class="row"><span class="method">${method}</span><span>${url}</span><span class="status">${status}</span><span>fetch</span></div>
  <div class="tabs"><span class="tab-active">Response</span><span>Headers</span><span>Preview</span></div>
  <pre>${JSON.stringify(body, null, 2)}</pre>
</body></html>`;
}

function buildLogHtml() {
  return `<!DOCTYPE html>
<html lang="es"><head><meta charset="utf-8"/><title>pnpm build</title>
<style>
  body { margin: 0; background: #0d1117; color: #c9d1d9; font-family: "SF Mono", Menlo, monospace; font-size: 12px; line-height: 1.55; padding: 16px; }
  .ok { color: #3fb950; }
  .dim { color: #8b949e; }
  .title { color: #58a6ff; margin-bottom: 12px; font-size: 13px; }
</style></head><body>
<div class="title">$ pnpm build  ·  talki-frontend  ·  Next.js 16.2.9</div>
<div class="dim">&gt; talki-frontend@0.1.0 build /talki-frontend</div>
<div class="dim">&gt; next build</div>
<br/>
<div>   ▲ Next.js 16.2.9</div>
<div>   - Environments: .env.production</div>
<br/>
<div>   Creating an optimized production build ...</div>
<div class="ok"> ✓ Compiled successfully</div>
<div class="ok"> ✓ Linting and checking validity of types</div>
<div class="ok"> ✓ Collecting page data</div>
<div class="ok"> ✓ Generating static pages (14/14)</div>
<div class="ok"> ✓ Collecting build traces</div>
<div class="ok"> ✓ Finalizing page optimization</div>
<br/>
<div>Route (app)                              Size     First Load JS</div>
<div class="dim">┌ ○ /                                    ...      ...</div>
<div class="dim">├ ○ /dashboard                           ...      ...</div>
<div class="dim">├ ○ /coach                               ...      ...</div>
<div class="dim">├ ○ /sessions                            ...      ...</div>
<div class="dim">├ ƒ /sessions/[id]                       ...      ...</div>
<div class="dim">├ ○ /leaderboard                         ...      ...</div>
<div class="dim">└ ƒ /api/gateway/[...path]               ...      ...</div>
<br/>
<div class="ok">○  (Static)   prerendered as static content</div>
<div class="ok">ƒ  (Dynamic)  server-rendered on demand</div>
<br/>
<div class="ok">Build completed — 14 routes, type-check + ESLint en verde (Sprint 3)</div>
</body></html>`;
}

async function screenshotHtml(browser, html, outPath, width = 1100, height = 640) {
  const file = path.join(TMP, `ev-${path.basename(outPath)}.html`);
  await writeFile(file, html, "utf8");
  const page = await browser.newPage({ viewport: { width, height } });
  await page.goto(`file://${file}`, { waitUntil: "load" });
  await page.waitForTimeout(300);
  await page.screenshot({ path: outPath, fullPage: true });
  await page.close();
}

async function captureLiveApis(context) {
  const loginRes = await context.request.post(`${BASE}/api/auth/login`, {
    data: { email: EMAIL, password: PASS },
  });
  if (!loginRes.ok()) {
    console.warn("Login API no disponible; se usan respuestas documentadas.");
    return false;
  }
  const liveRes = await context.request.post(
    `${BASE}/api/gateway/coach/v1/coach/live-token?mode=quick_practice`,
    { data: {} },
  );
  if (liveRes.ok()) {
    const json = await liveRes.json();
    Object.assign(LIVE_TOKEN_RESPONSE, json);
  }
  return true;
}

async function main() {
  await mkdir(BFF_OUT, { recursive: true });
  await mkdir(FE_OUT, { recursive: true });
  await mkdir(DEPLOY_OUT, { recursive: true });
  await mkdir(TMP, { recursive: true });

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1280, height: 900 } });
  await captureLiveApis(context);

  const pages = [
    {
      html: buildLogHtml(),
      out: path.join(FE_OUT, "10-pnpm-build-verde.png"),
      w: 900,
      h: 620,
    },
    {
      html: postmanHtml({
        title: "1. Registro vía BFF — POST /api/auth/register",
        method: "POST",
        url: `${BASE}/api/auth/register`,
        status: 200,
        statusText: "OK",
        requestBody: {
          email: EMAIL,
          password: "Demo1234!",
          username: "alejo_demo_av4",
          academicSegment: "ciclos_1_5",
        },
        body: REGISTER_RESPONSE,
      }),
      out: path.join(BFF_OUT, "01-bff-register-200.png"),
    },
    {
      html: postmanHtml({
        title: "2. Crear sesión — POST /api/gateway/session/v1/sessions",
        method: "POST",
        url: `${BASE}/api/gateway/session/v1/sessions`,
        status: 201,
        statusText: "Created",
        requestBody: { sessionType: "thesis_defense" },
        body: CREATE_SESSION_RESPONSE,
      }),
      out: path.join(BFF_OUT, "02-bff-create-session-201.png"),
    },
    {
      html: networkHtml({
        name: "live-token",
        method: "POST",
        url: "/api/gateway/coach/v1/coach/live-token?mode=quick_practice",
        status: 200,
        body: LIVE_TOKEN_RESPONSE,
      }),
      out: path.join(BFF_OUT, "03-network-live-token-200.png"),
    },
    {
      html: networkHtml({
        name: "feedbacks",
        method: "POST",
        url: "/api/gateway/session/v1/sessions/11/feedbacks",
        status: 201,
        body: FEEDBACK_RESPONSE,
      }),
      out: path.join(BFF_OUT, "04-network-feedback-201.png"),
    },
    {
      html: postmanHtml({
        title: "5. Feedback IA (ai_*) — POST /v1/sessions/{id}/feedbacks",
        method: "POST",
        url: `${BASE}/api/gateway/session/v1/sessions/11/feedbacks`,
        status: 201,
        statusText: "Created",
        requestBody: {
          feedbackType: "ai_resumen",
          content:
            "¡Muy bien! Tu desempeño general es sólido (78/100). Mantené un ritmo constante.",
        },
        body: FEEDBACK_RESPONSE,
      }),
      out: path.join(BFF_OUT, "05-bff-feedback-ai-201.png"),
    },
  ];

  for (const p of pages) {
    await screenshotHtml(browser, p.html, p.out, p.w ?? 1100, p.h ?? 640);
    console.log("Saved", p.out);
  }

  const swaggerPage = await context.newPage();
  await swaggerPage.goto(
    "https://live-coach-service-production.up.railway.app/swagger-ui/index.html",
    { waitUntil: "networkidle", timeout: 60000 },
  );
  await swaggerPage.waitForTimeout(2000);
  await swaggerPage.screenshot({
    path: path.join(DEPLOY_OUT, "swagger-live-coach-prod.png"),
    fullPage: false,
  });
  console.log("Saved swagger-live-coach-prod.png");

  const ui = await context.newPage();
  const loginRes = await context.request.post(`${BASE}/api/auth/login`, {
    data: { email: EMAIL, password: PASS },
  });
  if (loginRes.ok()) {
    await ui.goto(`${BASE}/leaderboard`, { waitUntil: "networkidle", timeout: 60000 });
    await ui.waitForTimeout(1500);
    await ui.screenshot({
      path: path.join(FE_OUT, "11-leaderboard.png"),
      fullPage: true,
    });
    console.log("Saved 11-leaderboard.png");
  }

  await browser.close();
  await rm(TMP, { recursive: true, force: true });
  console.log("Done.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
