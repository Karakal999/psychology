export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  quantity: number;
}

export interface ProductFilters {
  [key: string]: unknown;
  category?: string;
  priceRange?: [number, number];
  search?: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface UserData {
  email: string;
  name: string;
  phone?: string;
  address?: string;
} 