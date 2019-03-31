var cacheName = 'CryptMessage';

var filesToCache = [
    '/',
    '/index.html',
    '/style.css',
    '/bg.jpg',
    '/script.js'
];

self.addEventListener('install', function (e) {
    e.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.addAll(filesToCache);
        })
    );
});

/* Serve cached content when offline */
self.addEventListener('fetch', function (e) {
    e.respondWith(caches.match(e.request).then(function (response) {
        return response || fetch(e.request);
    }));
});