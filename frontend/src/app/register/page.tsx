"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Recycle, User, Mail, Lock } from "lucide-react";

export default function Register() {
  const router = useRouter();

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    // Simulate registration success
    console.log("Registration form submitted:", form);
    alert("Registration successful! Welcome to ReWear.");
    router.push("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 via-white to-teal-50 p-6">
      {/* Floating Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-emerald-200/30 to-teal-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-green-200/30 to-emerald-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="bg-white/80 backdrop-blur-xl border border-emerald-100/50 p-8 sm:p-12 rounded-3xl shadow-2xl max-w-md w-full">
        <div className="flex flex-col items-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mb-4">
            <Recycle className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-emerald-700 to-teal-700 bg-clip-text text-transparent">
            Join ReWear Today
          </h2>
          <p className="text-gray-600 mt-2">Create an account to start swapping.</p>
        </div>

        {error && <p className="text-red-600 text-center text-sm mb-4 bg-red-100 p-3 rounded-lg">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Form fields with icons */}
          <div className="relative">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              name="fullName"
              placeholder="Full Name"
              value={form.fullName}
              onChange={handleChange}
              className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-all"
              required
            />
          </div>
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-all"
              required
            />
          </div>
          <div className="relative">
             <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              name="username"
              placeholder="Username"
              value={form.username}
              onChange={handleChange}
              className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-all"
              required
            />
          </div>
          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-all"
              required
            />
          </div>
          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={form.confirmPassword}
              onChange={handleChange}
              className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-all"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-3 rounded-full font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Create Account
          </button>
        </form>

        <p className="mt-6 text-sm text-center text-gray-600">
          Already have an account?{" "}
          <a href="/login" className="text-emerald-600 font-medium hover:underline">
            Login here
          </a>
        </p>
      </div>
    </div>
  );
}