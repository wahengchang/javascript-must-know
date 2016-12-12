(async function() {
    var sleep = function(para) {
        return new Promise(function(resolve, reject) {
            setTimeout(function() {
                resolve(para * para)
            }, 1000)
        })
    }

    var errorSleep = function(para) {
        return new Promise(function(resolve, reject) {
            setTimeout(function() {
                reject(' err from errorSleep')
            }, 1000)
        })
    }

    try {
        var result1 = await sleep(1);
        var result2 = await errorSleep(4);
        var result3 = await sleep(1);
        
        console.log('result1: ', result1)
        console.log('result2: ', result2)
        console.log('result3: ', result3)
    } catch (err) {
        console.log('result1: ', result1)
        console.log('result2: ', result2)
        console.log('result3: ', result3)
        console.log('err: ', err)
    }
}());