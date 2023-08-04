const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
        enum: ['Pending', 'In-Progress', 'Accepted' ,'Delivered', 'Cancelled'],
        required: true,
        default: 'pending',
    }
  }, {
    timestamps: true,
});

module.exports = mongoose.model('Orders', OrdersSchema);