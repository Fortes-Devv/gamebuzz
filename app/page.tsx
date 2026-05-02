// =============================================================
// app/page.tsx — Página principal (home) do site GameBuzz.
// Combina todas as seções: HeroBanner, CategoryBar, artigos e sidebar.
// =============================================================

import { HeroBanner } from "@/components/sections/HeroBanner";
import { CategoryBar } from "@/components/sections/CategoryBar";
import { LatestNews } from "@/components/sections/LatestNews";
import { MostRead } from "@/components/sections/MostRead";
import { ArticleCard } from "@/components/ui/ArticleCard";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { getFeaturedArticles } from "@/data/mock";

// Página Server Component — melhora SEO e desempenho inicial
export default function HomePage() {
  // Pega artigos marcados como featured: true
  const featuredArticles = getFeaturedArticles();

  return (
    <>
      {/* Slideshow principal com jogos em destaque */}
      <HeroBanner />

      {/* Barra de categorias para filtro de navegação */}
      <CategoryBar />

      {/* Seção de artigos em destaque */}
      {featuredArticles.length > 0 && (
        <section style={{ padding: "4rem 0" }}>
          <div className="container-custom">
            <SectionTitle
              title="Em Destaque"
              subtitle="As maiores histórias do momento"
              aosAnimation="fade-right"
            />
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                gap: "1.5rem",
                marginTop: "2rem",
              }}
            >
              {featuredArticles.map((article, index) => (
                <ArticleCard
                  key={article.id}
                  article={article}
                  variant="default"
                  aosAnimation="fade-up"
                  aosDelay={index * 150}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Layout de 2 colunas: notícias + sidebar */}
      <section style={{ padding: "2rem 0 5rem" }}>
        <div className="container-custom">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(0, 2fr) minmax(280px, 1fr)",
              gap: "3rem",
              alignItems: "start",
            }}
          >
            {/* Coluna principal — últimas notícias */}
            <div>
              <LatestNews />
            </div>

            {/* Sidebar — mais lidos (sticky no scroll) */}
            <aside style={{ position: "sticky", top: "80px", paddingTop: "4rem" }}>
              <div
                style={{
                  background: "var(--color-surface)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "8px",
                  padding: "1.5rem",
                }}
                data-aos="fade-left"
              >
                <MostRead />
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
