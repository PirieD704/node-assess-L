const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const lowesUrl = "http://m.lowes.com/CatalogServices/product/nvalue/v1_0?nValue=4294857975&maxResults=8&offset=0&showURL=1&rollUpVariants=1&showUrl=true&storeNumber=0595&priceFlag=rangeBalance&showMarketingBullets=1"

const getData = async lowesUrl => {
  try {
    const response = await fetch(lowesUrl);
    const json = await response.json();
    console.log(json.productList);
  } catch (error) {
    console.log(error);
  }
};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Interview Test', products: getData(lowesUrl) });
});

module.exports = router;
