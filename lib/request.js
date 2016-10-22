const request = require('request');
const handleError = require('./handleError');

module.exports = options => {
  const { keyword, priceStart, priceEnd } = options;

  return new Promise((resolve, reject) => {
    request({
      url: `https://s.2.taobao.com/list/list.htm?start=${priceStart}&end=${priceEnd}&st_edtime=1&ist=0&userId=0&q=${encodeURI(keyword)}`,
      header: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.143 Safari/537.36',
      },
      encoding: null,
    }, (error, response, body) => {
      if (!error && response.statusCode === 200) {
        resolve(body);
      } else {
        handleError('request', error);
        reject(error);
      }
    });
  });
};
