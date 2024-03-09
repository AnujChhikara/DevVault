import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DevVault",
  description: "Fundamental code snippets to commence your exploration in any tech.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>{children}</body>
    </html>
  );
}
