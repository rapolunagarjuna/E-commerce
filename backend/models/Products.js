const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductsSchema = new Schema({
    productID: {
        type: String,
        required: true,
        unique: true,
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
        type: String,
        required: true,
    },
  }, {
    timestamps: true,
});

module.exports = mongoose.model('Products', ProductsSchema);