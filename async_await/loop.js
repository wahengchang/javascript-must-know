
(async function() {
    var sleep = function(para) {
        return new Promise(function(resolve, reject) {
            setTimeout(function() {
                console.log('para: ', para)
                resolve(para * para)
            }, 1000)
        })
    }

    for(var i =0 ; i<5; i++){
        var result = await sleep(i);
        console.log('result: ', result);
    }
    
}());