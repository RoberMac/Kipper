const fs = require('fs');

const { DB_PATH } = require('../config.js');
const handleError = require('./handleError');

module.exports = products => {
  // old DB
  let db = {};
  try {
    db = JSON.parse(fs.readFileSync(DB_PATH));
  } catch (e) {}

  // new DB
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
