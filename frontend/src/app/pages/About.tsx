import { Brain, Target, Rocket, Users } from "lucide-react";

export function About() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-[#E6EDF3] mb-6">
            About AI Code Reviewer
          </h1>
          <p className="text-xl text-[#8B949E] leading-relaxed">
            We're building the future of intelligent code analysis, empowering developers 
            to write better, cleaner, and more secure code.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="bg-[#161B22] rounded-xl border border-[#30363D] p-12 shadow-2xl">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-[#4F9D8C]/10 w-12 h-12 rounded-lg flex items-center justify-center">
                <Target className="w-6 h-6 text-[#4F9D8C]" />
              </div>
              <h2 className="text-3xl font-bold text-[#E6EDF3]">Our Mission</h2>
            </div>
            <p className="text-lg text-[#8B949E] leading-relaxed mb-6">
              At AI Code Reviewer, we believe that every developer deserves access to 
              world-class code review tools. Our mission is to democratize code quality 
              analysis by leveraging cutting-edge AI technology to provide instant, 
              actionable feedback.
            </p>
            <p className="text-lg text-[#8B949E] leading-relaxed">
              Whether you're a student learning to code, a professional developer working 
              on production systems, or someone preparing for technical interviews, our 
              platform helps you write better code faster.
            </p>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-[#161B22] rounded-xl border border-[#30363D] p-8 shadow-lg">
            <div className="bg-[#4F9D8C]/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Brain className="w-6 h-6 text-[#4F9D8C]" />
            </div>
            <h3 className="text-2xl font-bold text-[#E6EDF3] mb-4">The Problem</h3>
            <p className="text-[#8B949E] leading-relaxed mb-4">
              Traditional code review processes are time-consuming and often inconsistent. 
              Developers spend countless hours catching bugs, identifying performance issues, 
              and ensuring code quality standards.
            </p>
            <p className="text-[#8B949E] leading-relaxed">
              Without immediate feedback, bad practices can propagate through codebases, 
              leading to technical debt and maintenance headaches down the line.
            </p>
          </div>

          <div className="bg-[#161B22] rounded-xl border border-[#30363D] p-8 shadow-lg">
            <div className="bg-[#4F9D8C]/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Rocket className="w-6 h-6 text-[#4F9D8C]" />
            </div>
            <h3 className="text-2xl font-bold text-[#E6EDF3] mb-4">Our Solution</h3>
            <p className="text-[#8B949E] leading-relaxed mb-4">
              AI Code Reviewer provides instant, intelligent analysis of your code. 
              Our advanced AI models are trained on millions of code samples, learning 
              from the best practices of the global developer community.
            </p>
            <p className="text-[#8B949E] leading-relaxed">
              Get real-time feedback on code quality, security vulnerabilities, performance 
              optimizations, and best practices – all in seconds, not hours.
            </p>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="bg-[#161B22] rounded-xl border border-[#30363D] p-12 shadow-2xl">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-[#4F9D8C]/10 w-12 h-12 rounded-lg flex items-center justify-center">
                <Brain className="w-6 h-6 text-[#4F9D8C]" />
              </div>
              <h2 className="text-3xl font-bold text-[#E6EDF3]">Powered by AI</h2>
            </div>
            <p className="text-lg text-[#8B949E] leading-relaxed mb-6">
              Our platform leverages state-of-the-art large language models (LLMs) and 
              machine learning algorithms to understand code context, identify patterns, 
              and provide meaningful insights.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-8">
              <div className="bg-[#1C2128] rounded-lg p-4 border border-[#30363D]">
                <h4 className="font-semibold text-[#E6EDF3] mb-2">Deep Learning</h4>
                <p className="text-sm text-[#8B949E]">
                  Neural networks trained on vast code repositories
                </p>
              </div>
              <div className="bg-[#1C2128] rounded-lg p-4 border border-[#30363D]">
                <h4 className="font-semibold text-[#E6EDF3] mb-2">Static Analysis</h4>
                <p className="text-sm text-[#8B949E]">
                  Advanced algorithms detect patterns and anti-patterns
                </p>
              </div>
              <div className="bg-[#1C2128] rounded-lg p-4 border border-[#30363D]">
                <h4 className="font-semibold text-[#E6EDF3] mb-2">NLP Processing</h4>
                <p className="text-sm text-[#8B949E]">
                  Natural language understanding for code context
                </p>
              </div>
              <div className="bg-[#1C2128] rounded-lg p-4 border border-[#30363D]">
                <h4 className="font-semibold text-[#E6EDF3] mb-2">Continuous Learning</h4>
                <p className="text-sm text-[#8B949E]">
                  Models improve with each code review
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="max-w-7xl mx-auto px-6 py-12 pb-20">
        <h2 className="text-3xl font-bold text-[#E6EDF3] text-center mb-12">
          Our Values
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-[#161B22] rounded-xl border border-[#30363D] p-8 shadow-lg text-center">
            <div className="bg-[#4F9D8C]/10 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-[#4F9D8C]" />
            </div>
            <h3 className="text-xl font-bold text-[#E6EDF3] mb-3">Developer First</h3>
            <p className="text-[#8B949E]">
              Built by developers, for developers. We understand your workflow and challenges.
            </p>
          </div>

          <div className="bg-[#161B22] rounded-xl border border-[#30363D] p-8 shadow-lg text-center">
            <div className="bg-[#4F9D8C]/10 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Target className="w-8 h-8 text-[#4F9D8C]" />
            </div>
            <h3 className="text-xl font-bold text-[#E6EDF3] mb-3">Quality Focused</h3>
            <p className="text-[#8B949E]">
              We're obsessed with code quality and helping you achieve excellence.
            </p>
          </div>

          <div className="bg-[#161B22] rounded-xl border border-[#30363D] p-8 shadow-lg text-center">
            <div className="bg-[#4F9D8C]/10 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Rocket className="w-8 h-8 text-[#4F9D8C]" />
            </div>
            <h3 className="text-xl font-bold text-[#E6EDF3] mb-3">Innovation Driven</h3>
            <p className="text-[#8B949E]">
              Constantly pushing boundaries with the latest AI and ML technologies.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
