const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const proxyProductController = require('../controllers/proxyProductController');
const { catchErrors } = require('../handlers/errorHandlers');

/* GET home page. */
router.get('/', catchErrors(productController.getProducts));
router.get('/page/:page', catchErrors(productController.getProducts));
router.get('/api', catchErrors(proxyProductController.getProducts));
router.get('/api/page/:page', catchErrors(proxyProductController.getProducts));

module.exports = router;
