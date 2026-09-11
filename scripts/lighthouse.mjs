// Lighthouse audit harness: auto-starts `vite preview` if needed, runs mobile/desktop,
// saves html+json to lighthouse-reports/, prints bars + metrics, enforces --threshold.
import { spawn } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const args = process.argv.slice(2);
const getArg = (name, fallback) => {
  const i = args.findIndex(
    (a) => a === `--${name}` || a.startsWith(`--${name}=`),
  );
  if (i === -1) return fallback;
  const eq = args[i].indexOf("=");
  if (eq !== -1) return args[i].slice(eq + 1);
  return args[i + 1] ?? fallback;
};

const FORM_FACTOR = (getArg("form-factor", "both") || "both").toLowerCase();
const THRESHOLD = Number(getArg("threshold", "85"));
const TARGET_URL = getArg("url", "http://localhost:4173");
const OUT_DIR = "lighthouse-reports";

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function isReachable(url) {
  try {
    const ctrl = new AbortController();
    const t = setTimeout(() => ctrl.abort(), 3000);
    const res = await fetch(url, { signal: ctrl.signal });
    clearTimeout(t);
    return res.ok || res.status < 500;
  } catch {
    return false;
  }
}

async function waitForUrl(url, timeoutMs = 30000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    if (await isReachable(url)) return true;
    await sleep(1000);
  }
  return false;
}

function bar(score) {
  const filled = Math.round((score / 100) * 20);
  return "█".repeat(filled) + "░".repeat(20 - filled);
}

function metric(audits, id) {
  const a = audits[id];
  if (!a) return "n/a";
  return a.displayValue ?? a.numericValue ?? "n/a";
}

async function runOnce(url, formFactor, chromePort, lighthouse) {
  const screenEmulation =
    formFactor === "mobile"
      ? {
          mobile: true,
          width: 360,
          height: 640,
          deviceScaleFactor: 2,
          disabled: false,
        }
      : {
          mobile: false,
          width: 1350,
          height: 940,
          deviceScaleFactor: 1,
          disabled: false,
        };
  const result = await lighthouse(
    url,
    {
      port: chromePort,
      output: ["html", "json"],
      logLevel: "error",
      formFactor,
      screenEmulation,
    },
    undefined,
  );
  return result;
}

async function main() {
  const factors =
    FORM_FACTOR === "both" ? ["mobile", "desktop"] : [FORM_FACTOR];
  if (!["mobile", "desktop", "both"].includes(FORM_FACTOR)) {
    console.error(`Invalid --form-factor=${FORM_FACTOR}, use mobile|desktop|both`);
    process.exit(1);
  }

  // Auto-start vite preview if target unreachable
  let previewProc = null;
  if (!(await isReachable(TARGET_URL))) {
    console.log(`[lighthouse] ${TARGET_URL} unreachable — starting vite preview…`);
    const targetPort =
      Number(new URL(TARGET_URL).port || "4173") || 4173;
    previewProc = spawn("npx", ["vite", "preview", "--port", String(targetPort)], {
      shell: true,
      stdio: "ignore",
    });
    const ok = await waitForUrl(TARGET_URL, 30000);
    if (!ok) {
      console.error("[lighthouse] vite preview did not become ready in 30s");
      try {
        previewProc.kill();
      } catch {}
      process.exit(1);
    }
    console.log("[lighthouse] vite preview ready.");
  }

  // Defensive CJS/ESM interop for chrome-launcher
  const m = await import("chrome-launcher");
  const launcher = m.default ?? m;
  const lhMod = await import("lighthouse");
  const lighthouse = lhMod.default ?? lhMod;

  const chrome = await launcher.launch({
    chromeFlags: ["--headless", "--no-sandbox", "--disable-gpu"],
  });

  fs.mkdirSync(OUT_DIR, { recursive: true });
  let failed = false;

  try {
    for (const factor of factors) {
      console.log(`\n[lighthouse] Running ${factor} audit on ${TARGET_URL}…`);
      const result = await runOnce(TARGET_URL, factor, chrome.port, lighthouse);
      const lhr = result.lhr;
      const cats = lhr.categories;

      const stamp = new Date().toISOString().replace(/[:.]/g, "-");
      const base = `lighthouse-${factor}-${stamp}`;
      // result.report is an ARRAY: index 0 → html, 1 → json
      const [htmlReport, jsonReport] = result.report;
      fs.writeFileSync(path.join(OUT_DIR, `${base}.html`), htmlReport);
      fs.writeFileSync(path.join(OUT_DIR, `${base}.json`), jsonReport);
      console.log(`[lighthouse] Saved ${base}.html + .json`);

      for (const key of ["performance", "accessibility", "best-practices", "seo"]) {
        const c = cats[key];
        if (!c) continue;
        const s = Math.round((c.score ?? 0) * 100);
        const status = s < THRESHOLD ? "FAIL" : "ok";
        if (s < THRESHOLD) failed = true;
        console.log(
          `  ${key.padEnd(15)} ${bar(s)} ${String(s).padStart(3)} [${status}]`,
        );
      }
      const a = lhr.audits;
      console.log(
        `  metrics: FCP=${metric(a, "first-contentful-paint")} LCP=${metric(a, "largest-contentful-paint")} TBT=${metric(a, "total-blocking-time")} CLS=${metric(a, "cumulative-layout-shift")} SI=${metric(a, "speed-index")}`,
      );

      // Top insights: worst opportunities + diagnostics relevant to perf
      const opps = Object.values(a)
        .filter((x) => x && x.details && x.details.type === "opportunity" && (x.numericValue ?? 0) > 0)
        .sort((x, y) => (y.numericValue ?? 0) - (x.numericValue ?? 0))
        .slice(0, 5);
      if (opps.length) {
        console.log("  top opportunities:");
        for (const o of opps) {
          console.log(
            `    - ${o.id}: ${o.displayValue ?? ""} (savings ~${Math.round(o.numericValue ?? 0)}ms)`,
          );
        }
      }
    }
  } finally {
    try {
      await chrome.kill();
    } catch {}
    if (previewProc) {
      try {
        previewProc.kill();
      } catch {}
    }
  }

  if (failed) {
    console.error(
      `\n[lighthouse] One or more categories below --threshold=${THRESHOLD}`,
    );
    process.exit(1);
  }
  console.log("\n[lighthouse] All categories above threshold.");
}

main().catch((e) => {
  console.error("[lighthouse] Fatal:", e);
  process.exit(1);
});
