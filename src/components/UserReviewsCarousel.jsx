import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const reviews = [
  {
    name: "Arjun R",
    text: "Amazing platform! Solving problems here really improved my coding speed.",
    stars: 5,
  },
  {
    name: "Sneha M",
    text: "Loved the real-time duel feature, feels like LeetCode but better!",
    stars: 4,
  },
  {
    name: "Vikram T",
    text: "Smooth UI and great challenges. Looking forward to more updates!",
    stars: 5,
  },
  {
    name: "Divya K",
    text: "Perfect for interview prep. Loved the structured categories!",
    stars: 4,
  },
];

const UserReviewsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 4000); // 4 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="mt-4 px-6 ">
      <h2 className="text-2xl font-bold text-center text-white mb-4">User Reviews</h2>
      <div className="flex justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 p-6 rounded-2xl max-w-md shadow-xl w-full"
          >
            <div className="flex flex-col items-center text-gray-200">
              <FaQuoteLeft className="text-violet-500 text-3xl mb-3" />
              <p className="text-sm text-center italic mb-4">{reviews[currentIndex].text}</p>
              <div className="flex gap-1 text-yellow-400 mb-2">
                {[...Array(reviews[currentIndex].stars)].map((_, idx) => (
                  <FaStar key={idx} />
                ))}
              </div>
              <p className="text-sm font-semibold text-violet-300">{reviews[currentIndex].name}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default UserReviewsCarousel;
