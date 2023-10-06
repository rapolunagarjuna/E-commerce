import mongoose from 'mongoose';

const { Schema } = mongoose;

const ProductsSchema = new Schema({
    productCode: {
        type: String,
        unique: true,
        required: true,
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Categories',
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    dimensions: {
        type: [String],
        required: true,
    },
    image: {
        type: String,
    },
    price: {
        type: Number,
        required: true,
        default: 0,
    }
}, {
    timestamps: true,
});

const Products = mongoose.model('Products', ProductsSchema);

export default Products;
