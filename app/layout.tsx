import type { Metadata } from "next";
import { DM_Mono, Newsreader } from "next/font/google";
import "./globals.css";
import { ThemeProvider, themeScript } from "@/contexts/ThemeContext";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import MiniPlayer from "@/components/MiniPlayer";

const serif = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  variable: "--font-serif",
  display: "swap",
});

const mono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jasonagung.vercel.app"),
  title: {
    default: "Jason Kelvin Agung",
    template: "%s | Jason Kelvin Agung",
  },
  description:
    "AI Implementation Specialist at DEUS Human Capital Services and computer science graduate from UNPAR, Bandung. Generative AI, algorithms, software and music.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${serif.variable} ${mono.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[110] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:font-mono focus:text-sm focus:text-bg"
        >
          Skip to content
        </a>
        <ThemeProvider>
          <Nav />
          <main id="main">{children}</main>
          <Footer />
          <MiniPlayer />
        </ThemeProvider>
      </body>
    </html>
  );
}
