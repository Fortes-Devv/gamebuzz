// ArticleCard needs to be a client component due to event handlers
"use client";

// =============================================================
// components/ui/ArticleCard.tsx
// Card reutilizável para exibir uma notícia.
// Usado na home, páginas de categoria e resultados de busca.
// Recebe um Article e exibe: imagem, categoria, título, autor e data.
// =============================================================

import Link from "next/link";              // Link interno do Next.js
import Image from "next/image";            // Imagem otimizada do Next.js
import { Article } from "@/types";         // Tipo do artigo
import { formatDate, timeAgo, formatViews, getRatingColor } from "@/lib/utils"; // Helpers

// ------------------------------------------------------------------
// PROPS do componente — o que ele recebe de fora
// ------------------------------------------------------------------
interface ArticleCardProps {
  article: Article;             // O artigo a ser exibido
  variant?: "default" | "horizontal" | "compact"; // Variação visual do card
  aosAnimation?: string;        // Animação AOS (ex: "fade-up", "fade-right")
  aosDelay?: number;            // Delay da animação em ms
}

// ------------------------------------------------------------------
// COMPONENTE ArticleCard
// ------------------------------------------------------------------
export function ArticleCard({
  article,
  variant = "default",
  aosAnimation = "fade-up",
  aosDelay = 0,
}: ArticleCardProps) {

  // ------------------------------------------------------------------
  // VARIANTE HORIZONTAL - Para listas laterais e "mais lidos"
  // ------------------------------------------------------------------
  if (variant === "horizontal") {
    return (
      <Link
        href={`/noticia/${article.slug}`}
        style={{ textDecoration: "none" }}
        data-aos={aosAnimation}                    // Animação AOS
        data-aos-delay={aosDelay}                  // Delay da animação
      >
        <div
          style={{
            display: "flex",
            gap: "0.75rem",
            padding: "0.75rem",
            borderRadius: "6px",
            transition: "background 0.2s",
            cursor: "pointer",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "var(--color-surface-2)")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
        >
          {/* Thumbnail pequena */}
          <div
            style={{
              width: "80px",
              height: "60px",
              borderRadius: "4px",
              overflow: "hidden",
              flexShrink: 0,         // Não encolhe
              position: "relative",
            }}
          >
            <Image
              src={article.coverImage}
              alt={article.title}
              fill                                    // Preenche o container
              style={{ objectFit: "cover" }}
            />
          </div>

          {/* Texto ao lado da thumbnail */}
          <div style={{ flex: 1, minWidth: 0 }}>
            {/* Badge da categoria */}
            <span
              className="category-badge"
              style={{ backgroundColor: article.category.color + "20", color: article.category.color, marginBottom: "0.3rem" }}
            >
              {article.category.icon} {article.category.name}
            </span>
            {/* Título truncado para caber em 2 linhas */}
            <p
              style={{
                color: "var(--color-text-primary)",
                fontSize: "0.85rem",
                fontWeight: 600,
                lineHeight: 1.3,
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                fontFamily: "var(--font-display)",
              }}
            >
              {article.title}
            </p>
            {/* Data de publicação */}
            <p style={{ color: "var(--color-text-muted)", fontSize: "0.75rem", marginTop: "0.3rem" }}>
              {timeAgo(article.publishedAt)}
            </p>
          </div>
        </div>
      </Link>
    );
  }

  // ------------------------------------------------------------------
  // VARIANTE COMPACT - Card pequeno sem imagem
  // ------------------------------------------------------------------
  if (variant === "compact") {
    return (
      <Link
        href={`/noticia/${article.slug}`}
        data-aos={aosAnimation}
        data-aos-delay={aosDelay}
        style={{ textDecoration: "none" }}
      >
        <div
          className="card-base"
          style={{ padding: "1rem" }}
        >
          <span
            className="category-badge"
            style={{ backgroundColor: article.category.color + "20", color: article.category.color }}
          >
            {article.category.icon} {article.category.name}
          </span>
          <p
            style={{
              color: "var(--color-text-primary)",
              fontFamily: "var(--font-display)",
              fontSize: "1rem",
              marginTop: "0.5rem",
              lineHeight: 1.3,
            }}
          >
            {article.title}
          </p>
        </div>
      </Link>
    );
  }

  // ------------------------------------------------------------------
  // VARIANTE DEFAULT - Card vertical completo com imagem grande
  // ------------------------------------------------------------------
  return (
    <Link
      href={`/noticia/${article.slug}`}
      style={{ textDecoration: "none" }}
      data-aos={aosAnimation}
      data-aos-delay={aosDelay}
    >
      <article className="card-base" style={{ height: "100%" }}>
        {/* --------------------------------------------------------
            IMAGEM DE CAPA
            -------------------------------------------------------- */}
        <div style={{ position: "relative", height: "200px", overflow: "hidden" }}>
          <Image
            src={article.coverImage}
            alt={article.title}
            fill
            style={{ objectFit: "cover", transition: "transform 0.4s ease" }}
            onMouseEnter={(e) => ((e.target as HTMLImageElement).style.transform = "scale(1.05)")}
            onMouseLeave={(e) => ((e.target as HTMLImageElement).style.transform = "scale(1)")}
          />

          {/* Badge de nota (se tiver rating) */}
          {article.rating && (
            <div
              style={{
                position: "absolute",
                top: "0.75rem",
                right: "0.75rem",
                background: "rgba(9, 11, 16, 0.9)",
                borderRadius: "6px",
                padding: "4px 10px",
              }}
            >
              <span className={`${getRatingColor(article.rating)}`} style={{ fontWeight: 700, fontSize: "1rem", fontFamily: "var(--font-display)" }}>
                {article.rating}
              </span>
              <span style={{ color: "var(--color-text-muted)", fontSize: "0.7rem" }}>/10</span>
            </div>
          )}
        </div>

        {/* --------------------------------------------------------
            CONTEÚDO DO CARD
            -------------------------------------------------------- */}
        <div style={{ padding: "1.25rem" }}>
          {/* Badge da categoria */}
          <span
            className="category-badge"
            style={{
              backgroundColor: article.category.color + "20",  // 20 = 12% opacidade hex
              color: article.category.color,
              marginBottom: "0.75rem",
            }}
          >
            {article.category.icon} {article.category.name}
          </span>

          {/* Título do artigo */}
          <h3
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.2rem",
              color: "var(--color-text-primary)",
              lineHeight: 1.2,
              marginBottom: "0.5rem",
              display: "-webkit-box",
              WebkitLineClamp: 3,              // Limita a 3 linhas
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {article.title}
          </h3>

          {/* Excerpt (resumo) */}
          <p
            style={{
              color: "var(--color-text-secondary)",
              fontSize: "0.85rem",
              lineHeight: 1.6,
              marginBottom: "1rem",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {article.excerpt}
          </p>

          {/* Rodapé do card: autor + data + views */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingTop: "0.75rem",
              borderTop: "1px solid var(--color-border)",
            }}
          >
            {/* Autor */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <Image
                src={article.author.avatar}
                alt={article.author.name}
                width={24}
                height={24}
                style={{ borderRadius: "50%", background: "var(--color-surface-2)" }}
              />
              <span style={{ color: "var(--color-text-muted)", fontSize: "0.75rem" }}>
                {article.author.name}
              </span>
            </div>

            {/* Data e views */}
            <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
              <span style={{ color: "var(--color-text-muted)", fontSize: "0.75rem" }}>
                {timeAgo(article.publishedAt)}
              </span>
              <span style={{ color: "var(--color-text-muted)", fontSize: "0.75rem" }}>
                👁 {formatViews(article.views)}
              </span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}
