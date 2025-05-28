import { useEffect, useState } from "react";
import { getUserSubmissionsApi } from "../services/allApi";
import { motion } from "framer-motion";
import {
    LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer,
    BarChart, Bar, Legend, PieChart, Pie, Cell,
} from "recharts";
import HomeNavbar from "../components/HomeNavbar";
import Footer from "../components/Footer";
import { deleteSubmissionApi } from "../services/allApi";

const COLORS = [
    "#10b981", // green-500
    "#ef4444", // red-500
    "#10b981", // green-500
    "#f59e0b", // amber-500
    "#ef4444", // red-500
    "#ec4899", // pink-500
];

export default function SavedSubmissions() {
    const [submissions, setSubmissions] = useState([]);
    const userId = JSON.parse(sessionStorage.getItem("existingUser"))?._id;

    const handleDelete = async (submissionId) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this submission?");
        if (!confirmDelete) return;

        try {
            const res = await deleteSubmissionApi(submissionId);
            if (res.status === 200) {
                setSubmissions(prev => prev.filter(sub => sub._id !== submissionId));
            } else {
                console.error("Delete failed:", res);
            }
        } catch (error) {
            console.error("Error deleting submission:", error);
        }
    };


    useEffect(() => {
        const fetchSubmissions = async () => {
            if (!userId) return;
            try {
                const res = await getUserSubmissionsApi(userId);
                if (Array.isArray(res?.data?.data)) {
                    setSubmissions(res.data.data);
                } else {
                    console.error("Unexpected response format:", res?.data);
                }
            } catch (error) {
                console.error("Error fetching submissions:", error);
            }
        };

        fetchSubmissions();
    }, [userId]);

    // Calculate current submission streak (consecutive days)
    const getStreakCount = () => {
        const dates = new Set(
            submissions.map(sub => new Date(sub.submittedAt).toISOString().split("T")[0])
        );
        const today = new Date();
        let streak = 0;

        for (let i = 0; i < 365; i++) {
            const date = new Date(today);
            date.setDate(date.getDate() - i);
            const formatted = date.toISOString().split("T")[0];
            if (dates.has(formatted)) {
                streak++;
            } else {
                break;
            }
        }

        return streak;
    };

    // Data for LineChart - test cases passed over dates
    const lineChartData = submissions.map(sub => ({
        date: new Date(sub.submittedAt).toLocaleDateString(),
        testCasesPassed: sub.passedTestCases,
    }));

    // Aggregate submissions by language for BarChart
    const languageCountMap = submissions.reduce((acc, sub) => {
        const lang = sub.language || "Unknown";
        acc[lang] = (acc[lang] || 0) + 1;
        return acc;
    }, {});
    const barChartData = Object.entries(languageCountMap).map(([lang, count]) => ({
        language: lang,
        submissions: count,
    }));

    // Aggregate pass vs fail for PieChart
    const totalPassed = submissions.reduce((acc, sub) => acc + (sub.passedTestCases || 0), 0);
    const totalTests = submissions.reduce((acc, sub) => acc + (sub.totalTestCases || 0), 0);
    const totalFailed = totalTests - totalPassed;
    const pieData = [
        { name: "Passed", value: totalPassed },
        { name: "Failed", value: totalFailed > 0 ? totalFailed : 0 },
    ];

    return (
        <>
            <HomeNavbar />
            <div className=" bg-gradient-to-b from-black via-gray-900 to-black text-white p-6 -mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl font-extrabold mb-6 text-white"
                >
                    📜 Saved Submissions
                </motion.h2>

                {/* Streak Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="mb-10"
                >
                    <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-4 shadow-lg backdrop-blur-md max-w-xs">
                        <h3 className="text-2xl text-white font-semibold mb-2">🔥 Current Streak</h3>
                        <p className="text-violet-300 text-lg">{getStreakCount()} day(s)</p>
                    </div>
                </motion.div>

                {/* Charts Container */}
                {submissions.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
                    >
                        {/* LineChart: Submission Trend */}
                        <div className="bg-gray-800/60 border border-gray-700 rounded-xl p-4 shadow-lg backdrop-blur-md">
                            <h3 className="text-2xl text-white font-semibold mb-4 text-center">📈 Submission Trend</h3>
                            <ResponsiveContainer width="100%" height={180}>
                                <LineChart data={lineChartData}>
                                    <XAxis dataKey="date" stroke="#ccc" />
                                    <YAxis allowDecimals={false} stroke="#ccc" />
                                    <Tooltip
                                        contentStyle={{ backgroundColor: "#1e293b", borderRadius: 6 }}
                                        itemStyle={{ color: "#3b82f6" }}
                                    />
                                    <Line type="monotone" dataKey="testCasesPassed" stroke="#3b82f6" strokeWidth={3} dot={{ r: 4 }} />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>

                        {/* BarChart: Submissions by Language */}
                        <div className="bg-gray-800/60 border border-gray-700 rounded-xl p-4 shadow-lg backdrop-blur-md">
                            <h3 className="text-2xl text-white font-semibold mb-4 text-center">🗣️ Submissions by Language</h3>
                            <ResponsiveContainer width="100%" height={180}>
                                <BarChart data={barChartData} margin={{ top: 5, right: 15, left: 10, bottom: 5 }}>
                                    <XAxis dataKey="language" stroke="#ccc" />
                                    <YAxis allowDecimals={false} stroke="#ccc" />
                                    <Tooltip
                                        contentStyle={{ backgroundColor: "#1e293b", borderRadius: 6 }}
                                        itemStyle={{ color: "#3b82f6" }}
                                    />
                                    <Legend />
                                    <Bar dataKey="submissions" fill="#8b5cf6" radius={[5, 5, 0, 0]} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>

                        {/* PieChart: Passed vs Failed Test Cases */}
                        <div className="bg-gray-800/60 border border-gray-700 rounded-xl p-4 shadow-lg backdrop-blur-md">
                            <h3 className="text-2xl text-white font-semibold mb-4 text-center">✅ Test Case Results</h3>
                            <ResponsiveContainer width="100%" height={180}>
                                <PieChart>
                                    <Pie
                                        data={pieData}
                                        dataKey="value"
                                        nameKey="name"
                                        cx="50%"
                                        cy="50%"
                                        outerRadius={70}
                                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                                        labelLine={false}
                                    >
                                        {pieData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                        ))}
                                    </Pie>
                                    <Tooltip
                                        contentStyle={{ backgroundColor: "#1e293b", borderRadius: 6 }}
                                        itemStyle={{ color: "#10b981" }}
                                    />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                    </motion.div>
                )}

                {/* Submissions List */}
                <div className="space-y-6 mt-6">
                    {submissions.length === 0 ? (
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-gray-400"
                        >
                            No submissions yet.
                        </motion.p>
                    ) : (
                        submissions.map((sub, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="rounded-xl p-5 border border-gray-700 bg-gray-800/60 backdrop-blur-lg shadow-md"
                            >
                                <div className="flex justify-between items-center mb-2 flex-wrap gap-4">
                                    <div className="min-w-[180px]">
                                        <h4 className="text-xl font-bold text-white">{sub.questionId?.title}</h4>
                                        <p className="text-sm text-gray-400">
                                            Language: {sub.language} | Date: {new Date(sub.submittedAt).toLocaleString()}
                                        </p>
                                    </div>
                                    <div className="text-right min-w-[120px] flex flex-col md:items-end gap-1">
                                        <span className="text-sm text-green-400">
                                            ✅ {sub.passedTestCases}/{sub.totalTestCases} test cases passed
                                        </span>
                                        <button
                                            onClick={() => handleDelete(sub._id)}
                                            className="text-sm text-red-400 hover:text-red-500 hover:underline transition duration-200 cursor-pointer"
                                        >
                                            🗑️ Delete
                                        </button>
                                    </div>
                                </div>

                                <pre className="bg-black rounded-md p-3 overflow-x-auto text font-mono text-white whitespace-pre-wrap">
                                    {sub.code}
                                </pre>
                            </motion.div>
                        ))
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
}
