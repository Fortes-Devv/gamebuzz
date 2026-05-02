"use client";

// =============================================================
// components/sections/MostRead.tsx
// Seção "Mais Lidos" com ranking dos artigos mais visualizados.
// Exibida como sidebar ou seção separada na home.
// =============================================================

import { getMostViewedArticles } from "@/data/mock"; // Helper de artigos mais vistos
import { ArticleCard } from "@/components/ui/ArticleCard";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { formatViews } from "@/lib/utils";           // Formatador de views

// ------------------------------------------------------------------
// COMPONENTE MostRead
// ------------------------------------------------------------------
export function MostRead() {
  // Busca os 5 artigos mais visualizados ordenados por views
  const mostViewed = getMostViewedArticles(5);

  return (
    <div>
      {/* Título da seção */}
      <SectionTitle
        title="Mais Lidos"
        subtitle="Os artigos mais acessados"
        aosAnimation="fade-left"
      />

      {/* Lista numerada dos artigos */}
      <div style={{ display: "flex", flexDirection: "column" }}>
        {mostViewed.map((article, index) => (
          <div
            key={article.id}
            data-aos="fade-left"
            data-aos-delay={index * 80} // Delay cascata por posição
            style={{
              display: "flex",
              gap: "1rem",
              padding: "1rem 0",
              borderBottom: index < mostViewed.length - 1 ? "1px solid var(--color-border)" : "none",
              alignItems: "flex-start",
            }}
          >
            {/* Número do ranking (estilizado) */}
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "2.5rem",
                fontWeight: 900,
                fontStyle: "italic",
                lineHeight: 1,
                // Os 3 primeiros ficam com cor de destaque
                color: index < 3 ? "var(--color-accent)" : "var(--color-border)",
                minWidth: "2rem",
                textAlign: "right",
              }}
            >
              {index + 1}              {/* Número do ranking */}
            </span>

            {/* Informações do artigo */}
            <div style={{ flex: 1 }}>
              {/* Badge da categoria */}
              <span
                className="category-badge"
                style={{
                  backgroundColor: article.category.color + "20",
                  color: article.category.color,
                  marginBottom: "0.4rem",
                }}
              >
                {article.category.icon} {article.category.name}
              </span>

              {/* Título do artigo */}
              <a
                href={`/noticia/${article.slug}`}
                style={{
                  display: "block",
                  color: "var(--color-text-primary)",
                  textDecoration: "none",
                  fontFamily: "var(--font-display)",
                  fontSize: "1rem",
                  fontWeight: 600,
                  lineHeight: 1.3,
                  marginBottom: "0.3rem",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-accent)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-text-primary)")}
              >
                {article.title}
              </a>

              {/* Views */}
              <span style={{ color: "var(--color-text-muted)", fontSize: "0.75rem" }}>
                👁 {formatViews(article.views)} visualizações
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
