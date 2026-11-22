const fs = require("fs");
const path = require("path");
const esbuild = require("C:/Users/user/AppData/Local/npm-cache/_npx/fd45a72a545557e9/node_modules/esbuild");

const root = path.resolve(__dirname, "..");
const distDir = path.join(root, "dist");
fs.mkdirSync(distDir, { recursive: true });

const bundlePath = path.join(distDir, "bundle.js");
const audPath = "C:/Users/user/.gemini/antigravity/brain/fd7573c9-c011-4104-93ab-f91c94aa7db2/scratch/aud_data.json";

esbuild.buildSync({
  entryPoints: [path.join(root, "src", "main.tsx")],
  bundle: true,
  minify: true,
  format: "iife",
  target: ["es2020"],
  outfile: bundlePath,
  define: {
    "process.env.NODE_ENV": '"production"'
  }
});

const css = fs.readFileSync(path.join(root, "src", "styles.css"), "utf8");
const audJson = fs.readFileSync(audPath, "utf8").replace(/<\//g, "<\\/");
const bundleJs = fs.readFileSync(bundlePath, "utf8").replace(/<\/script/gi, "<\\/script");

const html = `<!DOCTYPE html>
<html lang="ru">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>Deutsch Pro — Немецкий с нуля до A2/B1 (React + TypeScript)</title>
<style>
${css}
</style>
</head>
<body>
<div id="root"></div>
<script>window.__OFFLINE_AUD__=${audJson};</script>
<script>
${bundleJs}
</script>
</body>
</html>`;

const outIndex = path.join(root, "index.html");
const outOffline = path.join(root, "Немецкий_с_нуля_офлайн (1).html");

fs.writeFileSync(outIndex, html, "utf8");
fs.writeFileSync(outOffline, html, "utf8");

console.log("Built bundle.js bytes:", fs.statSync(bundlePath).size);
console.log("Built HTML bytes:", Buffer.byteLength(html, "utf8"));
console.log("Written:", outIndex);
console.log("Written:", outOffline);
