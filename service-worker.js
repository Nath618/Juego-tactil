self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("juego-cache").then(cache => {
      return cache.addAll([
        "/",
        "/index.html",
        "/manifest.json"
        // agrega aquí más archivos si tienes (css, js, imágenes)
      ]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
