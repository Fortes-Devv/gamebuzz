// =============================================================
// data/mock.ts
// Dados mockados (simulados) para desenvolvimento.
// Quando tiver uma API real, substitua as importações deste arquivo
// por chamadas HTTP (fetch/axios) mantendo os mesmos tipos.
// =============================================================

import { Article, Author, Category, FeaturedGame } from "@/types";

// ------------------------------------------------------------------
// AUTORES - Lista de colaboradores do site
// ------------------------------------------------------------------
export const authors: Author[] = [
  {
    id: "author-1",
    name: "Carlos Mendes",                          // Nome do autor
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Carlos",
    bio: "Jornalista de games há 10 anos. Apaixonado por RPGs e jogos indie.",
    social: {
      twitter: "https://twitter.com/carlosmendes",   // Link do Twitter
    },
  },
  {
    id: "author-2",
    name: "Ana Ribeiro",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ana",
    bio: "Especialista em jogos de ação e FPS competitivo.",
    social: {
      instagram: "https://instagram.com/anaribeiro",
    },
  },
  {
    id: "author-3",
    name: "Pedro Alves",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Pedro",
    bio: "Crítico de games e streamer nas horas vagas.",
  },
];

// ------------------------------------------------------------------
// CATEGORIAS - Seções do site de notícias
// ------------------------------------------------------------------
export const categories: Category[] = [
  {
    id: "cat-1",
    slug: "reviews",
    name: "Reviews",                               // Nome exibido
    color: "#FF4655",                              // Vermelho vibrante
    icon: "⭐",                                   // Emoji do ícone
  },
  {
    id: "cat-2",
    slug: "noticias",
    name: "Notícias",
    color: "#00D4FF",                              // Ciano neon
    icon: "📰",
  },
  {
    id: "cat-3",
    slug: "lancamentos",
    name: "Lançamentos",
    color: "#A855F7",                              // Roxo vibrante
    icon: "🚀",
  },
  {
    id: "cat-4",
    slug: "esports",
    name: "Esports",
    color: "#22C55E",                              // Verde neon
    icon: "🏆",
  },
  {
    id: "cat-5",
    slug: "tutoriais",
    name: "Tutoriais",
    color: "#F59E0B",                              // Âmbar dourado
    icon: "🎮",
  },
];

// ------------------------------------------------------------------
// ARTIGOS - Notícias mockadas para preencher o site
// ------------------------------------------------------------------
export const articles: Article[] = [
  // ----------------------------------------------------------------
  // Artigo 1 - Review em destaque
  // ----------------------------------------------------------------
  {
    id: "art-1",
    slug: "elden-ring-shadow-erdtree-review",
    title: "Elden Ring: Shadow of the Erdtree é a expansão perfeita para um jogo perfeito",
    excerpt:
      "A FromSoftware entregou mais uma obra-prima: 30 horas de conteúdo novo que desafiam até os veteranos de Soulsborne.",
    content: `
      <p>Quando Elden Ring lançou em 2022, o mundo dos games parou. Agora, com Shadow of the Erdtree, a FromSoftware prova que ainda tem muito a dizer no universo das Terras Intermédias.</p>
      <h2>Um novo território magnífico</h2>
      <p>O Reino da Sombra é visualmente de tirar o fôlego. Cada área parece pintada à mão, com uma atenção a detalhes que poucos estúdios conseguem alcançar.</p>
      <h2>Desafio equilibrado</h2>
      <p>Os novos bosses são brutais, mas justos. A curva de dificuldade é construída com maestria, recompensando jogadores que exploram cada canto do mapa.</p>
      <p><strong>Nota final: 9.8/10</strong> — Imperdível para qualquer fã do gênero.</p>
    `,
    coverImage:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=80",
    category: categories[0],                        // categoria "Reviews"
    tags: ["elden ring", "fromsoft", "action rpg", "dlc"],
    author: authors[0],                             // Carlos Mendes
    publishedAt: "2025-04-28T10:00:00Z",
    readingTime: 8,
    featured: true,                                 // Aparece no hero da home
    views: 145200,
    rating: 9.8,
  },

  // ----------------------------------------------------------------
  // Artigo 2 - Notícia de lançamento
  // ----------------------------------------------------------------
  {
    id: "art-2",
    slug: "gta-6-data-lancamento-confirmada",
    title: "GTA 6 tem data de lançamento confirmada pela Rockstar Games",
    excerpt:
      "Após anos de espera, a Rockstar finalmente revelou quando o jogo mais aguardado da geração chegará aos consoles.",
    content: `
      <p>A Rockstar Games confirmou oficialmente que Grand Theft Auto VI chegará em 26 de setembro de 2025 para PlayStation 5 e Xbox Series X/S.</p>
      <h2>Vice City está de volta</h2>
      <p>O jogo se passará em Leonida, uma versão fictícia da Flórida moderna, com foco especial na cidade de Vice City revisitada.</p>
      <h2>Novidades do gameplay</h2>
      <p>Dois protagonistas jogáveis, mapa duas vezes maior que GTA V e uma economia dinâmica que muda conforme as ações do jogador.</p>
    `,
    coverImage:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&q=80",
    category: categories[2],                        // categoria "Lançamentos"
    tags: ["gta 6", "rockstar", "open world", "ps5"],
    author: authors[1],                             // Ana Ribeiro
    publishedAt: "2025-04-25T14:30:00Z",
    readingTime: 5,
    featured: true,
    views: 389000,
  },

  // ----------------------------------------------------------------
  // Artigo 3 - Esports
  // ----------------------------------------------------------------
  {
    id: "art-3",
    slug: "loud-campeao-mundial-valorant-2025",
    title: "LOUD é campeã mundial de VALORANT 2025 em Seoul",
    excerpt:
      "A organização brasileira conquistou o tão sonhado título mundial após uma final eletrizante contra a Team Liquid.",
    content: `
      <p>Em uma final histórica disputada no KSPO Dome em Seoul, a LOUD derrotou a Team Liquid por 3 a 1 e levantou a taça do VALORANT Champions 2025.</p>
      <h2>Uma final para a história</h2>
      <p>aspas foi eleito MVP do torneio com performances consistentes ao longo de toda a competição.</p>
      <h2>Brasil no topo</h2>
      <p>É o segundo título mundial da organização brasileira, consolidando o país como potência no cenário de esports.</p>
    `,
    coverImage:
      "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=800&q=80",
    category: categories[3],                        // categoria "Esports"
    tags: ["valorant", "loud", "esports", "mundial"],
    author: authors[2],                             // Pedro Alves
    publishedAt: "2025-04-20T22:00:00Z",
    readingTime: 6,
    featured: false,
    views: 210500,
  },

  // ----------------------------------------------------------------
  // Artigo 4 - Tutorial
  // ----------------------------------------------------------------
  {
    id: "art-4",
    slug: "como-melhorar-sua-mira-fps",
    title: "10 dicas científicas para melhorar sua mira em FPS",
    excerpt:
      "Técnicas baseadas em estudos de performance que qualquer jogador pode aplicar, do iniciante ao avançado.",
    content: `
      <p>Melhorar a mira em jogos FPS é uma combinação de configuração, treino e consistência. Veja o que a ciência diz sobre o assunto.</p>
      <h2>1. Configure sua sensibilidade corretamente</h2>
      <p>Uma sensibilidade baixa favorece precisão. Comece com 400 DPI e ajuste o multiplicador in-game entre 0.3 e 0.5.</p>
      <h2>2. Treine no Aim Lab diariamente</h2>
      <p>30 minutos de treino estruturado no Aim Lab equivalem a horas de prática não estruturada em partidas comuns.</p>
    `,
    coverImage:
      "https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?w=800&q=80",
    category: categories[4],                        // categoria "Tutoriais"
    tags: ["fps", "tutorial", "mira", "valorant", "cs2"],
    author: authors[1],
    publishedAt: "2025-04-15T08:00:00Z",
    readingTime: 10,
    featured: false,
    views: 87300,
  },

  // ----------------------------------------------------------------
  // Artigo 5 - Notícia
  // ----------------------------------------------------------------
  {
    id: "art-5",
    slug: "nintendo-switch-2-especificacoes-oficiais",
    title: "Nintendo Switch 2: especificações oficiais e preço revelados",
    excerpt:
      "A Nintendo finalmente revelou o hardware completo e o preço do Switch 2, que promete ser 5x mais poderoso que o original.",
    content: `
      <p>A Nintendo revelou que o Switch 2 contará com um chip personalizado da NVIDIA com suporte a DLSS 3, 12GB de RAM e tela OLED de 8 polegadas com 120Hz.</p>
      <h2>Retrocompatibilidade total</h2>
      <p>Todos os jogos do Switch original serão compatíveis com o novo hardware, rodando com melhorias visuais automáticas.</p>
      <h2>Preço no Brasil</h2>
      <p>O console chegará ao Brasil por R$ 3.999, com lançamento previsto para julho de 2025.</p>
    `,
    coverImage:
      "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=800&q=80",
    category: categories[1],                        // categoria "Notícias"
    tags: ["nintendo", "switch 2", "console", "hardware"],
    author: authors[0],
    publishedAt: "2025-04-10T16:00:00Z",
    readingTime: 7,
    featured: false,
    views: 156800,
  },

  // ----------------------------------------------------------------
  // Artigo 6 - Review
  // ----------------------------------------------------------------
  {
    id: "art-6",
    slug: "hellblade-2-review",
    title: "Hellblade 2: Senua's Saga — Uma obra de arte interativa",
    excerpt:
      "Ninja Theory entrega a experiência mais cinematográfica já vista em um videogame. Mas é divertido?",
    content: `
      <p>Hellblade 2 é um dos jogos mais bonitos já criados. Cada frame parece uma fotografia premiada.</p>
      <h2>Uma jornada sensorial</h2>
      <p>O áudio binaural continua sendo o melhor do mercado. Jogar com headphone é uma experiência transformadora.</p>
      <h2>Gameplay simples, mas eficiente</h2>
      <p>Os puzzles e o combate foram aprimorados, mas o jogo ainda prioriza a narrativa sobre a mecânica.</p>
    `,
    coverImage:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80",
    category: categories[0],
    tags: ["hellblade", "ninja theory", "review", "xbox"],
    author: authors[2],
    publishedAt: "2025-04-05T12:00:00Z",
    readingTime: 9,
    featured: false,
    views: 64200,
    rating: 8.5,
  },
];

// ------------------------------------------------------------------
// FEATURED GAMES - Jogos em destaque para o hero banner
// ------------------------------------------------------------------
export const featuredGames: FeaturedGame[] = [
  {
    id: "fg-1",
    title: "Elden Ring",
    subtitle: "Shadow of the Erdtree",              // Subtítulo/expansão
    backgroundImage:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1600&q=80",
    rating: 9.8,
    platform: ["PC", "PS5", "Xbox"],               // Plataformas disponíveis
    releaseDate: "2024-06-21",
    genre: "Action RPG",
    slug: "elden-ring-shadow-erdtree-review",       // Slug do artigo relacionado
  },
  {
    id: "fg-2",
    title: "GTA VI",
    subtitle: "Vice City Returns",
    backgroundImage:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1600&q=80",
    rating: 0,                                      // Ainda não lançou
    platform: ["PS5", "Xbox Series X"],
    releaseDate: "2025-09-26",
    genre: "Open World",
    slug: "gta-6-data-lancamento-confirmada",
  },
  {
    id: "fg-3",
    title: "VALORANT",
    subtitle: "Champions 2025",
    backgroundImage:
      "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=1600&q=80",
    rating: 9.2,
    platform: ["PC"],
    releaseDate: "2020-06-02",
    genre: "Tactical FPS",
    slug: "loud-campeao-mundial-valorant-2025",
  },
];

// ------------------------------------------------------------------
// HELPER - Retorna artigos em destaque (featured: true)
// ------------------------------------------------------------------
export const getFeaturedArticles = (): Article[] =>
  articles.filter((article) => article.featured); // Filtra apenas os destaques

// ------------------------------------------------------------------
// HELPER - Retorna artigos por categoria
// ------------------------------------------------------------------
export const getArticlesByCategory = (categorySlug: string): Article[] =>
  articles.filter((article) => article.category.slug === categorySlug);

// ------------------------------------------------------------------
// HELPER - Retorna artigo pelo slug
// ------------------------------------------------------------------
export const getArticleBySlug = (slug: string): Article | undefined =>
  articles.find((article) => article.slug === slug); // Busca por slug

// ------------------------------------------------------------------
// HELPER - Retorna artigos mais vistos (ordena por views)
// ------------------------------------------------------------------
export const getMostViewedArticles = (limit = 5): Article[] =>
  [...articles]
    .sort((a, b) => b.views - a.views)             // Ordena decrescente por views
    .slice(0, limit);                               // Limita o resultado
