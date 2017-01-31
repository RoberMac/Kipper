const colors = require('colors');

const { DIVIDER_STR } = require('../config.js');
const KEY_MAP = {
  title: '標題',
  link: '鏈接',
  price: '價格',
  description: '描述',
  location: '位置',
  pubTime: '時間',
};

module.exports = products => new Promise(resolve => {
  console.log(((new Date()).toLocaleString()));

  // log all new products
  products.forEach(product => {

    try {
      Object.keys(product).forEach(key => {
        if (key === 'picture') return;

        const col1 = colors.green(`${KEY_MAP[key] || key}: `);
        const col2 = colors.white(product[key]);

        console.log(col1, col2);
      });
    } finally {
      console.log(DIVIDER_STR);
      console.log('\n');
    }

  });

  // notify latest product
  resolve(products[0]);
});
