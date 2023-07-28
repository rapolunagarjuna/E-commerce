const express = require('express');
const router = express.Router();
const { getCartByUser, updateCartItem } = require('../controllers/cartController');
const authenticate = require('../utils/authenticate');

router.get('/cart', authenticate, getCartByUser);

router.put('/cart', authenticate, updateCartItem);

module.exports = router;