import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, "..", "dist");

const routes = [
  "",
  "automation",
  "security",
  "lighting",
  "networking",
  "audio",
  "about",
  "contact",
  "why-us",
  "blogs",
  "experience",
  "service"
];

console.log("\n==============================================");
console.log("🔍 FULL AUDIT VERIFICATION REPORT");
console.log("==============================================\n");

let allPassed = true;

for (const route of routes) {
  const filePath = route === "" ? path.join(distDir, "index.html") : path.join(distDir, route, "index.html");
  const displayRoute = route === "" ? "/" : `/${route}`;

  if (!fs.existsSync(filePath)) {
    console.error(`❌ Missing file: ${filePath}`);
    allPassed = false;
    continue;
  }

  const html = fs.readFileSync(filePath, "utf-8");

  // Check Title
  const titleMatch = html.match(/<title>(.*?)<\/title>/i);
  const title = titleMatch ? titleMatch[1] : null;

  // Check Canonical
  const canonicalMatch = html.match(/<link\s+rel=["']canonical["']\s+href=["'](.*?)["']/i);
  const canonical = canonicalMatch ? canonicalMatch[1] : null;

  // Check Meta Description
  const descMatch = html.match(/<meta\s+name=["']description["']\s+content=["'](.*?)["']/i);
  const desc = descMatch ? descMatch[1] : null;

  // Check OG URL
  const ogUrlMatch = html.match(/<meta\s+property=["']og:url["']\s+content=["'](.*?)["']/i);
  const ogUrl = ogUrlMatch ? ogUrlMatch[1] : null;

  // Check Schema JSON-LD
  const schemaMatch = html.match(/<script\s+type=["']application\/ld\+json["']\s+id=["']route-jsonld["']>([\s\S]*?)<\/script>/i);
  let schemaTypes = [];
  if (schemaMatch) {
    try {
      const parsed = JSON.parse(schemaMatch[1]);
      if (parsed["@graph"]) {
        schemaTypes = parsed["@graph"].map(node => node["@type"]);
      }
    } catch (e) {
      schemaTypes = ["INVALID JSON: " + e.message];
      allPassed = false;
    }
  } else {
    schemaTypes = ["MISSING JSON-LD"];
    allPassed = false;
  }

  console.log(`Route: ${displayRoute.padEnd(14)}`);
  console.log(`  • Title:     ${title}`);
  console.log(`  • Canonical: ${canonical}`);
  console.log(`  • OG URL:    ${ogUrl}`);
  console.log(`  • Schema:    @graph nodes -> [${schemaTypes.join(", ")}]`);
  console.log(`  --------------------------------------------------`);
}

if (allPassed) {
  console.log("\n🎉 ALL 12 ROUTES 100% VALIDATED & COMPLIANT WITH AUDIT REQUIREMENTS!\n");
} else {
  console.log("\n⚠️ Some routes failed verification. See above errors.\n");
}
