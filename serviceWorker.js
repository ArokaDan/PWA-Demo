const cacheName= "pwa-first-v4";
const filesToCache = [
    '/index.html',
    '/js/main.js',
    '/manifest.json',
    '/contact.html',
    '/images/borsch.jpg',
    '/images/cirkelsåg.png',
    '/images/kompressor.png',
    '/images/robotGrasklippare.png',
    '/images/skruvdragare.png',
    '/images/slipmaskin.jpg',
    '/images/snoslunga.png'
    
];

self.addEventListener ('install', function(e) {
    e.waitUntil(
        caches.open(cacheName)
         .then(function(cache){
             return cache.addAll(filesToCache);
         })
    );
});

self.addEventListener('fetch', function(e) {
    e.respondWith(caches.match(e.request)
        .then(function(response){
            return response || fetch(e.request);
        })
    );
});