// =============================================================
// components/sections/HeroBanner.tsx
// Banner principal da home com slideshow dos jogos em destaque.
// Usa rotação automática a cada 5 segundos e controles manuais.
// Para adicionar novos jogos: edite featuredGames em data/mock.ts
// =============================================================

"use client"; // Usa useState/useEffect — precisa ser Client Component

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { featuredGames } from "@/data/mock";       // Dados dos jogos em destaque
import { formatDate } from "@/lib/utils";           // Formatador de data

// ------------------------------------------------------------------
// COMPONENTE HeroBanner
// ------------------------------------------------------------------
export function HeroBanner() {
  // Índice do slide atualmente visível
  const [currentSlide, setCurrentSlide] = useState(0);
  // Controla se o slideshow automático está rodando
  const [isPlaying, setIsPlaying] = useState(true);

  // Rotação automática — muda o slide a cada 5 segundos
  useEffect(() => {
    if (!isPlaying) return;                          // Para se o usuário pausou

    const interval = setInterval(() => {
      // Avança para o próximo slide, voltando ao início quando chega no fim
      setCurrentSlide((prev) => (prev + 1) % featuredGames.length);
    }, 5000); // 5000ms = 5 segundos

    return () => clearInterval(interval);            // Limpa o interval ao desmontar
  }, [isPlaying, currentSlide]);

  const game = featuredGames[currentSlide]; // Jogo do slide atual

  return (
    <section
      style={{
        position: "relative",
        height: "calc(100vh - 64px)",               // Altura total menos o header
        minHeight: "600px",
        maxHeight: "800px",
        marginTop: "64px",                           // Offset do header fixo
        overflow: "hidden",
      }}
    >
      {/* --------------------------------------------------------
          IMAGEM DE FUNDO - Troca conforme o slide
          -------------------------------------------------------- */}
      {featuredGames.map((g, index) => (
        <div
          key={g.id}
          style={{
            position: "absolute",
            inset: 0,
            transition: "opacity 1s ease",            // Transição suave entre slides
            opacity: index === currentSlide ? 1 : 0, // Visível apenas o atual
          }}
        >
          <Image
            src={g.backgroundImage}
            alt={g.title}
            fill
            priority={index === 0}                   // Carrega o primeiro com prioridade
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>
      ))}

      {/* --------------------------------------------------------
          OVERLAY ESCURO - Melhora legibilidade do texto
          -------------------------------------------------------- */}
      <div className="image-overlay" />

      {/* Overlay lateral esquerdo para mais contraste */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to right, rgba(9,11,16,0.9) 0%, rgba(9,11,16,0.3) 60%, transparent 100%)",
        }}
      />

      {/* --------------------------------------------------------
          CONTEÚDO DO HERO - Textos e botões sobre a imagem
          -------------------------------------------------------- */}
      <div
        className="container-custom"
        style={{
          position: "relative",
          zIndex: 10,                                // Acima dos overlays
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div style={{ maxWidth: "600px" }}>
          {/* Badge de "Destaque" */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              background: "var(--color-accent)",
              color: "white",
              padding: "4px 12px",
              borderRadius: "4px",
              fontSize: "0.7rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "1rem",
            }}
            data-aos="fade-right"                    // Animação AOS
          >
            <span className="animate-pulse-red">●</span> DESTAQUE
          </div>

          {/* Título do jogo em destaque */}
          <h1
            data-aos="fade-right"
            data-aos-delay="100"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(3rem, 8vw, 6rem)", // Tamanho responsivo
              fontWeight: 900,
              fontStyle: "italic",
              lineHeight: 0.9,
              color: "white",
              textTransform: "uppercase",
              marginBottom: "0.5rem",
            }}
          >
            {game.title}
          </h1>

          {/* Subtítulo */}
          <p
            data-aos="fade-right"
            data-aos-delay="150"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.2rem, 3vw, 1.8rem)",
              color: "var(--color-accent-2)",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "1.5rem",
            }}
          >
            {game.subtitle}
          </p>

          {/* Metadados do jogo: plataformas, gênero, data */}
          <div
            data-aos="fade-right"
            data-aos-delay="200"
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1rem",
              marginBottom: "2rem",
            }}
          >
            {/* Plataformas */}
            <div style={{ display: "flex", gap: "0.4rem" }}>
              {game.platform.map((p) => (
                <span
                  key={p}
                  style={{
                    background: "rgba(255,255,255,0.1)",
                    color: "white",
                    padding: "3px 10px",
                    borderRadius: "4px",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    backdropFilter: "blur(4px)",
                    border: "1px solid rgba(255,255,255,0.2)",
                  }}
                >
                  {p}
                </span>
              ))}
            </div>

            {/* Separador */}
            <span style={{ color: "rgba(255,255,255,0.3)" }}>|</span>

            {/* Gênero */}
            <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.85rem" }}>
              🎮 {game.genre}
            </span>

            {/* Rating (se existir) */}
            {game.rating > 0 && (
              <>
                <span style={{ color: "rgba(255,255,255,0.3)" }}>|</span>
                <span style={{ color: "#22C55E", fontWeight: 700, fontSize: "0.9rem" }}>
                  ⭐ {game.rating}/10
                </span>
              </>
            )}
          </div>

          {/* Botão de call-to-action */}
          <div data-aos="fade-right" data-aos-delay="250">
            <Link
              href={`/noticia/${game.slug}`}
              style={{
                display: "inline-block",
                background: "var(--color-accent)",
                color: "white",
                padding: "0.75rem 2rem",
                borderRadius: "4px",
                fontFamily: "var(--font-display)",
                fontSize: "1rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                textDecoration: "none",
                transition: "all 0.2s",
                boxShadow: "0 4px 20px rgba(255, 70, 85, 0.4)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 8px 30px rgba(255, 70, 85, 0.6)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 20px rgba(255, 70, 85, 0.4)";
              }}
            >
              Leia a Cobertura Completa →
            </Link>
          </div>
        </div>
      </div>

      {/* --------------------------------------------------------
          CONTROLES DO SLIDESHOW - Indicadores e botões
          -------------------------------------------------------- */}
      <div
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "0.5rem",
          zIndex: 10,
        }}
      >
        {featuredGames.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentSlide(index);               // Vai direto para o slide clicado
              setIsPlaying(false);                  // Pausa o auto-play
              setTimeout(() => setIsPlaying(true), 8000); // Retoma após 8s
            }}
            style={{
              width: index === currentSlide ? "32px" : "8px", // Slide ativo é maior
              height: "8px",
              borderRadius: "4px",
              border: "none",
              cursor: "pointer",
              background: index === currentSlide ? "var(--color-accent)" : "rgba(255,255,255,0.3)",
              transition: "all 0.3s ease",
              padding: 0,
            }}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
