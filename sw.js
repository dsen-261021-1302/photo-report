// Sure Power Photo Report service worker: keeps the app on the phone so it opens with no signal.
// To publish an update: change VERSION, upload. Phones pick it up the next time they open the app with signal.
const VERSION = "pr-2026-10-27a";
const FILES = ["./", "index.html", "manifest.webmanifest", "icon-192.png", "icon-512.png", "apple-touch-icon.png"];
self.addEventListener("install", e => { e.waitUntil(caches.open(VERSION).then(c => c.addAll(FILES)).then(() => self.skipWaiting())); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener("fetch", e => {
  const r = e.request; if (r.method !== "GET" || new URL(r.url).origin !== location.origin) return;
  if (r.mode === "navigate") {
    // network first for the page (fresh when online), cached copy when offline
    e.respondWith(fetch(r).then(res => { const c = res.clone(); caches.open(VERSION).then(x => x.put("index.html", c)); return res; })
      .catch(() => caches.match("index.html", {ignoreSearch: true}).then(m => m || caches.match("./"))));
    return;
  }
  e.respondWith(caches.match(r, {ignoreSearch: true}).then(m => m || fetch(r)));
});
