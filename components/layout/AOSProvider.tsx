// =============================================================
// components/layout/AOSProvider.tsx
// Componente cliente que inicializa a biblioteca AOS.
// Deve envolver toda a aplicação (usado no layout.tsx).
// "use client" é necessário pois AOS manipula o DOM do browser.
// =============================================================

"use client"; // Marca como Client Component (roda no browser)

import { useAOS } from "@/hooks/useAOS"; // Hook customizado de inicialização

// ------------------------------------------------------------------
// AOSProvider - Inicializa AOS e renderiza seus filhos normalmente
// ------------------------------------------------------------------
export function AOSProvider({ children }: { children: React.ReactNode }) {
  useAOS(); // Chama o hook — isso inicializa o AOS uma única vez

  // Retorna os children sem alterar a estrutura do DOM
  return <>{children}</>;
}
