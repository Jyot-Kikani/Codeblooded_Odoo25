// app/dashboard/page.tsx
'use client';

import { useState } from 'react';

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState<'listings' | 'purchases'>('listings');

  return (
    <div className="min-h-screen p-8 sm:p-16 font-sans">
      {/* Profile Section */}
      <div className="flex items-center gap-6 mb-10">
        <img
          src="/images/item1.jpg"
          alt="User Avatar"
          className="w-20 h-20 rounded-full object-cover"
        />
        <div>
          <h2 className="text-2xl font-bold">John Doe</h2>
          <p className="text-gray-500">johndoe@example.com</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-6 mb-8">
        <button
          onClick={() => setActiveTab('listings')}
          className={`px-4 py-2 rounded-full font-medium transition ${
            activeTab === 'listings'
              ? 'bg-black text-white'
              : 'bg-gray-100 text-black hover:bg-gray-200'
          }`}
        >
          My Listings
        </button>
        <button
          onClick={() => setActiveTab('purchases')}
          className={`px-4 py-2 rounded-full font-medium transition ${
            activeTab === 'purchases'
              ? 'bg-black text-white'
              : 'bg-gray-100 text-black hover:bg-gray-200'
          }`}
        >
          My Purchases
        </button>
      </div>

      {/* Listings/Purchases Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {(activeTab === 'listings' ? dummyListings : dummyPurchases).map((item) => (
          <div
            key={item.id}
            className="border rounded-xl p-4 hover:shadow-lg transition bg-white"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover rounded-lg mb-3"
            />
            <h3 className="text-lg font-semibold">{item.name}</h3>
            <p className="text-gray-500 text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// Sample data
const dummyListings = [
  {
    id: 1,
    name: 'Denim Jacket',
    description: 'Lightly worn, size M',
    image: "/images/item1.jpg",
  },
  {
    id: 2,
    name: 'Floral Skirt',
    description: 'Perfect for summer',
    image: "/images/item1.jpg",
  },
];

const dummyPurchases = [
  {
    id: 3,
    name: 'Brown Boots',
    description: 'Pre-loved, size 8',
    image: 'https://placehold.co/400x300?text=Brown+Boots',
  },
  {
    id: 4,
    name: 'Striped Tee',
    description: 'Cotton, size L',
    image: 'https://placehold.co/400x300?text=Striped+Tee',
  },
];
