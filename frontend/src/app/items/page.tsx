// src/app/items/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const mockItems = [
  {
    id: 1,
    title: "Floral Summer Dress",
    description: "Light and breezy for hot summer days.",
    image: "/images/item1.jpg",
    size: "M",
    tags: ["Women", "Dress"],
    uploader: "Samantha",
  },
  {
    id: 2,
    title: "Denim Jacket",
    description: "A classic blue jacket, slightly worn.",
    image: "/images/item1.jpg",
    size: "L",
    tags: ["Men", "Outerwear"],
    uploader: "Rahul",
  },
  {
    id: 3,
    title: "Kid’s Raincoat",
    description: "Waterproof and colorful raincoat for kids.",
    image: "/images/item1.jpg",
    size: "S",
    tags: ["Kids", "Rainwear"],
    uploader: "Ananya",
  },
];

export default function ItemsPage() {
  const [search, setSearch] = useState("");

  const filteredItems = mockItems.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase()) ||
    item.tags.some(tag => tag.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-lime-50 px-6 py-10">
      {/* Heading + Search */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Browse All Items</h1>
        <input
          type="text"
          placeholder="Search by title or tag..."
          className="px-4 py-3 w-full max-w-md rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Items Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {filteredItems.length === 0 ? (
          <p className="text-gray-500 col-span-full text-center">No items match your search.</p>
        ) : (
          filteredItems.map((item) => (
            <Link
              key={item.id}
              href={`/items/${item.id}`}
              className="block bg-white rounded-xl shadow hover:shadow-md transition duration-200 overflow-hidden"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={400}
                height={300}
                className="w-full h-64 object-cover"
              />
              <div className="p-4 space-y-2">
                <h2 className="text-lg font-semibold text-green-800">{item.title}</h2>
                <p className="text-sm text-gray-600">{item.description}</p>
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span>Size: {item.size}</span>
                  <span>Uploader: {item.uploader}</span>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {item.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))
        )}
      </div>

      <footer className="mt-20 py-6 text-center text-sm text-gray-500">
        🧺 Total Items: {filteredItems.length}
      </footer>
    </div>
  );
}
