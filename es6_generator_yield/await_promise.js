module.exports = function() {

    (async function() {
        var sleep = function(para1) {
            return new Promise(function(resolve, reject) {
                setTimeout(function() {
                    resolve(para1 * para1)
                }, 0)
            })
        }

        var gen = function* (){
          var f1 = yield sleep(1);
          var f2 = yield sleep(2);
        };

        var iterator = gen();

        console.log('iterator - 1: ', await iterator.next().value); // { value: 2, done: false }
        console.log('iterator - 2: ', await iterator.next().value); // { value: 3, done: false }
        console.log('iterator - 3: ', await iterator.next().value); // { value: 4, done: false }

    }());

}

// iterator - 1:  1
// iterator - 2:  4
// iterator - 3:  undefined