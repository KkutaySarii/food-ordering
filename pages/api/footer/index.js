import Footer from "@/models/Footer";
import dbConnect from "@/utils/dbConnect";

const handler = async (req, res) => {
  await dbConnect();
  const { method } = req;
  if (method === "GET") {
    try {
      const footer = await Footer.find();
      res.status(200).json({ success: true, data: footer });
    } catch (error) {
      res.status(400).json({ success: false });
    }
  } else if (method === "POST") {
    try {
      const footer = await Footer.create(req.body);
      res.status(201).json({ success: true, data: footer });
    } catch (error) {
      res.status(400).json({ success: false });
    }
  }
};

export default handler;
