"use client";

import { Product } from "./types";

export default function ProductClient({ product }: { product: Product }) {
  const handleSwap = () => {
    alert("Swap request sent!");
  };

  const handleRedeem = () => {
    const confirmed = confirm(
      `This item costs ${product.points} points. Confirm redemption?`
    );
    if (confirmed) alert("Redemption successful!");
  };

  return (
    <div className="min-h-screen px-6 py-10 sm:px-20 font-sans">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Image Gallery */}
        <div className="space-y-4">
          {product.images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Image ${idx + 1}`}
              className="rounded-xl shadow-lg w-full"
            />
          ))}
        </div>

        {/* Product Details */}
        <div className="flex flex-col gap-6">
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <p className="text-gray-700">{product.description}</p>

          <div className="grid grid-cols-2 gap-4 text-sm text-gray-800">
            <div>
              <strong>Category:</strong> {product.category}
            </div>
            <div>
              <strong>Size:</strong> {product.size}
            </div>
            <div>
              <strong>Condition:</strong> {product.condition}
            </div>
            <div>
              <strong>Uploader:</strong> {product.uploader}
            </div>
          </div>

          <div className="flex gap-2 flex-wrap">
            {product.tags.map((tag) => (
              <span
                key={tag}
                className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs"
              >
                #{tag}
              </span>
            ))}
          </div>

          <div className="flex gap-4 mt-6">
            <button
              onClick={handleSwap}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-xl"
            >
              Swap Request
            </button>
            <button
              onClick={handleRedeem}
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-xl"
            >
              Redeem via Points ({product.points})
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
