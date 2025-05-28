import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AdminHeader from "../components/AdminHeader";
import AdminFooter from "../components/AdminFooter";
import { getQuestionById } from "../services/allApi"; // Adjust path if needed

export default function QuestionDetail() {
  const { combinedId } = useParams(); // e.g., "Arrays-664d9057cfa81c29b9bb6f41"
  const [question, setQuestion] = useState(null);
  const [loading, setLoading] = useState(true);

  // Split into category and actual MongoDB ID
  const [category, id] = combinedId.split("-");

  useEffect(() => {
    const fetchQuestion = async () => {
      try {
        const res = await getQuestionById(id);
        if (res.data && res.data.success) {
          setQuestion(res.data.data);
        } else {
          setQuestion(null);
        }
      } catch (err) {
        console.error("Error fetching question:", err.message);
        setQuestion(null);
      } finally {
        setLoading(false);
      }
    };

    fetchQuestion();
  }, [id]);

  if (loading) {
    return (
      <div className="p-6 text-white bg-gray-900 min-h-screen">
        <h2 className="text-xl">Loading...</h2>
      </div>
    );
  }

  if (!question) {
    return (
      <div className="p-6 text-red-400 bg-gray-900 min-h-screen">
        <h2 className="text-xl">❌ Question not found.</h2>
      </div>
    );
  }

  return (
    <>
      <AdminHeader />
      <div className="p-6 bg-gray-900 text-white min-h-screen">
        <h2 className="text-3xl font-bold text-violet-400 mb-4">
          🧾 {question.title}
        </h2>
        <p className="mb-2 text-gray-400">
          <strong><span className="text-white">Difficulty :</span></strong>{" "}
          <span className="font-semibold">{question.difficulty}</span>
        </p>
        <p className="mb-4 text-gray-400">
          <strong><span className="text-white">Category :</span></strong> {question.category}
        </p>
        <div className="text-gray-400 whitespace-pre-wrap text-justify">
          <p className="mb-3">
            <strong><span className="text-white">Problem Statement :</span></strong> {question.problemStatement}
          </p>
          <p className="mb-3">
            <strong><span className="text-white">Input Format :</span></strong> {question.inputFormat}
          </p>
          <p className="mb-3">
            <strong><span className="text-white">Output Format :</span></strong> {question.outputFormat}
          </p>
          <p className="mb-3">
            <strong><span className="text-white">Examples :</span></strong>
            <pre className="ml-4 bg-gray-800 p-2 rounded text-sm">
              {question.examples}
            </pre>
          </p>
        </div>
      </div>
      <AdminFooter />
    </>
  );
}
