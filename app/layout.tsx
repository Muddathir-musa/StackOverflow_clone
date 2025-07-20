import type { Metadata } from "next";
import localfont from "next/font/local";
import "./globals.css";

const inter = localfont({
  src: "./fonts/InterVF.ttf",
  variable: "--font-inter",
  weight: "100 200 300 400 500 600 700 800 900",
});
const SpaceGrotesk = localfont({
  src: "./fonts/SpaceGroteskVF.ttf",
  variable: "--font-inter",
  weight: "300 400 500 600 700 800 900",
});

export const metadata: Metadata = {
  title: "Stack_Overflow Clone",
  description:
    "Stack Overflow serves as a platform for users to ask and answer questions, and, through membership and active participation, to vote questions and answers up or down similar to",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${SpaceGrotesk.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
