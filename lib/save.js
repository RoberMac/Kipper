const fs = require('fs');
const path = require('path');
const handleError = require('./handleError');

const ROOT_PATH = path.resolve(__dirname);
const DB_PATH = path.resolve(ROOT_PATH, '../db.json');

module.exports = products => {
  let db = {};
  try {
    db = JSON.parse(fs.readFileSync(DB_PATH));
  } catch (e) {

  }

  const newDB = Object.assign(db, {
    latestProduct: products[0],
    prevProduct: db.latestProduct || '',
    allProducts: products,
  });

  return new Promise((resolve, reject) => {
    fs.writeFile(DB_PATH, JSON.stringify(newDB, null, 2), err => {
      if (err) {
        handleError('save', err);
        reject(err);
      } else {
        resolve(newDB);
      }
    });
  });
};
