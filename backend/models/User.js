const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    match: /.+\@.+\..+/,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['admin', 'user', 'editor'],
    default: 'user',
  },
  deletedAt: {
    type: Date,
    default: null,
  },
}, {
  timestamps: true,
});

UserSchema.pre('save', async function(next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

UserSchema.methods.softdelete = async function() {
  this.deletedAt = Date.now();
  await this.save();
};

module.exports = mongoose.model('User', UserSchema);
