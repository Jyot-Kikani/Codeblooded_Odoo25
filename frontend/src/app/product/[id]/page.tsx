import { notFound } from "next/navigation";
import ProductClient from "./ProductClient";
import { Product } from "./types";

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const products: Product[] = [
    {
      id: "1",
      title: "Blue Denim Jacket",
      description: "Stylish denim jacket in great condition.",
      category: "Men",
      size: "M",
      condition: "Good",
      tags: ["denim", "jacket"],
      images: [
        "https://placehold.co/500x300?text=Front",
        "https://placehold.co/500x300?text=Back",
      ],
      uploader: "alexwears",
      points: 40,
    },
    {
      id: "2",
      title: "Floral Summer Dress",
      description: "Breezy floral dress for sunny days.",
      category: "Women",
      size: "S",
      condition: "Like New",
      tags: ["floral", "summer"],
      images: [
        "https://placehold.co/500x300?text=Front+Dress",
        "https://placehold.co/500x300?text=Back+Dress",
      ],
      uploader: "emilythreads",
      points: 60,
    },
  ];

  const product = products.find((p) => p.id === id);
  if (!product) return notFound();

  return <ProductClient product={product} />;
}
