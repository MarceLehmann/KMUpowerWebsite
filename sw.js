// Service Worker for Jekyll Minimal Mistakes Showcase
// Provides offline capability and caching for optimal performance

const CACHE_NAME = 'jekyll-showcase-v1.0.0';
const urlsToCache = [
  '/',
  '/assets/css/main.css',
  '/assets/css/custom.css',
  '/assets/js/main.min.js',
  '/assets/images/logo.svg',
  '/assets/images/avatar.svg',
  '/assets/images/teaser-default.svg',
  // Add other critical assets
  '/showcase/',
  '/gallery/',
  '/about/',
  '/posts/',
  '/categories/',
  '/tags/'
];

// Install Service Worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch from cache
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version or fetch from network
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});

// Update Service Worker
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
