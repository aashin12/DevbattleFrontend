import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import HomeNavbar from "../components/HomeNavbar";
import { getQuestionsByCategory } from "../services/allApi";

const QuestionsList = () => {
  const { section } = useParams();
  const [questions, setQuestions] = useState([]);
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchQuestions = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await getQuestionsByCategory(section);
        if (response && response.data && response.data.success) {
          setQuestions(response.data.data);
        } else {
          setQuestions([]);
          setError("No questions found for this category.");
        }
      } catch (err) {
        setError("Failed to fetch questions. Please try again.");
      }
      setLoading(false);
    };

    fetchQuestions();
  }, [section]);

  const handleQuestionClick = (question) => {
    setSelected(question);
    navigate(`/code-editor/${section}/${question._id}`); // Use _id from DB
  };

  return (
    <>
      <HomeNavbar />
      <div className="flex flex-col md:flex-row flex-grow p-4 bg-black text-white overflow-y-auto overflow-x-hidden h-130">
        <div className="md:w-1/3 border-r border-gray-700 overflow-y-auto pr-4 scroll-smooth">
          <h2 className="text-2xl font-bold mb-4">{section} Questions</h2>

          {loading && <p>Loading questions...</p>}
          {error && <p className="text-red-500">{error}</p>}

          {!loading && !error && questions.length === 0 && (
            <p>No questions available in this category.</p>
          )}

          <ul className="space-y-4">
            {questions.map((q) => (
              <motion.li
                key={q._id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`cursor-pointer p-4 rounded-lg transition duration-300 border-l-4 ${selected?._id === q._id
                    ? "bg-violet-700 border-violet-400"
                    : "bg-gray-800 border-gray-600"
                  }`}
                onClick={() => setSelected(q)}
              >
                <h3 className="font-semibold">{q.title}</h3>
                <p className="text-sm text-gray-400">Difficulty: {q.difficulty}</p>
              </motion.li>
            ))}
          </ul>
        </div>

        <div className="md:w-2/3 p-6">
          <AnimatePresence mode="wait">
            {selected ? (
              <motion.div
                key={selected._id}
                initial={{ opacity: 0, x: 50, scale: 0.98 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -50, scale: 0.98 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="bg-gray-800 p-6 rounded-xl shadow-xl h-full overflow-y-auto max-h-[85vh] scroll-smooth "
              >
                <h2 className="text-2xl font-bold mb-4">{selected.title}</h2>

                <div className="mb-4">
                  <h3 className="font-semibold text-lg mb-1">Problem Statement:</h3>
                  <p className="text-gray-300 whitespace-pre-wrap">{selected.problemStatement}</p>
                </div>

                <div className="mb-4">
                  <h3 className="font-semibold text-lg mb-1">Input Format:</h3>
                  <p className="text-gray-300 whitespace-pre-wrap">{selected.inputFormat}</p>
                </div>

                <div className="mb-4">
                  <h3 className="font-semibold text-lg mb-1">Output Format:</h3>
                  <p className="text-gray-300 whitespace-pre-wrap">{selected.outputFormat}</p>
                </div>

                <div className="mb-4">
                  <h3 className="font-semibold text-lg mb-1">Examples:</h3>
                  {selected.examples && selected.examples.length > 0 ? (
                    <ul className="list-disc list-inside text-gray-300">
                      {selected.examples.map((ex, idx) => (
                        <li key={idx} className="whitespace-pre-wrap">{ex}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-500">No examples provided.</p>
                  )}
                </div>

                <button
                  onClick={() => handleQuestionClick(selected)}
                  className="mt-4 px-6 py-2 bg-violet-700 hover:bg-violet-950 rounded-lg text-white font-semibold cursor-pointer"
                >
                  Solve Now
                </button>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center text-gray-400 mt-20"
              >
                <p className="text-2xl">Select a question to view details</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};

export default QuestionsList;
