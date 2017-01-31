const fs = require('fs');
const differenceBy = require('lodash/differenceBy');

const { DB_PATH } = require('../config.js');
const handleError = require('./handleError');

module.exports = products => {
  // old DB
  let db = { products: [] };
  try {
    db = JSON.parse(fs.readFileSync(DB_PATH));
  } catch (e) {}

  // new DB
  const newProducts = differenceBy(products, db.products, '_id');
  db.products.unshift.apply(db.products, newProducts);

  return new Promise((resolve, reject) => {
    fs.writeFile(DB_PATH, JSON.stringify(db, null, 2), err => {
      if (err) {
        handleError('save', err);
        reject(err);
      } else {
        resolve(newProducts);
      }
    });
  });
};
