import { useState } from "react";
import { 
  Sparkles, 
  Code2, 
  Zap, 
  Shield, 
  GraduationCap, 
  Briefcase, 
  Target, 
  TrendingUp,
  Copy,
  Loader2,
  AlertCircle
} from "lucide-react";

export function Home() {
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("javascript");
  const [showResults, setShowResults] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [reviewResult, setReviewResult] = useState("");

  const handleReview = async () => {
    if (!code.trim()) return;

    setLoading(true);
    setError("");
    setShowResults(true);
    setReviewResult("");

    try {
      const response = await fetch("http://localhost:8000/review", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          code: code,
          language: language,
        }),
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }

      const data = await response.json();
      setReviewResult(data.review);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Review failed. Ensure backend API is running at http://localhost:8000");
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setCode("");
    setLanguage("javascript");
    setShowResults(false);
    setReviewResult("");
    setError("");
    setLoading(false);
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-[#E6EDF3] mb-6 leading-tight">
          AI-Powered Code Review<br />for Modern Developers
        </h1>
        <p className="text-xl text-[#8B949E] mb-8 max-w-2xl mx-auto">
          Analyze, optimize, and improve your code with intelligent insights powered by Google Gemini.
        </p>
        <button
          onClick={() => document.getElementById('code-review')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-[#4F9D8C] hover:bg-[#5DAD9A] text-white px-8 py-3 rounded-xl font-medium transition-all transform hover:scale-105 shadow-lg shadow-[#4F9D8C]/20"
        >
          Start Reviewing Code
        </button>
      </section>

      {/* Code Review Interface */}
      <section id="code-review" className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Left - Code Editor */}
          <div className="bg-[#161B22] rounded-xl border border-[#30363D] overflow-hidden shadow-2xl">
            <div className="bg-[#1C2128] px-4 py-3 border-b border-[#30363D] flex items-center justify-between">
              <span className="text-sm text-[#8B949E]">Code Input</span>
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="bg-[#0B0F14] text-[#E6EDF3] text-sm px-3 py-1.5 rounded-lg border border-[#30363D] focus:outline-none focus:border-[#4F9D8C]"
                title="Select programming language"
                aria-label="Select programming language"
                disabled={loading}
              >
                <option value="javascript">JavaScript</option>
                <option value="python">Python</option>
                <option value="typescript">TypeScript</option>
                <option value="java">Java</option>
                <option value="cpp">C++</option>
              </select>
            </div>
            <div className="p-4">
              <textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Paste your code here..."
                className="w-full h-[400px] bg-[#0B0F14] text-[#E6EDF3] p-4 rounded-lg border border-[#30363D] focus:outline-none focus:border-[#4F9D8C] font-mono font-['JetBrains_Mono'] text-sm leading-relaxed resize-none"
                disabled={loading}
              />
            </div>
            <div className="px-4 pb-4 flex gap-3">
              <button
                onClick={handleReview}
                disabled={!code.trim() || loading}
                className="flex-1 bg-[#4F9D8C] hover:bg-[#5DAD9A] text-white px-6 py-2.5 rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  "Review Code"
                )}
              </button>
              <button
                onClick={handleClear}
                disabled={loading}
                className="bg-[#1C2128] hover:bg-[#30363D] text-[#8B949E] hover:text-[#E6EDF3] px-6 py-2.5 rounded-lg font-medium transition-colors border border-[#30363D] disabled:opacity-50"
              >
                Clear
              </button>
            </div>
          </div>

          {/* Right - Output Panel */}
          <div className="space-y-4">
            {error && (
              <div className="bg-[#1C2128] border border-red-500/50 rounded-xl p-6 shadow-lg">
                <div className="flex items-start gap-3 mb-3">
                  <AlertCircle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                  <h3 className="text-lg font-semibold text-[#E6EDF3]">Review Error</h3>
                </div>
                <p className="text-sm text-red-300">{error}</p>
                <p className="text-xs text-red-500/80 mt-2">
                  • Backend API must be running (python main.py api)
                </p>
              </div>
            )}
            {loading ? (
              <div className="bg-[#161B22] rounded-xl border border-[#30363D] p-12 text-center shadow-lg flex flex-col items-center justify-center space-y-4 h-full">
                <Loader2 className="w-12 h-12 text-[#4F9D8C] animate-spin" />
                <div>
                  <p className="text-[#E6EDF3] font-medium">AI analyzing your code...</p>
                  <p className="text-sm text-[#8B949E]">Google Gemini LLM processing (~15-30s)</p>
                </div>
              </div>
            ) : showResults && reviewResult ? (
              <div className="bg-[#161B22] rounded-xl border border-[#30363D] shadow-lg max-h-[600px] overflow-hidden">
                <div className="bg-[#1C2128] px-6 py-4 border-b border-[#30363D] flex items-center justify-between sticky top-0 z-10">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-[#4F9D8C]" />
                    <h3 className="text-lg font-semibold text-[#E6EDF3]">AI Code Review</h3>
                  </div>
                  <button
                    onClick={() => handleCopy(reviewResult)}
                    className="text-[#8B949E] hover:text-[#4F9D8C] hover:bg-[#30363D] p-2 rounded-lg transition-all"
                    title="Copy full review"
                  >
                    <Copy className="w-5 h-5" />
                  </button>
                </div>
                <div className="p-6 max-h-[500px] overflow-y-auto">
                  <pre className="bg-[#0B0F14] p-6 rounded-xl text-[14px] text-[#E6EDF3] whitespace-pre-wrap border border-[#30363D] font-mono font-['JetBrains_Mono'] leading-relaxed">
                    {reviewResult}
                  </pre>
                </div>
              </div>
            ) : (
              <div className="bg-[#161B22] rounded-xl border border-[#30363D] p-12 text-center shadow-lg h-full flex flex-col items-center justify-center">
                <Code2 className="w-12 h-12 text-[#30363D] mb-4" />
                <p className="text-[#8B949E] max-w-md text-center">
                  Paste your code on the left and click "Review Code" to get instant AI-powered analysis
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-[#E6EDF3] text-center mb-12">
          Powered by Google Gemini LLM
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-[#161B22] rounded-xl border border-[#30363D] p-6 shadow-lg hover:border-[#4F9D8C]/50 group transition-all">
            <div className="bg-[#4F9D8C]/10 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Sparkles className="w-7 h-7 text-[#4F9D8C]" />
            </div>
            <h3 className="text-lg font-semibold text-[#E6EDF3] mb-3">Deep Analysis</h3>
            <p className="text-sm text-[#8B949E]">Bugs, complexity, optimizations, best practices.</p>
          </div>
          <div className="bg-[#161B22] rounded-xl border border-[#30363D] p-6 shadow-lg hover:border-[#4F9D8C]/50 group transition-all">
            <div className="bg-[#4F9D8C]/10 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Code2 className="w-7 h-7 text-[#4F9D8C]" />
            </div>
            <h3 className="text-lg font-semibold text-[#E6EDF3] mb-3">Multi-Language</h3>
            <p className="text-sm text-[#8B949E]">Python, JS, TS, Java, C++, & more.</p>
          </div>
          <div className="bg-[#161B22] rounded-xl border border-[#30363D] p-6 shadow-lg hover:border-[#4F9D8C]/50 group transition-all">
            <div className="bg-[#4F9D8C]/10 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Zap className="w-7 h-7 text-[#4F9D8C]" />
            </div>
            <h3 className="text-lg font-semibold text-[#E6EDF3] mb-3">Production FastAPI</h3>
            <p className="text-sm text-[#8B949E]">Scalable backend, CORS, error handling.</p>
          </div>
          <div className="bg-[#161B22] rounded-xl border border-[#30363D] p-6 shadow-lg hover:border-[#4F9D8C]/50 group transition-all">
            <div className="bg-[#4F9D8C]/10 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Shield className="w-7 h-7 text-[#4F9D8C]" />
            </div>
            <h3 className="text-lg font-semibold text-[#E6EDF3] mb-3">Full-Stack Ready</h3>
            <p className="text-sm text-[#8B949E]">React UI + real-time Gemini responses.</p>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-[#E6EDF3] text-center mb-12">
          Perfect For Every Developer
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-[#161B22] rounded-xl border border-[#30363D] p-6 shadow-lg hover:border-[#4F9D8C]/50 transition-all group cursor-pointer">
            <GraduationCap className="w-10 h-10 text-[#4F9D8C] mb-4 mx-auto group-hover:scale-110 transition-transform" />
            <h3 className="text-lg font-semibold text-[#E6EDF3] mb-2 text-center">Students</h3>
            <p className="text-sm text-[#8B949E] text-center">Learn coding best practices instantly.</p>
          </div>
          <div className="bg-[#161B22] rounded-xl border border-[#30363D] p-6 shadow-lg hover:border-[#4F9D8C]/50 transition-all group cursor-pointer">
            <Briefcase className="w-10 h-10 text-[#4F9D8C] mb-4 mx-auto group-hover:scale-110 transition-transform" />
            <h3 className="text-lg font-semibold text-[#E6EDF3] mb-2 text-center">Developers</h3>
            <p className="text-sm text-[#8B949E] text-center">Catch bugs & maintain code quality.</p>
          </div>
          <div className="bg-[#161B22] rounded-xl border border-[#30363D] p-6 shadow-lg hover:border-[#4F9D8C]/50 transition-all group cursor-pointer">
            <Target className="w-10 h-10 text-[#4F9D8C] mb-4 mx-auto group-hover:scale-110 transition-transform" />
            <h3 className="text-lg font-semibold text-[#E6EDF3] mb-2 text-center">Interviews</h3>
            <p className="text-sm text-[#8B949E] text-center">Ace technical coding interviews.</p>
          </div>
          <div className="bg-[#161B22] rounded-xl border border-[#30363D] p-6 shadow-lg hover:border-[#4F9D8C]/50 transition-all group cursor-pointer">
            <TrendingUp className="w-10 h-10 text-[#4F9D8C] mb-4 mx-auto group-hover:scale-110 transition-transform" />
            <h3 className="text-lg font-semibold text-[#E6EDF3] mb-2 text-center">Optimization</h3>
            <p className="text-sm text-[#8B949E] text-center">Performance & complexity improvements.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

