import mongoose from 'mongoose';

const { Schema } = mongoose;

const InventorySchema = new Schema({
    productId: {
        type: Schema.Types.ObjectId,
        ref: 'Products',
        required: true,
    },
    dimension: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
        default: 0
    }
});

InventorySchema.index({ productId: 1, dimension: 1 }, { unique: true });

const Inventory = mongoose.model('Inventory', InventorySchema);

export default Inventory;
