import React from "react";
import { motion } from "framer-motion";
import { ShoppingBag, ShieldCheck, Truck, Star, Mail, CheckCircle, ArrowRight, Home, Droplets, Wrench } from "lucide-react";

const products = [
  {
    name: "Gutter Downspout Extensions",
    description: "Flexible and durable extensions that direct water away from your foundation, protecting your home with precision.",
    tag: "Home Protection",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80",
  },
  {
    name: "Home Exterior Drainage",
    description: "Complete drainage solutions for your home's exterior, keeping your yard and foundation safe from excess water.",
    tag: "Outdoor Solutions",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80",
  },
  {
    name: "Rain Management Systems",
    description: "Smart rain management accessories designed to maintain your home's exterior and prevent costly water damage.",
    tag: "Smart Living",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
  },
];

const faqs = [
  { question: "Where can I buy Allfawise products?", answer: "Allfawise products are available through our official Amazon store for secure checkout and convenient delivery." },
  { question: "Does Allfawise offer customer support?", answer: "Yes. If you need help with an order or product question, our team is available via email." },
  { question: "Are your products easy to install?", answer: "Our products are designed for simple installation — practical, useful, and made for everyday homeowners." },
];

const benefits = [
  { icon: <ShieldCheck className="h-6 w-6" />, title: "Reliable Quality", text: "Every product is selected for durability, usability, and long-term customer satisfaction." },
  { icon: <Truck className="h-6 w-6" />, title: "Amazon Convenience", text: "Secure checkout, fast Prime delivery, and the trusted Amazon shopping experience." },
  { icon: <Home className="h-6 w-6" />, title: "Home Protection", text: "Practical exterior solutions to protect your home from water damage and poor drainage." },
];

export default function AllfawiseWebsite() {
  return (
    <main style={{ fontFamily: "'Georgia', 'Times New Roman', serif", background: "#fafaf8", color: "#1a2332", minHeight: "100vh" }}>

      {/* Announcement Bar */}
      <div style={{ background: "#1e3a5f", color: "#c8dff0", textAlign: "center", padding: "10px 24px", fontSize: "13px", letterSpacing: "0.08em" }}>
        Free shipping on Amazon orders over $35 &nbsp;·&nbsp; Prime eligible
      </div>

      {/* Header */}
      <header style={{ background: "#ffffff", borderBottom: "1px solid #e8edf2", position: "sticky", top: 0, zIndex: 50 }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px 32px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <div style={{ width: "44px", height: "44px", borderRadius: "50%", background: "#1e3a5f", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Home style={{ width: "20px", height: "20px", color: "#c8dff0" }} />
            </div>
            <div>
              <div style={{ fontSize: "22px", fontWeight: "400", letterSpacing: "0.18em", color: "#1e3a5f", textTransform: "uppercase" }}>ALLFAWISE</div>
              <div style={{ fontSize: "10px", letterSpacing: "0.25em", color: "#7aabcf", textTransform: "uppercase", marginTop: "2px" }}>Smart Living</div>
            </div>
          </div>
          <nav style={{ display: "flex", gap: "36px", fontSize: "13px", letterSpacing: "0.1em", color: "#3d5a7a" }}>
            <a href="#products" style={{ color: "#3d5a7a", textDecoration: "none" }}>Products</a>
            <a href="#about" style={{ color: "#3d5a7a", textDecoration: "none" }}>About</a>
            <a href="#contact" style={{ color: "#3d5a7a", textDecoration: "none" }}>Support</a>
          </nav>
          <a href="#products" style={{ background: "#1e3a5f", color: "#ffffff", padding: "11px 26px", fontSize: "12px", letterSpacing: "0.12em", textDecoration: "none", border: "none", cursor: "pointer" }}>
            SHOP AMAZON
          </a>
        </div>
      </header>

      {/* Hero */}
      <section style={{ position: "relative", overflow: "hidden" }}>
        <div style={{ position: "relative", height: "85vh", minHeight: "560px" }}>
          <img
            src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1600&q=85"
            alt="Beautiful modern home"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(15,30,55,0.72) 0%, rgba(15,30,55,0.38) 55%, rgba(15,30,55,0.12) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", padding: "0 80px" }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
              style={{ maxWidth: "560px" }}
            >
              <p style={{ fontSize: "11px", letterSpacing: "0.3em", color: "#a8d0ea", textTransform: "uppercase", marginBottom: "20px" }}>
                — Premium Home Exterior
              </p>
              <h1 style={{ fontSize: "clamp(2.6rem, 5vw, 4.2rem)", fontWeight: "400", lineHeight: "1.15", color: "#ffffff", marginBottom: "24px", fontStyle: "italic" }}>
                Protect What<br />Matters Most
              </h1>
              <p style={{ fontSize: "17px", lineHeight: "1.8", color: "#c8dff0", marginBottom: "36px", fontFamily: "system-ui, sans-serif", fontWeight: "300" }}>
                Allfawise brings durable, elegant home exterior solutions to protect your home from the elements — available on Amazon with Prime delivery.
              </p>
              <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                <a href="#products" style={{ background: "#ffffff", color: "#1e3a5f", padding: "14px 32px", fontSize: "12px", letterSpacing: "0.15em", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "8px" }}>
                  EXPLORE PRODUCTS <ArrowRight style={{ width: "14px", height: "14px" }} />
                </a>
                <a href="#about" style={{ border: "1px solid rgba(255,255,255,0.5)", color: "#ffffff", padding: "14px 32px", fontSize: "12px", letterSpacing: "0.15em", textDecoration: "none" }}>
                  OUR STORY
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <div style={{ background: "#1e3a5f", padding: "0 32px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", textAlign: "center" }}>
          {[["10,000+", "Happy Customers"], ["4.8 ★", "Amazon Rating"], ["Prime", "Fast Delivery"], ["100%", "Satisfaction"]].map(([val, lab]) => (
            <div key={lab} style={{ padding: "24px 16px", borderRight: "1px solid rgba(255,255,255,0.1)" }}>
              <div style={{ fontSize: "22px", fontWeight: "400", color: "#ffffff", letterSpacing: "0.05em" }}>{val}</div>
              <div style={{ fontSize: "11px", letterSpacing: "0.2em", color: "#7aabcf", marginTop: "4px", textTransform: "uppercase", fontFamily: "system-ui, sans-serif" }}>{lab}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits */}
      <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "80px 32px" }}>
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <p style={{ fontSize: "11px", letterSpacing: "0.3em", color: "#7aabcf", textTransform: "uppercase", marginBottom: "14px" }}>Why Choose Us</p>
          <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: "400", fontStyle: "italic", color: "#1e3a5f" }}>Built for Every Home</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "32px" }}>
          {benefits.map((item) => (
            <div key={item.title} style={{ background: "#ffffff", border: "1px solid #dce8f0", padding: "40px 36px" }}>
              <div style={{ width: "52px", height: "52px", background: "#e8f2fa", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "24px", color: "#1e3a5f" }}>
                {item.icon}
              </div>
              <h3 style={{ fontSize: "15px", letterSpacing: "0.1em", fontWeight: "600", color: "#1e3a5f", marginBottom: "12px", textTransform: "uppercase", fontFamily: "system-ui, sans-serif" }}>{item.title}</h3>
              <p style={{ fontSize: "15px", lineHeight: "1.8", color: "#5a7a96", fontFamily: "system-ui, sans-serif" }}>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Products */}
      <section id="products" style={{ background: "#f0f5f9", padding: "80px 32px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "52px", flexWrap: "wrap", gap: "20px" }}>
            <div>
              <p style={{ fontSize: "11px", letterSpacing: "0.3em", color: "#7aabcf", textTransform: "uppercase", marginBottom: "10px" }}>Featured Collection</p>
              <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: "400", fontStyle: "italic", color: "#1e3a5f" }}>Shop Allfawise</h2>
            </div>
            <p style={{ maxWidth: "420px", fontSize: "15px", lineHeight: "1.8", color: "#5a7a96", fontFamily: "system-ui, sans-serif" }}>
              Shop our full collection of home exterior products directly on Amazon with secure checkout and fast delivery.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "28px" }}>
            {products.map((product, i) => (
              <motion.article
                key={product.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                viewport={{ once: true }}
                style={{ background: "#ffffff", overflow: "hidden", cursor: "pointer" }}
              >
                <div style={{ position: "relative", overflow: "hidden", height: "260px" }}>
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.6s ease" }}
                    onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.05)")}
                    onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
                  />
                  <div style={{ position: "absolute", top: "16px", left: "16px", background: "#1e3a5f", color: "#c8dff0", padding: "4px 12px", fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase" }}>
                    {product.tag}
                  </div>
                </div>
                <div style={{ padding: "28px 28px 32px" }}>
                  <h3 style={{ fontSize: "17px", fontWeight: "400", fontStyle: "italic", color: "#1e3a5f", marginBottom: "10px" }}>{product.name}</h3>
                  <p style={{ fontSize: "14px", lineHeight: "1.8", color: "#6a8a9f", marginBottom: "24px", fontFamily: "system-ui, sans-serif" }}>{product.description}</p>
                  <a href="#" style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "11px", letterSpacing: "0.2em", color: "#1e3a5f", textDecoration: "none", textTransform: "uppercase", borderBottom: "1px solid #1e3a5f", paddingBottom: "2px" }}>
                    View on Amazon <ArrowRight style={{ width: "13px", height: "13px" }} />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Full-width editorial image */}
      <section style={{ position: "relative", height: "500px", overflow: "hidden" }}>
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&q=85"
          alt="Luxury home exterior"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "rgba(15,30,55,0.55)" }} />
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "0 32px" }}>
          <p style={{ fontSize: "11px", letterSpacing: "0.35em", color: "#a8d0ea", textTransform: "uppercase", marginBottom: "20px" }}>Our Promise</p>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3.4rem)", fontWeight: "400", fontStyle: "italic", color: "#ffffff", maxWidth: "700px", lineHeight: "1.3", marginBottom: "32px" }}>
            Your Home Deserves the Very Best Protection
          </h2>
          <a href="#products" style={{ background: "transparent", border: "1px solid rgba(255,255,255,0.7)", color: "#ffffff", padding: "14px 36px", fontSize: "12px", letterSpacing: "0.2em", textDecoration: "none", textTransform: "uppercase" }}>
            Shop Now
          </a>
        </div>
      </section>

      {/* About */}
      <section id="about" style={{ maxWidth: "1200px", margin: "0 auto", padding: "96px 32px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "center" }}>
        <div style={{ position: "relative" }}>
          <img
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=85"
            alt="Home exterior"
            style={{ width: "100%", height: "480px", objectFit: "cover" }}
          />
          <div style={{ position: "absolute", bottom: "-20px", right: "-20px", width: "180px", height: "180px", background: "#e8f2fa", zIndex: -1 }} />
        </div>
        <div>
          <p style={{ fontSize: "11px", letterSpacing: "0.3em", color: "#7aabcf", textTransform: "uppercase", marginBottom: "16px" }}>About Allfawise</p>
          <h2 style={{ fontSize: "clamp(1.8rem, 2.8vw, 2.4rem)", fontWeight: "400", fontStyle: "italic", color: "#1e3a5f", marginBottom: "24px", lineHeight: "1.4" }}>
            Products Made for Real Homes
          </h2>
          <p style={{ fontSize: "16px", lineHeight: "1.9", color: "#5a7a96", marginBottom: "36px", fontFamily: "system-ui, sans-serif" }}>
            Allfawise is dedicated to bringing practical, modern, and reliable home exterior products to customers who value quality, convenience, and smart solutions for everyday homeownership.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {["Carefully selected home exterior products", "Simple installation, professional results", "Trusted by thousands on Amazon", "Customer-first shopping experience"].map((item) => (
              <div key={item} style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                <div style={{ width: "20px", height: "20px", borderRadius: "50%", background: "#1e3a5f", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <CheckCircle style={{ width: "12px", height: "12px", color: "#c8dff0" }} />
                </div>
                <p style={{ fontSize: "15px", color: "#3d5a7a", fontFamily: "system-ui, sans-serif" }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#1e3a5f", padding: "96px 32px", textAlign: "center" }}>
        <p style={{ fontSize: "11px", letterSpacing: "0.3em", color: "#7aabcf", textTransform: "uppercase", marginBottom: "20px" }}>Shop with Confidence</p>
        <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: "400", fontStyle: "italic", color: "#ffffff", marginBottom: "20px" }}>Find Allfawise on Amazon</h2>
        <p style={{ fontSize: "17px", lineHeight: "1.8", color: "#a8cce0", maxWidth: "560px", margin: "0 auto 40px", fontFamily: "system-ui, sans-serif", fontWeight: "300" }}>
          Secure checkout, Prime delivery, and trusted customer service — everything you need for a seamless shopping experience.
        </p>
        <a href="#" style={{ background: "#ffffff", color: "#1e3a5f", padding: "15px 40px", fontSize: "12px", letterSpacing: "0.2em", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "10px", textTransform: "uppercase", fontFamily: "system-ui, sans-serif" }}>
          Visit Our Amazon Store <ArrowRight style={{ width: "14px", height: "14px" }} />
        </a>
      </section>

      {/* FAQs */}
      <section style={{ maxWidth: "860px", margin: "0 auto", padding: "88px 32px" }}>
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <p style={{ fontSize: "11px", letterSpacing: "0.3em", color: "#7aabcf", textTransform: "uppercase", marginBottom: "14px" }}>Customer Help</p>
          <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: "400", fontStyle: "italic", color: "#1e3a5f" }}>Frequently Asked Questions</h2>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          {faqs.map((faq, i) => (
            <div key={faq.question} style={{ borderTop: "1px solid #dce8f0", padding: "32px 0", borderBottom: i === faqs.length - 1 ? "1px solid #dce8f0" : "none" }}>
              <h3 style={{ fontSize: "17px", fontWeight: "400", fontStyle: "italic", color: "#1e3a5f", marginBottom: "12px" }}>{faq.question}</h3>
              <p style={{ fontSize: "15px", lineHeight: "1.8", color: "#6a8a9f", fontFamily: "system-ui, sans-serif" }}>{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Support */}
      <section style={{ background: "#f0f5f9", padding: "72px 32px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "24px" }}>
          {[
            { icon: <Wrench style={{ width: "22px", height: "22px" }} />, title: "Product Support", text: "Need help with installation? Our support team is ready to assist with any Allfawise product." },
            { icon: <ShoppingBag style={{ width: "22px", height: "22px" }} />, title: "Returns", text: "Orders through Amazon follow Amazon's return policies. Check your order page for return options." },
            { icon: <Droplets style={{ width: "22px", height: "22px" }} />, title: "Partnerships", text: "For wholesale or brand partnership inquiries, please contact the Allfawise team by email." },
          ].map((card) => (
            <div key={card.title} style={{ background: "#ffffff", padding: "40px 36px", border: "1px solid #dce8f0" }}>
              <div style={{ color: "#1e3a5f", marginBottom: "18px" }}>{card.icon}</div>
              <h3 style={{ fontSize: "14px", letterSpacing: "0.1em", fontWeight: "600", color: "#1e3a5f", marginBottom: "12px", textTransform: "uppercase", fontFamily: "system-ui, sans-serif" }}>{card.title}</h3>
              <p style={{ fontSize: "14px", lineHeight: "1.8", color: "#6a8a9f", fontFamily: "system-ui, sans-serif" }}>{card.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" style={{ background: "#0f2035", padding: "56px 32px 40px", borderTop: "1px solid #1e3a5f" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "40px", marginBottom: "48px" }}>
            <div>
              <div style={{ fontSize: "22px", fontWeight: "400", letterSpacing: "0.2em", color: "#ffffff", textTransform: "uppercase", marginBottom: "8px" }}>ALLFAWISE</div>
              <p style={{ fontSize: "13px", color: "#7aabcf", letterSpacing: "0.05em", fontFamily: "system-ui, sans-serif" }}>Smart Solutions for Everyday Living</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", textAlign: "right" }}>
              <a href="mailto:support@allfawise.com" style={{ display: "flex", alignItems: "center", gap: "8px", color: "#a8cce0", fontSize: "14px", textDecoration: "none", fontFamily: "system-ui, sans-serif" }}>
                <Mail style={{ width: "15px", height: "15px" }} /> support@allfawise.com
              </a>
            </div>
          </div>
          <div style={{ borderTop: "1px solid #1e3a5f", paddingTop: "24px", textAlign: "center" }}>
            <p style={{ fontSize: "12px", letterSpacing: "0.1em", color: "#4a6a85", fontFamily: "system-ui, sans-serif" }}>© 2026 Allfawise. All rights reserved.</p>
          </div>
        </div>
      </footer>

    </main>
  );
}
