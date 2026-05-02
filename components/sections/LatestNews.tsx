// =============================================================
// components/sections/LatestNews.tsx
// Seção de "Últimas Notícias" exibida na home page.
// Para mudar quantos artigos aparecem: altere o .slice() abaixo.
// =============================================================

import { articles } from "@/data/mock";
import { ArticleCard } from "@/components/ui/ArticleCard";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function LatestNews() {
  // Ordena por data mais recente e pega os 6 primeiros
  const latestArticles = [...articles]
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, 6);

  return (
    <section style={{ padding: "4rem 0" }}>
      <div className="container-custom">
        <SectionTitle
          title="Últimas Notícias"
          subtitle="Tudo que acontece no mundo dos games"
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
          {latestArticles.map((article, index) => (
            <ArticleCard
              key={article.id}
              article={article}
              variant="default"
              aosAnimation="fade-up"
              aosDelay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
