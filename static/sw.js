// Service Worker for 台指期籌碼戰情室 PWA
const CACHE_NAME = 'twoption-v1';
const urlsToCache = [
  '/',
  '/manifest.json'
];

// 安裝 Service Worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
  self.skipWaiting();
});

// 啟用 Service Worker
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// 攔截請求
self.addEventListener('fetch', (event) => {
  // 只緩存 GET 請求
  if (event.request.method !== 'GET') {
    return;
  }

  // 對於 API 請求，使用網路優先策略
  if (event.request.url.includes('/api/') || 
      event.request.url.includes('twse.com') ||
      event.request.url.includes('taifex.com')) {
    event.respondWith(
      fetch(event.request)
        .catch(() => {
          return new Response('離線模式：無法取得最新數據', {
            status: 503,
            statusText: 'Service Unavailable',
            headers: new Headers({
              'Content-Type': 'text/plain'
            })
          });
        })
    );
    return;
  }

  // 對於其他資源，使用緩存優先策略
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) {
          return response;
        }
        return fetch(event.request).then((response) => {
          // 不緩存非成功的回應
          if (!response || response.status !== 200 || response.type === 'error') {
            return response;
          }

          const responseToCache = response.clone();
          caches.open(CACHE_NAME)
            .then((cache) => {
              cache.put(event.request, responseToCache);
            });

          return response;
        });
      })
  );
});

// 推送通知 (可選)
self.addEventListener('push', (event) => {
  const options = {
    body: event.data ? event.data.text() : '新的市場數據已更新',
    icon: '/icon-192.png',
    badge: '/icon-192.png',
    vibrate: [200, 100, 200],
    tag: 'market-update'
  };

  event.waitUntil(
    self.registration.showNotification('台指期籌碼戰情室', options)
  );
});
