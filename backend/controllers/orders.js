const Orders = require('../models/Orders');
const OrderItem = require('../models/OrderItem');
const CartItem = require('../models/CartItem');
const Cart = require('../models/Cart');

const getAllOrders = async (req, res) => {
  try {
    const orders = await Orders.find({}).populate('userId', 'email firstName lastName');;
    return res.json(orders);
  } catch (err) {
    console.log({ message: err.message });
    return res.status(500).json({ message: 'Internal error, please try again' });
  }
};

const getSingleOrder = async (req, res) => {
  try {
    const order = await Orders.findById(req.params.id).populate('userId', 'email firstName lastName' );
    if (order == null) {
      return res.status(404).json({ message: 'Cannot find order' });
    }

    const orderItems = await OrderItem.find({ orderId: order._id });
    res.json({ order, orderItems });
  } catch (err) {
    console.log({ message: err.message });
    return res.status(500).json({ message: 'Internal error, please try again' });
  }
};

const getOrdersByUser = async (req, res) => {
  try {
    const orders = await Orders.find({ userId: req.body.user._id });
    if (!orders) {
      return res.status(404).json({ message: 'No orders found for this user' });
    }

    return res.json(orders);
  } catch (err) {
    console.log({ message: err.message });
    return res.status(500).json({ message: 'Internal error, please try again' });
  }
};

const updateOrderStatus = async (req, res) => {
    try {
      if (req.body.status == null) {
        return res.status(404).json({ message: 'No order status provided' });
      }

      if (req.params.id == null) {
        return res.status(404).json({ message: 'No order id provided' });
      }
      const order = await Orders.findById(req.params.id);
      if (order == null) {
        return res.status(404).json({ message: 'Cannot find order' });
      }
  
      if (req.body.status != null) {
        order.status = req.body.status;
      }
  
      const updatedOrder = await order.save();
      return res.json(updatedOrder);
  
    } catch (err) {
      console.log({ message: err.message });
      return res.status(500).json({ message: 'Internal error, please try again' });
    }
};


const createOrder = async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.body.user._id });
    if (cart == null) {
      return res.status(404).json({ message: 'Cart not found' });
    }

    const newOrder = new Order({
      userId: req.body.user._id,
      description: 'Order created by user ' + req.body.user._id + ' whose email is'+ req.body.user.email,
      status: 'pending',
    });

    let totalOrderPrice = 0;

    const cartItems = await CartItem.find({ cartId: cart._id });

    if(cartItems.length === 0) {
      return res.status(404).json({ message: 'Cart is empty' });
    }

    for (const cartItem of cartItems) {
      const orderItem = new OrderItem({
        orderId: newOrder._id,
        productId: cartItem.productId,
        quantity: cartItem.quantity,
        price: cartItem.price
      });
      await orderItem.save();
      
      totalOrderPrice += cartItem.price * cartItem.quantity;
      await CartItem.findByIdAndRemove(cartItem._id);
    }

    await newOrder.save();

    await Cart.findByIdAndRemove(cart._id);
    
    return res.json({ orderNumber: newOrder._id, status: newOrder.status, totalAmount: totalOrderPrice });
  } catch (err) {
    console.log({ message: err.message });
    return res.status(500).json({ message: 'Internal error, please try again' });
  }
};

  
module.exports = {
  createOrder,
  getAllOrders,
  getSingleOrder,
  getOrdersByUser,
  updateOrderStatus,
};
  