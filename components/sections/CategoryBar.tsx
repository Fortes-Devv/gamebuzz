"use client";

// =============================================================
// components/sections/CategoryBar.tsx
// Barra horizontal de categorias com scroll.
// Permite filtrar notícias por categoria na home.
// Para adicionar novas categorias: edite categories em data/mock.ts
// =============================================================

"use client"; // Usa estado local — precisa ser Client Component

import Link from "next/link";
import { categories } from "@/data/mock"; // Lista de categorias

// ------------------------------------------------------------------
// COMPONENTE CategoryBar
// ------------------------------------------------------------------
export function CategoryBar() {
  return (
    <section
      data-aos="fade-up"               // Animação de entrada
      style={{
        padding: "1.5rem 0",
        borderBottom: "1px solid var(--color-border)",
        borderTop: "1px solid var(--color-border)",
        background: "var(--color-surface)",
        overflowX: "auto",             // Permite scroll horizontal no mobile
      }}
    >
      <div className="container-custom">
        {/* Container com scroll horizontal */}
        <div
          style={{
            display: "flex",
            gap: "0.75rem",
            alignItems: "center",
            flexWrap: "nowrap",        // Não quebra linha (mantém scroll horizontal)
          }}
        >
          {/* Botão "Todos" para mostrar todas as categorias */}
          <Link
            href="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              padding: "8px 20px",
              borderRadius: "4px",
              border: "1px solid var(--color-accent)",
              color: "var(--color-accent)",
              textDecoration: "none",
              fontSize: "0.8rem",
              fontWeight: 600,
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              whiteSpace: "nowrap",    // Não quebra o texto
              transition: "all 0.2s",
              background: "rgba(255, 70, 85, 0.1)", // Fundo levemente colorido
            }}
          >
            🎮 Todos
          </Link>

          {/* Renderiza cada categoria como um botão/link */}
          {categories.map((category, index) => (
            <Link
              key={category.id}
              href={`/categoria/${category.slug}`}  // Página da categoria
              data-aos="fade-down"
              data-aos-delay={index * 60}           // Efeito cascata
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                padding: "8px 20px",
                borderRadius: "4px",
                border: `1px solid ${category.color}40`,  // Borda na cor da categoria
                color: category.color,                     // Texto na cor da categoria
                textDecoration: "none",
                fontSize: "0.8rem",
                fontWeight: 600,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                whiteSpace: "nowrap",
                transition: "all 0.2s",
                background: `${category.color}10`,        // Fundo levemente colorido
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = category.color; // Fundo sólido
                e.currentTarget.style.color = "white";              // Texto branco
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = `${category.color}10`; // Volta ao original
                e.currentTarget.style.color = category.color;
              }}
            >
              {category.icon} {category.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
