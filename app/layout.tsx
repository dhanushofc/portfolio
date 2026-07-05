import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dhanush Ginkala | Deep Learning & Full-Stack Developer",
  description: "B.Tech CSE graduate specializing in deep learning, computer vision, and full-stack development. Spatio-temporal Sea Surface Temperature forecasting at INCOIS and Manim animation templates contributor at Skillbanc.",
  keywords: ["Dhanush Ginkala", "Deep Learning", "Computer Vision", "SatelliteGAN", "INCOIS", "IFHE", "Manim", "Full-Stack Developer", "Next.js Portfolio"],
  authors: [{ name: "Dhanush Ginkala", url: "https://github.com/dhanushofc" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const storedTheme = localStorage.getItem('portfolio-theme');
                  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  const initialTheme = storedTheme ?? (systemPrefersDark ? 'dark' : 'light');
                  if (initialTheme === 'light') {
                    document.documentElement.classList.add('light');
                  } else {
                    document.documentElement.classList.remove('light');
                  }
                } catch (e) {
                  console.error(e);
                }
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}
