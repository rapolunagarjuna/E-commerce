const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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

module.exports = mongoose.model('Cart', CartSchema);