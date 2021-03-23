// install event handler
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('static').then( cache => {
      return cache.addAll([
        "/",
        "./index.html",
        "./css/styles.css",
        "./js/index.js",
        "./js/indexedDB.js",
        "./icons/icon-192x192.png",
        "./icons/icon-512x512.png",
        "./manifest.webmanifest",
        "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",
        "https://cdn.jsdelivr.net/npm/chart.js@2.8.0",
      ]);
    })
  );
  console.log('Install');
  self.skipWaiting();
});

// retrieve assets from cache
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then( response => {
      return response || fetch(event.request);
    })
  );
});
