// src/app/landing/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";


const dummyItems = [
  {
    id: 1,
    title: "Floral Summer Dress",
    image: "/images/item1.jpg",
    size: "M",
    condition: "Like New",
    type: "Women",
  },
  {
    id: 2,
    title: "Denim Jacket",
    image: "/images/item1.jpg",
    size: "L",
    condition: "Used",
    type: "Men",
  },
  {
    id: 3,
    title: "Kid’s Raincoat",
    image: "/images/item1.jpg",
    size: "S",
    condition: "Good",
    type: "Kids",
  },
];

export default function LandingPage() {
  const [category, setCategory] = useState("All");

  const filteredItems = category === "All"
    ? dummyItems
    : dummyItems.filter((item) => item.type === category);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-green-50">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-4 shadow-md bg-white sticky top-0 z-50">
        <h1 className="text-2xl font-bold text-green-700">ReWear</h1>
        <div className="space-x-6 text-sm text-gray-700 font-medium">
          <Link href="/landing" className="hover:text-green-600">Home</Link>
          <Link href="/items" className="hover:text-green-600">Browse Items</Link>
          <Link href="/list" className="hover:text-green-600">List an Item</Link>
          <Link href="/login" className="hover:text-green-600">Login</Link>
        </div>
      </nav>

      {/* Hero Banner */}
      <section className="relative h-[60vh] bg-green-100 flex flex-col justify-center items-center text-center px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-green-800 leading-snug">Swap. Save. Sustain.</h2>
        <p className="mt-3 text-lg text-gray-600 max-w-xl">Join the movement to reduce fashion waste by exchanging clothes directly or through points.</p>
        <div className="mt-6 space-x-4">
          <Link href="/register" className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700">Start Swapping</Link>
          <Link href="/items" className="px-6 py-3 border border-green-600 text-green-700 rounded-lg hover:bg-green-100">Browse Items</Link>
        </div>
      </section>

      {/* Categories */}
      <section className="mt-12 px-6 text-center">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Filter by Category</h3>
        <div className="flex flex-wrap gap-3 justify-center">
          {["All", "Men", "Women", "Kids", "Accessories"].map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-4 py-2 rounded-full border ${
                category === cat
                  ? "bg-green-600 text-white"
                  : "bg-white text-green-700 border-green-600 hover:bg-green-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Featured Items */}
      <section className="mt-10 px-6 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {filteredItems.map((item) => (
          <div key={item.id} className="bg-white shadow-lg rounded-xl overflow-hidden">
            <Image
              src={item.image}
              alt={item.title}
              width={400}
              height={300}
              className="object-cover w-full h-64"
            />
            <div className="p-4">
              <h4 className="text-lg font-semibold text-green-800">{item.title}</h4>
              <p className="text-sm text-gray-600">Size: {item.size} · {item.condition}</p>
              <div className="mt-2">
                <Link
                  href={`/items/${item.id}`}
                  className="text-sm text-green-700 font-medium hover:underline"
                >
                  View Details →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="mt-20 py-8 text-center text-sm text-gray-500">
        ♻️ ReWear – Built at Odoo Hackathon 2025
      </footer>
    </div>
  );
}
