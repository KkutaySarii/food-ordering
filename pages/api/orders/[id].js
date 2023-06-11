import Order from "@/models/Order";
import dbConnect from "@/utils/dbConnect";

const handler = async (req, res) => {
  await dbConnect();
  const {
    method,
    query: { id },
  } = req;
  if (method === "GET") {
    try {
      const order = await Order.findById(id);
      res.status(200).json({ success: true, data: order });
    } catch (error) {
      res.status(400).json({ success: false, message: "Something went wrong" });
    }
  } else if (method === "DELETE") {
    try {
      await Order.findByIdAndDelete(id);
      res.status(200).json({ success: true, message: "Order deleted" });
    } catch (error) {
      res.status(400).json({ success: false, message: "Something went wrong" });
    }
  } else if (method === "PUT") {
    try {
      const newOrder = await Order.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.status(200).json({ success: true, data: newOrder });
    } catch (error) {
      res.status(400).json({ success: false, message: "Something went wrong" });
    }
  }
};

export default handler;
