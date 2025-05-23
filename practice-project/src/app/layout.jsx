import { lazy, Suspense } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "@/assets/css/globals.css";

//==> Components
const Header = lazy(() => import("@/app/components/header/header"));

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Next js practice",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Suspense fallback="loading">
          <Header />
        </Suspense>
        <div className="flex items-center justify-center flex-col h-100">
          {children}
        </div>
      </body>
    </html>
  );
}
