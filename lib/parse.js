const iconv = require('iconv-lite');
const cheerio = require('cheerio');

module.exports = html => new Promise((resolve, reject) => {
  try {
    const decodedHtml = iconv.decode(html, 'gbk');
    const $ = cheerio.load(decodedHtml);

    const products = [];

    $('.item-lists li').each((i, elem) => {
      const _elem = $(elem);

      const title = _elem.find('.item-title > a').text();
      const link = _elem.find('.item-title > a').attr('href');
      const price = _elem.find('.item-price > .price').text();
      const description = _elem.find('.item-description').text();
      const pubTime = _elem.find('.item-pub-time').text();

      products[i] = {
        title,
        link: /^\/\//.test(link) ? `https:${link}` : link,
        price,
        description,
        pubTime,
      };
    });

    resolve(products);
  } catch (e) {
    reject(e);
  }
});
