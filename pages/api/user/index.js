import User from "@/models/User";
import dbConnect from "../../../utils/dbConnect";

const handler = async (req, res) => {
  await dbConnect();
  const { method } = req;
  if (method === "GET") {
    try {
      const user = await User.find({});
      res.status(200).json({ success: true, data: user });
    } catch (error) {
      res.status(400).json({ success: false });
    }
  } else if (method === "POST") {
    try {
      const user = await User.create(req.body);
      res.status(201).json({ success: true, data: user });
    } catch (error) {
      res.status(400).json({ success: false });
    }
  }
};

export default handler;
