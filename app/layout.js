import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Utkarsh Mishra | Full Stack Developer",
  description:
    "Portfolio of Utkarsh Mishra, a Full Stack Developer specializing in Next.js, React, Node.js, Express.js, and MongoDB.",
  keywords: [
    "Utkarsh Mishra",
    "Portfolio",
    "Full Stack Developer",
    "Next.js",
    "React",
    "Node.js",
    "MongoDB",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col bg-gray-400 text-white">

        <Navbar />
        <Toaster position="top-right" />

        <main className="flex-1">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}