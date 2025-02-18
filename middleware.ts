import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.JWT_SECRET as string;

export function middleware(req: NextRequest) {
  const authToken = req.cookies.get("authToken")?.value;

  if (!authToken) {
    return NextResponse.redirect(new URL("/signin", req.url));
  }

  try {
    jwt.verify(authToken, SECRET_KEY);
    return NextResponse.next();
  } catch (err) {
    console.error(err);
    return NextResponse.redirect(new URL("/signin", req.url));
  }
}

export const config = {
  matcher: ["/menu/:path*"],
};
