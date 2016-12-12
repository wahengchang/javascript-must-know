var sleep = function(para) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve(para * para)
        }, 1000)
    })
}

var sleep2para = function(para1, para2) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve(para1 * para2)
        }, 1000)
    })
}

var proMap = new Map();
proMap.set([1], sleep);
proMap.set([2, 3], sleep2para);
proMap.set([3], sleep);


for (var [para, fun] of proMap.entries()) {
    var result = await fun.apply(this, para);
    console.log(result)
}