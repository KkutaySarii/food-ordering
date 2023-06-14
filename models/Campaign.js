import mongoose from "mongoose";

const CampaignSchema = new mongoose.Schema(
  {
    product_id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    discount: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Campaign ||
  mongoose.model("Campaign", CampaignSchema);
