const { REQUEST_OPTIONS, REQUEST_INTERVAL } = require('./config.js');
const requestWebpage = require('./lib/request');
const parse = require('./lib/parse');
const save = require('./lib/save');
const notifier = require('./lib/notifier');
const log = require('./lib/log');
const handleError = require('./lib/handleError');


// Start
const requestCount = REQUEST_OPTIONS.length;
let requestIndex = 0;

(function start(option) {

  requestWebpage(option)
  .then(parse)
  .then(save)
  .then(log)
  .then(notifier)
  .catch(err => handleError(err))
  .then(() => {
    if (requestIndex < requestCount - 1) {
      requestIndex++;
      start(REQUEST_OPTIONS[requestIndex]);
    } else {
      requestIndex = 0;
      setTimeout(start.bind(this, REQUEST_OPTIONS[requestIndex]), REQUEST_INTERVAL);
    }
  });

}(REQUEST_OPTIONS[requestIndex]));
