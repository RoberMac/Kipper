const isEqual = require('lodash.isequal');

module.exports = latestDB => new Promise(resolve => {
  const { latestProduct, prevProduct } = latestDB;

  if (!isEqual(latestProduct, prevProduct)) {
    resolve(latestProduct);
  }
});
