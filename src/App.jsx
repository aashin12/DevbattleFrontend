import React from "react";
import { Routes, Route } from "react-router-dom";

// Pages
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserHome from "./pages/UserHome";
import QuestionsList from "./pages/QuestionsList";
import ResultPage from "./pages/ResultPage";
import AdminDashboard from "./pages/AdminDashboard";
import CodeEditor from "./components/CodeEditor";
import ViewQuestions from "./pages/ViewQuestions";
import QuestionDetail from "./pages/QuestionDetail";
import AddQuestionPage from "./pages/AddQuestionPage";
import ViewUsersPage from "./components/ViewUsersPage";
import LeaderboardPage from "./pages/LeaderboardPage";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";

function App() {
  return (
   
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<UserHome />} />
        <Route path="/questions/:section" element={<QuestionsList />} />
        <Route path="/code-editor/:section/:id" element={<CodeEditor/>} />
        <Route path="/result" element={<ResultPage />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/view-questions" element={<ViewQuestions/>}/>
        <Route path="/question-detail/:combinedId" element={<QuestionDetail />} /> 
        <Route path="/admin/add-question" element={<AddQuestionPage/>}/>
        <Route path="/admin/view-users" element={<ViewUsersPage/>}/>
        <Route path="/admin/leaderboard" element={<LeaderboardPage/>}/>
        <Route path="/about" element={<AboutSection/>}/>
        <Route path="/contact" element={<ContactSection/>}/>
      </Routes>
   
  );
}

export default App;
