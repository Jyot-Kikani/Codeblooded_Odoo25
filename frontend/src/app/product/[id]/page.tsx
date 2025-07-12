import { notFound } from "next/navigation";
import ProductClient from "./ProductClient";
import { dummyProducts } from "@/lib/dummyData"; // Adjust path if needed

// This is an async function to simulate a future data fetch
async function getProductById(id: string) {
  // In a real app, you would fetch this from a database:
  // e.g., const product = await db.products.findUnique({ where: { id } });
  const product = dummyProducts.find((p) => p.id === id);
  return product;
}

export default async function ProductDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  const product = await getProductById(id);

  if (!product) {
    return notFound();
  }

  return <ProductClient product={product} />;
}

// OPTIONAL: Generate static pages for each product at build time for better performance
export async function generateStaticParams() {
  return dummyProducts.map((product) => ({
    id: product.id,
  }));
}