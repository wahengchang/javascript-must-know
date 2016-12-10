var sleep = function(para) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve(para * para)
        }, 1000)
    })
}
