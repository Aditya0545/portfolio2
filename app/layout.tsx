import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aditya Kumar | Portfolio",
  description:
    "Full Stack Developer | Google Developer Group Core Team | WIKI Contributor | AI/ML Enthusiast",
  icons: {
    icon: [
      {
        url: "/ak-icon.svg",
        type: "image/svg+xml",
      },
    ],
    shortcut: ["/ak-icon.svg"],
    apple: [
      {
        url: "/ak-icon.svg",
        type: "image/svg+xml",
      },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        <link rel="icon" type="image/svg+xml" href="/ak-icon.svg" />
        <link rel="apple-touch-icon" href="/ak-icon.svg" />
        <meta name="theme-color" content="#070B14" />
      </head>
      <body className={inter.className}>
        <main>{children}</main>
      </body>
    </html>
  );
}
