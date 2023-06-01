import bcrypt from "bcryptjs";

import User from "@/models/User";
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
      const user = await User.findById(id);
      if (!user) {
        res.status(400).json({ success: false, message: "User not found" });
        return;
      } else {
        res.status(200).json({ success: true, data: user });
      }
    } catch (error) {
      res.status(400).json({ success: false, message: "Something went wrong" });
    }
  }

  if (method === "PUT") {
    try {
      if (body.password) {
        const salt = await bcrypt.genSalt(10);
        body.password = await bcrypt.hash(body.password, salt);
      }
      await User.findByIdAndUpdate(id, body, {
        new: true,
      });
      res.status(200).json({ success: true, message: "User updated" });
    } catch (error) {
      res.status(400).json({ success: false, message: "Something went wrong" });
    }
  }
};

export default handler;
