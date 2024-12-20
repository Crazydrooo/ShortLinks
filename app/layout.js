import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";


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
  title: "ShortLiks -Your Trusted URL Shortener",
  description: "ShortLiks helps You To Shortener Your Urls Easyly",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-purple-50`}
      >
        <Navbar></Navbar>
       
        {children}
      </body>
    </html>
  );
}
