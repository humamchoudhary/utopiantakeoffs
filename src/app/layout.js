// import localFont from "next/font/local";
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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased bg-bg`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
