import dynamic from "next/dynamic";
import localFont from "next/font/local";

//___ Components ___//
import Loader from "./Components/Loader/Loader";
const Header = dynamic(() => import("./Components/Header/Header"), {
  loading: () => <Loader />,
});

//___ Css ___//
import "@/assets/css/var.css";
import "@/assets/css/globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "E commerce",
  description: "Developed by Al jubair shovon using Next.JS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
