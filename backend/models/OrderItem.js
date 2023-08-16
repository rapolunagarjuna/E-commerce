import mongoose from 'mongoose';

const { Schema } = mongoose;

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
    dimension: {
        type: String,
        required: true,
    }
}, {
    timestamps: true,
});

const OrderItem = mongoose.model('OrderItem', OrderItemSchema);

export default OrderItem;
