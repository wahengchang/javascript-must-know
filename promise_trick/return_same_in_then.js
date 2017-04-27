var genPromist = function(para) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log('para: ', para)
            resolve(para * para)
        }, 1000)
    })
}

Promise.resolve()
    .then(()=>{
        // return resolve(2)
        return  (2)
    }).then((res)=> {
        console.log('res: ', res)
    })