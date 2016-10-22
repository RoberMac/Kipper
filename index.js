const request = require('./lib/request');
const parse = require('./lib/parse');
const save = require('./lib/save');
const diff = require('./lib/diff');
const notifier = require('./lib/notifier');

// CONFIG
const REQUEST_OPTIONS = {
  keyword: 'iphone 6s 64g',
  priceStart: 2000,
  priceEnd: 3300,
};
const INTERVAL = 1000 * 10; // 2min

// Start
(function start() {
  request(REQUEST_OPTIONS)
  .then(parse)
  .then(save)
  .then(diff)
  .then(notifier)
  .catch(err => console.error(err));

  setInterval(start, INTERVAL);
}());
