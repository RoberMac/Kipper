const request = require('request');

const { REQUEST_HEADER } = require('../config.js');
const handleError = require('./handleError');

module.exports = options => {
  const { keyword, priceStart, priceEnd } = options;

  return new Promise((resolve, reject) => {
    request({
      url: `https://s.2.taobao.com/list/list.htm?start=${priceStart}&end=${priceEnd}&st_trust=1&cpp=true&userId=0&ist=0&q=${encodeURI(keyword)}`,
      header: REQUEST_HEADER,
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