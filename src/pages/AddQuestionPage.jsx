

import { useState } from "react";
import AdminHeader from "../components/AdminHeader";
import AdminFooter from "../components/AdminFooter"

const categories = [
  "Arrays",
  "Strings",
  "LinkedLists",
  "Stacks_Queues",
  "Searching_Sorting",
  "Hash Maps"
];

export default function AddQuestionPage() {
  const [form, setForm] = useState({
    category: "",
    title: "",
    difficulty: "Easy",
    description: "",
    testCases: [{ input: "", output: "" }]
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleTestCaseChange = (index, field, value) => {
    const newTestCases = [...form.testCases];
    newTestCases[index][field] = value;
    setForm({ ...form, testCases: newTestCases });
  };

  const addTestCase = () => {
    setForm({
      ...form,
      testCases: [...form.testCases, { input: "", output: "" }]
    });
  };

  const removeTestCase = (index) => {
    const newTestCases = form.testCases.filter((_, i) => i !== index);
    setForm({ ...form, testCases: newTestCases });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", form);
    // Hook into backend or question manager
  };

  return (
    <>
    <AdminHeader/>
    <div className="p-6 bg-gray-900 text-white min-h-screen">
      <h2 className="text-3xl font-bold text-violet-400 mb-6">➕ Add New Question</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Category */}
        <div>
          <label className="block mb-1 text-gray-300">Category</label>
          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            className="w-full bg-gray-800 border border-gray-600 rounded p-2 text-white"
            required
          >
            <option value="">Select a category</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        {/* Title */}
        <div>
          <label className="block mb-1 text-gray-300">Title</label>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            className="w-full bg-gray-800 border border-gray-600 rounded p-2 text-white"
            required
          />
        </div>

        {/* Difficulty */}
        <div>
          <label className="block mb-1 text-gray-300">Difficulty</label>
          <select
            name="difficulty"
            value={form.difficulty}
            onChange={handleChange}
            className="w-full bg-gray-800 border border-gray-600 rounded p-2 text-white"
          >
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>

        {/* Description */}
        <div>
          <label className="block mb-1 text-gray-300">Description</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            rows={6}
            placeholder="Include 📥 Input Format, 📤 Output Format, 🔒 Constraints, 🧪 Example 1: etc."
            className="w-full bg-gray-800 border border-gray-600 rounded p-2 text-white"
            required
          />
        </div>

        {/* Test Cases */}
        <div>
          <label className="block mb-2 text-gray-300">Test Cases</label>
          {form.testCases.map((tc, index) => (
            <div key={index} className="mb-4 p-4 bg-gray-800 rounded border border-gray-700 space-y-2">
              <div>
                <label className="block mb-1 text-sm text-gray-400">Input</label>
                <input
                  type="text"
                  value={tc.input}
                  onChange={(e) => handleTestCaseChange(index, "input", e.target.value)}
                  className="w-full bg-gray-900 border border-gray-600 rounded p-2 text-white"
                  placeholder="e.g., 1 2 3"
                  required
                />
              </div>
              <div>
                <label className="block mb-1 text-sm text-gray-400">Expected Output</label>
                <input
                  type="text"
                  value={tc.output}
                  onChange={(e) => handleTestCaseChange(index, "output", e.target.value)}
                  className="w-full bg-gray-900 border border-gray-600 rounded p-2 text-white"
                  placeholder="e.g., 6"
                  required
                />
              </div>
              {form.testCases.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeTestCase(index)}
                  className="text-red-400 text-sm mt-1 hover:underline cursor-pointer"
                >
                  Remove Test Case
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={addTestCase}
            className="mt-2 px-4 py-1 bg-violet-700 rounded hover:bg-violet-800 cursor-pointer"
          >
            ➕ Add Another Test Case
          </button>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="px-6 py-2 bg-violet-600 hover:bg-violet-700 text-white rounded shadow cursor-pointer"
        >
          ➕ Submit Question
        </button>
      </form>
    </div>
    <AdminFooter/>
    </>
  );
}
