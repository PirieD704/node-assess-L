const fetch = require('node-fetch');
// const lowesUrl= "http://m.lowes.com/CatalogServices/product/nvalue/v1_0?nValue=4294857975&maxResults=8&offset=0&showURL=1&rollUpVariants=1&showUrl=true&storeNumber=0595&priceFlag=rangeBalance&showMarketingBullets=1"

exports.getProducts = async (req, res, next) => {
  let page = parseFloat(req.params.page) || 1;
  const maxResults = parseFloat(req.query.maxResults) || 8;
  const offset = (page * maxResults) - maxResults;

  //console.log("page = " + page)

  //dynamically build api call to define offset
  const lowesUrl = `http://m.lowes.com/CatalogServices/product/nvalue/v1_0?nValue=4294857975&maxResults=${maxResults}&offset=${offset}&showURL=1&rollUpVariants=1&showUrl=true&storeNumber=0595&priceFlag=rangeBalance&showMarketingBullets=1`
  const response = await fetch(lowesUrl);
  const products = await response.json();
  console.log("the type of for page")
  console.log(typeof(req.params.page));
  //number of appliances returned vs. number of pages that should be available
  const pages = Math.ceil(products.productCount / maxResults);
  let heroObj = {};
  if (req.query.id){
    heroObj = products.productList.find(product => product.pricing.productId == req.query.id)
  }else{
    heroObj = products.productList[0]
  }
  //const heroObj = products.productList[0];
  res.send({ 
    title: 'Interview Test', 
    products: products.productList,  
    heroObj,
    page,
    pages,
    productCount: products.productCount
  });
};