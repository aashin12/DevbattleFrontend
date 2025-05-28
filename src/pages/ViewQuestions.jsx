import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import AdminHeader from "../components/AdminHeader";
import AdminFooter from "../components/AdminFooter";
import { getAllQuestions, deleteQuestion } from "../services/allApi"; // ✅ IMPORT API FUNCTION

const difficultyColors = {
  Easy: "text-green-400",
  Medium: "text-yellow-400",
  Hard: "text-red-400",
};

export default function ViewQuestions() {
  const [questions, setQuestions] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const navigate = useNavigate();

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this question?")) {
      try {
        const res = await deleteQuestion(id);
        if (res.status === 200) {
          // Remove the deleted question from state
          setQuestions((prev) => prev.filter((q) => q._id !== id));
        }
      } catch (error) {
        console.error("Error deleting question", error);
      }
    }
  };


  // ✅ FETCH ALL QUESTIONS ON COMPONENT MOUNT
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const res = await getAllQuestions();
        if (res.status === 200) {
          const updatedQuestions = res.data.data.map((q, index) => ({
            ...q,
            displayId: index + 1,
            uniqueKey: `${q.category}-${q._id}`,
          }));
          setQuestions(updatedQuestions);
        }
      } catch (error) {
        console.error("Failed to fetch questions", error);
      }
    };

    fetchQuestions();
  }, []);

  const filteredQuestions = questions.filter((q) => {
    const matchesSearch = q.title.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === "All" || q.difficulty === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <>
      <AdminHeader />
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
                      <button
                        onClick={() => navigate(`/question-detail/${q.category}-${q._id}`)}
                        className="px-3 py-1 bg-violet-500 hover:bg-violet-600 rounded text-sm cursor-pointer"
                      >
                        View
                      </button>
                      <button
                        onClick={() => navigate(`/admin/edit-question/${q._id}`)}
                        className="bg-yellow-400 text-white px-3 py-1 rounded hover:bg-yellow-500 text-sm cursor-pointer"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(q._id)} // ✅ CALL DELETE FUNCTION
                        className="px-3 py-1 bg-red-500 hover:bg-red-600 rounded text-sm cursor-pointer"
                      >
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
      <AdminFooter />
    </>
  );
}
