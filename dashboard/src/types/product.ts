export interface Product {
  id: string;
  name: string;
  nameAr?: string;
  price: number;
  cost: number;
  sku: string;
  barcode?: string;
  category: string;
  stock: number;
  unit: string;
  image?: string;
  isActive: boolean;
  createdAt: string;
}

export interface Category {
  id: string;
  name: string;
  nameAr?: string;
  color: string;
  productCount: number;
}
