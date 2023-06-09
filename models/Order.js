import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
  {
    customer: {
      type: String,
      required: true,
      maxlength: 100,
    },
    address: {
      type: String,
      required: true,
      maxlength: 300,
    },
    total: {
      type: Number,
      required: true,
    },
    paymentMethod: {
      type: Number,
      required: true,
    },
    status: {
      type: Number,
      default: 0,
    },
    quantity: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Order || mongoose.model("Order", OrderSchema);
