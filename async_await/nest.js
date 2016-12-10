
(async function() {
        var sleep = function(para) {
            return new Promise(function(resolve, reject) {
                setTimeout(function() {
                    resolve(para * para)
                }, 1000)
            })
        }

        for(var i =1 ; i<4; i++){
            var result = await sleep(i);

            for(var j =0 ; j<i; j++){
                var _result = await sleep(j);
                console.log('   i:'+i+', j:'+j+': ', _result);
            }
        }

        console.log('done')
}());

// expected result
// i:1, j:0:  0
// i:2, j:0:  0
// i:2, j:1:  1
// i:3, j:0:  0
// i:3, j:1:  1
// i:3, j:2:  4