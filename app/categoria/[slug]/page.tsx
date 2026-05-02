// =============================================================
// app/categoria/[slug]/page.tsx
// Página que lista artigos filtrados por categoria.
// Ex: /categoria/reviews mostra todos os reviews
// Para adicionar novas categorias: edite categories em data/mock.ts
// =============================================================

import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { categories, getArticlesByCategory } from "@/data/mock";
import { ArticleCard } from "@/components/ui/ArticleCard";
import { SectionTitle } from "@/components/ui/SectionTitle";

// ------------------------------------------------------------------
// PROPS da página dinâmica
// ------------------------------------------------------------------
interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

// ------------------------------------------------------------------
// METADADOS DINÂMICOS POR CATEGORIA
// ------------------------------------------------------------------
export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug); // Busca a categoria

  if (!category) return { title: "Categoria não encontrada" };

  return {
    title: `${category.name} — GameBuzz`,
    description: `Todas as notícias de ${category.name} no GameBuzz`,
  };
}

// ------------------------------------------------------------------
// PRE-GERA TODAS AS PÁGINAS DE CATEGORIA NO BUILD
// ------------------------------------------------------------------
export function generateStaticParams() {
  return categories.map((category) => ({
    slug: category.slug, // Gera uma página para cada slug de categoria
  }));
}

// ------------------------------------------------------------------
// COMPONENTE DA PÁGINA DE CATEGORIA
// ------------------------------------------------------------------
export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;

  // Busca a categoria pelo slug
  const category = categories.find((c) => c.slug === slug);

  // Redireciona para 404 se a categoria não existir
  if (!category) {
    notFound();
  }

  // Busca todos os artigos desta categoria
  const categoryArticles = getArticlesByCategory(slug);

  return (
    <div style={{ paddingTop: "64px" }}>

      {/* ============================================================
          HEADER DA CATEGORIA - Banner colorido
          ============================================================ */}
      <div
        style={{
          padding: "5rem 0 3rem",
          background: `linear-gradient(135deg, ${category.color}15 0%, var(--color-bg) 100%)`,
          borderBottom: "1px solid var(--color-border)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Círculo decorativo de fundo */}
        <div
          style={{
            position: "absolute",
            right: "-100px",
            top: "-100px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: `${category.color}08`,  // Cor bem transparente
            border: `1px solid ${category.color}20`,
          }}
        />

        <div className="container-custom">
          {/* Ícone grande da categoria */}
          <div
            data-aos="fade-right"
            style={{ fontSize: "4rem", marginBottom: "1rem" }}
          >
            {category.icon}
          </div>

          {/* Nome da categoria */}
          <h1
            data-aos="fade-right"
            data-aos-delay="100"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(3rem, 8vw, 5rem)",
              fontWeight: 900,
              fontStyle: "italic",
              textTransform: "uppercase",
              color: "var(--color-text-primary)",
              lineHeight: 1,
              marginBottom: "1rem",
            }}
          >
            {category.name}
          </h1>

          {/* Contador de artigos */}
          <p
            data-aos="fade-right"
            data-aos-delay="150"
            style={{ color: "var(--color-text-secondary)", fontSize: "1rem" }}
          >
            {categoryArticles.length} artigo{categoryArticles.length !== 1 ? "s" : ""} encontrado{categoryArticles.length !== 1 ? "s" : ""}
          </p>
        </div>
      </div>

      {/* ============================================================
          GRID DE ARTIGOS DA CATEGORIA
          ============================================================ */}
      <section style={{ padding: "3rem 0 5rem" }}>
        <div className="container-custom">
          {/* Se não houver artigos nesta categoria */}
          {categoryArticles.length === 0 ? (
            <div
              style={{
                textAlign: "center",
                padding: "5rem 0",
                color: "var(--color-text-muted)",
              }}
              data-aos="fade-up"
            >
              <p style={{ fontSize: "3rem", marginBottom: "1rem" }}>📭</p>
              <p style={{ fontSize: "1.2rem" }}>Nenhum artigo encontrado nesta categoria ainda.</p>
              <p style={{ marginTop: "0.5rem" }}>Volte em breve para novas publicações!</p>
            </div>
          ) : (
            // Grid de artigos
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                gap: "1.5rem",
              }}
            >
              {categoryArticles.map((article, index) => (
                <ArticleCard
                  key={article.id}
                  article={article}
                  variant="default"
                  aosAnimation="fade-up"
                  aosDelay={index * 80} // Delay cascata entre os cards
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
