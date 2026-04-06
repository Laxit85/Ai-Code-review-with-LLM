import { useState } from "react";
import { Mail, MessageSquare, Send } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-[#E6EDF3] mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-[#8B949E]">
            Have questions or feedback? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="max-w-7xl mx-auto px-6 py-12 pb-20">
        <div className="max-w-2xl mx-auto">
          <div className="bg-[#161B22] rounded-xl border border-[#30363D] p-8 md:p-12 shadow-2xl">
            {submitted ? (
              <div className="text-center py-12">
                <div className="bg-[#4F9D8C]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="w-8 h-8 text-[#4F9D8C]" />
                </div>
                <h3 className="text-2xl font-bold text-[#E6EDF3] mb-2">
                  Message Sent!
                </h3>
                <p className="text-[#8B949E]">
                  Thank you for reaching out. We'll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#E6EDF3] mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#0B0F14] text-[#E6EDF3] px-4 py-3 rounded-lg border border-[#30363D] focus:outline-none focus:border-[#4F9D8C] transition-colors"
                    placeholder="Your name"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#E6EDF3] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#0B0F14] text-[#E6EDF3] px-4 py-3 rounded-lg border border-[#30363D] focus:outline-none focus:border-[#4F9D8C] transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#E6EDF3] mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full bg-[#0B0F14] text-[#E6EDF3] px-4 py-3 rounded-lg border border-[#30363D] focus:outline-none focus:border-[#4F9D8C] transition-colors resize-none"
                    placeholder="Tell us what's on your mind..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-[#4F9D8C] hover:bg-[#5DAD9A] text-white px-6 py-3 rounded-lg font-medium transition-all transform hover:scale-[1.02] shadow-lg shadow-[#4F9D8C]/20 flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Additional Contact Info */}
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="bg-[#161B22] rounded-xl border border-[#30363D] p-6 shadow-lg">
              <div className="bg-[#4F9D8C]/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-[#4F9D8C]" />
              </div>
              <h3 className="text-lg font-semibold text-[#E6EDF3] mb-2">Email Us</h3>
              <p className="text-sm text-[#8B949E]">
                support@aicodereview.com
              </p>
            </div>

            <div className="bg-[#161B22] rounded-xl border border-[#30363D] p-6 shadow-lg">
              <div className="bg-[#4F9D8C]/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <MessageSquare className="w-6 h-6 text-[#4F9D8C]" />
              </div>
              <h3 className="text-lg font-semibold text-[#E6EDF3] mb-2">Community</h3>
              <p className="text-sm text-[#8B949E]">
                Join our Discord server for support and discussions
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
