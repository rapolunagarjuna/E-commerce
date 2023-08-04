const express = require('express');
const router = express.Router();
const { getCartByUser, updateCartItem } = require('../controllers/cart');
const authenticate = require('../utils/authenticate');

router.post('/cart', authenticate, getCartByUser);

router.put('/cart', authenticate, updateCartItem);



module.exports = router;