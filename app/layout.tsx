"use client"

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AuthProvider from "@/components/AuthProvider";
import { useThemeStore } from "@/stores/theme-store";



export default function RootLayout({ children }: LayoutProps<"/">) {
  const theme = useThemeStore((state)=> state.theme)
  return (
    <html
      lang="en"
      className="h-full"
    >
      <body data-theme={theme} className="min-h-full flex flex-col"><AuthProvider>{children}</AuthProvider></body>
    </html>
  );
}
