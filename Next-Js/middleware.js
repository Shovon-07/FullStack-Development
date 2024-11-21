import { NextRequest, NextResponse } from "next/server";

export function middleware(request) {
  const authToken = request.cookies.get("AuthToken")?.value;

  const logedInUserNotAccessPaths =
    request.nextUrl.pathname === "/login" ||
    request.nextUrl.pathname === "/signup";

  if (logedInUserNotAccessPaths) {
    if (authToken) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  } else {
    if (!authToken) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }
}

export const config = {
  matcher: ["/", "/profile", "/settings"],
};
