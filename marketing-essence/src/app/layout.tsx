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
  title: "Renacer Esencial | Estrategia Instagram",
  description:
    "Estrategia integral para un perfil de Instagram femenino que une marketing digital, propósito y desarrollo personal.",
  keywords: [
    "marketing digital",
    "desarrollo personal",
    "instagram",
    "marca femenina",
    "contenido con propósito",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-br from-rose-50 via-white to-sky-50 text-slate-900`}
      >
        {children}
      </body>
    </html>
  );
}
