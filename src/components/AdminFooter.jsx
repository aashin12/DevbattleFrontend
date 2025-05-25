import { motion } from "framer-motion";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <motion.footer
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-300 py-8 mt-auto px-6"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left: About */}
        <div>
          <h2 className="text-2xl font-semibold mb-2 text-violet-400">About DevBattle</h2>
          <p className="text-lg">
            DevBattle is a MERN-based code practice platform to improve your competitive programming skills.
            Compete, Learn, and Level Up.
          </p>
        </div>

        {/* Middle: Links */}
        <div className="md:ms-35">
          <h2 className="text-2xl font-semibold mb-2 text-violet-400">Quick Links</h2>
          <ul className="space-y-1 text-lg">
            <li><a href="/admin" className="hover:text-violet-400">Dashboard</a></li>
            <li><a href="/admin/questions" className="hover:text-violet-400">Questions</a></li>
            <li><a href="/admin/users" className="hover:text-violet-400">Users</a></li>
            <li><a href="/admin/leaderboard" className="hover:text-violet-400">Leaderboard</a></li>
          </ul>
        </div>

        {/* Right: Socials */}
        <div className="md:ms-20">
          <h2 className="text-2xl font-semibold mb-2 text-violet-400">Connect With Us</h2>
          <div className="flex space-x-4 text-2xl">
            <a href="#" className="hover:text-violet-400"><FaFacebook /></a>
            <a href="#" className="hover:text-violet-400"><FaTwitter /></a>
            <a href="#" className="hover:text-violet-400"><FaGithub /></a>
            <a href="#" className="hover:text-violet-400"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      <div className="mt-6 -mb-6 text-center text-lg text-gray-500">
        &copy; {new Date().getFullYear()} DevBattle Admin. All rights reserved.
      </div>
    </motion.footer>
  );
};

export default Footer;
