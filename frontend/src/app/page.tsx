"use client";

import React, { useState, useEffect } from 'react';
import { ChevronRight, Sparkles, Recycle, Heart, ArrowRight } from 'lucide-react';
import { dummyProducts, stats, features } from '@/lib/dummyData'; // Import centralized data
import type { Product } from '@/lib/dummyData'; // Import the Product type

export default function LandingPage() {
  const [category, setCategory] = useState<Product['category'] | "All">("All");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set initial visibility for fade-in animations
    setIsVisible(true);
  }, []);

  const filteredItems = category === "All"
    ? dummyProducts
    : dummyProducts.filter((item) => item.category === category);

  const handleItemLike = (id: string) => {
    // This would typically update state or make an API call
    console.log(`Toggled like for item ${id}`);
    // You could add logic here to update the 'liked' status in the state
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      {/* Floating Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-emerald-200/20 to-teal-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-gradient-to-r from-green-200/20 to-emerald-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Navbar */}
      <nav className="relative z-50 flex items-center justify-between px-8 py-6 backdrop-blur-xl bg-white/80 border-b border-emerald-100/50 sticky top-0">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center">
            <Recycle className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-700 to-teal-700 bg-clip-text text-transparent">
            ReWear
          </h1>
        </div>
        <div className="hidden md:flex space-x-8 text-sm font-medium">
          <a href="/items" className="text-gray-700 hover:text-emerald-600 transition-colors duration-200 flex items-center group">
            Browse Items
            <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="/list" className="text-gray-700 hover:text-emerald-600 transition-colors duration-200 flex items-center group">
            List an Item
            <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="/login" className="px-6 py-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-full hover:from-emerald-700 hover:to-teal-700 transition-all duration-200 shadow-lg hover:shadow-xl">
            Login
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-4 overflow-hidden">
        <div className={`text-center max-w-5xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center px-4 py-2 bg-emerald-100 rounded-full text-emerald-800 text-sm font-medium mb-8">
            <Sparkles className="w-4 h-4 mr-2" />
            Join 50,000+ Sustainable Fashion Lovers
          </div>
          
          <h2 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-green-600 bg-clip-text text-transparent">
              Swap.
            </span>
            {' '}
            <span className="bg-gradient-to-r from-teal-600 via-green-600 to-emerald-600 bg-clip-text text-transparent">
              Save.
            </span>
            {' '}
            <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Sustain.
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            Transform your wardrobe while saving the planet. Exchange clothes directly
            or earn points in our sustainable fashion ecosystem.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a href="/register" className="group px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-full font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center">
              Start Swapping Today
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="/items" className="px-8 py-4 border-2 border-emerald-600 text-emerald-700 rounded-full font-semibold hover:bg-emerald-50 transition-all duration-300 flex items-center">
              Browse Items
              <ChevronRight className="w-5 h-5 ml-2" />
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-emerald-50 to-teal-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-800 mb-6">How ReWear Works</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Three simple ways to participate in the circular fashion economy
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-4">{feature.title}</h4>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Explore by Category
          </h3>
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            {["All", "Men", "Women", "Kids", "Accessories"].map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat as Product['category'] | 'All')}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  category === cat
                    ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg transform scale-105"
                    : "bg-white text-emerald-700 border-2 border-emerald-200 hover:border-emerald-400 hover:shadow-md"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Items */}
      <section className="pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className={`group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.images[0]} // Use the first image from the array
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <button
                    onClick={() => handleItemLike(item.id)}
                    className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all duration-200"
                  >
                    <Heart className={`w-5 h-5 ${item.liked ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} />
                  </button>
                  <div className="absolute bottom-4 left-4 px-3 py-1 bg-emerald-600 text-white text-sm font-medium rounded-full">
                    {item.points} pts
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-emerald-600 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 mb-4">
                    Size: {item.size} • {item.condition}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-emerald-600 font-medium px-3 py-1 bg-emerald-50 rounded-full">
                      {item.category} {/* Changed from item.type */}
                    </span>
                    <a href={`/product/${item.id}`} className="flex items-center text-emerald-600 hover:text-emerald-700 font-medium group">
                      View Details
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl font-bold mb-6">Ready to Make a Difference?</h3>
          <p className="text-xl opacity-90 mb-8">
            Join thousands of fashion lovers who are already making sustainable choices
          </p>
          <a href="/register" className="px-8 py-4 bg-white text-emerald-600 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
            Start Your Journey Today
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center">
              <Recycle className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold">ReWear</h1>
          </div>
          <p className="text-gray-400 mb-4">
            ♻️ Built with love at Odoo Hackathon 2025
          </p>
          <p className="text-gray-500 text-sm">
            Making sustainable fashion accessible to everyone
          </p>
        </div>
      </footer>
    </div>
  );
}