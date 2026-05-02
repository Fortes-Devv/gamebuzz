// =============================================================
// app/layout.tsx — Layout raiz da aplicação Next.js
// Este componente envolve TODAS as páginas do site.
// =============================================================

import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AOSProvider } from "@/components/layout/AOSProvider";

// Metadados SEO globais
export const metadata: Metadata = {
  title: { default: "GameBuzz — Notícias, Reviews e Esports", template: "%s | GameBuzz" },
  description: "O maior portal brasileiro de notícias, reviews e esports.",
  keywords: ["games", "notícias", "reviews", "esports"],
  openGraph: { siteName: "GameBuzz", type: "website", locale: "pt_BR" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        {/* AOSProvider inicializa animações de scroll em todo o site */}
        <AOSProvider>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </AOSProvider>
      </body>
    </html>
  );
}
