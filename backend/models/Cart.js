import mongoose from 'mongoose';

const { Schema } = mongoose;

const CartSchema = new Schema({
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      unique: true,
    },
    description: {
      type: String,
      required: true,
      default: '',
    }
  }, {
    timestamps: true,
});

const Cart = mongoose.model('Cart', CartSchema);

export default Cart;
