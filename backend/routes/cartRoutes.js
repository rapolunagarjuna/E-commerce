import express from 'express';

import { getCartByUser, updateCartItem } from '../controllers/cart.js';
import authenticateFromQuery from '../utils/authenticateFromQuery.js';

const router = express.Router();
router.get('/cart', authenticateFromQuery, getCartByUser);

router.post('/cart', authenticateFromQuery, updateCartItem);

export default router;