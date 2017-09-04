
function augment(withFn) {
    var name, fn;
    for (name in window) {
        fn = window[name];
        if (typeof fn === 'function') {
            window[name] = (function(name, fn) {
                var args = arguments;
                return function() {
                    withFn.apply(this, args);
                    return fn.apply(this, arguments);

                }
            })(name, fn);
        }
    }
}

const fun = (max = 1000) => {
    let count = 0
    for( let i =0; i<max; i++){count +=1}
    return count
}

const funPromise = (max = 1000) => {
    let count = 0
    for( let i =0; i<max; i++){count +=1}
    return Promise.resolve(count)
}

const funCallback = (max = 1000, cb) => {
    let count = 0
    for( let i =0; i<max; i++){count +=1}
    cb(count)
}

funPromise(1000).then(
    (result)=>{
        console.log('funPromise: ', result)
        funCallback(500, (res)=>{
            console.log('funCallback: ', res)
            console.log('fun: ', fun(res))
        })
    }
)

