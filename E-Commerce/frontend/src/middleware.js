import { NextRequest, NextResponse } from "next/server";

export function middleware(request) {
  const token = request.cookies.get("AuthToken")?.value;
  const loggedInUserNotAccess =
    request.nextUrl.pathname == "/login" ||
    request.nextUrl.pathname == "/signup";
  if (loggedInUserNotAccess) {
    if (token) {
      return NextResponse.redirect(new URL("/", request.url));
      // const response = NextResponse.redirect(new URL("/", request.url));
      // response.headers.set("PathName", request.nextUrl);
      // return response;
    }
  } else {
    if (!token) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }
}

export const config = {
  matcher: "/:path*",
};
