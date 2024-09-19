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

export const metadata = {
  title: "Utopians Takeoff",
  description: "Utopians Takeoff website",
};
const sora = Sora({ subsets: ["latin"] });
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased bg-bg laptop:px-0 2xl:px-60 ${sora.className} `}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
