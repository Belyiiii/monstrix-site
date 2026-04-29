/* MONSTRIX // service worker v2.1
   PWA-installable: precache + offline navigation fallback. */

const CACHE = 'monstrix-v2.1.2';
const ASSETS = [
  './',
  'monstrix-checker.html',
  'manifest.json',
  'manifest.webmanifest',
  'icon.svg',
  'icon-192.png',
  'icon-512.png',
  'icon-512-maskable.png',
  'icon-apple-180.png',
  'favicon-32.png'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(c => Promise.all(
        ASSETS.map(a => c.add(a).catch(() => {/* частичный кеш ок */}))
      ))
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

  // Только GET и same-origin кешируем. Чужие fetch-и (no-cors к чужим
  // доменам, как в чекере) не трогаем — пусть идут напрямую.
  if (req.method !== 'GET' || url.origin !== self.location.origin) return;

  // Navigation request — критично для Chrome installable PWA
  if (req.mode === 'navigate') {
    e.respondWith(
      fetch(req)
        .then(res => {
          // освежим кеш
          const copy = res.clone();
          caches.open(CACHE).then(c => c.put(req, copy));
          return res;
        })
        .catch(() => caches.match(req)
          .then(hit => hit || caches.match('monstrix-checker.html'))
          .then(hit => hit || caches.match('./'))
        )
    );
    return;
  }

  // Остальные same-origin GET: cache-first
  e.respondWith(
    caches.match(req).then(hit => {
      if (hit) return hit;
      return fetch(req).then(res => {
        if (res && res.ok) {
          const copy = res.clone();
          caches.open(CACHE).then(c => c.put(req, copy));
        }
        return res;
      }).catch(() => null);
    })
  );
});
