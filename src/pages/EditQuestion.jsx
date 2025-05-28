import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getQuestionById, updateQuestionApi } from "../services/allApi";
import AdminHeader from "../components/AdminHeader";
import AdminFooter from "../components/AdminFooter";
import { toast, ToastContainer } from "react-toastify";

export default function EditQuestion() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [question, setQuestion] = useState(null);
    const [loading, setLoading] = useState(true);
    const [testCasesText, setTestCasesText] = useState("");
    const [testCasesError, setTestCasesError] = useState(false);

    useEffect(() => {
        const fetchQuestion = async () => {
            try {
                const res = await getQuestionById(id);
                if (res.data.success) {
                    const q = res.data.data;
                    setQuestion(q);
                    setTestCasesText(
                        q.testCases
                            .map(tc => `input: ${tc.input}, expected: ${tc.expected}`)
                            .join("\n")
                    );
                }
            } catch (err) {
                console.error("Error fetching question:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchQuestion();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === "testCases") {
            setTestCasesText(value);

            try {
                const lines = value.trim().split("\n").filter(Boolean);
                const parsed = lines.map(line => {
                    const match = line.match(/^input:\s*(.+?),\s*expected:\s*(.+)$/);
                    if (!match) throw new Error("Invalid format");
                    return {
                        input: match[1].trim(),
                        expected: match[2].trim()
                    };
                });

                setTestCasesError(false);
                setQuestion({ ...question, testCases: parsed });
            } catch (err) {
                setTestCasesError(true);
                console.error("Invalid test case format:", err);
            }
        } else {
            setQuestion({ ...question, [name]: value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (testCasesError) {
            toast.error("❌ Fix test case format errors before submitting.");
            return;
        }
        try {
            const res = await updateQuestionApi(id, question);
            if (res.data.success) {
                toast.success("✅ Question updated successfully!");
               setTimeout(()=>{
                navigate("/admin/view-questions");
               },2000)
                
            } else {
                alert("❌ Update failed.");
            }
        } catch (err) {
            console.error("Error updating question:", err);
        }
    };

    if (loading) return <div className="p-6 text-white">Loading...</div>;

    return (
        <>
            <AdminHeader />
            <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center px-4 py-10">
                <div className="w-full max-w-4xl bg-gray-900 p-8 rounded-2xl shadow-2xl border border-gray-800">
                    <h2 className="text-3xl font-bold text-violet-400 mb-6 text-center">
                        ✏️ Edit Question
                    </h2>
                    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
                        <div>
                            <label className="text-sm text-gray-400">Title</label>
                            <input
                                name="title"
                                value={question.title}
                                onChange={handleChange}
                                placeholder="Enter question title"
                                className="w-full p-3 rounded-xl bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-violet-500 outline-none"
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="text-sm text-gray-400">Category</label>
                                <input
                                    name="category"
                                    value={question.category}
                                    onChange={handleChange}
                                    placeholder="e.g. Arrays"
                                    className="w-full p-3 rounded-xl bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-violet-500 outline-none"
                                />
                            </div>
                            <div>
                                <label className="text-sm text-gray-400">Difficulty</label>
                                <select
                                    name="difficulty"
                                    value={question.difficulty}
                                    onChange={handleChange}
                                    className="w-full p-3 rounded-xl bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-violet-500 outline-none"
                                >
                                    <option value="">Select Difficulty</option>
                                    <option value="Easy">Easy</option>
                                    <option value="Medium">Medium</option>
                                    <option value="Hard">Hard</option>
                                </select>
                            </div>
                        </div>

                        {["problemStatement", "inputFormat", "outputFormat", "examples"].map((field) => (
                            <div key={field}>
                                <label className="text-sm text-gray-400 capitalize">
                                    {field.replace(/([A-Z])/g, " $1")}
                                </label>
                                <textarea
                                    name={field}
                                    value={question[field]}
                                    onChange={handleChange}
                                    placeholder={`Enter ${field}`}
                                    className="w-full p-3 h-28 rounded-xl bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-violet-500 outline-none resize-none"
                                />
                            </div>
                        ))}

                        <div>
                            <label className="text-sm text-gray-400">Test Cases</label>
                            <textarea
                                name="testCases"
                                value={testCasesText}
                                onChange={handleChange}
                                placeholder={`input: 2 3 3 6, expected: [0,1]`}
                                className={`w-full p-3 h-36 rounded-xl bg-gray-800 text-white border ${
                                    testCasesError ? "border-red-500 ring-2 ring-red-400" : "border-gray-700 focus:ring-2 focus:ring-violet-500"
                                } outline-none resize-none`}
                            />
                            {testCasesError && (
                                <p className="text-red-500 text-sm mt-1">
                                    ❌ Invalid format. Use: input: 2 3 3 6, expected: [0,1]
                                </p>
                            )}
                        </div>

                        <div className="text-center mt-4">
                            <button
                                type="submit"
                                className="bg-violet-500 hover:bg-violet-600 text-white px-6 py-3 rounded-xl font-semibold shadow-md transition-all duration-300"
                            >
                                💾 Update Question
                            </button>
                        </div>
                    </form>
                </div>
                <ToastContainer theme="colored" position="top-center" autoClose={1500}/>
            </div>
            <AdminFooter />
           
        </>
    );
}
