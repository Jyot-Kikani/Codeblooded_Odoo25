// src/app/admin/users/page.tsx

const dummyUsers = [
  {
    id: 1,
    name: "Aarya",
    email: "aarya@example.com",
    points: 50,
  },
  {
    id: 2,
    name: "Tina",
    email: "tina@example.com",
    points: 30,
  },
];

export default function ManageUsers() {
  return (
    <div className="min-h-screen p-8 font-sans bg-gray-50">
      <h1 className="text-3xl font-bold mb-6">Manage Users</h1>
      <table className="w-full border bg-white rounded-lg overflow-hidden shadow">
        <thead className="bg-gray-200 text-left">
          <tr>
            <th className="p-4">Name</th>
            <th className="p-4">Email</th>
            <th className="p-4">Points</th>
          </tr>
        </thead>
        <tbody>
          {dummyUsers.map((user) => (
            <tr key={user.id} className="border-t">
              <td className="p-4">{user.name}</td>
              <td className="p-4">{user.email}</td>
              <td className="p-4">{user.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
