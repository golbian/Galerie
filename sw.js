if('serviceWorker'in navigator) {
    navigator.serviceWorker.getRegistrations().then(registrations=> {
        for (let registration of registrations){
            registrations.unregister();
        }
    }
}

self.addEventListener('fetch',event=>{    event.RespondWith(newResponse('PWA!!!!'));});