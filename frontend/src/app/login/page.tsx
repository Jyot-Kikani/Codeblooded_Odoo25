"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Recycle, User, Lock } from "lucide-react";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    // 🔐 Replace with actual auth logic. Using dummy values for now.
    if (username === "user" && password === "password") {
      alert("Login successful! Redirecting...");
      router.push("/"); // Redirect to landing page on successful login
    } else {
      setError("Invalid username or password. Please try again.");
    }
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
            Welcome Back
          </h2>
          <p className="text-gray-600 mt-2">Log in to continue your sustainable journey.</p>
        </div>

        {error && <p className="text-red-600 text-center text-sm mb-4 bg-red-100 p-3 rounded-lg">{error}</p>}

        <form onSubmit={handleLogin} className="space-y-5">
          <div className="relative">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Username (use 'user')"
              className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-all"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="password"
              placeholder="Password (use 'password')"
              className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-all"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-3 rounded-full font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Login
          </button>
        </form>

        <p className="mt-6 text-sm text-center text-gray-600">
          Don’t have an account?{" "}
          <a href="/register" className="text-emerald-600 font-medium hover:underline">
            Register here
          </a>
        </p>
      </div>
    </div>
  );
}