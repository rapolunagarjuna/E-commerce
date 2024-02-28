import mongoose from 'mongoose';

const { Schema } = mongoose;

const MappingSchema = new Schema({
    secondaryCode: {
      type: String,
      required: true,
      unique: true,
    },
    primaryCode: {
      type: String,
      required: true,
    }
  }, {
    timestamps: true,
});

const Mapping = mongoose.model('Mapping', MappingSchema);

export default Mapping;
