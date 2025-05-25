import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AdminFooter from "./AdminFooter";
import AdminHeader from "./AdminHeader";

const ViewUsersPage = () => {
  const sampleUsers = [
    {
      id: "1",
      name: "Aashin KB",
      email: "aashin@example.com",
      role: "Admin",
      submissions: 120,
      streak: 15,
      rank: 1,
    },
    {
      id: "2",
      name: "Arjun R",
      email: "arjun@example.com",
      role: "User",
      submissions: 75,
      streak: 4,
      rank: 7,
    },
    {
      id: "3",
      name: "Divya M",
      email: "divya@example.com",
      role: "Moderator",
      submissions: 98,
      streak: 10,
      rank: 4,
    },
    {
      id: "4",
      name: "Meera S",
      email: "meera@example.com",
      role: "User",
      submissions: 55,
      streak: 2,
      rank: 12,
    },
    {
      id: "5",
      name: "Vivek V",
      email: "vivek@example.com",
      role: "User",
      submissions: 145,
      streak: 21,
      rank: 2,
    },
  ];

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("name");

  useEffect(() => {
    setTimeout(() => {
      setUsers(sampleUsers);
      setLoading(false);
    }, 500);
  }, []);

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  const filteredUsers = users
    .filter(
      (user) =>
        user.name.toLowerCase().includes(searchTerm) ||
        user.email.toLowerCase().includes(searchTerm)
    )
    .sort((a, b) => {
      if (sortBy === "name") return a.name.localeCompare(b.name);
      if (sortBy === "submissions") return b.submissions - a.submissions;
      if (sortBy === "streak") return b.streak - a.streak;
      return 0;
    });

  return (
    <>
      <AdminHeader />
      <div className="flex flex-col min-h-screen bg-gray-900 text-white">
        <main className="flex-grow px-6 py-10">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-center mb-6 text-white"
          >
            Registered Users
          </motion.h1>

          {/* Search and Sort Controls */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
            <input
              type="text"
              placeholder="Search by name or email"
              onChange={handleSearch}
              className="w-full md:w-1/3 px-4 py-2 rounded-lg bg-gray-900 text-white border border-violet-600 focus:outline-none focus:ring-2 focus:ring-violet-700"
            />

            <select
              onChange={handleSortChange}
              className="px-4 py-2 rounded-lg bg-gray-900 text-white border border-violet-600 focus:outline-none focus:ring-2 focus:ring-violet-700"
            >
              <option value="name">Sort by Name</option>
              <option value="submissions">Sort by Submissions</option>
              <option value="streak">Sort by Streak</option>
            </select>
          </div>

          {loading ? (
            <p className="text-center text-gray-400">Loading users...</p>
          ) : filteredUsers.length === 0 ? (
            <p className="text-center text-gray-400">No users found.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredUsers.map((user, index) => (
                <motion.div
                  key={user.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-800 p-6 rounded-2xl shadow-xl border border-violet-700 hover:shadow-violet-700 transition-all duration-300"
                >
                  <h3 className="text-xl font-semibold text-violet-300">
                    {user.name}
                  </h3>
                  <p className="text-gray-400">Email: {user.email}</p>
                  <p className="text-gray-400">Role: {user.role}</p>
                  <p className="text-gray-400">Submissions: {user.submissions}</p>
                  <p className="text-gray-400">Streak: {user.streak} 🔥</p>
                  <p className="text-gray-400">Leaderboard Rank: #{user.rank}</p>
                  <div className="mt-4 flex justify-end">
                    <button
                      onClick={() => deleteUser(user.id)}
                      className="bg-red-600 hover:bg-black hover:text-red-600 text-white px-4 py-2 rounded-lg cursor-pointer"
                    >
                      Delete
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </main>
        <AdminFooter />
      </div>
    </>
  );
};

export default ViewUsersPage;
