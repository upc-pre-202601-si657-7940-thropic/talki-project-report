import { chromium } from "playwright";
import path from "node:path";

const OUT = path.resolve("assets/images/collaboration/project-board-view3.png");
const URL =
  "https://github.com/orgs/upc-pre-202601-si657-7940-thropic/projects/1/views/2";

async function main() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({
    viewport: { width: 1920, height: 1080 },
  });
  await page.goto(URL, { waitUntil: "networkidle", timeout: 60000 });
  await page.waitForSelector("text=Done", { timeout: 30000 });
  await page.waitForTimeout(2000);
  // Scroll board to show Done column centered
  await page.evaluate(() => {
    const board = document.querySelector('[data-testid="board-view"]') ||
      document.querySelector(".ProjectV2Board") ||
      document.querySelector('[class*="Board"]');
    if (board) board.scrollLeft = board.scrollWidth;
    window.scrollTo(0, 0);
  });
  await page.waitForTimeout(1000);
  await page.screenshot({ path: OUT, fullPage: false });
  await browser.close();
  console.log("Saved", OUT);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
