import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "tstools",
  description: "Next.js TypeScript scaffold",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
