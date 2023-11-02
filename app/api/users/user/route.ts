import { NextResponse, NextRequest } from "next/server";
import jwt from "jsonwebtoken";
export async function GET(request: NextRequest) {
  try {
    const token = request.cookies.get("token")?.value! || "";
    if (token) {
      const userData: any = jwt.verify(token, process.env.TOKEN_SECRET!);
      const user = {
        name: userData.username,
        email: userData.email,
      };

      return NextResponse.json({ message: "User found", success: true, user });
    }

    return NextResponse.json({ message: "User not found" });
  } catch (error: any) {
    return NextResponse.json({ message: error.massage });
  }
}
