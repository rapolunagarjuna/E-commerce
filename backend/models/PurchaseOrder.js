import mongoose from "mongoose";

const { Schema } = mongoose;

// Item sub-schema
const ItemSchema = new Schema({
  description: String,
  quantity: {
    type: Number,
    default: 0
  },
  unitPrice: {
    type: Number,
    default: 0
  },
  extendedPrice: {
    type: Number,
    default: 0
  },
});

// Purchase Order schema
const PurchaseOrderSchema = new Schema(
  {
    purchaseOrderNumber: {
      type: String,
      required: true,
      unique: true
    },
    shipTo: {
      type: String,
      default: ""
    },
    shipVia: {
      type: String,
      default: ""
    },
    orderedFrom: {
      type: String,
      default: ""
    },
    buyer: {
      type: String,
      default: ""
    },
    totalExtendedPrice: {
      type: Number,
      default: 0
    },
    date: {
      type: Date
    },
    terms: {
      type: String,
      default: ""
    },
    items: [ItemSchema]
  },
  {
    timestamps: true
  }
);

const PurchaseOrder = mongoose.model("PurchaseOrder", PurchaseOrderSchema);

export default PurchaseOrder;
