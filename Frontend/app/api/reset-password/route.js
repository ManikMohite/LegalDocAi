import { NextResponse } from "next/server";
import User from "@/lib/models/user";
import bcrypt from "bcryptjs";
import connectDB from "@/lib/dbConnect";

export async function POST(req) {
  try {
    await connectDB();

    const { token, password } = await req.json();

     
    // 1️⃣ Token not provided
    if (!token) {
      return NextResponse.json(
        { error: "Token missing" },
        { status: 400 }
      );
    }
    // 2️⃣ Find user with valid token + not expired
    const user = await User.findOne({
      resetToken: token,
      resetTokenExpiry: { $gt: Date.now() }, // still valid
    });

    if (!user) {
      return NextResponse.json(
        { error: "Invalid or expired token" },
        { status: 400 }
      );
    }

    // 3️⃣ Hash the new password
    const hashedPassword = await bcrypt.hash(password, 10);

    // 4️⃣ Update password + clear token
    user.password = hashedPassword;
    user.resetToken = undefined;
    user.resetTokenExpiry = undefined;

    await user.save();

    return NextResponse.json({
      success: true,
      message: "Password reset successful",
    });

  } catch (error) {
    console.error("RESET PASSWORD ERROR:", error);

    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}
