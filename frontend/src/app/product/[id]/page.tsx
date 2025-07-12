import { notFound } from "next/navigation";
import ProductClient from "./ProductClient";
import { dummyProducts } from "@/lib/dummyData"; // Adjust path if needed

// --- Correct Prop Typing for a Next.js Page ---
type ProductDetailPageProps = {
  params: {
    id: string; // 'id' matches the folder name [id]
  };
};

// This is an async function to simulate a future data fetch
async function getProductById(id: string) {
  // In a real app, you would fetch this from a database:
  // e.g., const product = await db.products.findUnique({ where: { id } });
  const product = dummyProducts.find((p) => p.id === id);
  return product;
}

// Apply the correct type to the component's props
export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  // Destructure 'id' directly from the params object (no await needed)
  const { id } = params;
  
  const product = await getProductById(id);

  if (!product) {
    // If no product is found, trigger a 404 page
    return notFound();
  }

  return <ProductClient product={product} />;
}

// OPTIONAL: Generate static pages for each product at build time for better performance
export async function generateStaticParams() {
  // This function should return an array of objects
  // where each object has the `id` key matching the dynamic segment.
  return dummyProducts.map((product) => ({
    id: product.id,
  }));
}