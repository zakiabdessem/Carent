import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Carent",
  description: "Rent your car now!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
