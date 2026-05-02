// =============================================================
// app/noticia/[slug]/page.tsx — Página de detalhe de notícia.
// Server Component — busca o artigo e renderiza o conteúdo.
// =============================================================

import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getArticleBySlug, articles } from "@/data/mock";
import { formatDate, formatViews, getRatingColor } from "@/lib/utils";
import { ArticleCard } from "@/components/ui/ArticleCard";

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

// Gera metadados SEO dinâmicos por artigo
export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: "Artigo não encontrado" };
  return {
    title: article.title,
    description: article.excerpt,
    openGraph: { title: article.title, description: article.excerpt, images: [{ url: article.coverImage }] },
  };
}

// Pre-gera todas as páginas de artigo no build
export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  // Artigos relacionados: mesma categoria, excluindo o atual
  const relatedArticles = articles
    .filter((a) => a.category.id === article!.category.id && a.id !== article!.id)
    .slice(0, 3);

  return (
    <div style={{ paddingTop: "64px" }}>
      {/* Header do artigo com imagem de capa */}
      <div style={{ position: "relative", height: "60vh", minHeight: "400px", overflow: "hidden" }}>
        <Image src={article!.coverImage} alt={article!.title} fill priority style={{ objectFit: "cover" }} />
        {/* Overlay escuro */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(9,11,16,1) 0%, rgba(9,11,16,0.5) 50%, transparent 100%)" }} />
        {/* Metadados sobre a imagem */}
        <div className="container-custom" style={{ position: "absolute", bottom: "2rem", left: "50%", transform: "translateX(-50%)", width: "100%" }}>
          <span className="category-badge" style={{ backgroundColor: article!.category.color, color: "white", marginBottom: "1rem" }} data-aos="fade-up">
            {article!.category.icon} {article!.category.name}
          </span>
          <h1 data-aos="fade-up" data-aos-delay="100" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 900, color: "white", lineHeight: 1.05, maxWidth: "900px", marginBottom: "1rem" }}>
            {article!.title}
          </h1>
          {/* Meta info */}
          <div data-aos="fade-up" data-aos-delay="150" style={{ display: "flex", flexWrap: "wrap", gap: "1rem", alignItems: "center" }}>
            <span style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.85rem" }}>Por {article!.author.name}</span>
            <span style={{ color: "rgba(255,255,255,0.4)" }}>|</span>
            <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.85rem" }}>📅 {formatDate(article!.publishedAt)}</span>
            <span style={{ color: "rgba(255,255,255,0.4)" }}>|</span>
            <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.85rem" }}>⏱ {article!.readingTime} min</span>
            <span style={{ color: "rgba(255,255,255,0.4)" }}>|</span>
            <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.85rem" }}>👁 {formatViews(article!.views)}</span>
          </div>
        </div>
      </div>

      {/* Corpo do artigo */}
      <div className="container-custom">
        <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 2fr) minmax(280px, 1fr)", gap: "3rem", paddingTop: "3rem", paddingBottom: "5rem", alignItems: "start" }}>
          {/* Conteúdo principal */}
          <article data-aos="fade-up">
            {/* Lead/excerpt */}
            <p style={{ color: "var(--color-text-secondary)", fontSize: "1.15rem", lineHeight: 1.8, borderLeft: "3px solid var(--color-accent)", paddingLeft: "1.5rem", marginBottom: "2rem", fontStyle: "italic" }}>
              {article!.excerpt}
            </p>
            {/* HTML do artigo - use DOMPurify em produção para conteúdo externo */}
            <div dangerouslySetInnerHTML={{ __html: article!.content }} style={{ color: "var(--color-text-secondary)", lineHeight: 1.9 }} />
            {/* Tags */}
            {article!.tags.length > 0 && (
              <div style={{ marginTop: "3rem", paddingTop: "2rem", borderTop: "1px solid var(--color-border)" }}>
                <p style={{ color: "var(--color-text-muted)", fontSize: "0.8rem", marginBottom: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>Tags</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  {article!.tags.map((tag) => (
                    <span key={tag} style={{ background: "var(--color-surface-2)", border: "1px solid var(--color-border)", color: "var(--color-text-secondary)", padding: "4px 12px", borderRadius: "4px", fontSize: "0.8rem" }}>
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {/* Bio do autor */}
            <div style={{ marginTop: "3rem", padding: "1.5rem", background: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: "8px", display: "flex", gap: "1rem" }}>
              <Image src={article!.author.avatar} alt={article!.author.name} width={60} height={60} style={{ borderRadius: "50%", flexShrink: 0 }} />
              <div>
                <p style={{ color: "var(--color-text-primary)", fontWeight: 600, marginBottom: "0.3rem" }}>{article!.author.name}</p>
                <p style={{ color: "var(--color-text-secondary)", fontSize: "0.875rem", lineHeight: 1.6 }}>{article!.author.bio}</p>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside style={{ position: "sticky", top: "80px" }}>
            {/* Nota do jogo */}
            {article!.rating && (
              <div data-aos="fade-left" style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: "8px", padding: "1.5rem", textAlign: "center", marginBottom: "1.5rem" }}>
                <p style={{ color: "var(--color-text-muted)", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.5rem" }}>Nota GameBuzz</p>
                <div className={getRatingColor(article!.rating)} style={{ fontFamily: "var(--font-display)", fontSize: "5rem", fontWeight: 900, fontStyle: "italic", lineHeight: 1 }}>
                  {article!.rating}
                </div>
                <p style={{ color: "var(--color-text-muted)", fontSize: "0.8rem" }}>de 10</p>
                <div style={{ marginTop: "1rem", background: "var(--color-border)", borderRadius: "4px", height: "6px" }}>
                  <div style={{ width: `${(article!.rating / 10) * 100}%`, height: "100%", background: article!.rating >= 8 ? "#22C55E" : "#F59E0B", borderRadius: "4px" }} />
                </div>
              </div>
            )}
            <Link href="/" style={{ display: "block", textAlign: "center", padding: "0.75rem", border: "1px solid var(--color-border)", borderRadius: "6px", color: "var(--color-text-secondary)", textDecoration: "none", fontSize: "0.85rem" }}>
              ← Voltar para Home
            </Link>
          </aside>
        </div>

        {/* Artigos relacionados */}
        {relatedArticles.length > 0 && (
          <div style={{ paddingBottom: "5rem" }}>
            <div style={{ width: "40px", height: "3px", background: "var(--color-accent)", borderRadius: "2px", marginBottom: "0.75rem" }} data-aos="fade-right" />
            <h2 data-aos="fade-right" style={{ fontFamily: "var(--font-display)", fontSize: "2rem", textTransform: "uppercase", marginBottom: "2rem" }}>Relacionados</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1.5rem" }}>
              {relatedArticles.map((related, index) => (
                <ArticleCard key={related.id} article={related} aosAnimation="fade-up" aosDelay={index * 100} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
