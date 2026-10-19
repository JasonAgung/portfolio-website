import type { Metadata } from "next";
import { Hanken_Grotesk, Martian_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider, themeScript } from "@/contexts/ThemeContext";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const mono = Martian_Mono({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-mono",
  display: "swap",
});

const sans = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
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
    <html lang="en" suppressHydrationWarning className={`${mono.variable} ${sans.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:border-2 focus:border-ink focus:bg-butter-soft focus:px-4 focus:py-2"
        >
          Skip to content
        </a>
        <ThemeProvider>
          <Nav />
          <main id="main">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
