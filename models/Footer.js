import mongoose from "mongoose";

const FooterSchema = new mongoose.Schema(
  {
    location: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
      maxlength: 11,
    },
    desc: {
      type: String,
      required: true,
      maxlength: 300,
    },
    openingDay: {
      type: String,
      required: true,
    },
    openingTime: {
      type: String,
      required: true,
    },
    links: {
      type: [
        {
          application: { type: String },
          link: { type: String },
        },
      ],
    },
  },
  { timestamps: true }
);

export default mongoose.models.Footer || mongoose.model("Footer", FooterSchema);
