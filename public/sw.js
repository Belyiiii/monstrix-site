/* MONSTRIX // service worker v2.0
   Простой precache + offline fallback.
   Чекер сам по себе требует сети для запросов — но shell приложения
   доступен оффлайн и приложение можно установить как PWA. */

const CACHE = 'monstrix-v2.0.0';
const ASSETS = [
  './',
  './monstrix-checker.html',
  './manifest.webmanifest',
  './icon.svg',
  './icon-192.png',
  './icon-512.png',
  './icon-512-maskable.png',
  './icon-apple-180.png',
  './favicon-32.png'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(c => c.addAll(ASSETS).catch(() => {/* частичный кеш ок */}))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  const url = new URL(req.url);

  // Только GET и same-origin кешируем. Чекерные fetch-и (no-cors к чужим
  // доменам) не трогаем — пусть идут напрямую и фейлятся как раньше.
  if (req.method !== 'GET' || url.origin !== self.location.origin) return;

  e.respondWith(
    caches.match(req).then(hit => {
      if (hit) return hit;
      return fetch(req).then(res => {
        // кладём в кеш только успешные ответы того же origin
        if (res && res.ok) {
          const copy = res.clone();
          caches.open(CACHE).then(c => c.put(req, copy));
        }
        return res;
      }).catch(() => {
        // оффлайн fallback на стартовую
        if (req.mode === 'navigate') return caches.match('./monstrix-checker.html');
      });
    })
  );
});
