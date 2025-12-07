import type { Metadata } from "next";
import { Anton, Manrope } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
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
  icons: [
    { rel: "icon", url: "/favicon.svg", type: "image/svg+xml" },
    { rel: "shortcut icon", url: "/favicon.svg", type: "image/svg+xml" },
  ],
};

const themeInitScript = `
(function () {
  try {
    var theme = localStorage.getItem('theme-preference');
    if (theme === 'light' || theme === 'dark') {
      document.documentElement.dataset.theme = theme;
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  } catch (err) {
    console.warn('Unable to read saved theme preference', err);
  }
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${anton.variable} ${manrope.variable}`}>
        <script
          dangerouslySetInnerHTML={{
            __html: themeInitScript,
          }}
        />
        <div className="site-shell">
          <Header />
          <main className="page-content">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
