import User from "@/lib/models/user";
import bcrypt from "bcrypt";
import dbConnect from "@/lib/dbConnect";

export async function POST(req) {
  await dbConnect();
  const { name, email, password } = await req.json();

  const hash = await bcrypt.hash(password, 10);

  const user = await User.create({
    name,
    email,
    password: hash,
  });

  return Response.json({ success: true, user });
}
