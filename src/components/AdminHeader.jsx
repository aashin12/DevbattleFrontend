// AdminHeader.jsx
import { motion } from "framer-motion";
import { MdAdminPanelSettings } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function AdminHeader() {
  const navigate = useNavigate();
  const [adminName, setAdminName] = useState("Admin");

  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem("existingUser"));
    if (user?.username) {
      setAdminName(user.username);
    }
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("existingUser");
    navigate("/login");
  };

  return (
    <motion.header
      className="flex flex-col md:flex-row items-center justify-between gap-4 px-6 py-4 bg-gradient-to-r from-gray-900 via-gray-800 to-violet-900 shadow-lg"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Link to="/admin">
        <div className="flex items-center gap-4">
          <img
            src="https://www.shutterstock.com/image-vector/initial-letter-d-b-logo-600nw-2345590363.jpg"
            alt="Logo"
            className="w-14 h-14 rounded-full border-2 border-violet-400"
          />
          <h1 className="text-2xl md:text-3xl font-extrabold text-white tracking-wide">
            DevBattle
          </h1>
        </div>
      </Link>

      <div className="flex flex-wrap items-center gap-3">
        <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
        <MdAdminPanelSettings className="text-3xl text-white" />
        <span className="text-white font-semibold hidden sm:block">
          {adminName} (Online)
        </span>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="ml-3 bg-red-600 text-sm text-white px-3 py-1 rounded hover:bg-red-700 duration-300 cursor-pointer"
        >
          Logout
        </button>
      </div>
    </motion.header>
  );
}
