import React from "react";
import  Sidebar  from "../components/Sidebar";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from "recharts";
import { motion } from "framer-motion";
import AdminHeader from "../components/AdminHeader";
import AdminFooter from "../components/AdminFooter";
import UserReviewsCarousel from "../components/UserReviewsCarousel";
import PlatformStatus from "../components/PlatformStatus";

const barData = [
  { name: "Users", total: 320 },
  { name: "Questions", total: 180 },
  { name: "Submissions", total: 400 },
  { name: "Feedbacks", total: 90 },
];

const pieData = [
  { name: "Positive", value: 70 },
  { name: "Neutral", value: 20 },
  { name: "Negative", value: 10 },
];

const colors = ["#800080", "#6b7280", "#f43f5e"];

const AdminDashboard = () => {
  return (
    <>
    <AdminHeader/>
    <div className="flex bg-gray-950 text-white min-h-screen ">
      <Sidebar />

      <div className="flex-1 p-6 space-y-6">
        <motion.h1 className="text-3xl font-bold text-white" initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
          Admin Dashboard
        </motion.h1>

        <motion.div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <div className="bg-gray-800 p-4 rounded-2xl shadow-md border border-violet-700 hover:shadow-violet-700 transition duration-300">
            <h2 className="text-lg font-semibold text-gray-200">Activity Overview</h2>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={barData}>
                <XAxis dataKey="name" stroke="#c084fc" />
                <YAxis stroke="#c084fc" />
                <Tooltip />
                <Legend />
                <Bar dataKey="total" fill="#3bb" barSize={30} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-gray-800 p-4 rounded-2xl shadow-md border border-violet-700 hover:shadow-violet-700 transition duration-300">
            <h2 className="text-lg font-semibold text-gray-200">User Sentiment</h2>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie data={pieData} dataKey="value" cx="50%" cy="50%" outerRadius={60} label>
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-gray-800 p-4 rounded-2xl shadow-md border border-violet-700 hover:shadow-violet-700 transition duration-300">
            <h2 className="text-lg font-semibold text-gray-200"> Monthly Growth</h2>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={barData}>
                <XAxis dataKey="name" stroke="#a78bfa" />
                <YAxis stroke="#a78bfa" />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="total" stroke="#3bb" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <div className="bg-gray-800  rounded-2xl shadow-md border border-violet-700 hover:shadow-violet-700 transition duration-300">
            <UserReviewsCarousel/>
            </div>

          <PlatformStatus/>
        </div>
      </div>
    </div>
    <AdminFooter/>
    </>
  );
};

export default AdminDashboard;
