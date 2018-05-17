
const fetch = require('node-fetch');
const lowesUrl = "http://m.lowes.com/CatalogServices/product/nvalue/v1_0?nValue=4294857975&maxResults=8&offset=0&showURL=1&rollUpVariants=1&showUrl=true&storeNumber=0595&priceFlag=rangeBalance&showMarketingBullets=1"




  exports.productsList = async (req, res, next) => {
    const response = await fetch(lowesUrl);
    const data = await response.json();
    res.render('index', { title: 'Interview Test', data });
  };