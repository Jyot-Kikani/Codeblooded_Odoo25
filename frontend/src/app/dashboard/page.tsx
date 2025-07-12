'use client';

import { useState } from 'react';
import { dummyProducts } from '@/lib/dummyData';
import { ArrowRight, Edit, Layers, Package, User } from 'lucide-react';

// Simulate data for the logged-in user
const user = {
  name: 'Sarah Styles',
  email: 'sarah.styles@rewear.com',
  avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop',
  // Items this user has uploaded
  listings: dummyProducts.filter(p => p.uploader === 'sarahstyles' || p.uploader === 'chicfinds'),
  // Items this user has acquired
  swaps: dummyProducts.filter(p => p.id === '2' || p.id === '6'),
};

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState<'listings' | 'swaps'>('listings');

  const itemsToShow = activeTab === 'listings' ? user.listings : user.swaps;

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 p-6 sm:p-10">
      <div className="max-w-7xl mx-auto">
        {/* Profile Header */}
        <div className="flex flex-col sm:flex-row items-center gap-6 mb-12 bg-white/60 p-8 rounded-3xl shadow-lg backdrop-blur-lg border border-emerald-100/50">
          <img
            src={user.avatar}
            alt="User Avatar"
            className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
          />
          <div className="text-center sm:text-left">
            <h2 className="text-3xl font-bold text-gray-800">{user.name}</h2>
            <p className="text-gray-500 flex items-center justify-center sm:justify-start gap-2 mt-1">
                <User className="w-4 h-4" /> {user.email}
            </p>
          </div>
          <button className="sm:ml-auto mt-4 sm:mt-0 flex items-center gap-2 px-5 py-2 bg-white text-emerald-700 border-2 border-emerald-200 rounded-full font-medium hover:border-emerald-400 transition-all">
            <Edit className="w-4 h-4" /> Edit Profile
          </button>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-4 justify-center mb-10">
          <button
            onClick={() => setActiveTab('listings')}
            className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
              activeTab === 'listings'
                ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg transform scale-105"
                : "bg-white text-emerald-700 border-2 border-emerald-200 hover:border-emerald-400 hover:shadow-md"
            }`}
          >
            <Layers className="w-5 h-5" /> My Listings ({user.listings.length})
          </button>
          <button
            onClick={() => setActiveTab('swaps')}
            className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
              activeTab === 'swaps'
                ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg transform scale-105"
                : "bg-white text-emerald-700 border-2 border-emerald-200 hover:border-emerald-400 hover:shadow-md"
            }`}
          >
            <Package className="w-5 h-5" /> My Swaps ({user.swaps.length})
          </button>
        </div>

        {/* Listings/Purchases Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {itemsToShow.map((item) => (
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
                <div className="absolute bottom-4 left-4 px-3 py-1 bg-emerald-600 text-white text-sm font-medium rounded-full">
                  {item.points} pts
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-emerald-600 truncate">
                  {item.title}
                </h4>
                <p className="text-gray-600 mb-4 text-sm">
                  {item.condition}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-emerald-600 font-medium px-3 py-1 bg-emerald-50 rounded-full">
                    {item.category}
                  </span>
                  <a href={`/product/${item.id}`} className="flex items-center text-emerald-600 hover:text-emerald-700 font-medium group/link">
                    View
                    <ArrowRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        {itemsToShow.length === 0 && (
             <div className="col-span-full text-center py-16 bg-white/50 rounded-2xl">
                <h3 className="text-xl font-semibold text-gray-700">Nothing here yet!</h3>
                <p className="text-gray-500 mt-2">
                    {activeTab === 'listings' ? 'Time to list your first item.' : 'Go on, find something to swap!'}
                </p>
             </div>
        )}
      </div>
    </div>
  );
}