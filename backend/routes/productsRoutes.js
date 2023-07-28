const express = require('express');
const router = express.Router();

import {createProduct, updateProduct} from '../controllers/productController';
const authenticate = require('../utils/authenticate');
const authorizeAdmin = require('../utils/authorizeAdmin');
const upload = require('../utils/upload');

router.post('/products', authenticate, authorizeAdmin, upload.single('productImage'), createProduct);
router.put('/products/:id', authenticate, authorizeAdmin, upload.single('productImage'), updateProduct);

module.exports = router;