
import User from "@/lib/models/user";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dbConnect from "@/lib/dbConnect";

export async function POST(req) {
  await dbConnect();

  const { email, password } = await req.json();
  const user = await User.findOne({ email });

  if (!user)
    return Response.json({ success: false, error: "User not found" }, { status: 404 });

  const match = await bcrypt.compare(password, user.password);
  if (!match)
    return Response.json({ success: false, error: "Wrong password" }, { status: 401 });

  const token = jwt.sign(
    { id: user._id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );

  return Response.json({
    success: true,
    data: {
      _id: user._id,
      name: user.name,
      email: user.email,
    },
    token
  });
}
