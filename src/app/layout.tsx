import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";

const poppins = Poppins({ subsets: ["latin"], weight: ['100', '200', '300', '400', '500'] });

export const metadata: Metadata = {
  title: "Henrique Dev",
  description: "Café e mais café",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={poppins.className}>
        <Suspense>{children}</Suspense>
      </body>
    </html>
  );
}
