const colors = require('colors');

const { DIVIDER_STR } = require('../config.js');
const KEY_MAP = {
  title: '標題',
  link: '鏈接',
  price: '價格',
  description: '描述',
  pubTime: '時間',
};

module.exports = product => new Promise(resolve => {
  try {
    Object.keys(product).forEach(key => {
      if (key === 'picture') return;

      const col1 = colors.green(`${KEY_MAP[key]}: `);
      const col2 = colors.white(product[key]);

      console.log(col1, col2);
    });
  } finally {
    console.log(DIVIDER_STR);
    console.log('\n');
    resolve(product);
  }
});
