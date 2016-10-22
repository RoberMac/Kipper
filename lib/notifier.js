const open = require('open');
const notifier = require('node-notifier');
const path = require('path');

module.exports = product => {
  const { price, link, title, pubTime } = product;

  notifier.notify({
    title: price,
    message: title,
    icon: path.join(__dirname, '../assets/logo.png'),
    sound: true,
    wait: true,

    // only macOS
    // contentImage: path.join(__dirname, '../assets/logo.png'),
    subtitle: pubTime,
  }, err => {
    console.error(err);
  });

  notifier.on('click', () => {
    open(link);
  });
};
