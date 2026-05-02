// =============================================================
// hooks/useAOS.ts
// Hook customizado para inicializar a biblioteca AOS (Animate On Scroll).
// Importar e chamar este hook uma vez no componente raiz (layout.tsx).
// =============================================================

"use client"; // Necessário pois o AOS manipula o DOM do browser

import { useEffect } from "react"; // Hook do React para efeitos colaterais

// ------------------------------------------------------------------
// Hook que inicializa o AOS ao montar o componente
// ------------------------------------------------------------------
export function useAOS() {
  useEffect(() => {
    // Importação dinâmica para evitar erros de SSR (Server-Side Rendering),
    // pois o AOS precisa do objeto 'window' que só existe no browser
    import("aos").then((AOS) => {
      AOS.init({
        duration: 700,           // Duração padrão das animações em ms
        easing: "ease-out-cubic",// Curva de aceleração suave
        once: true,              // Anima apenas uma vez (não re-anima ao rolar)
        offset: 80,              // Inicia animação 80px antes do elemento aparecer
        delay: 0,                // Delay padrão (sobrescrito por data-aos-delay)
      });
    });

    // Importa o CSS do AOS para os estilos funcionarem
    import("aos/dist/aos.css");
  }, []); // Array vazio = executa apenas uma vez ao montar o componente
}
