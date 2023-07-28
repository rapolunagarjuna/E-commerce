const express = require('express');
const router = express.Router();
const authenticate = require('../utils/authenticate');
const authorizeAdmin = require('../utils/authorizeAdmin');
const { 
  createOrder, 
  getAllOrders, 
  getSingleOrder, 
  getOrdersByUser, 
  updateOrderStatus 
} = require('../controllers/orders');



router.get('/orders', authenticate, authorizeAdmin, getAllOrders);
router.get('/orders/user', authenticate, getOrdersByUser);
router.get('/orders/:id', authenticate, getSingleOrder);
// router.put('/orders/:id', authenticate, authorizeAdmin, updateOrderStatus);
router.post('/orders', authenticate, createOrder);

module.exports = router;
