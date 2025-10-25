export interface Movie {
  id: number;
  title: string;
  category: string;
  rating: number;
  image: string;
}

export const movies: Movie[] = [
  {
    id: 1,
    title: "O Poderoso Chefão",
    category: "Drama",
    rating: 9.2,
    image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&h=600&fit=crop"
  },
  {
    id: 2,
    title: "Interestelar",
    category: "Ficção Científica",
    rating: 8.6,
    image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=400&h=600&fit=crop"
  },
  {
    id: 3,
    title: "Parasita",
    category: "Suspense",
    rating: 8.5,
    image: "https://images.unsplash.com/photo-1594908900066-3f47337549d8?w=400&h=600&fit=crop"
  },
  {
    id: 4,
    title: "Vingadores: Ultimato",
    category: "Ação",
    rating: 8.4,
    image: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=400&h=600&fit=crop"
  },
  {
    id: 5,
    title: "Coringa",
    category: "Drama",
    rating: 8.4,
    image: "https://images.unsplash.com/photo-1512070679279-8988d32161be?w=400&h=600&fit=crop"
  },
  {
    id: 6,
    title: "A Origem",
    category: "Ficção Científica",
    rating: 8.8,
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=600&fit=crop"
  },
  {
    id: 7,
    title: "Toy Story 4",
    category: "Animação",
    rating: 7.7,
    image: "https://images.unsplash.com/photo-1595769816263-9b910be24d5f?w=400&h=600&fit=crop"
  },
  {
    id: 8,
    title: "John Wick 3",
    category: "Ação",
    rating: 7.4,
    image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=400&h=600&fit=crop"
  },
  {
    id: 9,
    title: "Pantera Negra",
    category: "Ação",
    rating: 7.3,
    image: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=400&h=600&fit=crop"
  },
  {
    id: 10,
    title: "Viva - A Vida é uma Festa",
    category: "Animação",
    rating: 8.4,
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&h=600&fit=crop"
  },
  {
    id: 11,
    title: "It: A Coisa",
    category: "Terror",
    rating: 7.3,
    image: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=400&h=600&fit=crop"
  },
  {
    id: 12,
    title: "Blade Runner 2049",
    category: "Ficção Científica",
    rating: 8.0,
    image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400&h=600&fit=crop"
  },
  {
    id: 13,
    title: "La La Land",
    category: "Romance",
    rating: 8.0,
    image: "https://images.unsplash.com/photo-1514306191717-452ec28c7814?w=400&h=600&fit=crop"
  },
  {
    id: 14,
    title: "Dunkirk",
    category: "Guerra",
    rating: 7.8,
    image: "https://images.unsplash.com/photo-1482160549825-59d1b23cb208?w=400&h=600&fit=crop"
  },
  {
    id: 15,
    title: "Get Out",
    category: "Terror",
    rating: 7.7,
    image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=400&h=600&fit=crop"
  },
  {
    id: 16,
    title: "Mad Max: Estrada da Fúria",
    category: "Ação",
    rating: 8.1,
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&h=600&fit=crop"
  }
];

export const categories = [
  "Todos",
  "Ação",
  "Drama",
  "Ficção Científica",
  "Suspense",
  "Animação",
  "Terror",
  "Romance",
  "Guerra"
];
