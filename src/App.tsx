import React from "react";
import { motion } from "framer-motion";
import { ShoppingBag, ShieldCheck, Truck, Star, Mail, CheckCircle, ArrowRight, Home, Droplets, Wrench } from "lucide-react";

// Navy blue soft palette:
// Primary: #1e3a5f (dark navy)
// Secondary: #2d5986 (mid navy)
// Accent: #4a90c4 (soft blue)
// Light: #e8f1fa (very light blue)
// White: #ffffff

const products = [
  {
    name: "Gutter Downspout Extensions",
    description: "Flexible and durable extensions that direct water away from your foundation, protecting your home from water damage.",
    tag: "Home Protection",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80",
    alt: "Beautiful house exterior with gutters",
  },
  {
    name: "Home Exterior Drainage",
    description: "Complete drainage solutions for your home's exterior, keeping your yard and foundation safe from excess water.",
    tag: "Outdoor Solutions",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80",
    alt: "Modern house with exterior drainage system",
  },
  {
    name: "Rain Management Systems",
    description: "Smart rain management accessories designed to maintain your home's exterior and prevent costly water damage.",
    tag: "Smart Living",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
    alt: "Luxury home exterior with rain management",
  },
];

const faqs = [
  {
    question: "Where can I buy Allfawise products?",
    answer: "Allfawise products are available through our official Amazon store for secure checkout and convenient delivery.",
  },
  {
    question: "Does Allfawise offer customer support?",
    answer: "Yes. If you need help with an order, product question, or support request, you can contact our team by email.",
  },
  {
    question: "Are your products easy to install?",
    answer: "Our goal is to offer practical products that are simple to install, useful, and designed for everyday homeowners.",
  },
];

const benefits = [
  {
    icon: <ShieldCheck className="h-7 w-7" />,
    title: "Reliable Quality",
    text: "Products selected with durability, usability, and customer satisfaction in mind.",
  },
  {
    icon: <Truck className="h-7 w-7" />,
    title: "Amazon Convenience",
    text: "Shop with secure checkout, fast delivery, and the trusted Amazon shopping experience.",
  },
  {
    icon: <Home className="h-7 w-7" />,
    title: "Home Protection",
    text: "Practical solutions to protect your home from water damage and improve drainage.",
  },
];

const stats = [
  { value: "10K+", label: "Happy Customers" },
  { value: "4.8★", label: "Amazon Rating" },
  { value: "Fast", label: "Prime Delivery" },
  { value: "100%", label: "Satisfaction" },
];

export default function AllfawiseWebsite() {
  return (
    <main className="min-h-screen bg-white text-slate-900" style={{fontFamily: 'system-ui, sans-serif'}}>

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-blue-100 bg-white/95 backdrop-blur-md shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl shadow-sm" style={{background: 'linear-gradient(135deg, #1e3a5f, #2d5986)'}}>
              <Home className="h-6 w-6 text-white" />
            </div>
            <div>
              <p className="text-xl font-bold tracking-tight" style={{color: '#1e3a5f'}}>Allfawise</p>
              <p className="text-xs uppercase tracking-widest" style={{color: '#4a90c4'}}>Smart Living</p>
            </div>
          </div>
          <nav className="hidden items-center gap-8 text-sm font-medium md:flex" style={{color: '#2d5986'}}>
            <a href="#products" className="hover:opacity-70 transition-opacity">Products</a>
            <a href="#about" className="hover:opacity-70 transition-opacity">About</a>
            <a href="#contact" className="hover:opacity-70 transition-opacity">Support</a>
          </nav>
          <a
            href="#products"
            className="rounded-full px-5 py-2.5 text-sm font-semibold text-white shadow-md transition hover:opacity-90"
            style={{background: 'linear-gradient(135deg, #1e3a5f, #2d5986)'}}
          >
            Shop on Amazon
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden" style={{background: 'linear-gradient(135deg, #0f2744 0%, #1e3a5f 50%, #2d5986 100%)'}}>
        {/* Background image overlay */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1600&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0" style={{background: 'linear-gradient(135deg, rgba(15,39,68,0.85) 0%, rgba(30,58,95,0.75) 100%)'}} />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 md:grid-cols-2 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-5 inline-flex rounded-full border px-4 py-2 text-sm font-medium shadow-sm" style={{borderColor: 'rgba(74,144,196,0.5)', background: 'rgba(74,144,196,0.15)', color: '#a8d4f0'}}>
              🏠 Premium Home Protection Products
            </p>
            <h1 className="text-5xl font-bold tracking-tight text-white md:text-6xl leading-tight">
              Protect Your Home,<br/>
              <span style={{color: '#7ab8e0'}}>Rain or Shine</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8" style={{color: '#b8d4e8'}}>
              Allfawise delivers practical, durable home exterior solutions — from gutter extensions to drainage systems — designed to keep your home safe and dry.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#products"
                className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-base font-bold text-white shadow-lg transition hover:opacity-90"
                style={{background: 'linear-gradient(135deg, #4a90c4, #2d5986)'}}
              >
                Explore Products <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center rounded-full border px-7 py-4 text-base font-semibold transition hover:bg-white/10"
                style={{borderColor: 'rgba(255,255,255,0.3)', color: 'white'}}
              >
                Learn About Us
              </a>
            </div>
          </motion.div>

          {/* Hero Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-[2rem] overflow-hidden shadow-2xl" style={{border: '1px solid rgba(255,255,255,0.15)'}}>
              <img
                src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80"
                alt="Beautiful modern house"
                className="w-full object-cover"
                style={{height: '320px'}}
              />
              <div className="p-6" style={{background: 'rgba(15,39,68,0.95)', backdropFilter: 'blur(10px)'}}>
                <div className="flex items-center justify-between mb-3">
                  <span className="rounded-full px-3 py-1 text-xs font-bold text-white" style={{background: '#4a90c4'}}>Allfawise</span>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" style={{color: '#fbbf24'}} />
                    ))}
                  </div>
                </div>
                <p className="text-xl font-bold text-white">Premium Gutter Solutions</p>
                <p className="mt-1 text-sm" style={{color: '#7ab8e0'}}>Trusted by 10,000+ homeowners on Amazon</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats bar */}
        <div className="relative border-t" style={{borderColor: 'rgba(255,255,255,0.1)', background: 'rgba(0,0,0,0.2)'}}>
          <div className="mx-auto max-w-7xl px-6 py-6">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                  <p className="text-sm mt-1" style={{color: '#7ab8e0'}}>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-5 md:grid-cols-3">
          {benefits.map((item) => (
            <div key={item.title} className="rounded-3xl p-7 shadow-sm border transition hover:shadow-md" style={{borderColor: '#dbeafe', background: '#f0f7ff'}}>
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-sm" style={{background: 'linear-gradient(135deg, #1e3a5f, #2d5986)'}}>
                {item.icon}
              </div>
              <h3 className="text-xl font-bold" style={{color: '#1e3a5f'}}>{item.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Products */}
      <section id="products" className="px-6 py-20" style={{background: '#f0f7ff'}}>
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{color: '#4a90c4'}}>Featured Products</p>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl" style={{color: '#1e3a5f'}}>Shop Allfawise Products</h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-600">
              Browse our collection of home protection products and shop directly through Amazon.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {products.map((product) => (
              <article key={product.name} className="group overflow-hidden rounded-[2rem] bg-white shadow-md transition hover:-translate-y-2 hover:shadow-xl" style={{border: '1px solid #dbeafe'}}>
                <div className="relative overflow-hidden" style={{height: '220px'}}>
                  <img
                    src={product.image}
                    alt={product.alt}
                    className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0" style={{background: 'linear-gradient(to top, rgba(30,58,95,0.6) 0%, transparent 60%)'}} />
                  <span className="absolute bottom-4 left-4 rounded-full px-3 py-1 text-xs font-bold text-white" style={{background: 'rgba(74,144,196,0.9)'}}>
                    {product.tag}
                  </span>
                </div>
                <div className="p-7">
                  <h3 className="text-xl font-bold" style={{color: '#1e3a5f'}}>{product.name}</h3>
                  <p className="mt-3 leading-7 text-slate-600 text-sm">{product.description}</p>
                  <a
                    href="#"
                    className="mt-6 inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-bold text-white transition hover:opacity-90 shadow-sm"
                    style={{background: 'linear-gradient(135deg, #1e3a5f, #4a90c4)'}}
                  >
                    View on Amazon <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Hero image section - Full width */}
      <section className="relative overflow-hidden" style={{height: '480px'}}>
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&q=80"
          alt="Beautiful home exterior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center" style={{background: 'linear-gradient(135deg, rgba(15,39,68,0.8), rgba(45,89,134,0.7))'}}>
          <div className="text-center px-6 max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-widest mb-4" style={{color: '#7ab8e0'}}>Why Choose Allfawise</p>
            <h2 className="text-4xl font-bold text-white md:text-5xl mb-6">Your Home Deserves the Best Protection</h2>
            <a
              href="#products"
              className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-bold text-white shadow-lg transition hover:opacity-90"
              style={{background: 'linear-gradient(135deg, #4a90c4, #2d5986)'}}
            >
              Shop Now on Amazon <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center">
        <div className="relative overflow-hidden rounded-[2rem] shadow-xl" style={{height: '400px'}}>
          <img
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
            alt="Home exterior with gutters"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-end p-8" style={{background: 'linear-gradient(to top, rgba(15,39,68,0.9) 0%, transparent 50%)'}}>
            <p className="text-sm font-bold uppercase tracking-widest mb-2" style={{color: '#7ab8e0'}}>About Allfawise</p>
            <h2 className="text-3xl font-bold text-white">Products made for real homes.</h2>
          </div>
        </div>

        <div className="space-y-5">
          <p className="text-lg leading-8 text-slate-600">
            Allfawise is focused on bringing practical, modern, and reliable home exterior products to customers who value quality, convenience, and smart solutions for everyday homeownership.
          </p>
          {["Carefully selected home exterior products", "Simple installation, professional results", "Customer-focused shopping on Amazon", "Trusted by thousands of homeowners"].map((item) => (
            <div key={item} className="flex items-center gap-4 rounded-2xl p-4 shadow-sm" style={{background: '#f0f7ff', border: '1px solid #dbeafe'}}>
              <div className="flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-full" style={{background: 'linear-gradient(135deg, #1e3a5f, #4a90c4)'}}>
                <CheckCircle className="h-5 w-5 text-white" />
              </div>
              <p className="font-semibold" style={{color: '#1e3a5f'}}>{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 text-white" style={{background: 'linear-gradient(135deg, #0f2744, #1e3a5f, #2d5986)'}}>
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest mb-4" style={{color: '#7ab8e0'}}>Shop with confidence</p>
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl mb-6">Find Allfawise on Amazon</h2>
          <p className="mx-auto max-w-2xl text-lg leading-8 mb-8" style={{color: '#b8d4e8'}}>
            Enjoy secure checkout, trusted customer service, and fast Prime delivery when you shop Allfawise products through Amazon.
          </p>
          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-base font-bold shadow-xl transition hover:bg-blue-50"
            style={{color: '#1e3a5f'}}
          >
            Visit Our Amazon Store <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </section>

      {/* FAQs */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 text-center">
          <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{color: '#4a90c4'}}>Customer Help</p>
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl" style={{color: '#1e3a5f'}}>Frequently Asked Questions</h2>
        </div>
        <div className="mx-auto grid max-w-4xl gap-5">
          {faqs.map((faq) => (
            <div key={faq.question} className="rounded-3xl p-7 shadow-sm" style={{background: '#f0f7ff', border: '1px solid #dbeafe'}}>
              <h3 className="text-xl font-bold" style={{color: '#1e3a5f'}}>{faq.question}</h3>
              <p className="mt-3 leading-7 text-slate-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Support Cards */}
      <section className="px-6 py-16" style={{background: '#f0f7ff'}}>
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          {[
            { icon: <Wrench className="h-7 w-7" />, title: "Product Support", text: "Need help with installation? Contact our support team for guidance on any Allfawise product." },
            { icon: <ShoppingBag className="h-7 w-7" />, title: "Returns", text: "Orders placed through Amazon follow Amazon return policies. Check your order page for options." },
            { icon: <Droplets className="h-7 w-7" />, title: "Partnerships", text: "For wholesale or brand partnership inquiries, please contact the Allfawise team by email." },
          ].map((card) => (
            <div key={card.title} className="rounded-[2rem] bg-white p-8 shadow-sm" style={{border: '1px solid #dbeafe'}}>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl text-white shadow-sm" style={{background: 'linear-gradient(135deg, #1e3a5f, #4a90c4)'}}>
                {card.icon}
              </div>
              <h3 className="text-xl font-bold mb-3" style={{color: '#1e3a5f'}}>{card.title}</h3>
              <p className="leading-7 text-slate-600 text-sm">{card.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="border-t px-6 py-12" style={{borderColor: '#dbeafe', background: '#0f2744'}}>
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl" style={{background: '#2d5986'}}>
                <Home className="h-5 w-5 text-white" />
              </div>
              <p className="text-2xl font-bold text-white">Allfawise</p>
            </div>
            <p style={{color: '#7ab8e0'}}>Smart Solutions for Everyday Living</p>
          </div>
          <div className="flex flex-col gap-3 text-sm md:items-end" style={{color: '#7ab8e0'}}>
            <p className="flex items-center gap-2 text-white"><Mail className="h-4 w-4" /> support@allfawise.com</p>
            <p>© 2026 Allfawise. All rights reserved.</p>
          </div>
        </div>
      </footer>

    </main>
  );
}
