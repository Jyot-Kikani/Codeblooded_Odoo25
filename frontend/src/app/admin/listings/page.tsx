// src/app/admin/listings/page.tsx
import Link from "next/link";

const dummyItems = [
  {
    id: 1,
    title: "Blue Denim Jacket",
    uploader: "Aarya",
    status: "Pending",
  },
  {
    id: 2,
    title: "Red Hoodie",
    uploader: "Tina",
    status: "Approved",
  },
];

export default function ManageListings() {
  return (
    <div className="min-h-screen p-8 font-sans bg-gray-50">
      <h1 className="text-3xl font-bold mb-6">Manage Listings</h1>
      <table className="w-full border bg-white rounded-lg overflow-hidden shadow">
        <thead className="bg-gray-200 text-left">
          <tr>
            <th className="p-4">Title</th>
            <th className="p-4">Uploader</th>
            <th className="p-4">Status</th>
            <th className="p-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {dummyItems.map((item) => (
            <tr key={item.id} className="border-t">
              <td className="p-4">{item.title}</td>
              <td className="p-4">{item.uploader}</td>
              <td className="p-4">{item.status}</td>
              <td className="p-4 space-x-2">
                <button className="bg-green-600 text-white px-3 py-1 rounded">Approve</button>
                <button className="bg-red-500 text-white px-3 py-1 rounded">Delete</button>
                <Link href={`/product/${item.id}`} className="text-blue-600 underline">
                  View
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
