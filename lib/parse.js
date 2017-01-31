const iconv = require('iconv-lite');
const cheerio = require('cheerio');
const crypto = require('crypto');

const handleLink = link => /^\/\//.test(link) ? `https:${link}` : link;

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
      const location = _elem.find('.seller-info-wrapper .seller-location').text();
      const pubTime = _elem.find('.item-pub-time').text();
      const picture = _elem.find('.item-pic img').attr('src');

      products[i] = {
        _id: crypto.createHash('md5').update(title).digest('hex'),
        title,
        link: handleLink(link),
        price,
        description,
        location,
        pubTime,
        picture: handleLink(picture),
      };
    });

    resolve(products);
  } catch (e) {
    reject(e);
  }
});
