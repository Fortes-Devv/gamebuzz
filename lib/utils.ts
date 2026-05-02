// =============================================================
// lib/utils.ts
// Funções utilitárias reutilizáveis em todo o projeto.
// Adicione aqui helpers de formatação, datas, strings etc.
// =============================================================

// ------------------------------------------------------------------
// Formata número de views de forma legível (ex: 145200 → "145.2K")
// ------------------------------------------------------------------
export function formatViews(views: number): string {
  if (views >= 1_000_000) {
    // Converte para milhões com uma casa decimal
    return `${(views / 1_000_000).toFixed(1)}M`;
  }
  if (views >= 1_000) {
    // Converte para milhares com uma casa decimal
    return `${(views / 1_000).toFixed(1)}K`;
  }
  // Retorna o número bruto se for menor que 1000
  return views.toString();
}

// ------------------------------------------------------------------
// Formata data ISO para formato brasileiro (ex: "28 de abril de 2025")
// ------------------------------------------------------------------
export function formatDate(isoDate: string): string {
  const date = new Date(isoDate); // Converte string para objeto Date
  return date.toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

// ------------------------------------------------------------------
// Formata data abreviada (ex: "28 abr 2025")
// ------------------------------------------------------------------
export function formatDateShort(isoDate: string): string {
  const date = new Date(isoDate);
  return date.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

// ------------------------------------------------------------------
// Calcula quantos dias atrás um artigo foi publicado
// ------------------------------------------------------------------
export function timeAgo(isoDate: string): string {
  const now = new Date();                          // Data atual
  const past = new Date(isoDate);                  // Data do artigo
  const diffMs = now.getTime() - past.getTime();   // Diferença em milissegundos
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24)); // Converte para dias

  if (diffDays === 0) return "Hoje";               // Mesmo dia
  if (diffDays === 1) return "Ontem";              // Dia anterior
  if (diffDays < 7) return `${diffDays} dias atrás`;    // Menos de uma semana
  if (diffDays < 30) return `${Math.floor(diffDays / 7)} semanas atrás`; // Semanas
  if (diffDays < 365) return `${Math.floor(diffDays / 30)} meses atrás`; // Meses
  return `${Math.floor(diffDays / 365)} anos atrás`;   // Anos
}

// ------------------------------------------------------------------
// Gera a cor de rating com base na nota (verde=ótimo, amarelo=médio, vermelho=ruim)
// ------------------------------------------------------------------
export function getRatingColor(rating: number): string {
  if (rating >= 8) return "text-green-400";        // Verde para notas altas
  if (rating >= 6) return "text-yellow-400";       // Amarelo para notas médias
  return "text-red-400";                           // Vermelho para notas baixas
}

// ------------------------------------------------------------------
// Trunca texto longo e adiciona reticências
// ------------------------------------------------------------------
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;       // Não precisa truncar
  return text.slice(0, maxLength).trim() + "...";  // Trunca e adiciona "..."
}
