const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const { catchErrors } = require('../handlers/errorHandlers');

/* GET home page. */
router.get('/', catchErrors(productController.getProducts));
router.get('/:id', catchErrors(productController.getProducts));

module.exports = router;
