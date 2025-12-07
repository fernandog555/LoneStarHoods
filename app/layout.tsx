import type { Metadata } from "next";
import { Anton, Manrope } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-heading",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Lone Star Hoods | Vent Hood Cleaning in DFW",
  description:
    "Professional commercial kitchen hood cleaning and maintenance across the Dallas-Fort Worth area.",
  icons: [{ rel: "icon", url: "/LSH.png" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${anton.variable} ${manrope.variable}`}>
        <div className="site-shell">
          <Header />
          <main className="page-content">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
