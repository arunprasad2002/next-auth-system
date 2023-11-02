import { NextRequest, NextResponse } from "next/server";
import connect from "@/db/connect";
import User from "@/models/userModel";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(request: NextRequest) {
  const connection = await connect();
  try {
    if (connection) {
      const reqBody = await request.json();
      const { password, email } = reqBody;

      if (password.length > 0 && email.length > 0) {
        const user = await User.findOne({ email });

        if (!user) {
          return NextResponse.json(
            { message: "user not found" },
            { status: 404 }
          );
        }

        // Checking valid password
        const validPassword = await bcryptjs.compare(password, user.password);
        if (!validPassword) {
          return NextResponse.json(
            { error: "Invalid password" },
            { status: 400 }
          );
        }

        // JWT Payload to creat token
        const payload = {
          id: user._id,
          username: user.username,
          email: user.email,
        };

        //create token
        const token = await jwt.sign(payload, process.env.TOKEN_SECRET!, {
          expiresIn: "1d",
        });

        const response = NextResponse.json({
          message: "Login successful",
          success: true,
        });
        response.cookies.set("token", token, {
          httpOnly: true,
        });

        return response;
      }
    }
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
