const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CartItemSchema = new Schema({
    cartId: {
        type: Schema.Types.ObjectId,
        ref: 'Cart',
        required: true,
        unique: true,
    },
    productId: {
        type: Schema.Types.ObjectId,
        ref: 'Products',
        required: true,
        unique: true,
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

module.exports = mongoose.model('CartItem', CartItemSchema);