import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const authToken = req.cookies.get("authToken")?.value;

  if (!authToken) {
    return NextResponse.redirect(new URL("/signin", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/menu/:path*", "/user/:path*"],
};
