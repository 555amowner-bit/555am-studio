import type { Metadata } from "next";
import { Instrument_Serif, Inter } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://555am-studio.vercel.app"),
  title: {
    default: "5:55 AM | Independent Web Studio",
    template: "%s | 5:55 AM",
  },
  description:
    "5:55 AM is an independent web studio designing and building thoughtful websites for local businesses.",
  applicationName: "5:55 AM",
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}