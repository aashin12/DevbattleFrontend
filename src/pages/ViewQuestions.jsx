import { useState } from "react";
import { motion } from "framer-motion";
import {sampleQuestions} from "../data/sampleQuestions"
import { useNavigate } from "react-router-dom";
import AdminHeader from "../components/AdminHeader";
import AdminFooter from "../components/AdminFooter";


const difficultyColors = {
  Easy: "text-green-400",
  Medium: "text-yellow-400",
  Hard: "text-red-400",
};

export default function ViewQuestions() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const navigate = useNavigate();

  // Flatten questions from all categories into one array
  const allQuestions = Object.entries(sampleQuestions)
  .flatMap(([category, questions]) =>
    questions.map((q) => ({
      ...q,
      category,
      uniqueKey: `${category}-${q.id}`,
    }))
  )
  .map((q, index) => ({
    ...q,
    displayId: index + 1, // Sequential ID for display
  }));

  

  const filteredQuestions = allQuestions.filter((q) => {
    const matchesSearch = q.title.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === "All" || q.difficulty === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <>
    <AdminHeader/>
    <div className="p-6 bg-gray-900 text-white min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-violet-400">🧾 All Questions</h2>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="🔍 Search by title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2 rounded bg-gray-800 border border-gray-700 w-full md:w-1/2"
        />

        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="px-4 py-2 rounded bg-gray-800 border border-gray-700 w-full md:w-1/4"
        >
          <option value="All">All Difficulties</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="overflow-x-auto rounded-lg shadow">
          <table className="min-w-full bg-gray-800 rounded-xl">
            <thead>
              <tr className="bg-gray-700 text-violet-300 text-left">
                <th className="p-4">ID</th>
                <th className="p-4">Title</th>
                <th className="p-4">Difficulty</th>
                <th className="p-4">Category</th>
                <th className="p-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredQuestions.map((q) => (
                <tr key={q.uniqueKey} className="border-b border-gray-700 hover:bg-gray-700">
                  <td className="p-4">{q.displayId}</td>
                  <td className="p-4">{q.title}</td>
                  <td className={`p-4 font-semibold ${difficultyColors[q.difficulty]}`}>
                    {q.difficulty}
                  </td>
                  <td className="p-4">{q.category}</td>
                  <td className="p-4 space-x-2">
                    <button onClick={() => navigate(`/question-detail/${q.category}-${q.id}`)} className="px-3 py-1 bg-violet-500 hover:bg-violet-600 rounded text-sm">
                      View
                    </button>
                    <button className="px-3 py-1 bg-yellow-500 hover:bg-yellow-600 rounded text-sm">
                      Edit
                    </button>
                    <button className="px-3 py-1 bg-red-500 hover:bg-red-600 rounded text-sm">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
    <AdminFooter/>
    </>
  );
}
