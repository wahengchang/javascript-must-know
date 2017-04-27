var genPromist = function(para) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log('para: ', para)
            resolve(para * para)
        }, 1000)
    })
}

// genPromist(2)
//     .then(res => genPromist(res))
//     .then(res => genPromist(res))
//     .then(res => genPromist(res))
// para:  2
// para:  4
// para:  16
// para:  256
genPromist(2)
.then(res => genPromist(res))
.then(res =>  {throw res})
.then(res => genPromist(res))
.catch((err) => {
    genPromist(err/2)
    .then(res => genPromist(res))
    .then(res => genPromist(res))
})