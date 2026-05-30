import type { Metadata } from "next";
import { Bungee, Poppins, JetBrains_Mono, Gochi_Hand } from "next/font/google";
import "./globals.css";

const bungee = Bungee({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
});

const poppins = Poppins({
  weight: ["400", "600", "800"],
  subsets: ["latin"],
  variable: "--font-body",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const gochiHand = Gochi_Hand({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-hand",
});

export const metadata: Metadata = {
  title: "Playful Retro Portfolio",
  description: "MJ's creative portfolio showcasing design, development, and project management work.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${bungee.variable} ${poppins.variable} ${jetbrainsMono.variable} ${gochiHand.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
