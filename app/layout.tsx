import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";
import SwipeNavigation from "@/components/SwipeNavigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Jason Kelvin Agung - Portfolio",
    template: "%s | Jason Kelvin Agung"
  },
  description: "IT Student at Universitas Katolik Parahyangan | Marketing Communications | Web Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-mono bg-cream dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300`}>
        <ThemeProvider>
          {children}
          <SwipeNavigation />
        </ThemeProvider>
      </body>
    </html>
  );
}
