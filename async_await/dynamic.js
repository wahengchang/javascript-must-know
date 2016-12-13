var sleep = function(para1, para2) {
    var _para1 = para1,
        _para2 = para2 || para1;
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve(_para1 * _para2)
        }, 1000)
    })
}

//generate promsie stack
var proMap = new Map();
//proMap.set(<parameter array>, <function>)
proMap.set([1], sleep);
proMap.set([2, 3], sleep);
proMap.set([3], sleep);

//resolving promsie stack, sequentially
for (var [para, fun] of proMap.entries()) {
    // fun.apply is converting array to argument object
    var result = await fun.apply(this, para);
    console.log(para, result)
}

//[ 1 ] 1
//[ 2, 3 ] 6
//[ 3 ] 9