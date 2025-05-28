//older code
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import Editor from "@monaco-editor/react";
import { useNavigate } from "react-router-dom";
import { getQuestionById } from "../services/allApi"; 

export default function CodeEditor() {

  const getDefaultCode = (lang) => {
    switch (lang) {
      case "python":
        return "# Write your code here";
      case "cpp":
        return "// Write your code here";
      case "java":
        return "// Write your code here";
      case "javascript":
      default:
        return "// Write your code here";
    }
  };

  const [language, setLanguage] = useState("javascript");
  const [code, setCode] = useState(getDefaultCode("javascript"));

  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const { section, id } = useParams();
  const [question, setQuestion] = useState(null);

  const [isRunning, setIsRunning] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);


  useEffect(() => {
    const fetchQuestion = async () => {
      try {
        const res = await getQuestionById(id);
        if (res?.data?.success) {
          setQuestion(res.data.data);
        } else {
          alert("Question not found");
        }
      } catch (err) {
        console.error("Failed to load question:", err);
        alert("Failed to load question.");
      }
    };
  
    fetchQuestion();
  }, [id]);


  const handleRunCode = async () => {
    setIsRunning(true);
    setOutput("Running...");

    const payload = {
      language: language, // 'javascript', 'cpp', 'java', 'python'
      version: "*",
      files: [
        {
          name: "main",
          content: code,
        },
      ],
      stdin: input,
    };

    // Fix file name per language
    if (language === "javascript") payload.files[0].name = "main.js";
    if (language === "python") payload.files[0].name = "main.py";
    if (language === "cpp") payload.files[0].name = "main.cpp";
    if (language === "java") payload.files[0].name = "Main.java";

    try {
      const response = await fetch("https://emkc.org/api/v2/piston/execute", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      console.log("Output:", result.run.output);
      setOutput(result.run.output);
    } catch (error) {
      console.error("Execution failed:", error);
      alert("Error running code");
    } finally {
      setIsRunning(false);
    }
  };

  const navigate = useNavigate();

  const handleSubmitCode = async () => {
    if (!question || !question.testCases) {
      alert("Test cases not found for this question.");
      return;
    }

    setIsSubmitting(true);
    setOutput("Submitting...");

    const payload = {
      language,
      version: "*",
      files: [
        {
          name: "main",
          content: code,
        },
      ],
      stdin: input,
    };

    if (language === "javascript") payload.files[0].name = "main.js";
    if (language === "python") payload.files[0].name = "main.py";
    if (language === "cpp") payload.files[0].name = "main.cpp";
    if (language === "java") payload.files[0].name = "Main.java";

    try {

      let passed = 0;
      let failed = 0;
      const detailedResults = [];

      for (let test of question.testCases) {
        const casePayload = { ...payload, stdin: test.input };
        const caseRes = await fetch("https://emkc.org/api/v2/piston/execute", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(casePayload),
        });
        const caseOutput = await caseRes.json();

        const output = caseOutput.run.output;

        const normalize = (str) => str.replace(/\s+/g, '').trim();

        if (normalize(output) === normalize(test.expected)) {
          passed++;
          detailedResults.push({ ...test, output, status: "Passed" });
        } else {
          failed++;
          detailedResults.push({ ...test, output, status: "Failed" });
        }
      }

      // ✅ Save to localStorage before navigating
    localStorage.setItem("userCode", code);
    localStorage.setItem("currentQuestion", JSON.stringify(question));
    localStorage.setItem("selectedLanguage", language);

      navigate("/result", {
        state: {
          passed,
          failed,
          total: question.testCases.length,
          details: detailedResults,
          language,
        },
      });

    } catch (error) {
      console.error("Error during submission:", error);
      alert("Something went wrong!");
    } finally {
      setIsSubmitting(false);
    }
  };



  return (
    <>

      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white p-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto"
        >
          <div className="mb-6">
            <h1 className="text-4xl font-bold text-violet-500 mb-2">Code Editor</h1>
            <p className="text-gray-400">Solve the challenge by writing and running your code below.</p>
          </div>

          {question && (
           <div className="space-y-4 mb-10">
            <div>
            <h2 className="text-3xl font-semibold">{question.title}</h2>

            </div>
           <div>
             <h2 className="text-lg font-semibold">Problem Statement:</h2>
             <p className="text-gray-400">{question.problemStatement}</p>
           </div>
         
           <div>
             <h2 className="text-lg font-semibold">Input Format:</h2>
             <p className="text-gray-400">{question.inputFormat}</p>
           </div>
         
           <div>
             <h2 className="text-lg font-semibold">Output Format:</h2>
             <p className="text-gray-400">{question.outputFormat}</p>
           </div>
         </div>
         
          )}

          <div className="flex justify-between items-center mb-4">
            <select
              value={language}
              onChange={(e) => {
                const newLang = e.target.value;
                setLanguage(newLang);
                setCode(getDefaultCode(newLang));
              }}
              className="bg-gray-800 text-white border border-gray-600 px-4 py-2 rounded-xl cursor-pointer">
              <option value="javascript">JavaScript</option>
              <option value="python">Python</option>
              <option value="cpp">C++</option>
              <option value="java">Java</option>
            </select>
            <button
              onClick={handleRunCode}
              disabled={isRunning}
              className={`px-4 py-2 rounded-xl flex items-center gap-2 transition cursor-pointer duration-300 ${isRunning
                ? "bg-gray-700 cursor-not-allowed"
                : "bg-violet-600 hover:bg-violet-800"
                }`}
            >
              {isRunning ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                    className="w-4 h-4 border-2 border-t-2 border-white rounded-full border-t-transparent"
                  />
                  Running...
                </>
              ) : (
                "Run Code"
              )}
            </button>
          </div>

          <div
            className="relative shadow-2xl bg-[#1e1e2f] border-2 border-purple-700"
            style={{
              borderRadius: '16px',
              overflow: 'visible', // Allow suggestion box to appear
            }}
          >
            <Editor
              height="500px"
              language={language}
              value={code}
              // theme="hc-black"
              onChange={(value) => setCode(value)}
              onMount={(editor, monaco) => {
                const domNode = editor.getDomNode();
                if (domNode) {
                  // Outer Monaco layer
                  domNode.style.borderRadius = '16px';
                  domNode.style.overflow = 'visible';
                  domNode.style.backgroundColor = '#1e1e2f';
                  domNode.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.3)';
                }

                // Apply to inner layers of Monaco
                setTimeout(() => {
                  const editorEl = domNode?.querySelector('.monaco-editor');
                  if (editorEl) {
                    editorEl.style.borderRadius = '16px';
                  }
                  const scrollEl = domNode?.querySelector('.overflow-guard');
                  if (scrollEl) {
                    scrollEl.style.borderRadius = '16px';
                  }
                }, 0);

                monaco.editor.defineTheme('dracula', {
                  base: 'hc-black',
                  inherit: true,
                  rules: [
                    { token: '', foreground: 'f8f8f2', background: '282a36' },
                    { token: 'comment', foreground: '6272a4' },
                    { token: 'keyword', foreground: 'ff79c6' },
                    { token: 'number', foreground: 'bd93f9' },
                    { token: 'string', foreground: 'f1fa8c' },
                    { token: 'variable', foreground: '50fa7b' },
                    { token: 'type', foreground: '8be9fd' },
                  ],
                  colors: {
                    'editor.foreground': '#f8f8f2',
                    'editor.background': '#282a36',
                    'editorCursor.foreground': '#f8f8f0',
                    'editor.lineHighlightBackground': '#44475a',
                    'editorLineNumber.foreground': '#6272a4',
                    'editor.selectionBackground': '#44475a',
                    'editor.inactiveSelectionBackground': '#44475a88',
                  },
                });

                // ✅ Set it as the active theme
                monaco.editor.setTheme('dracula');
              }}



              options={{
                fontSize: 20,
                fontFamily: 'Fira Code, monospace',
                fontLigatures: true,
                minimap: { enabled: false },
                wordWrap: 'on',
                automaticLayout: true,
                scrollBeyondLastLine: false,
                smoothScrolling: true,
                tabSize: 4,
                lineNumbers: 'on',
              }}
            />
          </div>

          <div className="mt-6">
            <label className="text-violet-400 block mb-2 ">Custom Input (stdin):</label>
            <textarea
              rows={4}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-full bg-gray-800 text-white p-3 rounded-xl mb-4 border border-white"
              placeholder="Enter custom input if needed..."
            />
          </div>

          <motion.div
            key={output} // this forces remount to retrigger animation
            className="mt-6 bg-gray-900 rounded-2xl p-4 shadow-inner border-2 border-purple-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <h2 className="text-lg font-semibold text-violet-400 mb-2">Output:</h2>
            <pre className="bg-gray-800 text-green-400 p-3 rounded-xl font-mono text-sm whitespace-pre-wrap">
              {output || "// Your output will appear here"}
            </pre>
          </motion.div>



          <div className="mt-4 flex items-center gap-4">
            <button
              onClick={handleSubmitCode}
              disabled={isSubmitting}
              className={`px-4 py-2 rounded-xl flex items-center gap-2 transition cursor-pointer duration-300 ${isSubmitting
                ? "bg-gray-700 cursor-not-allowed"
                : "bg-green-600 hover:bg-green-700"
                }`}
            >
              {isSubmitting ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                    className="w-4 h-4 border-2 border-t-2 border-white  rounded-full border-t-transparent "
                  />
                  Submitting...
                </>
              ) : (
                "Submit"
              )}
            </button>
          </div>
        </motion.div>
      </div>

    </>
  );
}
