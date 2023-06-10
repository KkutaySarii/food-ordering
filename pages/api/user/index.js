import User from "@/models/User";
import dbConnect from "../../../utils/dbConnect";

import Cors from "cors";

function initMiddleware(middleware) {
  return (req, res) =>
    new Promise((resolve, reject) => {
      middleware(req, res, (result) => {
        if (result instanceof Error) {
          return reject(result);
        }
        return resolve(result);
      });
    });
}

const cors = initMiddleware(
  Cors({
    origin: "http://localhost:8000", // İzin vermek istediğiniz kökeni buraya girin
    methods: ["GET", "POST"], // İzin vermek istediğiniz HTTP metodlarını buraya girin
  })
);

const handler = async (req, res) => {
  await cors(req, res);
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
