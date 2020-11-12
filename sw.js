if('serviceWorker'in navigator) {
    navigator.serviceWorker.register("/sw.js")
    .then((reg) => {
        console.log("votre service worker a été enregistré!");
    })
    .catch((error) => {
        console.error(error);
    })

self.addEventListener('fetch',event=>{    event.RespondWith(newResponse('PWA!!!!'));});