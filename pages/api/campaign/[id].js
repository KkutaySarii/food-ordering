import Campaign from "@/models/Campaign";
import dbConnect from "@/utils/dbConnect";

const handler = async (req, res) => {
  await dbConnect();

  const {
    method,
    query: { id },
  } = req;

  if (method === "GET") {
    try {
      const campaign = await Campaign.findById(id);
      res.status(200).json({ success: true, data: campaign });
    } catch (error) {
      res.status(400).json({ success: false });
    }
  } else if (method === "DELETE") {
    try {
      await Campaign.findByIdAndDelete(id);
      res.status(200).json({ success: true, message: "Campaign deleted" });
    } catch (error) {
      res.status(400).json({ success: false, message: "Something went wrong" });
    }
  }
};

export default handler;
