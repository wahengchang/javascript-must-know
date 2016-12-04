const osmosis = require('osmosis')
const url = 'http://taipei.craigslist.com.tw/search/cas'
const query = '?sort=date&query=w4m'
osmosis.get(url + query)
	  .find('.result-info .result-title')
	    .set('result')
	      .data(listing => {
		          console.log('log:', listing)
		        })
  .log(console.log)
	  .error(console.log)
	  .debug(console.log)
