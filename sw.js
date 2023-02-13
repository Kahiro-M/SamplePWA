self.addEventListener('fetch', function(e) {
  //空でOK
})

//インストール
self.addEventListener('install', function(event) {
	event.waitUntil(caches.open(CACHE_NAME).then(function(cache) {
			//console.log('Opened cache');
			return cache.addAll(urlsToCache);
      })
	);
});