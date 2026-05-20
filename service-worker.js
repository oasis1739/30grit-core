// 버전 올릴 때마다 이 숫자만 바꾸면 전체 캐시 갱신됨
const CACHE_NAME = '30grit-v3';
const PRECACHE = [
  './',
  './index.html',
  './manifest.json',
  './icon.svg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(PRECACHE)).catch(() => {})
  );
  self.skipWaiting(); // 새 워커 즉시 활성화
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim()) // 즉시 페이지 제어권 인수
  );
});

// 네트워크 우선 (NETWORK-FIRST): 온라인이면 항상 최신, 오프라인이면 캐시
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  // CDN(html2canvas 등)은 캐시 우선으로 빠르게
  if (event.request.url.includes('cdnjs.cloudflare.com')) {
    event.respondWith(
      caches.match(event.request).then((c) => c || fetch(event.request).then((r) => {
        const clone = r.clone(); caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone)); return r;
      }))
    );
    return;
  }
  // 그 외(내 파일): 네트워크 먼저 시도 → 실패 시 캐시
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        const clone = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
        return response;
      })
      .catch(() => caches.match(event.request).then((r) => r || caches.match('./index.html')))
  );
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(
    clients.matchAll({ type: 'window' }).then((list) => {
      for (const c of list) { if (c.url.includes('30grit') && 'focus' in c) return c.focus(); }
      if (clients.openWindow) return clients.openWindow('./');
    })
  );
});
