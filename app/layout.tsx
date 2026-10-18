import type { Metadata } from "next";
import { Martian_Mono, Victor_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider, themeScript } from "@/contexts/ThemeContext";
import StatusBar from "@/components/StatusBar";
import Footer from "@/components/Footer";

const display = Martian_Mono({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-display",
  display: "swap",
});

const mono = Victor_Mono({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Jason Kelvin Agung",
    template: "%s | Jason Kelvin Agung",
  },
  description:
    "AI Implementation Specialist at DEUS Human Capital Services and computer science graduate from UNPAR, Bandung. Generative AI, algorithms and software engineering.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${display.variable} ${mono.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="pb-[calc(2.75rem+env(safe-area-inset-bottom))]">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:border-2 focus:border-ink focus:bg-butter-soft focus:px-4 focus:py-2"
        >
          Skip to content
        </a>
        <ThemeProvider>
          <main id="main">{children}</main>
          <Footer />
          <StatusBar />
        </ThemeProvider>
      </body>
    </html>
  );
}
