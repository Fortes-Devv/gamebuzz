// =============================================================
// app/not-found.tsx — Página 404 do site GameBuzz.
// Exibida automaticamente pelo Next.js quando notFound() é chamado.
// =============================================================

import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "2rem" }}>
      {/* Número 404 */}
      <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(6rem, 20vw, 12rem)", fontWeight: 900, fontStyle: "italic", color: "var(--color-accent)", lineHeight: 1, marginBottom: "1rem" }}>
        404
      </h1>
      <h2 style={{ fontFamily: "var(--font-display)", fontSize: "2rem", textTransform: "uppercase", color: "var(--color-text-primary)", marginBottom: "1rem" }}>
        Página Não Encontrada
      </h2>
      <p style={{ color: "var(--color-text-secondary)", marginBottom: "2rem", maxWidth: "400px" }}>
        A página que você está procurando não existe ou foi movida.
      </p>
      <Link href="/" style={{ background: "var(--color-accent)", color: "white", padding: "0.75rem 2rem", borderRadius: "4px", textDecoration: "none", fontFamily: "var(--font-display)", fontSize: "1rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>
        ← Voltar para Home
      </Link>
    </div>
  );
}
