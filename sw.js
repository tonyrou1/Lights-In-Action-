// Offline shell cache: no API, credentials, or remote lighting-control requests.
const CACHE='holiday-light-studio-ipad-v2';
const RESOURCES=['./','./index.html','./manifest.webmanifest','./icon.png','./icon.svg'];
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(RESOURCES)).then(()=>self.skipWaiting())));
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',event=>{if(event.request.method!=='GET')return;let url=new URL(event.request.url);if(url.origin!==location.origin)return;event.respondWith(caches.match(event.request).then(hit=>hit||fetch(event.request).then(response=>{if(response.ok)caches.open(CACHE).then(cache=>cache.put(event.request,response.clone()));return response;}))));});
