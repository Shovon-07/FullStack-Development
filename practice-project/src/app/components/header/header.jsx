"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const header = () => {
  const pathname = usePathname();
  return (
    <div className="flex justify-center items-center gap-10 bg-gray-700 py-3">
      <Link href="/" className={pathname == "/" ? "active" : ""}>
        Home
      </Link>
      <Link
        href="/use-context"
        className={pathname == "/use-context" ? "active" : ""}
      >
        Use-context
      </Link>
      <Link
        href="/use-reducer"
        className={pathname == "/use-reducer" ? "active" : ""}
      >
        Use-reducer
      </Link>
      <Link
        href="/use-memo"
        className={pathname == "/use-memo" ? "active" : ""}
      >
        Use-memo
      </Link>
      <Link
        href="/use-callback"
        className={pathname == "/use-callback" ? "active" : ""}
      >
        Use-callback
      </Link>
    </div>
  );
};

export default header;
