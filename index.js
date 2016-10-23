const { REQUEST_OPTIONS, REQUEST_INTERVAL } = require('./config.js');
const { requestWebpage, downloadProductPic } = require('./lib/request');
const parse = require('./lib/parse');
const save = require('./lib/save');
const diff = require('./lib/diff');
const notifier = require('./lib/notifier');
const log = require('./lib/log');

// Start
(function start() {
  console.log(((new Date()).toLocaleString()));

  requestWebpage(REQUEST_OPTIONS)
  .then(parse)
  .then(save)
  .then(diff)
  .then(downloadProductPic)
  .then(log)
  .then(notifier)
  .catch(err => console.error(err));

  setTimeout(start, REQUEST_INTERVAL);
}());
