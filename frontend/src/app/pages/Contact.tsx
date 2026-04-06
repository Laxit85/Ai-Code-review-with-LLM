import { Mail, MessageSquare } from "lucide-react";

export function Contact() {
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

      {/* Contact Info Section */}
      <section className="max-w-5xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-2 gap-6">
          
          {/* Email Card */}
          <div className="bg-[#161B22] rounded-xl border border-[#30363D] p-8 shadow-lg hover:shadow-xl transition">
            <div className="bg-[#4F9D8C]/10 w-14 h-14 rounded-lg flex items-center justify-center mb-5">
              <Mail className="w-7 h-7 text-[#4F9D8C]" />
            </div>
            <h3 className="text-xl font-semibold text-[#E6EDF3] mb-2">
              Email Us
            </h3>
            <p className="text-[#8B949E] mb-3">
              Reach out to us anytime via email.
            </p>
            <a
              href="mailto:support@aicodereview.com"
              className="text-[#4F9D8C] font-medium hover:underline"
            >
              laxitjangid2k5@gmail.com
            </a>
          </div>

          {/* Community Card */}
          <div className="bg-[#161B22] rounded-xl border border-[#30363D] p-8 shadow-lg hover:shadow-xl transition">
            <div className="bg-[#4F9D8C]/10 w-14 h-14 rounded-lg flex items-center justify-center mb-5">
              <MessageSquare className="w-7 h-7 text-[#4F9D8C]" />
            </div>
            <h3 className="text-xl font-semibold text-[#E6EDF3] mb-2">
              Community
            </h3>
            <p className="text-[#8B949E] mb-3">
              Join our Discord server for support and discussions.
            </p>
            <button className="text-[#4F9D8C] font-medium hover:underline">
              Join Discord
            </button>
          </div>

        </div>
      </section>
    </div>
  );
}