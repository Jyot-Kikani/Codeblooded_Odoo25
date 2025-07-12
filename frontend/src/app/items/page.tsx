"use client";

import { useState } from "react";
import { dummyProducts } from "@/lib/dummyData";
import type { Product } from "@/lib/dummyData";
import { ArrowRight, Heart, Search } from "lucide-react";

export default function ItemsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState<Product['category'] | "All">("All");

  const filteredItems = dummyProducts.filter((item) => {
    const matchesCategory = category === "All" || item.category === category;
    const matchesSearch =
      searchTerm === "" ||
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header and Filters */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-700 to-teal-700 bg-clip-text text-transparent mb-4">
            Browse All Items
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover pre-loved treasures and find your next favorite piece.
          </p>
        </div>

        {/* Search and Category Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-12 sticky top-4 bg-white/50 backdrop-blur-lg p-4 rounded-2xl z-40">
           <div className="relative flex-grow">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by title, tag (e.g., 'vintage', 'dress')..."
                className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-all"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          <div className="flex flex-wrap gap-2 justify-center">
            {(["All", "Men", "Women", "Kids", "Accessories"] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-5 py-2 rounded-full font-medium transition-all text-sm duration-300 ${
                  category === cat
                    ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md"
                    : "bg-white text-emerald-700 border border-emerald-200 hover:border-emerald-400"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredItems.length === 0 ? (
            <p className="text-gray-600 col-span-full text-center text-lg">
              No items match your search. Try a different filter!
            </p>
          ) : (
            filteredItems.map((item) => (
              <div
                key={item.id}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.images[0]}
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <button className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white">
                    <Heart className={`w-5 h-5 ${item.liked ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} />
                  </button>
                  <div className="absolute bottom-4 left-4 px-3 py-1 bg-emerald-600 text-white text-sm font-medium rounded-full">
                    {item.points} pts
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-emerald-600 truncate">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 mb-4 text-sm">
                    Size: {item.size} • {item.condition}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-emerald-600 font-medium px-3 py-1 bg-emerald-50 rounded-full">
                      {item.category}
                    </span>
                    <a href={`/product/${item.id}`} className="flex items-center text-emerald-600 hover:text-emerald-700 font-medium group/link">
                      Details
                      <ArrowRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}