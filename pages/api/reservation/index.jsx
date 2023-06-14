import Reservation from "@/models/Reservation";
import dbConnect from "@/utils/dbConnect";

const handler = async (req, res) => {
  await dbConnect();

  const { method } = req;

  if (method === "GET") {
    try {
      const reservations = await Reservation.find();

      res.status(200).json({ success: true, data: reservations });
    } catch (error) {
      res.status(400).json({ success: false });
    }
  } else if (method === "POST") {
    try {
      const reservation = await Reservation.create(req.body);
      res.status(201).json({ success: true, data: reservation });
    } catch (error) {
      res.status(400).json({ success: false });
    }
  }
};

export default handler;
