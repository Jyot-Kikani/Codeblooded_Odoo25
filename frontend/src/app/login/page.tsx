"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // 🔐 Replace with actual auth logic
    if (username === "user" && password === "password") {
      router.push("/landing");
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-emerald-100 via-white to-emerald-200 flex items-center justify-center px-4">
      <div className="bg-white/90 backdrop-blur-xl shadow-2xl rounded-3xl w-full max-w-md p-8 space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-emerald-700">ReWear</h1>
          <p className="text-gray-600">Welcome back! Please log in.</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {error && <p className="text-sm text-red-500">{error}</p>}

          <button
            type="submit"
            className="w-full bg-emerald-600 text-white py-3 rounded-xl font-semibold hover:bg-emerald-700 transition"
          >
            Login
          </button>
        </form>

        <p className="text-center text-sm text-gray-500">
          Don’t have an account?{" "}
          <a href="/register" className="text-emerald-600 font-medium hover:underline">
            Register
          </a>
        </p>
      </div>
    </div>
  );
}
