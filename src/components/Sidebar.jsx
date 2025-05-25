import { Home, PlusSquare, Users, BarChart3, LayoutDashboard } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const navLinks = [
  { name: 'Dashboard', icon: <LayoutDashboard />, to: '/admin' },
  { name: 'View Questions', icon: <Home />, to: '/admin/view-questions' },
  { name: 'Add Question', icon: <PlusSquare />, to: '/admin/add-question' },
  { name: 'View Users', icon: <Users />, to: '/admin/view-users' },
  { name: 'Leaderboard', icon: <BarChart3 />, to: '/admin/leaderboard' },
];

export const Sidebar = () => {
  return (
    <aside className="w-64 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white p-4 shadow-xl border-r border-gray-700">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-3xl font-bold text-violet-400 mb-6 mt-4"> Admin Control</div>
        <nav className="space-y-3">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.to}
              className="flex items-center gap-3 px-4 py-2 rounded-xl hover:bg-violet-700 transition-colors"
            >
              <span className="text-violet-300">{link.icon}</span>
              <span className="text-white font-medium">{link.name}</span>
            </Link>
          ))}
        </nav>

        <div className="mt-10 border-t border-gray-600 pt-4 text-sm text-gray-400">
          <p className="mb-2">👨‍💻 Built by Aashin KB</p>
        </div>
      </motion.div>
    </aside>
  );
};

export default Sidebar;
