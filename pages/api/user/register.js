import bcrypt from "bcryptjs";

import User from "@/models/User";
import dbConnect from "../../../utils/dbConnect";

const handler = async (req, res) => {
  await dbConnect();
  const user = await User.findOne({ email: req.body.email });
  if (user) {
    res.status(400).json({ success: false, message: "Email already exists" });
    return;
  }
  try {
    const newUser = await new User(req.body);
    const salt = await bcrypt.genSalt(10);
    newUser.password = await bcrypt.hash(newUser.password, salt);
    await newUser.save();
    res.status(200).json({ success: true, data: newUser });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

export default handler;
