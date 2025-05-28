import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import AdminHeader from "../components/AdminHeader";
import AdminFooter from "../components/AdminFooter";
import { getallusersApi } from "../services/allApi";

const LeaderboardPage = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("score");

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const res = await getallusersApi()
        if (res.data.success) {
          setUsers(res.data.user);
        } else {
          console.error("Failed to fetch users");
        }
      } catch (error) {
        console.error("Error fetching leaderboard data:", error);
      }
    };

    fetchLeaderboard();
  }, []);

  const filteredUsers = users
    .filter((user) => user.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => b[sortBy] - a[sortBy]);

  return (
    <>
      <AdminHeader />
      <div className="min-h-screen bg-gradient-to-br from-violet-950 via-purple-800 to-rose-700 px-6 py-10 text-white">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-extrabold text-center mb-8"
        >
          🏆 Leaderboard
        </motion.h1>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
          <input
            type="text"
            placeholder="Search by name..."
            className="w-full md:w-1/3 px-4 py-2 rounded-lg bg-violet-200 text-violet-900 placeholder-purple-800 focus:outline-none focus:ring-2 focus:ring-rose-400"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <select
            className="px-4 py-2 rounded-lg bg-violet-200 text-violet-900 focus:outline-none focus:ring-2 focus:ring-rose-400"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="score">Sort by Score</option>
            <option value="submissions">Sort by Submissions</option>
            <option value="streak">Sort by Streak</option>
          </select>
        </div>

        <div className="overflow-x-auto mb-10">
          <table className="w-full shadow-xl rounded-xl overflow-hidden bg-violet-800">
            <thead>
              <tr className="text-rose-200 bg-violet-700">
                <th className="py-3 px-6 text-left">Rank</th>
                <th className="py-3 px-6 text-left">Name</th>
                <th className="py-3 px-6 text-left">Score</th>
                <th className="py-3 px-6 text-left">Submissions</th>
                <th className="py-3 px-6 text-left">Streak</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user, index) => (
                <tr
                  key={user.id}
                  className={`transition duration-200 hover:bg-purple-600 ${
                    index % 2 === 0 ? "bg-purple-700" : "bg-purple-600"
                  }`}
                >
                  <td className="py-3 px-6">#{index + 1}</td>
                  <td className="py-3 px-6 font-medium">{user.name}</td>
                  <td className="py-3 px-6">{user.score}</td>
                  <td className="py-3 px-6">{user.submissions}</td>
                  <td className="py-3 px-6">🔥 {user.streak}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-purple-900 p-6 rounded-xl shadow-xl border border-purple-500">
          <h2 className="text-2xl font-bold text-rose-300 mb-4">Top Scores Chart</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={filteredUsers}
              layout="vertical"
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#A78BFA" />
              <XAxis type="number" stroke="#FDE68A" />
              <YAxis dataKey="name" type="category" stroke="#FDE68A" />
              <Tooltip
                contentStyle={{ backgroundColor: "#6B21A8", border: "none" }}
                itemStyle={{ color: "#FDE68A" }}
              />
              <Bar dataKey="score" fill="#F472B6" radius={[0, 10, 10, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <AdminFooter />
    </>
  );
};

export default LeaderboardPage;
