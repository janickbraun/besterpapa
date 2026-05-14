import type { Metadata } from "next";
import { Outfit, Caveat } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bester Papa der Welt",
  description: "Ein kleines Geschenk für den besten Papa der Welt.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${outfit.variable} ${caveat.variable} scroll-smooth`}>
      <body className="antialiased min-h-screen flex flex-col font-sans bg-warm-bg text-text-main selection:bg-accent-orange selection:text-white">
        {children}
      </body>
    </html>
  );
}
