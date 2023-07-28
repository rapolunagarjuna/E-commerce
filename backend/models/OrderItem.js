const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderItemSchema = new Schema({
    orderId: {
        type: Schema.Types.ObjectId,
        ref: 'Orders',
        required: true,
    },
    productId: {
        type: Schema.Types.ObjectId,
        ref: 'Products',
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
  }, {
    timestamps: true,
});

module.exports = mongoose.model('OrderItem', OrderItemSchema);