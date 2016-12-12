
(async function() {
  var sleep = function(para) {
      return new Promise(function(resolve, reject) {
          setTimeout(function() {
              console.log('para: ', para)
              resolve(para * para)
          }, 1000)
      })
  }

  var result = await sleep(4);
}());
