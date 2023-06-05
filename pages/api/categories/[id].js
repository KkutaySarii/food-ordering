import Category from "@/models/Category";
import dbConnect from "../../../utils/dbConnect";

const handler = async (req, res) => {
  await dbConnect();
  const {
    method,
    body,
    query: { id },
  } = req;
  if (method === "GET") {
    try {
      const category = await Category.findById(id);
      res.status(200).json({ success: true, data: category });
    } catch (error) {
      res.status(400).json({ success: false, message: "Something went wrong" });
    }
  } else if (method === "DELETE") {
    try {
      await Category.findByIdAndDelete(id);
      res.status(200).json({ success: true, message: "Category deleted" });
    } catch (error) {
      res.status(400).json({ success: false, message: "Something went wrong" });
    }
  }
};

export default handler;
