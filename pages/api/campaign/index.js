import dbConnect from "@/utils/dbConnect";
import Campaign from "@/models/Campaign";

const handler = async (req, res) => {
  await dbConnect();

  const { method } = req;

  if (method === "GET") {
    try {
      const campaigns = await Campaign.find();
      res.status(200).json({ success: true, data: campaigns });
    } catch (error) {
      res.status(400).json({ success: false });
    }
  } else if (method === "POST") {
    try {
      const campaign = await Campaign.create(req.body);
      res.status(201).json({ success: true, data: campaign });
    } catch (error) {
      res.status(400).json({ success: false });
    }
  }
};

export default handler;
