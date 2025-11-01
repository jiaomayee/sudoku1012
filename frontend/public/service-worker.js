// 缓存名称
const CACHE_NAME = 'sudoku-app-cache-v1';

// 需要缓存的资源列表
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/app-logo.svg',
  '/sudoku-app-logo.svg',
  '/sudoku-logo.svg'
];

// 安装 Service Worker 并缓存资源
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('打开缓存');
        return cache.addAll(urlsToCache);
      })
      .then(() => self.skipWaiting())
  );
});

// 激活并清理旧缓存
self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// 拦截请求并提供缓存资源
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // 如果找到缓存资源，则返回
        if (response) {
          return response;
        }
        // 否则发起网络请求
        return fetch(event.request).catch(() => {
          // 如果是导航请求，返回缓存的主页
          if (event.request.mode === 'navigate') {
            return caches.match('/');
          }
          return null;
        });
      })
  );
});