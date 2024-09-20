import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "k4yf4b3",
  description: "0.0.0.0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
