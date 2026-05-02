// =============================================================
// types/index.ts
// Arquivo central de tipos TypeScript para toda a aplicação.
// Adicione novos tipos aqui conforme o projeto cresce.
// =============================================================

// ------------------------------------------------------------------
// Tipo que representa uma notícia/artigo do site
// ------------------------------------------------------------------
export interface Article {
  id: string;                      // Identificador único do artigo
  slug: string;                    // URL amigável (ex: "zelda-review-2025")
  title: string;                   // Título principal da notícia
  excerpt: string;                 // Resumo curto para cards e listas
  content: string;                 // Conteúdo completo em HTML ou markdown
  coverImage: string;              // URL da imagem de capa
  category: Category;              // Categoria do artigo (veja tipo abaixo)
  tags: string[];                  // Tags para filtro e SEO
  author: Author;                  // Autor do artigo
  publishedAt: string;             // Data de publicação (ISO 8601)
  readingTime: number;             // Tempo estimado de leitura em minutos
  featured: boolean;               // Se é destaque na home
  views: number;                   // Número de visualizações (mock)
  rating?: number;                 // Nota do jogo (0 a 10), opcional
}

// ------------------------------------------------------------------
// Tipo que representa uma categoria de notícias
// ------------------------------------------------------------------
export interface Category {
  id: string;                      // Identificador único da categoria
  slug: string;                    // URL amigável da categoria
  name: string;                    // Nome exibido na interface
  color: string;                   // Cor hex ou Tailwind para o badge
  icon: string;                    // Emoji ou nome de ícone da categoria
}

// ------------------------------------------------------------------
// Tipo que representa um autor de artigo
// ------------------------------------------------------------------
export interface Author {
  id: string;                      // Identificador único do autor
  name: string;                    // Nome completo exibido
  avatar: string;                  // URL do avatar do autor
  bio: string;                     // Pequena biografia
  social?: {                       // Redes sociais (opcional)
    twitter?: string;
    instagram?: string;
  };
}

// ------------------------------------------------------------------
// Tipo para o card de jogo em destaque (hero/banner)
// ------------------------------------------------------------------
export interface FeaturedGame {
  id: string;
  title: string;
  subtitle: string;
  backgroundImage: string;
  rating: number;
  platform: string[];              // Lista de plataformas: ["PS5", "PC", "Xbox"]
  releaseDate: string;
  genre: string;
  slug: string;                    // Redireciona para a notícia do jogo
}

// ------------------------------------------------------------------
// Tipo para os dados de navegação do header
// ------------------------------------------------------------------
export interface NavItem {
  label: string;                   // Texto exibido no menu
  href: string;                    // Rota da página
  isExternal?: boolean;            // Se abre em nova aba
}
