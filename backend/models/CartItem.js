import mongoose from 'mongoose';

const { Schema } = mongoose;

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

const CartItem = mongoose.model('CartItem', CartItemSchema);

export default CartItem;
