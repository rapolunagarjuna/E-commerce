import express from 'express';
import {
  createOrder,
  getAllOrders,
  getSingleOrder,
  getOrdersByUser,
  updateOrderStatus,
} from '../controllers/orders.js';

import authenticate from '../utils/authenticate.js';
import authorizeAdmin from '../utils/authorizeAdmin.js';
import authenticateFromQuery from '../utils/authenticateFromQuery.js';

const router = express.Router();

// router.get('/orders', authenticate, authorizeAdmin, getAllOrders);
router.get('/orders', authenticateFromQuery, getOrdersByUser);
// router.get('/orders/:id', authenticate, getSingleOrder);
// // router.put('/orders/:id', authenticate, authorizeAdmin, updateOrderStatus);
router.post('/orders', authenticateFromQuery, createOrder);

export default router;
