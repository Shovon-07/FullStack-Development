import { NextRequest, NextResponse } from "next/server";

export function middleware(request) {
  // const requestHeaders = new Headers(request.headers);
  // requestHeaders.set("pathname", request.nextUrl);
  // return NextResponse.next({ request: { headers: requestHeaders } });
  // console.log("Middlware" + request.nextUrl);

  // const response = NextResponse.next();
  // response.headers.set("Pathname", request.nextUrl);
  // return response;

  const token = request.cookies.get("AuthToken")?.value;
  const loggedInUserNotAccess =
    request.nextUrl.pathname == "/login" ||
    request.nextUrl.pathname == "/signup";
  if (loggedInUserNotAccess) {
    if (token) {
      // return NextResponse.redirect(new URL("/", request.url));
      const response = NextResponse.redirect(new URL("/", request.url));
      response.headers.set("PathName", request.nextUrl);
      return response;
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
