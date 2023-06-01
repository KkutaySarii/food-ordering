import User from "@/models/User";
import dbConnect from "../../../utils/dbConnect";

const handler = async (req, res) => {
  await dbConnect();
  const { method, body } = req;
  if (method === "POST") {
    try {
      const user = await User.findOne({ email: body.email });
      const user_id = user._id;
      if (!user) {
        res.status(400).json({ success: false, message: "User not found" });
        return;
      } else {
        res.status(200).json({ success: true, user_id: user_id });
      }
    } catch (error) {
      res.status(400).json({ success: false, message: "Something went wrong" });
    }
  }
};

export default handler;
