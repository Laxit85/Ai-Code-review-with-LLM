import { Link } from "react-router";
import { Github, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#161B22] border-t border-[#30363D] mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Left - Branding */}
          <div>
            <h3 className="font-semibold text-[#E6EDF3] mb-2">AI Code Reviewer</h3>
            <p className="text-sm text-[#8B949E]">
              Intelligent code analysis for modern developers
            </p>
          </div>
          
          {/* Center - Links */}
          <div className="flex gap-6 justify-start md:justify-center">
            <Link to="/" className="text-sm text-[#8B949E] hover:text-[#E6EDF3] transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-sm text-[#8B949E] hover:text-[#E6EDF3] transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-sm text-[#8B949E] hover:text-[#E6EDF3] transition-colors">
              Contact
            </Link>
          </div>
          
          {/* Right - Social */}
          <div className="flex gap-4 justify-start md:justify-end">
            <a
              href="https://github.com/Laxit85"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8B949E] hover:text-[#E6EDF3] transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/laxit-jangid-8588a3257/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8B949E] hover:text-[#E6EDF3] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-[#30363D]">
          <p className="text-sm text-[#8B949E] text-center">
            © 2026 AI Code Reviewer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
