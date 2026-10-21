import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Maison Hair Studio",
    template: "%s | Maison Hair Studio",
  },
  description:
    "A contemporary hair studio in Ho Chi Minh City, shaped around thoughtful cuts, considered colour, and a slower approach to beauty.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}