const express = require('express');
const router = express.Router();

const {createProduct, updateProduct} = require('../controllers/products');
const authenticate = require('../utils/authenticate');
const authorizeAdmin = require('../utils/authorizeAdmin');
const upload = require('../utils/upload');

router.post('/products', authenticate, authorizeAdmin, createProduct);
router.put('/products/:id', authenticate, authorizeAdmin, updateProduct);

module.exports = router;