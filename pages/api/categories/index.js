import Category from "@/models/Category";
import dbConnect from "@/utils/dbConnect";

const handler = async (req, res) => {
  await dbConnect();
  const { method } = req;

  if (method === "GET") {
    try {
      const categories = await Category.find();
      res.status(200).json({ success: true, data: categories });
    } catch (error) {
      res.status(400).json({ success: false, message: error.message });
    }
  } else if (method === "POST") {
    try {
      const newCategory = await new Category(req.body);
      await newCategory.save();
      res.status(200).json({ success: true, data: newCategory });
    } catch (error) {
      res.status(400).json({ success: false, message: error.message });
    }
  }
};

export default handler;
