var genPromist = function(para) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log('para: ', para)
            resolve(para * para)
        }, 1000)
    })
}

genPromist(2)
    .then(genPromist)
    .then(genPromist)

// para:  2
// para:  4
// para:  16
