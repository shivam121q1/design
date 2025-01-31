import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Influencer",
  description: "Generated by create next app",
};
async function getTheme() {
  const res = await fetch("https://api.example.com/theme", { cache: "no-store" }); // Replace with your API
  if (!res.ok) throw new Error("Failed to fetch theme");
  return res.json();
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  // const theme = await getTheme();
  return (
    <html lang="en">
      <head>
      {/* <style>
          {`
            :root {
              --font-family: ${theme.fontFamily};
              --primary-color: ${theme.primaryColor};
              --secondary-color: ${theme.secondaryColor};
              --tertiary-color: ${theme.tertiaryColor};
            }
          `}
        </style> */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
