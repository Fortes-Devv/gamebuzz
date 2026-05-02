// =============================================================
// components/layout/Footer.tsx
// Rodapé do site com links, redes sociais e copyright.
// =============================================================

import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinkStyle = {
    display: "block" as const,
    color: "var(--color-text-secondary)",
    textDecoration: "none",
    fontSize: "0.875rem",
    marginBottom: "0.5rem",
    transition: "color 0.2s",
  };

  return (
    <footer style={{ background: "var(--color-surface)", borderTop: "1px solid var(--color-border)", marginTop: "5rem" }}>
      <div className="container-custom">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "3rem", padding: "3rem 0" }}>

          {/* Logo e descrição */}
          <div>
            <div style={{ marginBottom: "1rem" }}>
              <span className="logo-text" style={{ fontSize: "1.5rem", color: "var(--color-accent)" }}>GAME</span>
              <span className="logo-text" style={{ fontSize: "1.5rem", color: "var(--color-text-primary)" }}>BUZZ</span>
            </div>
            <p style={{ color: "var(--color-text-secondary)", fontSize: "0.875rem", lineHeight: 1.7 }}>
              O maior portal brasileiro de notícias, reviews e esports do universo gamer.
            </p>
          </div>

          {/* Links de seções */}
          <div>
            <h4 style={{ color: "var(--color-text-primary)", fontFamily: "var(--font-display)", fontSize: "1rem", letterSpacing: "0.1em", textTransform: "uppercase" as const, marginBottom: "1rem" }}>
              Seções
            </h4>
            {[
              { label: "Reviews", slug: "reviews" },
              { label: "Notícias", slug: "noticias" },
              { label: "Lançamentos", slug: "lancamentos" },
              { label: "Esports", slug: "esports" },
              { label: "Tutoriais", slug: "tutoriais" },
            ].map((item) => (
              <Link key={item.slug} href={`/categoria/${item.slug}`} style={footerLinkStyle}>
                {item.label}
              </Link>
            ))}
          </div>

          {/* Links institucionais */}
          <div>
            <h4 style={{ color: "var(--color-text-primary)", fontFamily: "var(--font-display)", fontSize: "1rem", letterSpacing: "0.1em", textTransform: "uppercase" as const, marginBottom: "1rem" }}>
              Sobre
            </h4>
            {["Sobre Nós", "Anuncie", "Política de Privacidade", "Contato"].map((label) => (
              <Link key={label} href="#" style={footerLinkStyle}>
                {label}
              </Link>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div style={{ borderTop: "1px solid var(--color-border)", padding: "1.5rem 0", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" as const, gap: "1rem" }}>
          <p style={{ color: "var(--color-text-muted)", fontSize: "0.8rem" }}>
            © {currentYear} GameBuzz. Todos os direitos reservados.
          </p>
          <p style={{ color: "var(--color-text-muted)", fontSize: "0.8rem" }}>
            Feito com ❤️ usando Next.js + TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
}
