import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "DODO Design Agency",
  description:
    "DODO is a research-driven design consultancy, based out of Africa. We’re built to help businesses discover their market’s true needs and bring valuable solutions to market.",
  metadataBase: new URL("https://dododesign.africa"),
  icons: [
    {
      url: "/favicon.svg",
      type: "image/svg+xml",
      sizes: "16x16 24x24 32x32 48x48 64x64",
    },
    {
      url: "/favicon.png",
      type: "image/png",
      sizes: "16x16 24x24 32x32 48x48 64x64",
    },
    {
      url: "/favicon.ico",
      type: "image/png",
      sizes: "16x16 24x24 32x32 48x48 64x64",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`min-w-[375px] mx-auto font-helvetica antialiased `}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
