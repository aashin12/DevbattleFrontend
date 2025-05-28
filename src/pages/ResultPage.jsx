import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { saveSubmissionApi } from "../services/allApi";
import { toast, ToastContainer } from "react-toastify";
import { useState } from "react";

export default function ResultPage() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const userId = JSON.parse(sessionStorage.getItem("existingUser"))?._id;
  const userCode = localStorage.getItem("userCode");
  const currentQuestion = JSON.parse(localStorage.getItem("currentQuestion"));
  const selectedLanguage = localStorage.getItem("selectedLanguage");

  if (!state) {
    return (
      <div className="text-white text-center p-8">
        <p>No result data available. Please run or submit code.</p>
        <button onClick={() => navigate(-1)} className="mt-4 bg-violet-600 px-4 py-2 rounded">
          Go Back
        </button>
      </div>
    );
  }

  const { passed, failed, total, details, language } = state;
  const [saving, setSaving] = useState(false);

  const saveSubmission = async () => {
    if (
      
      !userId ||
      !currentQuestion?._id ||
      !userCode ||
      !selectedLanguage ||
      selectedLanguage === "null" ||
      selectedLanguage === "undefined"
    ) {
      toast.warning("❗ Cannot save: Incomplete data or not all test cases passed.");
      return;
    }

    if (passed !== total) {
      toast.info("⚠️ Note: Not all test cases passed. Saving anyway.");
    }
    

    try {
      setSaving(true);
      const payload = {
        userId,
        questionId: currentQuestion._id,
        language: selectedLanguage,
        code: userCode,
        submittedAt: new Date().toISOString(),
        passedTestCases: passed,
        totalTestCases: total
      };

      const res = await saveSubmissionApi(payload);
      if (res?.data?.success) {
        toast.success("✅ Code saved successfully!");
      } else {
        toast.error("❌ Failed to save code.");
        console.error("Save failed:", res);
      }
    } catch (err) {
      toast.error("❌ Error occurred while saving.");
      console.error("SaveSubmission Error:", err);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white p-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-white mb-4">Submission Results</h1>

        <div className="bg-gray-800 p-4 rounded-xl shadow-lg mb-6 border-2 border-purple-700">
          <p><span className="text-green-400">Passed:</span> {passed}</p>
          <p><span className="text-red-400">Failed:</span> {failed}</p>
          <p><span className="text-blue-400">Total Test Cases:</span> {total}</p>
          <p><span className="text-yellow-400">Language:</span> {language}</p>
        </div>

        <h2 className="text-2xl font-semibold text-violet-400 mb-3">Detailed Report</h2>
        <div className="space-y-4">
          {details.map((test, idx) => (
            <div key={idx} className={`p-4 rounded-lg ${test.status === "Passed" ? "bg-green-900/20" : "bg-red-900/20"} border-l-4 ${test.status === "Passed" ? "border-green-500" : "border-red-500"}`}>
              <p><strong>Test Case #{idx + 1}</strong></p>
              <p><span className="text-violet-300">Input:</span> {test.input}</p>
              <p><span className="text-violet-300">Expected:</span> {test.expected}</p>
              <p><span className="text-violet-300">Output:</span> {test.output}</p>
              <p><span className="text-violet-300">Status:</span> <strong className={test.status === "Passed" ? "text-green-400" : "text-red-400"}>{test.status}</strong></p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center space-y-4 space-x-4">
          <button
            onClick={() => navigate(-1)}
            className="bg-violet-600 hover:bg-violet-700 px-6 py-3 rounded-lg cursor-pointer"
          >
            Try Again
          </button>
          <button
            onClick={() => navigate("/savedsubmission")}
            className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg cursor-pointer"
          >
            View Saved Submissions
          </button>
          <button
            onClick={saveSubmission}
            className={`px-6 py-3 cursor-pointer rounded-lg ${saving ? "bg-gray-500 cursor-not-allowed" : "bg-yellow-600 hover:bg-yellow-700"}`}
            disabled={saving}
          >
            {saving ? "Saving..." : "Save Code"}
          </button>
        </div>

        <ToastContainer theme="colored" position="top-center" autoClose={2000} />
      </motion.div>
    </div>
  );
}
