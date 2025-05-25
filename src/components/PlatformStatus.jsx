import React from "react";
import { ShieldCheck, Activity, Server, Rocket } from "lucide-react";


const PlatformStatus = () => {
  return (
    <>
      <style>
        {
          `
       @keyframes blink {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.3; transform: scale(1.15); }
}

.blink {
  animation: blink 0.9s infinite;
}
  



        `
        }
      </style>
      <div className="bg-gray-800 p-6 rounded-2xl shadow-md border border-violet-500 hover:shadow-violet-700 transition duration-300">
        <h3 className="text-2xl font-bold text-violet-400 mb-6 tracking-wide flex items-center gap-2">
          <ShieldCheck className="text-green-400 animate-pulse" />
          Platform Status
        </h3>
        <ul className="space-y-4 text-gray-300 text-base leading-relaxed">
          <li className="flex items-center gap-3">
            <span className="text-green-400 animate-pulse blink text-lg">🟢</span>
            <span>All systems operational</span>
          </li>
          <li className="flex items-center gap-3">
            <Activity className="text-yellow-400 blink" />
            <span>API latency: <span className="blink text-black font-bold px-3 py-1 rounded-lg bg-yellow-500 bg-opacity-30 shadow-md shadow-yellow-400">132ms</span></span>
          </li>
          <li className="flex items-center gap-3">
            <Server className="text-blue-400 animate-pulse" />
            <span>Piston uptime: <span className="text-blue-300 font-semibold">99.98%</span></span>
          </li>
          <li className="flex items-center gap-3">
            <Rocket className="text-pink-400 blink" />
            <span>Submissions today: <span className="text-pink-300 font-semibold">324</span></span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default PlatformStatus;
