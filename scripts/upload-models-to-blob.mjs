import { readFile, readdir } from "node:fs/promises";
import path from "node:path";
import { put } from "@vercel/blob";

const MODELS_DIR = path.join(process.cwd(), "public", "models");

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walk(full)));
    } else if (/\.(glb|usdz)$/i.test(entry.name) && !/1\.glb$/i.test(entry.name)) {
      files.push(full);
    }
  }
  return files;
}

const files = await walk(MODELS_DIR);
console.log(`Found ${files.length} model files to upload.\n`);

const results = {};
for (const filePath of files) {
  const rel = path.relative(MODELS_DIR, filePath).replace(/\\/g, "/");
  const buffer = await readFile(filePath);
  process.stdout.write(`Uploading ${rel} (${(buffer.length / 1024 / 1024).toFixed(2)}MB)... `);
  const blob = await put(`models/${rel}`, buffer, {
    access: "public",
    addRandomSuffix: false,
  });
  console.log("done");
  results[rel] = blob.url;
}

console.log("\n--- URLS ---");
console.log(JSON.stringify(results, null, 2));
