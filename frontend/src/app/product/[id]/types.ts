// src/app/product/[id]/types.ts

export interface Product {
  id: string;
  title: string;
  description: string;
  category: string;
  size: string;
  condition: string;
  tags: string[];
  images: string[];
  uploader: string;
  points: number;
}
