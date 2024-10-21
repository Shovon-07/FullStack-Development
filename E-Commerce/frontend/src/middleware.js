import { NextResponse, NextRequest } from "next/server";

export function middleware(request) {
  //   const token = request.cookies.get("AuthToken")?.value;
  //   const loggedInUserNotAccess =
  //     request.nextUrl.pathname == "/login" ||
  //     request.nextUrl.pathname == "/signup";
  //   if (loggedInUserNotAccess) {
  //     if (token) {
  //       return NextResponse.redirect(new URL("/", request.url));
  //     }
  //   } else {
  //     if (!token) {
  //       return NextResponse.redirect(new URL("/login", request.url));
  //     }
  //   }
  console.log("MIddleware");
}

export const config = {
  matcher: "/:path*",
};
