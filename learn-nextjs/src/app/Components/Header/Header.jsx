"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const page = () => {
  const pathname = usePathname();
  return (
    <>
      {pathname === "/login" ? null : (
        <nav>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/products">Products</Link>
            </li>
            <li>
              <Link href="/user">Users</Link>
            </li>
            <li>
              <Link href="/login">Login</Link>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};

export default page;
