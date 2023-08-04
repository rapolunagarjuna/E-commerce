const express = require('express');
const router = express.Router();
const { getCartByUser, updateCartItem } = require('../controllers/cart');
const authenticate = require('../utils/authenticate');
const authenticateFromQuery = require('../utils/authenticateFromQuery');


router.get('/cart', authenticateFromQuery, getCartByUser);

router.post('/cart', authenticateFromQuery, updateCartItem);



module.exports = router;