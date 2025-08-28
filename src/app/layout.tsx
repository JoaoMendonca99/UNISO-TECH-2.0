import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: 'UNISO Tech - Conecte, Colabore, Inove',
  description: 'Plataforma para conectar estudantes universitários da UNISO, compartilhar ideias e colaborar em projetos inovadores.',
  keywords: 'UNISO, tecnologia, projetos, colaboração, estudantes, inovação',
  authors: [{ name: 'UNISO Tech' }],
  openGraph: {
    title: 'UNISO Tech - Conecte, Colabore, Inove',
    description: 'Plataforma para conectar estudantes universitários da UNISO, compartilhar ideias e colaborar em projetos inovadores.',
    type: 'website',
    locale: 'pt_BR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UNISO Tech - Conecte, Colabore, Inove',
    description: 'Plataforma para conectar estudantes universitários da UNISO, compartilhar ideias e colaborar em projetos inovadores.',
  },
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "UNISO Tech",
    "description": "Plataforma para conectar estudantes universitários da UNISO, compartilhar ideias e colaborar em projetos inovadores.",
    "url": "https://uniso-tech.vercel.app",
    "logo": "https://uniso-tech.vercel.app/logo.png",
    "sameAs": [
      "https://uniso.br"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "contato@uniso-tech.com"
    }
  }

  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
