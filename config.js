const path = require('path');

// Console
const DIVIDER_STR = '-'.repeat(process.stdout.columns);

// Path
const ROOT_PATH = path.resolve(__dirname);
const ASSETS_PATH = path.resolve(ROOT_PATH, 'assets');
const DB_PATH = path.resolve(ROOT_PATH, 'db.json');
const ICON_PATH = path.resolve(ASSETS_PATH, 'logo.jpg');
const PRODUCT_IMAGE_PATH = path.resolve(ASSETS_PATH, 'product.jpeg');

// Request
const REQUEST_HEADER = {
  'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.143 Safari/537.36',
};
const REQUEST_OPTIONS = {
  keyword: 'iphone 6s 64g',
  priceStart: 2000,
  priceEnd: 3300,
};
const REQUEST_INTERVAL = 1000 * 60 * 1;


// Exports
exports.DIVIDER_STR = DIVIDER_STR;

exports.DB_PATH = DB_PATH;
exports.ICON_PATH = ICON_PATH;
exports.PRODUCT_IMAGE_PATH = PRODUCT_IMAGE_PATH;

exports.REQUEST_HEADER = REQUEST_HEADER;
exports.REQUEST_OPTIONS = REQUEST_OPTIONS;
exports.REQUEST_INTERVAL = REQUEST_INTERVAL;
