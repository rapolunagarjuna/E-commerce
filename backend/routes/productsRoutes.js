const express = require('express');
const router = express.Router();

const {createProduct, getProductsByCategory, getProductByProductCode} = require('../controllers/products');
const authenticate = require('../utils/authenticate');
const authorizeAdmin = require('../utils/authorizeAdmin');
const upload = require('../utils/upload'); 

router.post('/products/category', getProductsByCategory);
router.get('/products/:productCode', getProductByProductCode);
router.post('/products', upload.single('image'), authenticate, authorizeAdmin, createProduct);

module.exports = router;