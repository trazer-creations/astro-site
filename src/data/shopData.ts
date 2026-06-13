export interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  description: string;
  image: string;
  features: string[];
}

export interface Category {
  name: string;
  slug: string;
  description: string;
  products: Product[];
}

export const shopData: Category[] = [
  {
    name: "Dark Chocolate",
    slug: "dark-chocolate",
    description: "Rich, intense, and sophisticated bars with high cocoa percentages.",
    products: [
      {
        id: "d1",
        name: "72% Ecuadorian Single Origin",
        slug: "72-ecuadorian-single-origin",
        price: 8.50,
        description: "A deeply complex bar featuring floral notes and a subtle earthy finish, crafted from premium Arriba Nacional cocoa beans.",
        image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80",
        features: ["Organic", "Vegan", "Fair Trade Certified"]
      },
      {
        id: "d2",
        name: "Sea Salt & Midnight Cocoa",
        slug: "sea-salt-midnight-cocoa",
        price: 9.00,
        description: "85% dark chocolate balances perfectly against hand-harvested French fleur de sel.",
        image: "https://images.unsplash.com/photo-1548907040-4baa42d10919?auto=format&fit=crop&w=600&q=80",
        features: ["Gluten-Free", "Vegan"]
      }
    ]
  },
  {
    name: "Artisan Truffles",
    slug: "artisan-truffles",
    description: "Hand-rolled ganache centers enrobed in velvet chocolate.",
    products: [
      {
        id: "t1",
        name: "Champagne & Raspberry Truffles",
        slug: "champagne-raspberry-truffles",
        price: 24.00,
        description: "A box of 12 exquisite truffles infused with fine French Champagne and a tart raspberry reduction.",
        image: "https://images.unsplash.com/photo-1549007994-cb92ca714503?auto=format&fit=crop&w=600&q=80",
        features: ["Contains Alcohol", "Gift Box Included"]
      }
    ]
  }
];