import dynamic from "next/dynamic";
import localFont from "next/font/local";

//___ Css ___//
import "@/assets/Css/globals.css";
import "@/assets/Css/var.css";

//___ Components ___//
const Header = dynamic(() => import("@/app/Components/Header/Header"), {
  loading: () => <p>Loading...</p>,
});
// const Footer = lazy(() => import("@/app/Components/Footer/Footer"));

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata = {
  title: "Company name",
  description: "Type hear some description for better seo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div className="container">{children}</div>
      </body>
    </html>
  );
}
