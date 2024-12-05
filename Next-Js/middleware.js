import { NextResponse } from "next/server";
// import { GetUserRole } from "./app/Services/UserRole";

export function middleware(request) {
  const authToken = request.cookies.get("AuthToken")?.value;
  const userRole = request.cookies.get("UserRole")?.value;
  const path = request.nextUrl.pathname;

  // Redirect unauthenticated users to the login page
  if (!authToken) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Authenticated users cannot access login or signup pages
  const publicPaths = ["/login", "/signup"];
  if (publicPaths.includes(path)) {
    if (authToken) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  // Role-based routing control
  const roleBasedPaths = {
    admin: [
      "/",
      "/profile",
      "/settings",
      "/designation",
      "/employees",
      "/brands",
      "/categories",
      "/users",
      "/customer",
      "/suppliers",
      "/daily-report",
      "/products",
      "/product-sales",
    ],
    officer: ["/", "/profile", "/settings", "/brands", "/categories"],
    user: ["/", "/profile", "/settings"],
  };
  const allowedPaths = roleBasedPaths[userRole] || [];
  if (!allowedPaths.includes(path)) {
    return NextResponse.redirect(new URL("/not-found", request.url));
  }
}
export const config = {
  matcher: [
    "/",
    "/profile",
    "/settings",
    "/designation",
    "/employees",
    "/brands",
    "/categories",
    "/users",
    "/customer",
    "/suppliers",
    "/daily-report",
    "/products",
    "/product-sales",
  ],
};
