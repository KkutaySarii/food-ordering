import Product from "@/models/Product";
import dbConnect from "../../../utils/dbConnect";

const handler = async (req, res) => {
  await dbConnect();
  const {
    method,
    query: { id },
  } = req;
  if (method === "GET") {
    try {
      const product = await Product.findById(id);
      res.status(200).json({ success: true, data: product });
    } catch (error) {
      res.status(400).json({ success: false, message: "Something went wrong" });
    }
  }
  if (method === "DELETE") {
    try {
      await Product.findByIdAndDelete(id);
      res.status(200).json({ success: true, message: "Product deleted" });
    } catch (error) {
      res.status(400).json({ success: false, message: "Something went wrong" });
    }
  }
};

export default handler;
