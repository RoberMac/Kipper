module.exports = latestDB => new Promise(resolve => {
  const {
    latestProduct: { title: latestTitle, price: latestPrice },
    prevProduct: { title: prevTitle, price: prevPrice },
  } = latestDB;

  if (latestTitle !== prevTitle && latestPrice !== prevPrice) {
    resolve(latestDB.latestProduct);
  }
});
