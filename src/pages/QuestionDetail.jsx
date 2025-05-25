

import { useParams } from "react-router-dom";
import { sampleQuestions } from "../data/sampleQuestions";
import AdminHeader from "../components/AdminHeader";
import AdminFooter from "../components/AdminFooter";

export default function QuestionDetail() {
  const { combinedId } = useParams(); // Example: "Arrays-1"
  const [category, id] = combinedId.split("-");

  const question = sampleQuestions[category]?.find(
    (q) => q.id.toString() === id
  );

  if (!question) {
    return (
      <div className="p-6 text-red-400 bg-gray-900 min-h-screen">
        <h2 className="text-xl">❌ Question not found.</h2>
      </div>
    );
  }

  return (
    <>
    <AdminHeader/>
    <div className="p-6 bg-gray-900 text-white min-h-screen">
      <h2 className="text-3xl font-bold text-violet-400 mb-4">
        🧾 {question.title}
      </h2>
      <p className="mb-2">
        <strong>Difficulty:</strong>{" "}
        <span className="font-semibold">{question.difficulty}</span>
      </p>
      <p className="mb-4">
        <strong>Category:</strong> {category}
      </p>

      {/* Full Raw Description */}
      <p className="text-gray-400 whitespace-pre-wrap text-justify">
        {question.description}
      </p>
    </div>
    <AdminFooter/>
    </>
  );
}
