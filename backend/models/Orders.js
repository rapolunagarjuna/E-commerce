import mongoose from 'mongoose';

const { Schema } = mongoose;

const OrdersSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    description: {
        type: String,
        required: true,
        default: '',
    },
    status: {
        type: String,
        enum: ['Pending', 'In-Progress', 'Accepted', 'Delivered', 'Cancelled'],
        required: true,
        default: 'Pending',
    },
    deliveryDate: {
        type: Date,
        required: true,
    },
    discount: {
        type: Number,
        required: true,
    },
    tax: {
        type: Number,
        required: true,
    }
}, {
    timestamps: true,
});

const Orders = mongoose.model('Orders', OrdersSchema);

export default Orders;
