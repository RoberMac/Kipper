const path = require('path');

// Console
const DIVIDER_STR = '-'.repeat(process.stdout.columns);

// Path
const ROOT_PATH = path.resolve(__dirname);
const ASSETS_PATH = path.resolve(ROOT_PATH, 'assets');
const DB_PATH = path.resolve(ROOT_PATH, 'db.json');
const ICON_PATH = path.resolve(ASSETS_PATH, 'logo.jpg');

// Request
const REQUEST_HEADER = {
  'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.143 Safari/537.36',
};
const REQUEST_OPTIONS = [
  {
    keyword: 'iphone 5s 32g',
    priceStart: 500,
    priceEnd: 1000,
  },
  {
    keyword: 'iphone 5s 16g',
    priceStart: 300,
    priceEnd: 700,
  },
];
const REQUEST_INTERVAL = 1000 * 60 * 1;


// Exports
exports.DIVIDER_STR = DIVIDER_STR;

exports.DB_PATH = DB_PATH;
exports.ICON_PATH = ICON_PATH;

exports.REQUEST_HEADER = REQUEST_HEADER;
exports.REQUEST_OPTIONS = REQUEST_OPTIONS;
exports.REQUEST_INTERVAL = REQUEST_INTERVAL;
