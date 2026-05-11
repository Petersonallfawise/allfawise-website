import { motion } from "framer-motion";
import { ArrowRight, Check, Menu, Search, ShieldCheck, ShoppingBag, Sparkles, Star, Truck, Droplets, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function AllfawisePremiumStore() {
  const products = [
    { name: "Premium Gutter Guard", price: "$24.90", oldPrice: "$39.90", badge: "Best Seller", description: "Heavy-duty gutter protection that keeps leaves and debris out all year long." },
    { name: "Downspout Extender", price: "$12.90", oldPrice: "$19.90", badge: "Viral Pick", description: "Flexible extender that directs water away from your foundation quickly and easily." },
    { name: "Splash Block", price: "$18.90", oldPrice: "$28.90", badge: "New Arrival", description: "Durable splash block that prevents soil erosion and protects your home base." },
    { name: "Gutter Cleaning Kit", price: "$21.90", oldPrice: "$34.90", badge: "Hot Deal", description: "Complete kit to clean and maintain your gutters without climbing a ladder." },
  ];
  const benefits = [
    { icon: <Droplets className="h-6 w-6" />, title: "Water damage prevention", desc: "Our products redirect water away from your home to prevent costly damage." },
    { icon: <ShieldCheck className="h-6 w-6" />, title: "Durable materials", desc: "Built to withstand all weather conditions." },
    { icon: <Home className="h-6 w-6" />, title: "Easy DIY installation", desc: "Simple setup with no tools required. Protect your home in minutes." },
  ];
  const reviews = ["Best gutter guard I have ever bought. No more clogged gutters!", "The extender is perfect — my basement stays dry now.", "Great splash block, very solid and easy to install."];
  const navLinks = ["Products", "Why Allfawise", "Reviews", "Contact"];
  return (
    <main className="min-h-screen bg-[#f7f4ef] text-[#1f1f1f]">
      <div className="bg-[#1f1f1f] text-white text-center text-sm py-3 px-4">Free shipping on orders over $49 • Protect your home today • 30-day money back guarantee</div>
      <header className="sticky top-0 z-50 bg-[#f7f4ef]/90 backdrop-blur-md border-b border-black/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Menu className="h-6 w-6 md:hidden" />
            <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
              {navLinks.map((link) => (<a key={link} href={"#" + link.toLowerCase().replace(" ", "-")} className="hover:opacity-60">{link}</a>))}
            </nav>
          </div>
          <div className="text-2xl font-bold tracking-[0.22em]">ALLFAWISE</div>
          <div className="flex items-center gap-5"><Search className="h-5 w-5" /><ShoppingBag className="h-5 w-5" /></div>
        </div>
      </header>
      <section className="max-w-7xl mx-auto px-6 pt-10 pb-20 grid lg:grid-cols-2 gap-8 items-stretch">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="bg-white rounded-[2rem] p-8 md:p-14 flex flex-col justify-between min-h-[620px] shadow-sm">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#f0ebe2] px-4 py-2 mb-7 text-sm"><Sparkles className="h-4 w-4" />Premium gutter protection products.</div>
            <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[0.95] mb-8">Protect your home from water damage.</h1>
            <p className="text-lg md:text-xl text-neutral-600 max-w-xl mb-10 leading-relaxed">Allfawise offers premium gutters, downspout extenders, and splash blocks to keep your home safe, dry, and protected all year long.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="rounded-full px-8 py-7 text-base bg-[#1f1f1f] hover:bg-black">Shop now <ArrowRight className="ml-2 h-5 w-5" /></Button>
            <Button variant="outline" className="rounded-full px-8 py-7 text-base border-black/20 bg-transparent">View all products</Button>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.15 }} className="rounded-[2rem] overflow-hidden min-h-[620px] bg-[#ddd5c8] relative shadow-sm">
          <div className="absolute top-6 left-6 bg-white rounded-full px-5 py-3 text-sm font-medium shadow-sm">Featured Product</div>
          <div className="absolute inset-0 flex items-center justify-center p-8">
            <div className="w-full max-w-md bg-white rounded-[2rem] p-8 text-center shadow-2xl">
              <div className="h-72 rounded-[1.5rem] bg-[#f1ede6] flex items-center justify-center mb-8"><Droplets className="h-28 w-28 text-blue-300" /></div>
              <p className="text-sm uppercase tracking-[0.2em] text-neutral-500 mb-3">Best Seller</p>
              <h2 className="text-3xl font-semibold mb-3">Premium Gutter Guard</h2>
              <p className="text-neutral-500 mb-6">Heavy-duty protection against leaves and debris.</p>
              <div className="flex items-center justify-center gap-3 mb-7"><span className="text-3xl font-bold">$24.90</span><span className="text-neutral-400 line-through">$39.90</span></div>
              <Button className="w-full rounded-full py-6 bg-[#1f1f1f] hover:bg-black">Buy now</Button>
            </div>
          </div>
        </motion.div>
      </section>
      <section className="max-w-7xl mx-auto px-6 pb-12">
        <div className="bg-white rounded-[2rem] p-6 grid md:grid-cols-4 gap-6 shadow-sm text-center">
          <div className="flex flex-col items-center gap-2"><Truck className="h-6 w-6" /><p className="font-medium">Fast shipping</p></div>
          <div className="flex flex-col items-center gap-2"><ShieldCheck className="h-6 w-6" /><p className="font-medium">Secure checkout</p></div>
          <div className="flex flex-col items-center gap-2"><Star className="h-6 w-6" /><p className="font-medium">Top rated products</p></div>
          <div className="flex flex-col items-center gap-2"><Check className="h-6 w-6" /><p className="font-medium">30-day guarantee</p></div>
        </div>
      </section>
      <section id="products" className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div><p className="text-sm uppercase tracking-[0.25em] text-neutral-500 mb-3">Shop Collection</p><h2 className="text-4xl md:text-6xl font-semibold tracking-tight">Our products</h2></div>
          <p className="text-neutral-600 max-w-md text-lg">Everything you need to protect your gutters and redirect water safely.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product.name} className="rounded-[2rem] overflow-hidden border-0 shadow-sm bg-white group">
              <div className="relative h-72 bg-[#e8e1d6] flex items-center justify-center">
                <div className="absolute top-4 left-4 bg-white rounded-full px-4 py-2 text-xs font-medium shadow-sm">{product.badge}</div>
                <Droplets className="h-24 w-24 text-blue-200 group-hover:scale-110 transition-transform" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">{product.name}</h3>
                <p className="text-neutral-600 text-sm mb-5 leading-relaxed">{product.description}</p>
                <div className="flex items-center gap-2 mb-5"><span className="text-2xl font-semibold">{product.price}</span><span className="text-neutral-400 line-through text-sm">{product.oldPrice}</span></div>
                <Button className="w-full rounded-full bg-[#1f1f1f] hover:bg-black">Add to cart</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      <section id="why-allfawise" className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
          <div className="rounded-[2rem] bg-[#eee8dd] min-h-[540px] flex items-center justify-center p-8">
            <div className="bg-[#f7f4ef] rounded-[1.5rem] p-10 max-w-sm text-center shadow-lg">
              <Droplets className="h-16 w-16 mx-auto mb-6 text-blue-400" />
              <h3 className="text-3xl font-semibold mb-4">Simple products. Real protection.</h3>
              <p className="text-neutral-600 leading-relaxed">Our gutter products solve real problems — keeping water away from your foundation, preventing leaks and erosion.</p>
            </div>
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-neutral-500 mb-5">Why Allfawise</p>
            <h2 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight mb-8">Affordable gutter solutions that actually work.</h2>
            <p className="text-lg text-neutral-600 leading-relaxed mb-8">We offer practical, durable, and easy-to-install gutter products that protect your home without breaking the bank.</p>
            <div className="space-y-5">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="flex gap-4">
                  <div className="h-11 w-11 rounded-full bg-[#f0ebe2] flex items-center justify-center shrink-0">{benefit.icon}</div>
                  <div><h3 className="font-semibold text-lg mb-1">{benefit.title}</h3><p className="text-neutral-600">{benefit.desc}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section id="reviews" className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-12"><p className="text-sm uppercase tracking-[0.25em] text-neutral-500 mb-3">Reviews</p><h2 className="text-4xl md:text-6xl font-semibold tracking-tight">Homeowners love our products.</h2></div>
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <Card key={index} className="rounded-[2rem] border-0 shadow-sm bg-white">
              <CardContent className="p-8">
                <div className="flex gap-1 mb-5">{[1,2,3,4,5].map((s) => <Star key={s} className="h-5 w-5 fill-current" />)}</div>
                <p className="text-xl font-medium mb-6">"{review}"</p>
                <p className="text-neutral-500">Verified Customer</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      <section id="contact" className="px-6 pb-24">
        <div className="max-w-7xl mx-auto bg-[#1f1f1f] text-white rounded-[2rem] p-10 md:p-16 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-neutral-400 mb-5">Allfawise Store</p>
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-8">Protect your home. Shop gutter solutions today.</h2>
          <p className="text-neutral-300 text-lg max-w-2xl mx-auto mb-10">From gutter guards to splash blocks — everything you need to keep water away from your home. Fast shipping and easy returns.</p>
          <Button className="rounded-full px-10 py-7 text-base bg-white text-black hover:bg-neutral-200">Shop all products <ArrowRight className="ml-2 h-5 w-5" /></Button>
        </div>
      </section>
      <footer className="border-t border-black/10 py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-4 text-sm text-neutral-500">
          <p>© 2026 ALLFAWISE. All rights reserved.</p>
          <div className="flex gap-6"><a href="#">Privacy</a><a href="#">Terms</a><a href="#">Support</a></div>
        </div>
      </footer>
    </main>
  );
}import { useState, useEffect } from "react";

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
      { icon: "AI", title: "AI Training", desc: "Practical AI courses designed for entrepreneurs and professionals who want to use artificial intelligence as a real business tool." },
      { icon: "ED", title: "Business Education", desc: "Strategic knowledge and education to help you build, manage, and grow a modern business with clarity and confidence." },
      { icon: "PR", title: "Productivity Systems", desc: "Smart workflows, tools, and frameworks to help you organize your time, your team, and your results effectively." },
      { icon: "DG", title: "Digital Growth", desc: "Marketing, automation, and digital strategies to expand your reach and turn your knowledge into scalable income." },
        ];

  const method = [
      { step: "01", num: 1, title: "Learn", desc: "Absorb practical knowledge designed for the real world." },
      { step: "02", num: 2, title: "Organize", desc: "Structure your ideas, goals, and systems with clarity." },
      { step: "03", num: 3, title: "Build", desc: "Take action and build your business or project with guidance." },
      { step: "04", num: 4, title: "Scale", desc: "Grow your results, your reach, and your impact intentionally." },
        ];

  const programs = [
      { icon: "AI", title: "AI for Business", desc: "Use AI tools to automate, create, and grow your business faster." },
      { icon: "PD", title: "AI for Productivity", desc: "Master AI workflows that save time and boost daily performance." },
      { icon: "AM", title: "Amazon Seller Training", desc: "Launch and scale your Amazon store with proven strategies." },
      { icon: "DM", title: "Digital Marketing", desc: "Build your online presence and attract your ideal audience." },
      { icon: "LD", title: "Leadership and Personal Growth", desc: "Develop the mindset and skills of high-performing leaders." },
      { icon: "BS", title: "Business Systems", desc: "Create processes and systems that allow your business to run smarter." },
        ];

  const trustItems = ["Entrepreneurs", "Small Businesses", "Professionals", "Creators", "Churches", "Teams"];

  const heroCards = [
      { label: "AI Training", color: "from-emerald-50 to-teal-50" },
      { label: "Business Systems", color: "from-blue-50 to-indigo-50" },
      { label: "Productivity", color: "from-amber-50 to-orange-50" },
      { label: "Digital Growth", color: "from-purple-50 to-pink-50" },
        ];

  return (
          <div className="min-h-screen bg-white text-gray-900 font-sans">
          
                <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md" : "bg-white/90 backdrop-blur"}`}>
                        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                                  <div className="flex items-center gap-2">
                                              <span className="w-8 h-8 rounded-full bg-gray-900 flex items-center justify-center text-white font-bold text-xs">AW</span>span>
                                              <span className="text-xl font-bold tracking-tight text-gray-900">ALLFAWISE</span>span>
                                  </div>div>
                                  <nav className="hidden md:flex items-center gap-8">
                                      {navLinks.map((link) => (
                            <a key={link} href={"#" + link.toLowerCase().replace(" ", "-")} className="text-sm text-gray-600 hover:text-gray-900 transition-colors font-medium">
                                {link}
                            </a>a>
                          ))}
                                  </nav>nav>
                                  <div className="hidden md:flex items-center gap-4">
                                              <a href="#training" className="bg-gray-900 text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-gray-700 transition-colors">
                                                            Start Learning
                                              </a>a>
                                  </div>div>
                                  <button className="md:hidden text-gray-900 text-xl" onClick={() => setMenuOpen(!menuOpen)}>
                                      {menuOpen ? "X" : "="}
                                  </button>button>
                        </div>div>
                    {menuOpen && (
                        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
                            {navLinks.map((link) => (
                                          <a key={link} href={"#" + link.toLowerCase().replace(" ", "-")} className="text-sm text-gray-700 font-medium" onClick={() => setMenuOpen(false)}>
                                              {link}
                                          </a>a>
                                        ))}
                                    <a href="#training" className="bg-gray-900 text-white text-sm font-semibold px-5 py-2.5 rounded-full text-center">Start Learning</a>a>
                        </div>div>
                        )}
                </header>header>
          
                <section className="pt-32 pb-24 px-6 bg-gradient-to-br from-gray-50 to-white">
                        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                                  <div>
                                              <span className="inline-block bg-gray-100 text-gray-600 text-xs font-semibold px-3 py-1 rounded-full mb-6 tracking-widest uppercase">
                                                            Smart Learning Platform
                                              </span>span>
                                              <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-gray-900 mb-6">
                                                            Build Smarter.<br />Learn Faster.<br />
                                                            <span className="text-emerald-600">Grow Stronger.</span>span>
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
                                      {heroCards.map((item) => (
                            <div key={item.label} className={"bg-gradient-to-br " + item.color + " rounded-2xl p-6 flex flex-col items-center gap-3 shadow-sm hover:shadow-md transition-shadow"}>
                                            <span className="text-2xl font-bold text-gray-700">{item.label.slice(0, 2)}</span>span>
                                            <span className="text-sm font-semibold text-gray-700 text-center">{item.label}</span>span>
                            </div>div>
                          ))}
                                  </div>div>
                        </div>div>
                </section>section>
          
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
          
                <section id="ai-solutions" className="py-24 px-6 bg-white">
                        <div className="max-w-7xl mx-auto">
                                  <div className="text-center mb-16">
                                              <h2 className="text-4xl font-extrabold text-gray-900 mb-4">What We Do</h2>h2>
                                              <p className="text-gray-500 text-lg max-w-2xl mx-auto">A full ecosystem of knowledge, tools, and training to help you grow every area of your business and life.</p>p>
                                  </div>div>
                                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                                      {whatWeDo.map((item) => (
                            <div key={item.title} className="bg-gray-50 rounded-2xl p-8 hover:shadow-md transition-all group border border-gray-100 hover:border-emerald-200">
                                            <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center text-white font-bold mb-5 text-sm">
                                                {item.icon}
                                            </div>div>
                                            <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>h3>
                                            <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>p>
                            </div>div>
                          ))}
                                  </div>div>
                        </div>div>
                </section>section>
          
                <section className="py-24 px-6 bg-gray-900 text-white">
                        <div className="max-w-7xl mx-auto">
                                  <div className="text-center mb-16">
                                              <h2 className="text-4xl font-extrabold mb-4">The ALLFAWISE Method</h2>h2>
                                              <p className="text-gray-400 text-lg max-w-2xl mx-auto">A simple and practical path to help you move from confusion to clarity, from ideas to execution, and from effort to growth.</p>p>
                                  </div>div>
                                  <div className="grid md:grid-cols-4 gap-6">
                                      {method.map((item) => (
                            <div key={item.title} className="relative bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all">
                                            <span className="text-5xl font-black text-white/10 absolute top-4 right-6">{item.step}</span>span>
                                            <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold mb-5 text-sm">
                                                {item.num}
                                            </div>div>
                                            <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>h3>
                                            <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>p>
                            </div>div>
                          ))}
                                  </div>div>
                        </div>div>
                </section>section>
          
                <section id="training" className="py-24 px-6 bg-white">
                        <div className="max-w-7xl mx-auto">
                                  <div className="text-center mb-16">
                                              <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Training Programs</h2>h2>
                                              <p className="text-gray-500 text-lg max-w-2xl mx-auto">Practical, results-focused programs built for the modern entrepreneur, professional, and creator.</p>p>
                                  </div>div>
                                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                      {programs.map((program) => (
                            <div key={program.title} className="border border-gray-200 rounded-2xl p-8 hover:border-emerald-400 hover:shadow-lg transition-all group">
                                            <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center text-white font-bold mb-4 text-xs">
                                                {program.icon}
                                            </div>div>
                                            <h3 className="text-lg font-bold text-gray-900 mb-3">{program.title}</h3>h3>
                                            <p className="text-gray-500 text-sm mb-6 leading-relaxed">{program.desc}</p>p>
                                            <button className="text-sm font-semibold text-emerald-600 group-hover:text-emerald-700 transition-colors">
                                                              Learn More
                                            </button>button>
                            </div>div>
                          ))}
                                  </div>div>
                        </div>div>
                </section>section>
          
                <section className="py-24 px-6 bg-gradient-to-br from-emerald-50 to-teal-50">
                        <div className="max-w-4xl mx-auto text-center">
                                  <div className="w-20 h-20 bg-gray-900 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-8">P</div>div>
                                  <h2 className="text-4xl font-extrabold text-gray-900 mb-6">Built From Real Experience</h2>h2>
                                  <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
                                              ALLFAWISE was created from a real desire to help people unlock knowledge, organize their ideas, and transform practical experience into growth. The brand exists for people who want to learn, build, and move forward with clarity.
                                  </p>p>
                        </div>div>
                </section>section>
          
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
          
                <section className="py-24 px-6 bg-gray-900 text-white text-center">
                        <div className="max-w-3xl mx-auto">
                                  <h2 className="text-5xl font-extrabold mb-6 leading-tight">
                                              Your smarter future starts here.
                                  </h2>h2>
                                  <p className="text-gray-400 text-xl mb-10 leading-relaxed">
                                              Start learning, organizing, and building with ALLFAWISE.
                                  </p>p>
                                  <a href="#training" className="inline-block bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-10 py-4 rounded-full text-lg transition-all">
                                              Start Now
                                  </a>a>
                        </div>div>
                </section>section>
          
                <footer id="contact" className="bg-black text-white py-16 px-6">
                        <div className="max-w-7xl mx-auto">
                                  <div className="flex flex-col md:flex-row justify-between items-start gap-10">
                                              <div>
                                                            <div className="flex items-center gap-2 mb-4">
                                                                            <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-gray-900 font-bold text-xs">AW</span>span>
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
                                              <p className="text-gray-500 text-sm">2025 ALLFAWISE. All rights reserved.</p>p>
                                  </div>div>
                        </div>div>
                </footer>footer>
          </div>div>
        );
}</div>
