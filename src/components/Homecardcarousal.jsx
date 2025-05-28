import React, { useEffect, useState } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const cards = [
  {
    id: 1,
    name: "Arrays",
    image: "https://img.freepik.com/free-vector/yellow-electronic-capital-letters-alphabet-black-airport-board-realistic-composition-numbers-illustration_1284-31180.jpg?ga=GA1.1.392089018.1733846059&semt=ais_hybrid&w=740",
    description: "Foundation of data structures, used for storage and iteration",
  },
  {
    id: 2,
    name: "Strings",
    image: "https://img.freepik.com/free-photo/3d-abstract-flow-background-with-rays-cyber-dots_1048-11957.jpg?ga=GA1.1.392089018.1733846059&semt=ais_hybrid&w=740",
    description: "Deals with manipulation, parsing, and pattern matching",
  },
  {
    id: 3,
    name: "LinkedLists",
    image: "https://img.freepik.com/free-photo/flat-lay-network-concept-with-thread_23-2148999217.jpg?ga=GA1.1.392089018.1733846059&semt=ais_hybrid&w=740",
    description: "Dynamic data structures useful in memory management",
  },
  {
    id: 6,
    name: "HashMaps",
    image: "https://img.freepik.com/free-photo/cybersecurity-concept-illustration_23-2151883577.jpg?t=st=1746664664~exp=1746668264~hmac=cc2450ae7be235f1599da611f9949b1c827f1ecdc9b6f5c7264dce7d8928ce1b&w=740",
    description: "Key-value based data structure enabling constant-time lookups and inserts",
  },
  {
    id: 4,
    name: "Stacks_Queues",
    image: "https://img.freepik.com/free-vector/isometric-server-room-big-data-processing-concept-datacenter-data-base-icon_39422-479.jpg?ga=GA1.1.392089018.1733846059&semt=ais_hybrid&w=740",
    description: "Linear data structures where stacks use LIFO and queues use FIFO for managing elements",
  },
  {
    id: 5,
    name: "Searching_Sorting",
    image: "https://images.ctfassets.net/drk57q8lctrm/4f0ze8rvBbESb5hGwKg9Qr/5f501d62b059ae548c661745578690f2/surging-interest-in-graph-databases-blog-aerospike-graph-featured.webp?w=1200&h=630&fit=crop&f=left",
    description: "Algorithms used to find elements or arrange data in a specific order for efficient access and processing",
  },

];


const Homecardcarousel = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const navigate = useNavigate();

  const visibleCards = 4;

  const nextSlide = () => {
    setStartIndex((prev) => (prev + 1) % cards.length);
  };

  const prevSlide = () => {
    setStartIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  const getVisibleCards = () => {
    if (isMobile) {
      return cards;
    } else {
      const extended = [...cards, ...cards];
      return extended.slice(startIndex, startIndex + visibleCards);
    }
  };


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  return (
    <>
      <section className="py-10 px-5 relative overflow-hidden bg-black">
        <h2 className="text-4xl font-bold text-center text-white mb-6">
          CORE DSA BRANCHES
        </h2>

        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="hidden md:block absolute left-18 top-1/2 transform -translate-y-1/2 z-10 bg-gray-800 text-white text-5xl rounded-full hover:bg-black cursor-pointer"
        >
          {/* &#8592; */}
          <FaArrowCircleLeft/>
        </button>


        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="hidden md:block absolute right-18 top-1/2 transform -translate-y-1/2 z-10 bg-gray-800 text-white text-5xl rounded-full hover:bg-black cursor-pointer"
        >
          {/* &#8594; */}
          <FaArrowCircleRight/>
        </button>

        {/* Card Container */}
        <div className="flex flex-wrap justify-center items-center gap-6 transition-all duration-700 ease-in-out">


          {getVisibleCards().map((card) => (
            <div
              key={card.id}
              onClick={() => navigate(`/questions/${card.name}`)}
              className="cursor-pointer flex flex-col items-center w-full md:w-52 flex-shrink-0"
            >

              <div className="relative h-64 w-full  overflow-hidden group transition-all duration-300 hover:shadow-[0_0_20px_4px_rgba(255,255,255,0.5)] rounded-xl">
                <img
                  src={card.image}
                  alt={card.name}
                  className="w-full h-full object-cover transition duration-500 group-hover:opacity-30 "
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 flex justify-center items-center text-xl text-white text-center px-2 opacity-0 group-hover:opacity-80 transition duration-500 cursor-pointer">
                  <p>{card.description}</p>
                </div>
              </div>
              <p className="mt-2 text-center text-white text-base font-medium">
                {card.name}
              </p>
            </div>

          ))}
        </div>
      </section>
    </>
  );
};

export default Homecardcarousel;
