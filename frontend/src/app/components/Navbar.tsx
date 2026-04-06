import { Link, useLocation } from "react-router";
import { Bot } from "lucide-react";

export function Navbar() {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  return (
    <nav className="sticky top-0 z-50 bg-[#0B0F14]/80 backdrop-blur-xl border-b border-[#30363D]">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 text-[#E6EDF3] hover:text-[#4F9D8C] transition-colors">
            <Bot className="w-6 h-6" />
            <span className="font-semibold text-lg">AI Code Reviewer</span>
          </Link>
          
          {/* Navigation Links */}
          <div className="flex items-center gap-8">
            <Link
              to="/"
              className={`text-sm transition-colors relative group ${
                isActive('/') ? 'text-[#E6EDF3]' : 'text-[#8B949E] hover:text-[#E6EDF3]'
              }`}
            >
              Home
              {isActive('/') && (
                <span className="absolute -bottom-[21px] left-0 right-0 h-[1px] bg-[#4F9D8C]"></span>
              )}
            </Link>
            
            <Link
              to="/about"
              className={`text-sm transition-colors relative group ${
                isActive('/about') ? 'text-[#E6EDF3]' : 'text-[#8B949E] hover:text-[#E6EDF3]'
              }`}
            >
              About
              {isActive('/about') && (
                <span className="absolute -bottom-[21px] left-0 right-0 h-[1px] bg-[#4F9D8C]"></span>
              )}
            </Link>
            
            <Link
              to="/contact"
              className={`text-sm transition-colors relative group ${
                isActive('/contact') ? 'text-[#E6EDF3]' : 'text-[#8B949E] hover:text-[#E6EDF3]'
              }`}
            >
              Contact
              {isActive('/contact') && (
                <span className="absolute -bottom-[21px] left-0 right-0 h-[1px] bg-[#4F9D8C]"></span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
