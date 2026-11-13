import type { Metadata, Viewport } from "next";
import { Instrument_Sans, IBM_Plex_Mono } from "next/font/google";
import { site } from "@/data/site";
import "./globals.css";

const sans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-instrument",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-mono",
});

export const metadata: Metadata = {
  title: `${site.name} · Software Engineer`,
  description: site.description,
};

export const viewport: Viewport = {
  themeColor: "#0a1626",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
