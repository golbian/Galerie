const cacheName = "galerie";

const files = [
  "/",
  "/script.js",
  "https://cdnjs.cloudflare.com/ajax/libs/localforage/1.7.3/localforage.min.js"
];

self.addEventListener("install", e => {
  caches.open(cacheName).then(cache => {
    cache.addAll(files);
  });
});
self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(
        keyList.map(function(key) {
          if (key !== cacheName) {
            return caches.delete(key);
          }
        })
      );
    })
  );
});

self.addEventListener("fetch", e => {console.log(e.request.url);});

// self.addEventListener("fetch", event => {
//   const url = event.request.url;

  // if (url.indexOf("https://lucid-bhabha-9f48ff.netlify.app/liste.json") === 0) {
  //   event.respondWith(
  //     fetch(event.request).then(response => {
  //       if (response.status === 200) {
	// 		console.info("Formatting data");
	// 		return response.json().then(json => {
	// 		const formattedResponse = json.map(j => ({
	// 		name: j.name,
	// 		description: j.description || "",
	// 		updated_at: j.updated_at
	// 		}));

	// 		return new Response(JSON.stringify(formattedResponse));
	// 		});
  //       }
		
	// 	else{
	// 		console.error(
	// 		"Service Worker",
	// 		"Error when fetching",			
	// 		event.request.url
	// 		);

	// 		return response;
	// 	}
        
  //     })
  //   );
  // } 
  // else {
  //   event.respondWith(
  //     caches
  //       .open(cacheName)
  //       .then(cache => cache.match(event.request))
  //       .then(response => response || fetch(event.request))
  //   );
  // }
// });
