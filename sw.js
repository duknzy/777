/* 化学マスター - Service Worker
   オフラインでも使えるように、アプリ本体と外部リソース(フォント/アイコン/KaTeX)を
   キャッシュする。ローカルファイルはキャッシュ優先、外部CDNはネットワーク優先＋
   キャッシュ保存（次回オフライン時のフォールバック）で動かす。 */

const CACHE_VERSION = 'chem-master-v1';
const LOCAL_CACHE = `${CACHE_VERSION}-local`;
const RUNTIME_CACHE = `${CACHE_VERSION}-runtime`;

// このSWファイルからの相対パスで解決させる（サブフォルダ配置でも壊れないように）
const LOCAL_ASSETS = [
  './',
  './index.html',
  './quiz-data.js',
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(LOCAL_CACHE)
      .then((cache) => cache.addAll(LOCAL_ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(
      keys
        .filter((key) => key.startsWith('chem-master-') && key !== LOCAL_CACHE && key !== RUNTIME_CACHE)
        .map((key) => caches.delete(key))
    )).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);
  const isSameOrigin = url.origin === self.location.origin;

  if (isSameOrigin) {
    // ローカル資産：キャッシュ優先、なければネットワークから取得してキャッシュに追加
    event.respondWith(
      caches.match(req).then((cached) => {
        if (cached) return cached;
        return fetch(req).then((res) => {
          const resClone = res.clone();
          caches.open(LOCAL_CACHE).then((cache) => cache.put(req, resClone));
          return res;
        }).catch(() => cached);
      })
    );
  } else {
    // 外部CDN（フォント・アイコン・KaTeXなど）：ネットワーク優先、失敗時はキャッシュにフォールバック
    event.respondWith(
      fetch(req).then((res) => {
        const resClone = res.clone();
        caches.open(RUNTIME_CACHE).then((cache) => cache.put(req, resClone));
        return res;
      }).catch(() => caches.match(req))
    );
  }
});
