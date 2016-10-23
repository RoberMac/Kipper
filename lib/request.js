const fs = require('fs');
const request = require('request');

const { REQUEST_HEADER, PRODUCT_IMAGE_PATH } = require('../config.js');
const handleError = require('./handleError');

exports.requestWebpage = options => {
  const { keyword, priceStart, priceEnd } = options;

  return new Promise((resolve, reject) => {
    request({
      url: `https://s.2.taobao.com/list/list.htm?start=${priceStart}&end=${priceEnd}&st_edtime=1&ist=0&userId=0&q=${encodeURI(keyword)}`,
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

exports.downloadProductPic = product => new Promise(resolve => {
  const { picture } = product;

  // Remove old
  fs.unlinkSync(PRODUCT_IMAGE_PATH);

  // Download
  request(picture)
  .on('error', err => {
    console.error('[download fail]: ', err);
    resolve(product);
  })
  .pipe(fs.createWriteStream(PRODUCT_IMAGE_PATH))
  .on('close', () => {
    resolve(product);
  });
});
