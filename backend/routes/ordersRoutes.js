const express = require('express');
const router = express.Router();
const authenticate = require('../utils/authenticate');
const authorizeAdmin = require('../utils/authorizeAdmin');
const authenticateFromQuery = require('../utils/authenticateFromQuery');

const { 
  createOrder, 
  getAllOrders, 
  getSingleOrder, 
  getOrdersByUser, 
  updateOrderStatus 
} = require('../controllers/orders');



// router.get('/orders', authenticate, authorizeAdmin, getAllOrders);
router.get('/orders', authenticateFromQuery, getOrdersByUser);
// router.get('/orders/:id', authenticate, getSingleOrder);
// // router.put('/orders/:id', authenticate, authorizeAdmin, updateOrderStatus);
router.post('/orders', authenticateFromQuery, createOrder);

module.exports = router;
