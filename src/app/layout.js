// import localFont from "next/font/local";
import { Sora } from "next/font/google";
import "./globals.css";
// import styles from "./global.scss";
import Navbar from "@/components/Navbar";
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
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Utopians Takeoff",
  description: "Utopians Takeoff website",
};
const sora = Sora({ subsets: ["latin"] });
import emailjs from "@emailjs/browser";
export default function RootLayout({ children }) {
  emailjs.init({ publicKey: "3m5zvAEoGBZRSR7sJ" });
  return (
    <html lang="en">
      <body
        className={`antialiased bg-bg laptop:px-0 2xl:px-60 ${sora.className} bg-gradient-to-b from-bg to-primaryhex/5 `}
      >
        <Toaster position="bottom-center" />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
