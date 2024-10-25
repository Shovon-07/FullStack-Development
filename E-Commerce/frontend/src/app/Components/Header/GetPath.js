"use client";
import { usePathname } from "next/navigation";
export function GetPathName() {
  const pathname = usePathname();
  //   console.log("From GET path " + pathname);
  return pathname;
}
