#!/usr/bin/env node
/**
 * Exports /quotation to a print-exact A4 PDF using headless Chrome.
 *
 * Usage:
 *   npm run dev                 # in one terminal (or `npm run build && npm start`)
 *   npm run pdf:quotation       # in another
 *
 * Options (env):
 *   QUOTATION_URL   page to print   (default http://localhost:3000/quotation)
 *   QUOTATION_OUT   output path     (default public/quotation.pdf)
 *   CHROME_PATH     Chrome binary   (default: first match from the list below)
 *
 * No extra dependency is needed — Chrome renders the same print CSS the
 * browser's own "Save as PDF" uses, so the exported file matches the page.
 */
import { execFile } from "node:child_process";
import { existsSync, mkdirSync, rmSync, statSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { promisify } from "node:util";

const execFileAsync = promisify(execFile);
const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");

const URL_TO_PRINT = process.env.QUOTATION_URL ?? "http://localhost:3000/quotation";
const OUT_PATH = resolve(projectRoot, process.env.QUOTATION_OUT ?? "public/quotation.pdf");

const CHROME_CANDIDATES = [
  process.env.CHROME_PATH,
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "C:/Program Files/Microsoft/Edge/Application/msedge.exe",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium",
  "/usr/bin/chromium-browser",
].filter(Boolean);

function findChrome() {
  const found = CHROME_CANDIDATES.find((p) => existsSync(p));
  if (!found) {
    throw new Error(
      "Chrome/Edge not found. Set CHROME_PATH to your browser binary, e.g.\n" +
        '  CHROME_PATH="C:/Program Files/Google/Chrome/Application/chrome.exe" npm run pdf:quotation',
    );
  }
  return found;
}

async function waitForServer(url, timeoutMs = 60_000) {
  const deadline = Date.now() + timeoutMs;
  let lastError;
  while (Date.now() < deadline) {
    try {
      const res = await fetch(url, { redirect: "follow" });
      if (res.ok) return;
      lastError = new Error(`HTTP ${res.status}`);
    } catch (err) {
      lastError = err;
    }
    await new Promise((r) => setTimeout(r, 1000));
  }
  throw new Error(
    `Could not reach ${url} (${lastError?.message ?? "timeout"}).\n` +
      "Start the site first with `npm run dev`, or set QUOTATION_URL.",
  );
}

async function main() {
  const chrome = findChrome();
  console.log(`• Browser : ${chrome}`);
  console.log(`• Source  : ${URL_TO_PRINT}`);

  await waitForServer(URL_TO_PRINT);
  console.log("• Server  : reachable");

  mkdirSync(dirname(OUT_PATH), { recursive: true });
  rmSync(OUT_PATH, { force: true });

  const profileDir = resolve(projectRoot, "node_modules/.cache/quotation-chrome-profile");
  mkdirSync(profileDir, { recursive: true });

  await execFileAsync(
    chrome,
    [
      "--headless=new",
      "--disable-gpu",
      "--no-sandbox",
      "--no-first-run",
      "--hide-scrollbars",
      `--user-data-dir=${profileDir}`,
      "--no-pdf-header-footer", // no browser URL/date chrome on the page
      "--run-all-compositor-stages-before-draw",
      "--virtual-time-budget=15000", // let fonts + logo finish loading
      `--print-to-pdf=${OUT_PATH}`,
      URL_TO_PRINT,
    ],
    { timeout: 120_000, windowsHide: true },
  );

  if (!existsSync(OUT_PATH)) throw new Error("Chrome exited without writing a PDF.");
  const kb = (statSync(OUT_PATH).size / 1024).toFixed(0);
  console.log(`✓ PDF     : ${OUT_PATH} (${kb} KB)`);
}

main().catch((err) => {
  console.error(`\n✗ ${err.message}`);
  process.exit(1);
});
