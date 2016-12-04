var genPromist = function(para) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log('para: ', para)
            resolve(para * para)
        }, 1000)
    })
}






//expected: 1,2,3,5, result
//fact:     1,2,result,3,5, 

genPromist(1).then(function(){
    
    genPromist(2).then(function(){
        return genPromist(3)
    },function(err){
        return genPromist(4)
    }).then(function(){
        return genPromist(5)
    })

}).then(function(result){
    console.log("result:", result)
},function(err){
    console.log(err)
})