import { Toaster } from "react-hot-toast";
import localFont from "next/font/local";

//___ Css ___//
import "@/app/assets/css/variables.css";
import "@/app/assets/css/globals.css";

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
  title: "Dashboard",
  description: "Agro-vet software",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <>
          <div>{children}</div>

          <Toaster
            position="top-center"
            toastOptions={{
              success: {
                style: {
                  background: "#02b702",
                  color: "#fff",
                  fontWeight: 600,
                },
                iconTheme: {
                  primary: "#fff",
                  secondary: "#02b702",
                },
              },
              error: {
                style: {
                  background: "#fb4545",
                  color: "#fff",
                  fontWeight: 600,
                },
                iconTheme: {
                  primary: "#fff",
                  secondary: "#fb4545",
                },
              },
            }}
          />
        </>
      </body>
    </html>
  );
}
