import React, { useEffect, useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const NavbarMenu = [
  { id: 1, title: "Home", link: "/home", delay: "0.2" },
  { id: 2, title: "About", link: "/about", delay: "0.4" },
  { id: 3, title: "Section", link: "#section", delay: "0.6" },
  { id: 4, title: "Contact", link: "/contact", delay: "0.8" },
  { id: 5, title: "Settings", link: "/home", delay: "1" },
];

const slideRight = (delay) => ({
  hidden: { opacity: 0, x: -100 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, delay },
  },
});

const HomeNavbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    const user = JSON.parse(sessionStorage.getItem("existingUser"));
    setIsLoggedIn(token);
    if (user?.username) {
      setUsername(user.username);
    }
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("existingUser");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <nav className="bg-black text-white z-50 relative">
      <div className="container py-6 flex justify-between items-center">
        {/* Logo */}
        <motion.div variants={slideRight(0.1)} initial="hidden" animate="show">
          <Link to="/home">
            <img
              src="https://www.shutterstock.com/image-vector/initial-letter-d-b-logo-600nw-2345590361.jpg"
              alt="Logo"
              className="w-[100px]"
            />
          </Link>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:block">
          <ul className="flex items-center gap-4 md:ms-22">
            {NavbarMenu.map((item) => {
              const isScrollLink = item.link.startsWith("#");
              return (
                <motion.li
                  key={item.id}
                  variants={slideRight(item.delay)}
                  initial="hidden"
                  animate="show"
                >
                  {isScrollLink ? (
                    <ScrollLink
                      to={item.link.replace("#", "")}
                      smooth="easeInOutQuad"
                      duration={100}
                      offset={-70}
                      className="inline-block py-2 px-4 uppercase font-barlow font-semibold hover:scale-105 duration-300 cursor-pointer"
                    >
                      {item.title}
                    </ScrollLink>
                  ) : (
                    <Link
                      to={item.link}
                      className="inline-block py-2 px-4 uppercase font-barlow font-semibold hover:scale-105 duration-300 cursor-pointer"
                    >
                      {item.title}
                    </Link>
                  )}
                </motion.li>
              );
            })}
          </ul>
        </div>

        {/* Icons & Buttons */}
        <div className="flex items-center gap-4 md:-me-6">
          {/* User Info */}
          {isLoggedIn && (
            <motion.div
              variants={slideRight(1.2)}
              initial="hidden"
              animate="show"
              className="flex items-center gap-2"
            >
              <div className="relative group">
                <div
                  className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center text-lg font-bold cursor-pointer hover:ring-2 ring-green-300"
                  title={username}
                >
                  {username?.charAt(0).toUpperCase()}
                </div>
                <div className="absolute top-12 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded shadow-md opacity-0 group-hover:opacity-100 transition">
                  {username}
                </div>
              </div>
              <span className="hidden md:block text-sm text-gray-300 font-medium">
                Hello, {username.split(" ")[0]}
              </span>
            </motion.div>
          )}

          {/* Login / Logout */}
          <motion.div
            variants={slideRight(1.3)}
            initial="hidden"
            animate="show"
          >
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="hidden md:flex text-sm bg-red-600 px-3 py-1 rounded hover:bg-red-700 duration-300"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="text-sm bg-green-600 px-3 py-1 rounded hover:bg-green-700 duration-300"
              >
                Login
              </Link>
            )}
          </motion.div>
        </div>

        {/* Hamburger (Mobile) */}
        <div className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <MdClose className="text-4xl cursor-pointer" />
          ) : (
            <MdMenu className="text-4xl cursor-pointer" />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black px-6 pb-4">
          <ul className="flex flex-col gap-3">
            {NavbarMenu.map((item) => {
              const isScrollLink = item.link.startsWith("#");
              return (
                <li key={item.id} onClick={() => setMenuOpen(false)}>
                  {isScrollLink ? (
                    <ScrollLink
                      to={item.link.replace("#", "")}
                      smooth="easeInOutQuad"
                      duration={100}
                      offset={-70}
                      className="block py-2 px-4 uppercase font-semibold hover:text-green-400 cursor-pointer"
                    >
                      {item.title}
                    </ScrollLink>
                  ) : (
                    <Link
                      to={item.link}
                      className="block py-2 px-4 uppercase font-semibold hover:text-green-400"
                    >
                      {item.title}
                    </Link>
                  )}
                </li>
              );
            })}

            {/* Mobile Login / Logout */}
            <li>
              {isLoggedIn ? (
                <button
                  onClick={() => {
                    handleLogout();
                    setMenuOpen(false);
                  }}
                  className="w-full text-left py-2 px-4 bg-red-600 rounded hover:bg-red-700 duration-300"
                >
                  Logout
                </button>
              ) : (
                <Link
                  to="/login"
                  onClick={() => setMenuOpen(false)}
                  className="block py-2 px-4 bg-green-600 rounded hover:bg-green-700 duration-300"
                >
                  Login
                </Link>
              )}
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default HomeNavbar;
