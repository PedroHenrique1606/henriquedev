import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { ErrorBoundary } from "@/components/ErrorBoundary";

const poppins = Poppins({ subsets: ["latin"], weight: ['100', '200', '300', '400', '500'] });

export const metadata: Metadata = {
  title: {
    default: "Pedro Henrique - FullStack Developer",
    template: "%s | Pedro Henrique"
  },
  description: "Desenvolvedor FullStack especializado em React, Next.js, Node.js e TypeScript. Criando aplicações modernas, escaláveis e performáticas.",
  keywords: ["FullStack Developer", "React", "Next.js", "TypeScript", "Node.js", "Portfolio", "Desenvolvedor", "Frontend", "Backend"],
  authors: [{ name: "Pedro Henrique" }],
  creator: "Pedro Henrique",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    alternateLocale: "en_US",
    url: "https://pedrohenriquedev.netlify.app",
    title: "Pedro Henrique - FullStack Developer",
    description: "Desenvolvedor FullStack especializado em React, Next.js, Node.js e TypeScript. Criando aplicações modernas, escaláveis e performáticas.",
    siteName: "Pedro Henrique Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Pedro Henrique - FullStack Developer"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Pedro Henrique - FullStack Developer",
    description: "Desenvolvedor FullStack especializado em React, Next.js, Node.js e TypeScript",
    images: ["/og-image.jpg"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  metadataBase: new URL("https://pedrohenriquedev.netlify.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Pedro Henrique",
    "jobTitle": "FullStack Developer",
    "url": "https://pedrohenriquedev.netlify.app",
    "sameAs": [
      "https://github.com/PedroHenrique1606",
      "https://www.linkedin.com/in/pedro-henrique-melo-a7a700231",
      "https://www.instagram.com/pedrohenrique.trc/"
    ],
    "knowsAbout": [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "JavaScript",
      "Full Stack Development"
    ],
    "email": "pedromelo.dev.contato@gmail.com"
  };

  return (
    <html lang="pt-BR">
      <body className={poppins.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ErrorBoundary>
          <LanguageProvider>
            <Suspense>{children}</Suspense>
          </LanguageProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
