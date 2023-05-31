import cookie from "cookie";

const handler = (req, res) => {
  const { method } = req;
  if (method === "POST") {
    const { username, password } = req.body;
    if (
      username === process.env.ADMIN_USERNAME &&
      password === process.env.ADMIN_PASSWORD
    ) {
      res.setHeader(
        "Set-Cookie",
        cookie.serialize("admin", process.env.ADMIN_TOKEN, {
          httpOnly: true,
          maxAge: 60 * 60,
          path: "/",
          sameSite: "strict",
        })
      );
      res.status(200).json({ success: true, message: "Login success" });
    } else {
      res.status(400).json({ success: false, message: "Login failed" });
    }
  }
  if (method === "PUT") {
    res.setHeader(
      "Set-Cookie",
      cookie.serialize("admin", "", {
        httpOnly: true,
        maxAge: -1,
        path: "/",
        sameSite: "strict",
      })
    );
    res.status(200).json({ success: true, message: "Logout success" });
  }
};

export default handler;
