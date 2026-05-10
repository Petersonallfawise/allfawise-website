import { useState, useEffect } from "react";

export default function App() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = ["Training", "AI Solutions", "Business Tools", "About", "Contact"];

  const whatWeDo = [
    {
            icon: "🤖",
            title: "AI Training",
            desc: "Practical AI courses designed for entrepreneurs and professionals who want to use artificial intelligence as a real business tool.",
    },
    {
            icon: "📚",
            title: "Business Education",
            desc: "Strategic knowledge and education to help you build, manage, and grow a modern business with clarity and confidence.",
    },
    {
            icon: "⚙️",
            title: "Productivity Systems",
            desc: "Smart workflows, tools, and frameworks to help you organize your time, your team, and your results effectively.",
    },
    {
            icon: "📈",
            title: "Digital Growth",
            desc: "Marketing, automation, and digital strategies to expand your reach and turn your knowledge into scalable income.",
    },
      ];

  const method = [
    { step: "01", title: "Learn", desc: "Absorb practical knowledge designed for the real world." },
    { step: "02", title: "Organize", desc: "Structure your ideas, goals, and systems with clarity." },
    { step: "03", title: "Build", desc: "Take action and build your business or project with guidance." },
    { step: "04", title: "Scale", desc: "Grow your results, your reach, and your impact intentionally." },
      ];

  const programs = [
    { icon: "🤖", title: "AI for Business", desc: "Use AI tools to automate, create, and grow your business faster." },
    { icon: "⚡", title: "AI for Productivity", desc: "Master AI workflows that save time and boost daily performance." },
    { icon: "🛒", title: "Amazon Seller Training", desc: "Launch and scale your Amazon store with proven strategies." },
    { icon: "📣", title: "Digital Marketing", desc: "Build your online presence and attract your ideal audience." },
    { icon: "🏆", title: "Leadership & Personal Growth", desc: "Develop the mindset and skills of high-performing leaders." },
    { icon: "🏗️", title: "Business Systems", desc: "Create processes and systems that allow your business to run smarter." },
      ];

  const trustItems = [
        "Entrepreneurs", "Small Businesses", "Professionals",
        "Creators", "Churches", "Teams",
      ];

  return (
        <div className="min-h-screen bg-white text-gray-900 font-sans">
        
          {/* Header */}
              <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md" : "bg-transparent"}`}>
                      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                            <span className="w-8 h-8 rounded-full bg-gray-900 flex items-center justify-center text-white font-bold text-sm">AW</span>span>
                                            <span className="text-xl font-bold tracking-tight text-gray-900">ALLFAWISE</span>span>
                                </div>div>
                                <nav className="hidden md:flex items-center gap-8">
                                  {navLinks.map((link) => (
                        <a key={link} href={`#${link.toLowerCase().replace(" ", "-")}`} className="text-sm text-gray-600 hover:text-gray-900 transition-colors font-medium">
                          {link}
                        </a>a>
                      ))}
                                </nav>nav>
                                <div className="hidden md:flex items-center gap-4">
                                            <a href="#training" className="bg-gray-900 text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-gray-700 transition-colors">
                                                          Start Learning
                                            </a>a>
                                </div>div>
                                <button className="md:hidden text-gray-900" onClick={() => setMenuOpen(!menuOpen)}>
                                  {menuOpen ? "✕" : "☰"}
                                </button>button>
                      </div>div>
                {menuOpen && (
                    <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
                      {navLinks.map((link) => (
                                    <a key={link} href={`#${link.toLowerCase().replace(" ", "-")}`} className="text-sm text-gray-700 font-medium" onClick={() => setMenuOpen(false)}>
                                      {link}
                                    </a>a>
                                  ))}
                                <a href="#training" className="bg-gray-900 text-white text-sm font-semibold px-5 py-2.5 rounded-full text-center">Start Learning</a>a>
                    </div>div>
                      )}
              </header>header>
        
          {/* Hero Section */}
              <section className="pt-32 pb-24 px-6 bg-gradient-to-br from-gray-50 to-white">
                      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                                <div>
                                            <span className="inline-block bg-gray-100 text-gray-600 text-xs font-semibold px-3 py-1 rounded-full mb-6 tracking-widest uppercase">
                                                          Smart Learning Platform
                                            </span>span>
                                            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-gray-900 mb-6">
                                                          Build Smarter.<br />Learn Faster.<br />
                                                          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">Grow Stronger.</span>span>
                                            </h1>h1>
                                            <p className="text-xl text-gray-500 mb-10 leading-relaxed max-w-lg">
                                                          ALLFAWISE helps people and businesses use AI, training, and practical systems to transform ideas into real growth.
                                            </p>p>
                                            <div className="flex flex-wrap gap-4">
                                                          <a href="#training" className="bg-gray-900 text-white font-semibold px-7 py-3.5 rounded-full hover:bg-gray-700 transition-all shadow-lg">
                                                                          Start Learning
                                                          </a>a>
                                                          <a href="#ai-solutions" className="border border-gray-300 text-gray-700 font-semibold px-7 py-3.5 rounded-full hover:border-gray-500 transition-all">
                                                                          Explore AI Solutions
                                                          </a>a>
                                            </div>div>
                                </div>div>
                                <div className="grid grid-cols-2 gap-4">
                                  {[
          { icon: "🤖", label: "AI Training", color: "from-emerald-50 to-teal-50" },
          { icon: "🏗️", label: "Business Systems", color: "from-blue-50 to-indigo-50" },
          { icon: "⚡", label: "Productivity", color: "from-amber-50 to-orange-50" },
          { icon: "📈", label: "Digital Growth", color: "from-purple-50 to-pink-50" },
                      ].map((item) => (
                                      <div key={item.label} className={`bg-gradient-to-br ${item.color} rounded-2xl p-6 flex flex-col items-center gap-3 shadow-sm hover:shadow-md transition-shadow`}>
                                                      <span className="text-3xl">{item.icon}</span>span>
                                                      <span className="text-sm font-semibold text-gray-700 text-center">{item.label}</span>span>
                                      </div>div>
                                    ))}
                                </div>div>
                      </div>div>
              </section>section>
        
          {/* Trust Section */}
              <section className="py-12 px-6 bg-white border-y border-gray-100">
                      <div className="max-w-7xl mx-auto text-center">
                                <p className="text-sm text-gray-400 uppercase tracking-widest font-semibold mb-6">Designed for</p>p>
                                <div className="flex flex-wrap justify-center gap-3">
                                  {trustItems.map((item) => (
                        <span key={item} className="bg-gray-50 border border-gray-200 text-gray-600 text-sm font-medium px-5 py-2 rounded-full">
                          {item}
                        </span>span>
                      ))}
                                </div>div>
                      </div>div>
              </section>section>
        
          {/* What We Do */}
              <section id="ai-solutions" className="py-24 px-6 bg-white">
                      <div className="max-w-7xl mx-auto">
                                <div className="text-center mb-16">
                                            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">What We Do</h2>h2>
                                            <p className="text-gray-500 text-lg max-w-2xl mx-auto">A full ecosystem of knowledge, tools, and training to help you grow every area of your business and life.</p>p>
                                </div>div>
                                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                                  {whatWeDo.map((item) => (
                        <div key={item.title} className="bg-gray-50 rounded-2xl p-8 hover:shadow-md transition-all group border border-gray-100 hover:border-emerald-200">
                                        <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-2xl mb-5 shadow-sm group-hover:scale-110 transition-transform">
                                          {item.icon}
                                        </div>div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>h3>
                                        <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>p>
                        </div>div>
                      ))}
                                </div>div>
                      </div>div>
              </section>section>
        
          {/* ALLFAWISE Method */}
              <section className="py-24 px-6 bg-gray-900 text-white">
                      <div className="max-w-7xl mx-auto">
                                <div className="text-center mb-16">
                                            <h2 className="text-4xl font-extrabold mb-4">The ALLFAWISE Method</h2>h2>
                                            <p className="text-gray-400 text-lg max-w-2xl mx-auto">A simple and practical path to help you move from confusion to clarity, from ideas to execution, and from effort to growth.</p>p>
                                </div>div>
                                <div className="grid md:grid-cols-4 gap-6">
                                  {method.map((item, i) => (
                        <div key={item.title} className="relative bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all">
                                        <span className="text-5xl font-black text-white/10 absolute top-4 right-6">{item.step}</span>span>
                                        <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold mb-5">
                                          {i + 1}
                                        </div>div>
                                        <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>h3>
                                        <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>p>
                        </div>div>
                      ))}
                                </div>div>
                      </div>div>
              </section>section>
        
          {/* Training Programs */}
              <section id="training" className="py-24 px-6 bg-white">
                      <div className="max-w-7xl mx-auto">
                                <div className="text-center mb-16">
                                            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Training Programs</h2>h2>
                                            <p className="text-gray-500 text-lg max-w-2xl mx-auto">Practical, results-focused programs built for the modern entrepreneur, professional, and creator.</p>p>
                                </div>div>
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                  {programs.map((program) => (
                        <div key={program.title} className="border border-gray-200 rounded-2xl p-8 hover:border-emerald-400 hover:shadow-lg transition-all group">
                                        <span className="text-3xl mb-4 block">{program.icon}</span>span>
                                        <h3 className="text-lg font-bold text-gray-900 mb-3">{program.title}</h3>h3>
                                        <p className="text-gray-500 text-sm mb-6 leading-relaxed">{program.desc}</p>p>
                                        <button className="text-sm font-semibold text-emerald-600 group-hover:text-emerald-700 flex items-center gap-2 transition-colors">
                                                          Learn More <span>→</span>span>
                                        </button>button>
                        </div>div>
                      ))}
                                </div>div>
                      </div>div>
              </section>section>
        
          {/* Founder Story */}
              <section className="py-24 px-6 bg-gradient-to-br from-emerald-50 to-teal-50">
                      <div className="max-w-4xl mx-auto text-center">
                                <div className="w-20 h-20 bg-gray-900 rounded-full flex items-center justify-center text-white text-3xl mx-auto mb-8">👤</div>div>
                                <h2 className="text-4xl font-extrabold text-gray-900 mb-6">Built From Real Experience</h2>h2>
                                <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
                                            ALLFAWISE was created from a real desire to help people unlock knowledge, organize their ideas, and transform practical experience into growth. The brand exists for people who want to learn, build, and move forward with clarity.
                                </p>p>
                      </div>div>
              </section>section>
        
          {/* Future Marketplace */}
              <section className="py-24 px-6 bg-white">
                      <div className="max-w-4xl mx-auto text-center">
                                <span className="inline-block bg-amber-100 text-amber-700 text-xs font-semibold px-3 py-1 rounded-full mb-6 tracking-widest uppercase">Coming Soon</span>span>
                                <h2 className="text-4xl font-extrabold text-gray-900 mb-6">More Than Training</h2>h2>
                                <p className="text-gray-500 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
                                            In the future, ALLFAWISE will also connect people with selected tools, digital resources, and products designed to support smarter living and smarter business.
                                </p>p>
                                <button className="border-2 border-gray-900 text-gray-900 font-semibold px-8 py-3.5 rounded-full hover:bg-gray-900 hover:text-white transition-all">
                                            Explore the Vision
                                </button>button>
                      </div>div>
              </section>section>
        
          {/* Final CTA */}
              <section className="py-24 px-6 bg-gray-900 text-white text-center">
                      <div className="max-w-3xl mx-auto">
                                <h2 className="text-5xl font-extrabold mb-6 leading-tight">
                                            Your smarter future<br />starts here.
                                </h2>h2>
                                <p className="text-gray-400 text-xl mb-10 leading-relaxed">
                                            Start learning, organizing, and building with ALLFAWISE.
                                </p>p>
                                <a href="#training" className="inline-block bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-10 py-4 rounded-full text-lg transition-all shadow-xl hover:shadow-emerald-500/30">
                                            Start Now
                                </a>a>
                      </div>div>
              </section>section>
        
          {/* Footer */}
              <footer id="contact" className="bg-black text-white py-16 px-6">
                      <div className="max-w-7xl mx-auto">
                                <div className="flex flex-col md:flex-row justify-between items-start gap-10">
                                            <div>
                                                          <div className="flex items-center gap-2 mb-4">
                                                                          <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-gray-900 font-bold text-sm">AW</span>span>
                                                                          <span className="text-xl font-bold tracking-tight">ALLFAWISE</span>span>
                                                          </div>div>
                                                          <p className="text-gray-400 text-sm max-w-xs leading-relaxed">
                                                                          Smart Learning. Smart Systems. Smart Growth.
                                                          </p>p>
                                            </div>div>
                                            <div className="flex flex-wrap gap-12">
                                                          <div>
                                                                          <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Platform</h4>h4>
                                                                          <ul className="space-y-3">
                                                                            {["Training", "AI Solutions", "Business Tools"].map((link) => (
                              <li key={link}>
                                                    <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">{link}</a>a>
                              </li>li>
                            ))}
                                                                          </ul>ul>
                                                          </div>div>
                                                          <div>
                                                                          <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Company</h4>h4>
                                                                          <ul className="space-y-3">
                                                                            {["About", "Contact"].map((link) => (
                              <li key={link}>
                                                    <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">{link}</a>a>
                              </li>li>
                            ))}
                                                                          </ul>ul>
                                                          </div>div>
                                            </div>div>
                                </div>div>
                                <div className="border-t border-white/10 mt-12 pt-8 text-center">
                                            <p className="text-gray-500 text-sm">© 2025 ALLFAWISE. All rights reserved.</p>p>
                                </div>div>
                      </div>div>
              </footer>footer>
        </div>div>
      );
}</div>
