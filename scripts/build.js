const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const esbuild = require("C:/Users/user/AppData/Local/npm-cache/_npx/fd45a72a545557e9/node_modules/esbuild");

const root = path.resolve(__dirname, "..");
const distDir = path.join(root, "dist");
fs.mkdirSync(distDir, { recursive: true });

const bundlePath = path.join(distDir, "bundle.js");
const audBundlePath = path.join(distDir, "aud.js");
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
const rawBundleJs = fs.readFileSync(bundlePath, "utf8");
const audRaw = fs.readFileSync(audPath, "utf8");
const audInlineJson = audRaw.replace(/<\//g, "<\\/");
const bundleInlineJs = rawBundleJs.replace(/<\/script/gi, "<\\/script");

fs.writeFileSync(audBundlePath, `window.__OFFLINE_AUD__=${audRaw};\n`, "utf8");

const ver = crypto
  .createHash("sha256")
  .update(rawBundleJs)
  .update(css)
  .digest("hex")
  .slice(0, 8);

const webHtml = `<!DOCTYPE html>
<html lang="ru">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="theme-color" content="#c8341f">
<meta name="apple-mobile-web-app-capable" content="yes">
<title>Deutsch Pro — Немецкий с нуля до A2/B1 (React + TypeScript)</title>
<link rel="manifest" href="manifest.json">
<style>
${css}
</style>
</head>
<body>
<div id="root"><div class="topbar"><div class="topbar-in"><div class="brand"><span>🇩🇪 Deutsch Pro</span></div></div></div><main><div class="card"><h2>Загрузка тренажёров...</h2><p class="mu">Подготавливаем курс, словарь и озвучку.</p></div></main></div>
<script src="dist/bundle.js?v=${ver}" defer></script>
<script>
window.addEventListener("load",function(){if(!window.__OFFLINE_AUD__){setTimeout(function(){var s=document.createElement("script");s.src="dist/aud.js?v=${ver}";s.async=true;document.body.appendChild(s);},1500);}if("serviceWorker"in navigator&&location.protocol==="https:"){navigator.serviceWorker.register("sw.js").catch(function(){});}});
</script>
</body>
</html>`;

const offlineHtml = `<!DOCTYPE html>
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
<script>window.__OFFLINE_AUD__=${audInlineJson};</script>
<script>
${bundleInlineJs}
</script>
</body>
</html>`;

const swCode = `const CACHE_NAME = "deutsch-pro-v3-${ver}";
const CORE_URLS = ["./", "./index.html", "./manifest.json", "./dist/bundle.js?v=${ver}"];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(CORE_URLS)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  if (req.mode === "navigate" || url.pathname.endsWith("/") || url.pathname.endsWith(".html")) {
    event.respondWith(
      fetch(req)
        .then((res) => {
          if (res && res.ok) {
            const copy = res.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(req, copy));
          }
          return res;
        })
        .catch(() => caches.match(req).then((r) => r || caches.match("./index.html")))
    );
    return;
  }

  event.respondWith(
    caches.match(req).then((cached) => {
      if (cached) return cached;
      return fetch(req).then((res) => {
        if (res && res.ok) {
          const copy = res.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(req, copy));
        }
        return res;
      });
    })
  );
});
`;

const outIndex = path.join(root, "index.html");
const outOffline = path.join(root, "Немецкий_с_нуля_офлайн (1).html");
const outSw = path.join(root, "sw.js");

fs.writeFileSync(outIndex, webHtml, "utf8");
fs.writeFileSync(outOffline, offlineHtml, "utf8");
fs.writeFileSync(outSw, swCode, "utf8");

console.log("Build version:", ver);
console.log("Built bundle.js bytes:", fs.statSync(bundlePath).size);
console.log("Built aud.js bytes:", fs.statSync(audBundlePath).size);
console.log("Built web index.html bytes:", Buffer.byteLength(webHtml, "utf8"));
console.log("Built offline HTML bytes:", Buffer.byteLength(offlineHtml, "utf8"));
console.log("Written:", outIndex, outSw, outOffline);
