export type Category = "Earrings" | "Bangles" | "Necklaces" | "Rings";

export type Product = {
  id: number;
  name: string;
  price: number;
  category: Category;
  isNew: boolean;
  inStock: boolean;
};

export const products: Product[] = [
  { id: 1, name: "Gold Jhumka", price: 250, category: "Earrings", isNew: true, inStock: true },
  { id: 2, name: "Kundan Chandbali", price: 380, category: "Earrings", isNew: true, inStock: true },
  { id: 3, name: "Bridal Bangle Set", price: 450, category: "Bangles", isNew: true, inStock: true },
  { id: 4, name: "Antique Kada", price: 320, category: "Bangles", isNew: false, inStock: true },
  { id: 5, name: "Temple Necklace", price: 690, category: "Necklaces", isNew: true, inStock: true },
  { id: 6, name: "Pearl Choker", price: 520, category: "Necklaces", isNew: false, inStock: false },
  { id: 7, name: "Stone Adjustable Ring", price: 150, category: "Rings", isNew: false, inStock: true },
  { id: 8, name: "Peacock Ring", price: 180, category: "Rings", isNew: true, inStock: true },
];