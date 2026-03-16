import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (!pathname.startsWith("/courses")) {
    return NextResponse.next();
  }

  // Auth module removed: allow access to all course pages
  return NextResponse.next();
}

export const config = {
  matcher: ["/courses/:path*"],
};
