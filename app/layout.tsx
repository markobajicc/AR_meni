import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin", "latin-ext"],
  variable: "--font-display",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const manrope = Manrope({
  subsets: ["latin", "latin-ext"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "AR Meni — digitalni meni koji ožive na stolu",
  description:
    "Skenirajte, pogledajte jelo u proširenoj realnosti pre nego što poručite. AR Meni za restorane koji žele da se izdvoje.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr" className={`${fraunces.variable} ${manrope.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
