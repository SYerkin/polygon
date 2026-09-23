import type { Metadata } from "next";
import {
  Archivo_Black,
  Caveat,
  Inter,
  Onest,
  Unbounded,
} from "next/font/google";
import "./globals.css";

const archivoBlack = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-archivo-black",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

const caveat = Caveat({
  weight: ["500", "600"],
  subsets: ["latin", "cyrillic"],
  variable: "--font-caveat",
  display: "swap",
});

const unbounded = Unbounded({
  weight: ["800", "900"],
  subsets: ["latin", "cyrillic"],
  variable: "--font-unbounded",
  display: "swap",
});

const onest = Onest({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin", "cyrillic"],
  variable: "--font-onest",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Almurt — Қарапайым заттарда үлкен мәдениет",
  description:
    "Almurt — мобильный интернет-магазин казахской культуры: сумки, кепки, термокружки и постеры. Бесплатная доставка на все заказы.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${archivoBlack.variable} ${inter.variable} ${caveat.variable} ${unbounded.variable} ${onest.variable}`}
    >
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
