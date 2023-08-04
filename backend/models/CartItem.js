const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CartItemSchema = new Schema({
    cartId: {
        type: Schema.Types.ObjectId,
        ref: 'Cart',
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
    dimension: {
        type: String,
        required: true,
    }
  }, {
    timestamps: true,
});

module.exports = mongoose.model('CartItem', CartItemSchema);