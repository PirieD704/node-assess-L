const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const { catchErrors } = require('../handlers/errorHandlers');

/* GET home page. */
router.get('/', catchErrors(productController.productsList));
router.get('/:id', catchErrors(productController.productsList));

module.exports = router;
