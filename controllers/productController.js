
const fetch = require('node-fetch');
const lowesUrl = "http://m.lowes.com/CatalogServices/product/nvalue/v1_0?nValue=4294857975&maxResults=8&offset=0&showURL=1&rollUpVariants=1&showUrl=true&storeNumber=0595&priceFlag=rangeBalance&showMarketingBullets=1"




exports.productsList = async (req, res, next) => {
  const response = await fetch(lowesUrl);
  const products = await response.json();
  let heroObj = {};
  if (req.params.id){
    heroObj = products.productList.find(product => product.pricing.productId == req.params.id)
  }else{
    heroObj = products.productList[0]
  }
  //const heroObj = products.productList[0];
  res.render('index', { title: 'Interview Test', products: products.productList,  heroObj });
};