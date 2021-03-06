var router = require('koa-router')();
var request = require('request');

let exchangeKey = '09ff0501cea42426c20b0635a0623d2f';
let exchangeURL = 'http://op.juhe.cn/onebox/exchange/query?key='+exchangeKey;
let exchangeInfo = {};

router.get('/', function *(next) {
  request(exchangeURL, function(error, response, body) {
    if (!error && response.statusCode == 200) {
      // console.log(response);
      exchangeInfo = JSON.parse(body);
      console.log(exchangeInfo.reason);
    }
  })
  yield this.render('index', {
    info: exchangeInfo
  });
});

module.exports = router;
