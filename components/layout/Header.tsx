// =============================================================
// components/layout/Header.tsx
// Cabeçalho fixo do site com logo, navegação e busca.
// Adicione novos itens de menu em navItems abaixo.
// =============================================================

"use client"; // Necessário para useState e useEffect

import Link from "next/link";                           // Navegação interna do Next.js
import { useState, useEffect } from "react";            // Hooks do React
import { categories } from "@/data/mock";               // Categorias do site

// ------------------------------------------------------------------
// CONFIGURAÇÃO DO MENU - Edite aqui para adicionar páginas
// ------------------------------------------------------------------
const navItems = [
  { label: "Início", href: "/" },
  { label: "Reviews", href: "/categoria/reviews" },
  { label: "Notícias", href: "/categoria/noticias" },
  { label: "Esports", href: "/categoria/esports" },
  { label: "Tutoriais", href: "/categoria/tutoriais" },
];

// ------------------------------------------------------------------
// COMPONENTE HEADER
// ------------------------------------------------------------------
export function Header() {
  // Controla se o menu mobile está aberto
  const [mobileOpen, setMobileOpen] = useState(false);
  // Controla se o header deve ter fundo sólido (ao rolar a página)
  const [scrolled, setScrolled] = useState(false);

  // Detecta o scroll para adicionar fundo ao header transparente
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20); // Ativa fundo após 20px de scroll
    };
    window.addEventListener("scroll", handleScroll);    // Registra o evento
    return () => window.removeEventListener("scroll", handleScroll); // Cleanup
  }, []);

  return (
    // Header fixo no topo — muda o bg conforme o scroll
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "all 0.3s ease",
        background: scrolled
          ? "rgba(9, 11, 16, 0.97)"    // Fundo escuro ao rolar
          : "rgba(9, 11, 16, 0.5)",    // Semi-transparente no topo
        backdropFilter: "blur(12px)",  // Efeito de vidro fosco
        borderBottom: scrolled
          ? "1px solid var(--color-border)"  // Borda ao rolar
          : "1px solid transparent",
      }}
    >
      <div className="container-custom">
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "64px" }}>

          {/* --------------------------------------------------------
              LOGO - Clica para voltar à home
              -------------------------------------------------------- */}
          <Link href="/" style={{ textDecoration: "none" }}>
            <span
              className="logo-text"
              style={{ fontSize: "1.8rem", color: "var(--color-accent)" }}
            >
              GAME
            </span>
            <span
              className="logo-text"
              style={{ fontSize: "1.8rem", color: "var(--color-text-primary)" }}
            >
              BUZZ
            </span>
          </Link>

          {/* --------------------------------------------------------
              NAVEGAÇÃO DESKTOP - Visível apenas em telas maiores
              -------------------------------------------------------- */}
          <nav style={{ display: "flex", gap: "2rem" }} className="hidden md:flex">
            {navItems.map((item) => (
              // Itera cada item do menu
              <Link
                key={item.href}         // Chave única para o React
                href={item.href}
                style={{
                  color: "var(--color-text-secondary)",
                  textDecoration: "none",
                  fontSize: "0.85rem",
                  fontWeight: 500,
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  transition: "color 0.2s",
                }}
                // Efeito hover usando onMouseEnter/Leave
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-accent)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-text-secondary)")}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* --------------------------------------------------------
              BOTÃO MENU MOBILE - Apenas em telas pequenas
              -------------------------------------------------------- */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)} // Alterna o menu
            className="md:hidden"
            style={{
              background: "none",
              border: "none",
              color: "var(--color-text-primary)",
              cursor: "pointer",
              padding: "8px",
              fontSize: "1.5rem",
            }}
            aria-label="Abrir menu"
          >
            {mobileOpen ? "✕" : "☰"} {/* Ícone muda conforme o estado */}
          </button>
        </div>
      </div>

      {/* --------------------------------------------------------
          MENU MOBILE - Exibido quando mobileOpen === true
          -------------------------------------------------------- */}
      {mobileOpen && (
        <div
          style={{
            background: "var(--color-surface)",
            borderTop: "1px solid var(--color-border)",
            padding: "1rem",
          }}
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)} // Fecha o menu ao clicar
              style={{
                display: "block",
                padding: "0.75rem 1rem",
                color: "var(--color-text-secondary)",
                textDecoration: "none",
                fontWeight: 500,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                fontSize: "0.85rem",
                borderBottom: "1px solid var(--color-border)",
              }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
