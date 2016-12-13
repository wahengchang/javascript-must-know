var sleep = function(para1, para2) {
    var _para1 = para1,
        _para2 = para2 || para1;
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve(_para1 * _para2)
        }, 1000)
    })
}
var proMap = new Map();
proMap.set([1], sleep);
proMap.set([2, 3], sleep);
proMap.set([3], sleep);
for (var [para, fun] of proMap.entries()) {
    var result = await fun.apply(this, para);
    console.log(para, result)
}