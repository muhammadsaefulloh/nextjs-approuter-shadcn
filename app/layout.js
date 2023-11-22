import "./globals.css";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";

// const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
