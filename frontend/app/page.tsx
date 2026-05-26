export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* HERO SECTION */}
      <section className="flex flex-col items-center justify-center text-center min-h-screen px-6">

        <h1 className="text-7xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent mb-6">
          FlowPilot AI
        </h1>

        <p className="text-2xl text-gray-400 max-w-3xl mb-8">
          Autonomous Multi-Agent Business Operations Ecosystem
        </p>

        <p className="text-gray-500 max-w-2xl mb-10">
          Transforming customer support, workflow automation,
          operational analytics, and AI-driven collaboration
          into one intelligent enterprise platform.
        </p>

        <div className="flex gap-4">
          <button className="bg-blue-600 px-8 py-4 rounded-2xl text-lg hover:bg-blue-700 transition">
            Launch Dashboard
          </button>

          <button className="border border-gray-700 px-8 py-4 rounded-2xl text-lg hover:bg-gray-900 transition">
            Explore Features
          </button>
        </div>

      </section>

      {/* FEATURES SECTION */}
      <section className="py-24 px-8">

        <h2 className="text-5xl font-bold text-center mb-16">
          Core Features
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-gray-900 p-8 rounded-3xl border border-gray-800">
            <h3 className="text-2xl font-semibold mb-4">
              AI Agents
            </h3>

            <p className="text-gray-400">
              Specialized autonomous AI agents for support,
              analytics, workflows, and sales automation.
            </p>
          </div>

          <div className="bg-gray-900 p-8 rounded-3xl border border-gray-800">
            <h3 className="text-2xl font-semibold mb-4">
              Workflow Automation
            </h3>

            <p className="text-gray-400">
              Intelligent orchestration system for automating
              repetitive business operations.
            </p>
          </div>

          <div className="bg-gray-900 p-8 rounded-3xl border border-gray-800">
            <h3 className="text-2xl font-semibold mb-4">
              Operational Analytics
            </h3>

            <p className="text-gray-400">
              Real-time dashboards and insights powered
              by AI-driven business intelligence.
            </p>
          </div>

        </div>

      </section>

    </main>
  );
}