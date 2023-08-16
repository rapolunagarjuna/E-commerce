import mongoose from 'mongoose';

const { Schema } = mongoose;

const CategoriesSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
});

const Categories = mongoose.model('Categories', CategoriesSchema);

export default Categories;
