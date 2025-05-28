import { useState } from "react";
import AdminHeader from "../components/AdminHeader";
import AdminFooter from "../components/AdminFooter";
import { addQuestionApi } from "../services/allApi";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

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
    problemStatement: "",
    inputFormat: "",
    outputFormat: "",
    examples: "",
    testCases: [{ input: "", expected: "" }]
  });

  const navigate = useNavigate();

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
      testCases: [...form.testCases, { input: "", expected: "" }]
    });
  };

  const removeTestCase = (index) => {
    const newTestCases = form.testCases.filter((_, i) => i !== index);
    setForm({ ...form, testCases: newTestCases });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await addQuestionApi(form);
      if (res?.data?.success) {
        toast.success("Question added successfully!");
        // Reset form after success or redirect as needed
        setForm({
          category: "",
          title: "",
          difficulty: "Easy",
          problemStatement: "",
          inputFormat: "",
          outputFormat: "",
          examples: "",
          testCases: [{ input: "", expected: "" }]
        });

        setTimeout(()=>{
          navigate("/admin/view-questions");
         },2000)

      } else {
        toast.error("Failed to add question: " + (res.data?.message || "Unknown error"));
      }
    } catch (err) {
      toast.error("Error adding question: " + err.message);
    }
  };

  return (
    <>
      <AdminHeader />
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

          {/* Problem Statement */}
          <div>
            <label className="block mb-1 text-gray-300">Problem Statement</label>
            <textarea
              name="problemStatement"
              value={form.problemStatement}
              onChange={handleChange}
              rows={4}
              className="w-full bg-gray-800 border border-gray-600 rounded p-2 text-white"
              required
            />
          </div>

          {/* Input Format */}
          <div>
            <label className="block mb-1 text-gray-300">Input Format</label>
            <textarea
              name="inputFormat"
              value={form.inputFormat}
              onChange={handleChange}
              rows={2}
              className="w-full bg-gray-800 border border-gray-600 rounded p-2 text-white"
              required
            />
          </div>

          {/* Output Format */}
          <div>
            <label className="block mb-1 text-gray-300">Output Format</label>
            <textarea
              name="outputFormat"
              value={form.outputFormat}
              onChange={handleChange}
              rows={2}
              className="w-full bg-gray-800 border border-gray-600 rounded p-2 text-white"
              required
            />
          </div>

          {/* Examples */}
          <div>
            <label className="block mb-1 text-gray-300">Examples</label>
            <textarea
              name="examples"
              value={form.examples}
              onChange={handleChange}
              rows={4}
              placeholder="Example 1: Input ... Output ..."
              className="w-full bg-gray-800 border border-gray-600 rounded p-2 text-white"
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
                    value={tc.expected}
                    onChange={(e) => handleTestCaseChange(index, "expected", e.target.value)}
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
        <ToastContainer theme="colored" position="top-center" autoClose={1500}/>
      </div>
      <AdminFooter />
    </>
  );
}
