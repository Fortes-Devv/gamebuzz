// =============================================================
// components/ui/SectionTitle.tsx
// Componente reutilizável de título de seção.
// Usado em todas as seções para manter consistência visual.
// Inclui uma linha decorativa vermelha e subtítulo opcional.
// =============================================================

// ------------------------------------------------------------------
// PROPS do componente
// ------------------------------------------------------------------
interface SectionTitleProps {
  title: string;              // Texto principal do título
  subtitle?: string;          // Subtítulo opcional abaixo do título
  aosAnimation?: string;      // Animação AOS (padrão: "fade-right")
  align?: "left" | "center";  // Alinhamento (padrão: "left")
}

// ------------------------------------------------------------------
// COMPONENTE SectionTitle
// ------------------------------------------------------------------
export function SectionTitle({
  title,
  subtitle,
  aosAnimation = "fade-right",
  align = "left",
}: SectionTitleProps) {
  return (
    <div
      data-aos={aosAnimation}          // Animação ao entrar na tela
      style={{
        marginBottom: "2rem",
        textAlign: align,              // Alinhamento configurável
      }}
    >
      {/* Linha decorativa acima do título */}
      <div
        style={{
          width: "40px",
          height: "3px",
          background: "var(--color-accent)",
          borderRadius: "2px",
          marginBottom: "0.75rem",
          marginLeft: align === "center" ? "auto" : "0",  // Centraliza se necessário
          marginRight: align === "center" ? "auto" : "0",
        }}
      />

      {/* Título principal */}
      <h2
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(1.8rem, 4vw, 2.5rem)", // Tamanho responsivo
          fontWeight: 700,
          color: "var(--color-text-primary)",
          textTransform: "uppercase",
          letterSpacing: "0.02em",
          lineHeight: 1,
        }}
      >
        {title}
      </h2>

      {/* Subtítulo (renderizado apenas se existir) */}
      {subtitle && (
        <p
          style={{
            color: "var(--color-text-secondary)",
            fontSize: "0.9rem",
            marginTop: "0.5rem",
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
