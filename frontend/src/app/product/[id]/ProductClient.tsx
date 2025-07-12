"use client";

import { Product } from "./types";
import { ArrowLeft, Recycle, Star, Tag, User, Layers, Ruler } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ProductClient({ product }: { product: Product }) {
  const router = useRouter();

  const handleSwap = () => {
    alert("Swap request sent to the uploader!");
  };

  const handleRedeem = () => {
    const confirmed = confirm(
      `This item costs ${product.points} points. Are you sure you want to redeem it?`
    );
    if (confirmed) alert("Item successfully redeemed! It will be shipped to you soon.");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <button
          onClick={() => router.back()}
          className="flex items-center text-emerald-600 hover:text-emerald-800 font-medium mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Browse
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Image Gallery */}
          <div className="space-y-6 sticky top-28">
            {product.images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`${product.title} - view ${idx + 1}`}
                className="rounded-3xl shadow-xl w-full h-auto object-cover"
              />
            ))}
          </div>

          {/* Product Details */}
          <div className="flex flex-col gap-6 bg-white/60 p-8 rounded-3xl shadow-lg backdrop-blur-lg border border-emerald-100/50">
            <div>
              <span className="text-sm font-medium px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full">
                {product.category}
              </span>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mt-4">{product.title}</h1>
              <p className="text-gray-600 mt-4 text-lg leading-relaxed">{product.description}</p>
            </div>

            <div className="border-t border-emerald-200 my-2"></div>
            
            {/* Details Grid */}
            <div className="grid grid-cols-2 gap-x-6 gap-y-4 text-gray-700">
              <div className="flex items-center gap-3"><Ruler className="w-5 h-5 text-emerald-500" /> <strong>Size:</strong> {product.size}</div>
              <div className="flex items-center gap-3"><Star className="w-5 h-5 text-emerald-500" /> <strong>Condition:</strong> {product.condition}</div>
              <div className="flex items-center gap-3"><Layers className="w-5 h-5 text-emerald-500" /> <strong>Category:</strong> {product.category}</div>
              <div className="flex items-center gap-3"><User className="w-5 h-5 text-emerald-500" /> <strong>Uploader:</strong> {product.uploader}</div>
            </div>

            {/* Tags */}
            <div className="flex gap-2 flex-wrap items-center">
                <Tag className="w-5 h-5 text-emerald-500"/>
              {product.tags.map((tag) => (
                <span key={tag} className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-xs font-medium">
                  {tag}
                </span>
              ))}
            </div>
            
            <div className="border-t border-emerald-200 my-2"></div>


            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <button
                onClick={handleSwap}
                className="group flex-1 px-6 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-full font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center"
              >
                <Recycle className="w-5 h-5 mr-2" />
                Request a Swap
              </button>
              <button
                onClick={handleRedeem}
                className="group flex-1 px-6 py-4 border-2 border-emerald-600 text-emerald-700 rounded-full font-semibold hover:bg-emerald-50 transition-all duration-300 flex items-center justify-center"
              >
                <Star className="w-5 h-5 mr-2" />
                Redeem for {product.points} pts
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}