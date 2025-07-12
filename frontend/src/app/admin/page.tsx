// src/app/admin/page.tsx
import Link from "next/link";

export default function AdminDashboard() {
  return (
    <div className="min-h-screen p-8 font-sans bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Admin Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Link href="/admin/listings">
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-md cursor-pointer">
            <h2 className="text-xl font-semibold">Manage Listings</h2>
            <p className="text-sm text-gray-500">Approve, reject or remove items</p>
          </div>
        </Link>
        <Link href="/admin/users">
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-md cursor-pointer">
            <h2 className="text-xl font-semibold">Manage Users</h2>
            <p className="text-sm text-gray-500">View registered users</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
