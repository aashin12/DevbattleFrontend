import React from "react";
import HomeNavbar from "./HomeNavbar";
import Footer from "./Footer";
import { motion } from "framer-motion";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const AboutSection = () => {
  return (
    <>
      <HomeNavbar />
      <section className="bg-gradient-to-b from-black via-gray-900 to-black text-white py-16 px-4 min-h-screen flex flex-col items-center -mb-20">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold mb-6 text-center"
        >
          About DevBattle
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-gray-300 max-w-3xl text-center mb-12"
        >
          DevBattle is a modern platform designed for coders to compete, learn, and grow through challenging problems and collaborative development. Whether you're a beginner or an expert, our goal is to create a community where coding is fun, impactful, and educational.
        </motion.p>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="w-full max-w-4xl mb-16 rounded-2xl overflow-hidden shadow-lg border-2 border-blue-600"
        >
          <Carousel
            autoPlay
            infiniteLoop
            showThumbs={false}
            showStatus={false}
            interval={3000}
            transitionTime={700}
            className="rounded-2xl"
          >
            <div>
              <img
                src="https://img.freepik.com/free-photo/esports-tournament_23-2151954734.jpg?ga=GA1.1.392089018.1733846059&semt=ais_hybrid&w=740"
                alt="Coding Event"
                className="object-cover h-96 w-full"
              />
            </div>
            <div>
              <img
                src="https://img.freepik.com/free-photo/it-professional-doing-multitasking-apartment-office-while-listening-music_482257-110683.jpg?ga=GA1.1.392089018.1733846059&semt=ais_hybrid&w=740"
                alt="Developers Team"
                className="object-cover h-96 w-full"
              />
            </div>
            <div>
              <img
                src="https://img.freepik.com/free-photo/it-specialist-checking-code-computer-dark-office-night_1098-18699.jpg?ga=GA1.1.392089018.1733846059&semt=ais_hybrid&w=740"
                alt="Technology"
                className="object-cover h-96 w-full"
              />
            </div>
            <div>
              <img
                src="https://img.freepik.com/free-photo/malware-breaking-into-database-screen_482257-77676.jpg?ga=GA1.1.392089018.1733846059&semt=ais_hybrid&w=740"
                alt="Coding Event"
                className="object-cover h-96 w-full"
              />
            </div>
          </Carousel>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="max-w-4xl text-gray-300 text-center space-y-6 px-4"
        >
          <p>
            Our platform hosts real-time code battles, practice problems across categories, leaderboards, and in-depth analytics to track your progress. We also offer special events and tournaments to showcase your skills and win recognition.
          </p>
          <p>
            DevBattle is built using the latest tech stack to ensure smooth performance, real-time collaboration, and engaging user experience. Join us in building the future of competitive programming and developer networking.
          </p>
        </motion.div>
      </section>
      <Footer />
    </>
  );
};

export default AboutSection;
