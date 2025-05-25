import React from "react";
import { motion } from "framer-motion";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

const slideUp = (delay) => ({
  hidden: {
    opacity: 0,
    y: 100,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: delay,
    },
  },
});
const Hero = () => {
  return (
    <section className="bg-black text-white relative" style={{marginTop:"-35px"}}>
      <div className="container grid grid-cols-1 md:grid-cols-3 h-[120vh] md:gap-32">
        {/* Brand Info */}
        <div className="flex flex-col justify-end">
          <div className="text-center md:text-left space-y-4 lg:max-w-[400px]">
            <motion.h1
              variants={slideUp(0.2)}
              initial="hidden"
              animate="show"
              className="text-3xl uppercase font-semibold"
            >
              <span className="text-purple-800 text-5xl">D</span>EV <span className="text-purple-800 text-5xl">B</span>ATTLE 1.0
            </motion.h1>
            <motion.div variants={slideUp(0.4)} initial="hidden" animate="show">
            <p className="text-xl">Welcome to <span className="text-purple-800 text-3xl">DevBattle</span> — your personal space to solve real coding problems, sharpen your logic, and prepare for developer interviews.</p>
            </motion.div>
            {/* select size section */}
            <motion.div
              variants={slideUp(0.6)}
              initial="hidden"
              animate="show"
              className="max-w-[250px] space-y-3 mx-auto md:mx-0"
            >
              
            </motion.div>
          </div>
        </div>
        {/* Hero Image section */}
        <div className="flex justify-center items-center relative -mt-40">
          <motion.img
            initial={{ opacity: 0, x: 100, rotate: 20 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            src="https://wallpaper.dog/large/20567146.png"
            alt=""
            className="max-w-[400px] xl:max-w-[500px] relative z-10 brightness-110 "
            style={{borderRadius:"10%"}}
          />

        </div>

        {/* Right Side Section */}
        <div className="flex flex-col justify-end items-center lg:px-8" >
          <motion.div
            variants={slideUp(0.6)}
            initial="hidden"
            animate="show"
            className="text-sm"
          >
           <p className="text-xl mt-10">
             Level up your coding skills today.
             Practice smarter, not harder — only on <br />
             <span className="text-purple-800 text-3xl">DevBattle.</span>
           </p>
          </motion.div>
          {/* left right icons */}
          <motion.div
            variants={slideUp(0.8)}
            initial="hidden"
            animate="show"
            className="flex gap-8 pt-6 relative z-20"
          >
            <div className="text-2xl rounded-full border border-white p-2 hover:bg-white hover:text-black duration-300">
              <FaArrowUp />
            </div>
            <div className="text-2xl rounded-full border border-white p-2 hover:bg-white hover:text-black duration-300">
              <FaArrowDown />
            </div>
          </motion.div>
        </div>
      </div>

      {/* bg text and white light section */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0 }}
        className="text-center text-[240px] md:text-[220px] lg:text-[250px] xl:text-[350px] font-bold font-anton absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white z-[2]"
      >
        CODE 
      </motion.p>
      <div className="h-[500px] w-[500px] bg-white/45 blur-3xl rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
    </section>
  );
};

export default Hero;
