self.addEventListener('sync', (event) => {
    if(event.tag === 'submit-forms') {
        event.waitUntil(
            caches.open('form-data').then(cache => {
                return cache.keys().then(keys => {
                    const promises = keys.map(key => {
                        return cache.match(key).then(res => {
                            return res.formData().then(formData => {
                                return fetch('/submit-form', {
                                    method: 'POST',
                                    body: formData
                                }).then(() =>{
                                    cache.delete(key)
                                })
                            })
                        })
                    })
                    return Promise.all(promises)
                })
            })
        )
    }
})