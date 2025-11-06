// 缓存名称 - 增加版本号以强制更新缓存
const CACHE_NAME = 'sudoku-app-cache-v3';

// 需要缓存的关键资源列表
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/app-logo.svg',
  '/sudoku-app-logo.svg',
  '/sudoku-logo.svg'
];

// 安装 Service Worker 并缓存关键资源
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('打开缓存');
        return cache.addAll(urlsToCache);
      })
      .then(() => self.skipWaiting()) // 立即激活新版本
  );
});

// 合并到下方的activate事件监听器中

// 拦截请求并提供缓存资源 - 采用网络优先策略
self.addEventListener('fetch', (event) => {
  // 忽略非GET请求
  if (event.request.method !== 'GET') {
    return;
  }
  
  // 忽略浏览器扩展和Chrome DevTools请求
  if (event.request.url.startsWith('chrome-extension://') || 
      event.request.url.includes('extension://') || 
      event.request.url.includes('localhost:')) {
    return;
  }
  
  // 对于旧版本用户，优先确保获取最新的HTML文件
  if (event.request.mode === 'navigate' && event.request.url.includes('sudokutech.org.cn')) {
    event.respondWith(
      fetch(event.request.clone())
        .then((networkResponse) => {
          if (networkResponse && networkResponse.ok) {
            // 更新缓存中的主页
            const responseToCache = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseToCache);
            });
          }
          return networkResponse;
        })
        .catch(() => {
          return caches.match('/');
        })
    );
    return;
  }
  
  event.respondWith(
    // 优先尝试网络请求
    fetch(event.request.clone())
      .then((networkResponse) => {
        // 如果网络请求成功，更新缓存并返回响应
        if (networkResponse && networkResponse.ok) {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            // 只缓存成功的导航请求和静态资源
            if (event.request.mode === 'navigate' || 
                event.request.url.match(/\.(js|css|html|svg|png|jpg|jpeg|json)$/)) {
              cache.put(event.request, responseToCache);
            }
          });
        }
        return networkResponse;
      })
      .catch(() => {
        // 网络请求失败时，尝试从缓存获取
        return caches.match(event.request).then((cachedResponse) => {
          // 如果有缓存，返回缓存响应
          if (cachedResponse) {
            return cachedResponse;
          }
          // 如果是导航请求，返回缓存的主页
          if (event.request.mode === 'navigate') {
            return caches.match('/');
          }
          return null;
        });
      })
  );
});

// 处理来自客户端的消息
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  } else if (event.data && event.data.type === 'CHECK_FOR_UPDATE') {
    // 客户端主动检查更新
    console.log('收到更新检查请求，版本:', CACHE_NAME);
    // 立即通知客户端有更新（因为我们已经更新了缓存版本号）
    event.source.postMessage({type: 'CACHE_UPDATED'});
  }
});

// 激活并清理旧缓存，同时通知客户端更新
self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            console.log('删除旧缓存:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
    .then(() => self.clients.claim()) // 立即控制所有客户端
    .then(() => {
      // 通知所有客户端刷新以使用新版本
      return self.clients.matchAll({type: 'window'}).then((clientList) => {
        for (const client of clientList) {
          client.postMessage({type: 'CACHE_UPDATED'});
          console.log('已通知客户端刷新页面:', client.url);
        }
      });
    })
  );
});