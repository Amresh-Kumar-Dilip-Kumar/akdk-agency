import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

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

export const metadata: Metadata = {
  title: "AKDK Digital",
  description: "Creating web solutions",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
        {/* <script defer data-domain="akdkdigital.com" src="http://akdkdigital-plausible-8d3c51-72-61-170-224.traefik.me/js/script.file-downloads.outbound-links.js"></script>
        {/* @ts-ignore */}
        {/* <script>window.plausible = window.plausible || function() {(window.plausible.q = window.plausible.q || []).push(arguments)}</script> */} 

      </body>

    </html>
  );
}
