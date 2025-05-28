
import React from "react";
import HomeNavbar from "./HomeNavbar";
import Footer from "./Footer";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";


const ContactSection = () => {
  return (
    <>
      <HomeNavbar />
      <section
        id="contact"
        className="bg-gradient-to-b from-black via-gray-900 to-black text-white py-16 px-4 min-h-screen flex flex-col items-center -mb-20"
      >
        {/* Logo */}
        <img
          src="https://www.shutterstock.com/image-vector/initial-letter-d-b-logo-600nw-2345590361.jpg"
          alt="DevBattle Logo"
          className="w-[100px] mb-4 rounded-lg shadow-lg"
        />

        {/* Heading */}
        <h2 className="text-4xl font-bold mb-2 text-center">Get In Touch</h2>
        <p className="text-gray-300 mb-12 text-center max-w-xl">
          Have questions, suggestions, or feedback? We'd love to hear from you.
        </p>

        {/* Contact + Form Container */}
        <div className="flex flex-col lg:flex-row gap-12 w-full max-w-6xl justify-between">
          {/* Contact Info */}

          <div className="flex-1 text-center lg:text-left space-y-4 bg-gray-800 bg-opacity-40 p-6 rounded-2xl shadow-md border border-purple-700">
            <h3 className="text-3xl font-semibold mb-4">Contact Details</h3>

            <div className="space-y-5 text-gray-300">
              <p><span className="font-semibold text-white">📧 Email:</span> support@devbattle.com</p>
              <p><span className="font-semibold text-white">📞 Phone:</span> +91 12345 67890</p>
              <p><span className="font-semibold text-white">📍 Address:</span> Ernakulam, Kerala</p>
              <p><span className="font-semibold text-white">🕐 Support Hours:</span> Mon - Fri, 9:00 AM - 6:00 PM</p>
              <p><span className="font-semibold text-white">📨 Business Inquiries:</span> business@devbattle.com</p>
            </div>

            {/* Social Media */}
            <div className="pt-10">
              <h4 className="text-3xl font-semibold mb-4 text-white">Follow Us</h4>
              <div className="flex justify-center lg:justify-start gap-4 text-4xl text-violet-400">
                <a href="https://github.com/" target="_blank" rel="noreferrer" className="hover:text-white">
                  <FaGithub />
                </a>
                <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="hover:text-white ">
                  <FaLinkedin />
                </a>
                <a href="https://twitter.com/" target="_blank" rel="noreferrer" className="hover:text-white">
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>

          {/* Feedback Form */}
          <form className="flex-1 bg-gray-900 bg-opacity-60 p-8 rounded-2xl shadow-2xl space-y-6 border border-purple-700">
            <h3 className="text-3xl font-semibold text-center mb-2">Send Feedback</h3>

            <div>
              <label className="block text-sm mb-1">Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-violet-500"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-violet-500"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Message</label>
              <textarea
                className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white h-32 resize-none focus:outline-none focus:ring-2 focus:ring-violet-500"
                placeholder="Write your feedback..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 rounded-lg bg-violet-600 hover:bg-violet-700 transition duration-300 font-semibold"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ContactSection;
