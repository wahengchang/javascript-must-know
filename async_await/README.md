#AsyncFunctio.constructor is Promise Base Function
```
function() {
    var gen = fn.apply(this, arguments);
    return new Promise(function(resolve, reject) {
        function step(key, arg) {
            try {
                var info = gen[key](arg);
                var value = info.value;
            } catch (error) {
                reject(error);
                return;
            }
            if (info.done) {
                resolve(value);
            } else {
                return Promise.resolve(value).then(function(value) {
                    step("next", value);
                }, function(err) {
                    step("throw", err);
                });
            }
        }
        return step("next");
    });
}
```

#sleep () 
```
var sleep = function(para) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log('para: ', para)
            resolve(para * para)
        }, 1000)
    })
}
```


##Await Parallelly 
```
var vals = await Promise.all([sleep(1), sleep(2)]);
```

##Await Loop Seriesly  
```    
for(var i =0 ; i<5; i++){
    var result = await sleep(i);
    console.log('result: ', result);
}
    
```