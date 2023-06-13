import Footer from "@/models/Footer";
import dbConnect from "@/utils/dbConnect";

const handler = async (req, res) => {
  await dbConnect();
  const {
    method,
    query: { id },
  } = req;
  if (method === "GET") {
    try {
      const footer = await Footer.findById(id);
      res.status(200).json({ success: true, data: footer });
    } catch (error) {
      res.status(400).json({ success: false, message: "Something went wrong" });
    }
  } else if (method === "PUT") {
    try {
      const newFooter = await Footer.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.status(200).json({ success: true, data: newFooter });
    } catch (error) {
      res.status(400).json({ success: false, message: "Something went wrong" });
    }
  }
};

export default handler;
