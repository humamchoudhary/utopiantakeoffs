// import localFont from "next/font/local";
import { Sora, Lato } from "next/font/google";
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
const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});
import emailjs from "@emailjs/browser";
import BlurBackground from "@/components/GlowGlobs";
export default function RootLayout({ children }) {
  emailjs.init({ publicKey: "3m5zvAEoGBZRSR7sJ" });
  return (
    <html lang="en" className="overflow-x-hidden">
      <body
        className={`relative antialiased  ${lato.className} w-screen md:w-screen overflow-x-hidden `}
      >
        <BlurBackground />
        <Toaster position="bottom-center" />
        <Navbar />
        <main className=" bg-bg laptop:px-0 2xl:px-60 mx-2 md:mx-0">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
