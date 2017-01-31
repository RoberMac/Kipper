const open = require('open');
const notifier = require('node-notifier');

const { ICON_PATH, PRODUCT_IMAGE_PATH } = require('../config.js');

module.exports = product => {
  if (!product) return;

  const { price, link, title, description, pubTime } = product;

  notifier.notify({
    title: `[${price}] ${title}`,
    message: description,
    icon: ICON_PATH,
    sound: true,
    wait: false,

    // only macOS
    contentImage: PRODUCT_IMAGE_PATH,
    timeout: 7,
    subtitle: pubTime,
  }, (err, response) => {
    if (err) console.error('[notifier error]: ', err);

    if (response === 'activate') {
      open(link);
    }
  });
};
