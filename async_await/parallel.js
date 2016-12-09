(async function() {
    var sleep = function(para) {
        return new Promise(function(resolve, reject) {
            setTimeout(function() {
                console.log('para: ', para)
                resolve(para * para)
            }, 1000)
        })
    }

    var vals = await Promise.all([sleep(1), sleep(2)]);
    vals.forEach(console.log.bind(console));
}());