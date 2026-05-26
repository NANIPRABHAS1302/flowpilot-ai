"use client";

import { useState } from "react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "Mon", workflows: 12 },
  { day: "Tue", workflows: 18 },
  { day: "Wed", workflows: 25 },
  { day: "Thu", workflows: 20 },
  { day: "Fri", workflows: 32 },
  { day: "Sat", workflows: 28 },
];

export default function Dashboard() {

  const [prompt, setPrompt] = useState("");

  const [response, setResponse] = useState(
    "AI workflow responses will appear here."
  );

  const handleGenerate = async () => {

    if (!prompt) return;

    setResponse(`
🚨 Workflow Incident Detected

Issue:
${prompt}

━━━━━━━━━━━━━━━━━━━

🤖 Support Agent
• Priority escalation activated
• Customer support ticket generated
• Live response workflow initiated

━━━━━━━━━━━━━━━━━━━

💳 Billing Agent
• Transaction verification initiated
• Payment gateway logs analyzed
• Failed transaction patterns detected

━━━━━━━━━━━━━━━━━━━

📊 Analytics Agent
• Operational metrics updated
• Incident severity classified as HIGH
• Workflow activity logged successfully

━━━━━━━━━━━━━━━━━━━

✅ Resolution Agent
• Customer notified automatically
• Estimated resolution timeline generated
• Multi-agent workflow completed successfully
    `);
  };

  return (
    <main className="min-h-screen bg-black text-white flex">

      {/* SIDEBAR */}
      <aside className="w-72 bg-gray-950 border-r border-gray-800 p-6">

        <h1 className="text-3xl font-bold mb-10 gradient-text">
          FlowPilot AI
        </h1>

        <nav className="space-y-6 text-lg">

          <div className="hover:text-blue-400 cursor-pointer">
            Dashboard
          </div>

          <div className="hover:text-blue-400 cursor-pointer">
            AI Agents
          </div>

          <div className="hover:text-blue-400 cursor-pointer">
            Workflow Engine
          </div>

          <div className="hover:text-blue-400 cursor-pointer">
            Analytics
          </div>

          <div className="hover:text-blue-400 cursor-pointer">
            Knowledge Base
          </div>

          <div className="hover:text-blue-400 cursor-pointer">
            Settings
          </div>

        </nav>

      </aside>

      {/* MAIN CONTENT */}
      <section className="flex-1 p-8">

        {/* LIVE ALERT BAR */}
        <div className="mb-8 bg-blue-500/10 border border-blue-500 text-blue-300 px-6 py-4 rounded-2xl animate-pulse">

          ⚡ Live AI System Alert:
          Multi-Agent Workflow Synchronization Active •
          12 AI Agents Running •
          Operational Stability: 97%

        </div>

        {/* HEADER */}
        <div className="flex justify-between items-center mb-10">

          <div>
            <h2 className="text-4xl font-bold">
              AI Command Center
            </h2>

            <p className="text-gray-400 mt-2">
              Autonomous Multi-Agent Workflow Monitoring
            </p>
          </div>

          <button className="bg-blue-600 px-6 py-3 rounded-2xl hover:bg-blue-700 transition">
            Launch Workflow
          </button>

        </div>

        {/* ANALYTICS CARDS */}
        <div className="grid md:grid-cols-4 gap-6 mb-10">

          <div className="bg-gray-900 p-6 rounded-3xl border border-gray-800 hover-lift">
            <h3 className="text-gray-400 mb-2">Active Agents</h3>
            <p className="text-4xl font-bold text-blue-400">12</p>
          </div>

          <div className="bg-gray-900 p-6 rounded-3xl border border-gray-800 hover-lift">
            <h3 className="text-gray-400 mb-2">Workflows</h3>
            <p className="text-4xl font-bold text-cyan-400">38</p>
          </div>

          <div className="bg-gray-900 p-6 rounded-3xl border border-gray-800 hover-lift">
            <h3 className="text-gray-400 mb-2">Resolved Tasks</h3>
            <p className="text-4xl font-bold text-green-400">124</p>
          </div>

          <div className="bg-gray-900 p-6 rounded-3xl border border-gray-800 hover-lift">
            <h3 className="text-gray-400 mb-2">AI Efficiency</h3>
            <p className="text-4xl font-bold text-purple-400">94%</p>
          </div>

        </div>

        {/* AI CHAT */}
        <div className="bg-gray-900 rounded-3xl border border-gray-800 p-8 hover-lift">

          <h3 className="text-2xl font-bold mb-6">
            AI Workflow Console
          </h3>

          <div className="bg-black border border-gray-700 rounded-2xl p-6 mb-6 whitespace-pre-wrap min-h-[320px]">
            {response}
          </div>

          {/* DEMO SCENARIOS */}
          <div className="flex flex-wrap gap-4 mb-6">

            <button
              onClick={() => setPrompt("Customer payment failed")}
              className="bg-red-500/20 border border-red-500 px-4 py-2 rounded-xl hover:bg-red-500/30"
            >
              Payment Failure
            </button>

            <button
              onClick={() => setPrompt("High priority support escalation")}
              className="bg-yellow-500/20 border border-yellow-500 px-4 py-2 rounded-xl hover:bg-yellow-500/30"
            >
              Support Escalation
            </button>

            <button
              onClick={() => setPrompt("AI workflow automation breakdown")}
              className="bg-blue-500/20 border border-blue-500 px-4 py-2 rounded-xl hover:bg-blue-500/30"
            >
              Workflow Failure
            </button>

            <button
              onClick={() => setPrompt("Customer data synchronization issue")}
              className="bg-cyan-500/20 border border-cyan-500 px-4 py-2 rounded-xl hover:bg-cyan-500/30"
            >
              Data Sync Issue
            </button>

          </div>

          <div className="flex gap-4">

            <input
              type="text"
              placeholder="Enter workflow command..."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="flex-1 bg-black border border-gray-700 rounded-2xl px-6 py-4 outline-none"
            />

            <button
              onClick={handleGenerate}
              className="bg-blue-600 px-6 py-4 rounded-2xl hover:bg-blue-700 transition"
            >
              Execute
            </button>

          </div>

        </div>

        {/* WORKFLOW VISUALIZATION */}
        <div className="mt-10 bg-gray-900 rounded-3xl border border-gray-800 p-8 hover-lift">

          <h3 className="text-2xl font-bold mb-8">
            Autonomous Workflow Pipeline
          </h3>

          <div className="flex flex-wrap items-center justify-between gap-6">

            <div className="bg-red-500/20 border border-red-500 px-6 py-4 rounded-2xl">
              Issue Detected
            </div>

            <div className="text-3xl text-gray-600">
              →
            </div>

            <div className="bg-yellow-500/20 border border-yellow-500 px-6 py-4 rounded-2xl">
              AI Classification
            </div>

            <div className="text-3xl text-gray-600">
              →
            </div>

            <div className="bg-blue-500/20 border border-blue-500 px-6 py-4 rounded-2xl">
              Priority Assignment
            </div>

            <div className="text-3xl text-gray-600">
              →
            </div>

            <div className="bg-cyan-500/20 border border-cyan-500 px-6 py-4 rounded-2xl">
              Agent Coordination
            </div>

            <div className="text-3xl text-gray-600">
              →
            </div>

            <div className="bg-green-500/20 border border-green-500 px-6 py-4 rounded-2xl">
              Automated Resolution
            </div>

          </div>

        </div>

        {/* LIVE AI ACTIVITY */}
        <div className="mt-10 grid md:grid-cols-2 gap-8">

          {/* ACTIVE AGENTS */}
          <div className="bg-gray-900 rounded-3xl border border-gray-800 p-8 hover-lift">

            <h3 className="text-2xl font-bold mb-6">
              Active AI Agents
            </h3>

            <div className="space-y-4">

              <div className="flex items-center justify-between bg-black p-4 rounded-2xl">

                <div>
                  <p className="font-semibold">Support Agent</p>
                  <p className="text-gray-400 text-sm">
                    Monitoring customer incidents
                  </p>
                </div>

                <div className="w-4 h-4 rounded-full bg-green-500 glow-green"></div>

              </div>

              <div className="flex items-center justify-between bg-black p-4 rounded-2xl">

                <div>
                  <p className="font-semibold">Billing Agent</p>
                  <p className="text-gray-400 text-sm">
                    Processing payment workflows
                  </p>
                </div>

                <div className="w-4 h-4 rounded-full bg-blue-500 glow-blue"></div>

              </div>

              <div className="flex items-center justify-between bg-black p-4 rounded-2xl">

                <div>
                  <p className="font-semibold">Analytics Agent</p>
                  <p className="text-gray-400 text-sm">
                    Tracking operational metrics
                  </p>
                </div>

                <div className="w-4 h-4 rounded-full bg-cyan-400 glow-cyan"></div>

              </div>

            </div>

          </div>

          {/* SYSTEM STATUS */}
          <div className="bg-gray-900 rounded-3xl border border-gray-800 p-8 hover-lift">

            <h3 className="text-2xl font-bold mb-6">
              System Status
            </h3>

            <div className="space-y-6">

              <div>
                <div className="flex justify-between mb-2">
                  <span>Workflow Automation</span>
                  <span>94%</span>
                </div>

                <div className="w-full bg-black rounded-full h-3">
                  <div className="bg-blue-500 h-3 rounded-full w-[94%]"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span>AI Agent Coordination</span>
                  <span>89%</span>
                </div>

                <div className="w-full bg-black rounded-full h-3">
                  <div className="bg-cyan-400 h-3 rounded-full w-[89%]"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span>Operational Stability</span>
                  <span>97%</span>
                </div>

                <div className="w-full bg-black rounded-full h-3">
                  <div className="bg-green-500 h-3 rounded-full w-[97%]"></div>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* ANALYTICS CHART */}
        <div className="mt-10 bg-gray-900 rounded-3xl border border-gray-800 p-8 hover-lift">

          <h3 className="text-2xl font-bold mb-8">
            Workflow Analytics
          </h3>

          <div className="h-96">

            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>

                <XAxis dataKey="day" stroke="#888" />

                <YAxis stroke="#888" />

                <Tooltip />

                <Line
                  type="monotone"
                  dataKey="workflows"
                  stroke="#3b82f6"
                  strokeWidth={4}
                />

              </LineChart>
            </ResponsiveContainer>

          </div>

        </div>

      </section>

    </main>
  );
}