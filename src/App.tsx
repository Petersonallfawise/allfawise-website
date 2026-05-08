import React, { useState } from "react";
import { motion } from "framer-motion";
import { ShoppingBag, Star, Mail, CheckCircle, ArrowRight, Home, Package, BookOpen, Wrench, Droplets, Shield, Zap, Award } from "lucide-react";

const featuredProduct = {
  name: "Rain Gutter Downspout Extensions",
  subtitle: "Flexible · Extendable 21–68 inches · 4-Pack",
  price: "$48.99",
  rating: 4.5,
  reviews: 372,
  colors: ["Black", "Brown", "White", "Green", "Beige"],
  highlights: [
    { label: "Thickened PE Material", desc: "More durable than standard models. Withstands 10+ lbs without deformation." },
    { label: "Extendable 21–68 Inches", desc: "Flexible accordion design adapts to any downspout — no tools needed." },
    { label: "Universal Fit 2x3 & 3x4", desc: "Compatible with standard downspout sizes. Includes 4 extenders + mounting screws." },
    { label: "Foundation Protection", desc: "Directs water 4–6 feet away from your home, preventing costly water damage." },
  ],
  images: [
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=85",
    "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80",
    "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80",
  ],
};

const upcomingProducts = [
  { category: "Books", title: "Curated Reading", desc: "Hand-picked books on home improvement, gardening, and everyday skills.", color: "#e8f0fa", accent: "#2d5986" },
  { category: "Tools & Hardware", title: "Smart Tools", desc: "Practical tools for home repairs, outdoor projects, and DIY improvements.", color: "#f0f7ee", accent: "#2d6e3e" },
  { category: "Outdoor & Garden", title: "Outdoor Living", desc: "Products for your yard, garden, and outdoor spaces — beauty and function.", color: "#fdf3e8", accent: "#8b5e2d" },
];

const reviews = [
  { name: "Michael T.", loc: "Texas", text: "Installed all 4 in about 15 minutes. Water used to pool against my house and now drains perfectly 5 feet away.", stars: 5 },
  { name: "Sarah K.", loc: "Ohio", text: "My basement used to flood every heavy rain. After these extenders, it has been completely dry for 2 seasons!", stars: 5 },
  { name: "Robert M.", loc: "Florida", text: "Good quality material, fits my standard 3x4 downspouts perfectly. Easy to angle in any direction.", stars: 4 },
];

export default function AllfawiseSolutions() {
  const [activeImg, setActiveImg] = useState(0);
  const [selectedColor, setSelectedColor] = useState("Black");
  const [menuOpen, setMenuOpen] = useState(false);

  const colorMap: Record<string, string> = { Black: "#222", Brown: "#7b4a2d", White: "#f0f0f0", Green: "#2d6e3e", Beige: "#d9c5a0" };

  return (
    <div style={{ fontFamily: "system-ui,-apple-system,sans-serif", background: "#f8fafc", color: "#0f1f35", minHeight: "100vh" }}>

      {/* Announcement Bar */}
      <div style={{ background: "#1e3a5f", color: "#a8d0ea", textAlign: "center", padding: "9px 16px", fontSize: "12px", letterSpacing: "0.05em" }}>
        Free shipping on orders · 30-day returns · 4.5 ★ rated products
      </div>

      {/* Header */}
      <header style={{ background: "#fff", borderBottom: "1px solid #dce8f5", position: "sticky", top: 0, zIndex: 100, boxShadow: "0 1px 12px rgba(30,58,95,0.07)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "15px 20px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div style={{ width: "38px", height: "38px", borderRadius: "10px", background: "linear-gradient(135deg,#1e3a5f,#3a7cbd)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <Package style={{ width: "18px", height: "18px", color: "#fff" }} />
            </div>
            <div>
              <div style={{ fontSize: "16px", fontWeight: "700", color: "#1e3a5f", lineHeight: 1.2 }}>Allfawise <span style={{ color: "#3a7cbd" }}>Solutions</span></div>
              <div style={{ fontSize: "9px", color: "#7aabcf", letterSpacing: "0.12em", textTransform: "uppercase" }}>Smart Products for Real Life</div>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav style={{ display: "flex", gap: "2px" }} className="desktop-nav">
            {[["Home & Garden","#featured"],["Books","#categories"],["Tools","#categories"],["Outdoor","#categories"]].map(([label, href]) => (
              <a key={label} href={href} style={{ padding: "7px 12px", fontSize: "13px", color: "#3d5a7a", textDecoration: "none", borderRadius: "8px" }}>{label}</a>
            ))}
          </nav>

          {/* Notify button instead of Amazon link */}
          <a href="#notify" style={{ background: "linear-gradient(135deg,#1e3a5f,#3a7cbd)", color: "#fff", padding: "9px 18px", fontSize: "13px", fontWeight: "600", textDecoration: "none", borderRadius: "8px", display: "flex", alignItems: "center", gap: "6px", whiteSpace: "nowrap", flexShrink: 0 }}>
            <Mail style={{ width: "14px", height: "14px" }} /> Get Notified
          </a>
        </div>

        {/* Mobile Nav */}
        <div style={{ display: "none" }} className="mobile-nav-links">
          <div style={{ padding: "10px 20px 14px", display: "flex", flexDirection: "column", gap: "4px", borderTop: "1px solid #edf3f8" }}>
            {[["Home & Garden","#featured"],["Books","#categories"],["Tools","#categories"],["Outdoor","#categories"]].map(([label, href]) => (
              <a key={label} href={href} style={{ padding: "8px 12px", fontSize: "14px", color: "#3d5a7a", textDecoration: "none", borderRadius: "8px", background: "#f5f9fd" }}>{label}</a>
            ))}
          </div>
        </div>
      </header>

      {/* Hero */}
      <section style={{ position: "relative", background: "linear-gradient(135deg,#0f2035,#1e3a5f 60%,#2d5986)", overflow: "hidden" }}>
        <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: "48%", overflow: "hidden" }} className="hero-img-wrap">
          <img src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&q=85" alt="Home" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.3 }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right,#0f2035,transparent)" }} />
        </div>
        <div style={{ position: "relative", maxWidth: "1280px", margin: "0 auto", padding: "60px 20px" }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} style={{ maxWidth: "580px" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(74,144,196,0.2)", border: "1px solid rgba(74,144,196,0.35)", borderRadius: "100px", padding: "6px 14px", marginBottom: "20px", flexWrap: "wrap" }}>
              <Award style={{ width: "13px", height: "13px", color: "#7ab8e0", flexShrink: 0 }} />
              <span style={{ fontSize: "12px", color: "#7ab8e0" }}>372 Verified Reviews · 4.5 ★ Rating</span>
            </div>
            <h1 style={{ fontSize: "clamp(1.75rem,4vw,3.2rem)", fontWeight: "800", color: "#fff", lineHeight: "1.18", marginBottom: "18px", letterSpacing: "-0.4px" }}>
              Products That Solve<br /><span style={{ color: "#7ab8e0" }}>Real Everyday Problems</span>
            </h1>
            <p style={{ fontSize: "clamp(14px,2vw,16px)", lineHeight: "1.85", color: "#b8d4e8", marginBottom: "32px", fontWeight: "300" }}>
              Allfawise Solutions brings practical, durable products to protect your home, enrich your life, and simplify your day.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a href="#featured" style={{ background: "#fff", color: "#1e3a5f", padding: "12px 22px", fontSize: "14px", fontWeight: "700", textDecoration: "none", borderRadius: "8px", display: "flex", alignItems: "center", gap: "8px" }}>
                See Featured Product <ArrowRight style={{ width: "15px", height: "15px" }} />
              </a>
              <a href="#why" style={{ border: "1.5px solid rgba(255,255,255,0.3)", color: "#fff", padding: "12px 22px", fontSize: "14px", fontWeight: "600", textDecoration: "none", borderRadius: "8px" }}>
                Why You Need It
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats strip */}
      <div style={{ background: "#1e3a5f", overflowX: "auto" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 20px", display: "grid", gridTemplateColumns: "repeat(4,minmax(100px,1fr))", textAlign: "center", minWidth: "400px" }}>
          {[["10K+","Customers"],["4.5 ★","Rating"],["372","Reviews"],["Free","Shipping"]].map(([v,l],i) => (
            <div key={l} style={{ padding: "20px 8px", borderRight: i < 3 ? "1px solid rgba(255,255,255,0.1)" : "none" }}>
              <div style={{ fontSize: "clamp(16px,3vw,22px)", fontWeight: "800", color: "#fff" }}>{v}</div>
              <div style={{ fontSize: "10px", color: "#7aabcf", letterSpacing: "0.12em", textTransform: "uppercase", marginTop: "4px" }}>{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Why You Need It */}
      <section id="why" style={{ background: "#fff", padding: "60px 20px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "40px", alignItems: "center" }}>
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#f0f5f9", borderRadius: "100px", padding: "6px 14px", marginBottom: "18px" }}>
                <Droplets style={{ width: "13px", height: "13px", color: "#3a7cbd" }} />
                <span style={{ fontSize: "12px", color: "#3a7cbd", fontWeight: "600" }}>The Problem</span>
              </div>
              <h2 style={{ fontSize: "clamp(1.5rem,3vw,2.3rem)", fontWeight: "800", color: "#0f1f35", marginBottom: "16px", lineHeight: "1.25" }}>
                Poor Drainage Is Silently Damaging Your Home
              </h2>
              <p style={{ color: "#4a6b8a", lineHeight: "1.85", marginBottom: "24px", fontSize: "15px" }}>
                When rainwater isn't directed away from your foundation, it seeps in, erodes soil, and causes thousands in damage over time — often without visible signs until it's too late.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                {[
                  { icon: Droplets, title: "Basement Flooding", desc: "Water pooling near your foundation finds the smallest cracks to enter." },
                  { icon: Shield, title: "Soil Erosion", desc: "Uncontrolled drainage washes away landscaping and foundation support." },
                  { icon: Zap, title: "Mold & Mildew", desc: "Persistent moisture creates perfect conditions for toxic mold growth." },
                ].map(({ icon: Icon, title, desc }) => (
                  <div key={title} style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                    <div style={{ width: "38px", height: "38px", borderRadius: "10px", background: "#f0f5f9", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Icon style={{ width: "17px", height: "17px", color: "#3a7cbd" }} />
                    </div>
                    <div>
                      <div style={{ fontWeight: "700", color: "#0f1f35", fontSize: "14px", marginBottom: "4px" }}>{title}</div>
                      <div style={{ color: "#5a7a96", fontSize: "13px", lineHeight: "1.6" }}>{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ borderRadius: "16px", overflow: "hidden", boxShadow: "0 16px 48px rgba(30,58,95,0.14)" }}>
              <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=85" alt="Gutter drainage" style={{ width: "100%", display: "block", maxHeight: "420px", objectFit: "cover" }} />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Product */}
      <section id="featured" style={{ background: "#f0f5f9", padding: "60px 20px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#1e3a5f", borderRadius: "100px", padding: "6px 16px", marginBottom: "14px" }}>
              <Star style={{ width: "12px", height: "12px", color: "#ffd700", fill: "#ffd700" }} />
              <span style={{ fontSize: "12px", color: "#a8d0ea", fontWeight: "600" }}>Featured Product</span>
            </div>
            <h2 style={{ fontSize: "clamp(1.5rem,3vw,2.5rem)", fontWeight: "800", color: "#0f1f35", marginBottom: "10px" }}>
              {featuredProduct.name}
            </h2>
            <p style={{ color: "#5a7a96", fontSize: "15px" }}>{featuredProduct.subtitle}</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(290px,1fr))", gap: "40px", alignItems: "start" }}>
            {/* Image Gallery */}
            <div>
              <div style={{ borderRadius: "16px", overflow: "hidden", marginBottom: "12px", background: "#fff", boxShadow: "0 8px 32px rgba(30,58,95,0.12)" }}>
                <img src={featuredProduct.images[activeImg]} alt="Product" style={{ width: "100%", aspectRatio: "4/3", objectFit: "cover", display: "block" }} />
              </div>
              <div style={{ display: "flex", gap: "10px" }}>
                {featuredProduct.images.map((img, i) => (
                  <button key={i} onClick={() => setActiveImg(i)} style={{ flex: 1, borderRadius: "10px", overflow: "hidden", border: activeImg === i ? "2.5px solid #3a7cbd" : "2.5px solid transparent", background: "none", padding: 0, cursor: "pointer" }}>
                    <img src={img} alt="" style={{ width: "100%", aspectRatio: "1", objectFit: "cover", display: "block" }} />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div style={{ background: "#fff", borderRadius: "16px", padding: "clamp(20px,4vw,32px)", boxShadow: "0 8px 32px rgba(30,58,95,0.08)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px", flexWrap: "wrap" }}>
                <div style={{ display: "flex", gap: "3px" }}>
                  {[...Array(5)].map((_,i) => (
                    <Star key={i} style={{ width: "16px", height: "16px", color: "#ffd700", fill: i < Math.floor(featuredProduct.rating) ? "#ffd700" : "none" }} />
                  ))}
                </div>
                <span style={{ fontSize: "14px", color: "#5a7a96" }}>{featuredProduct.rating} · {featuredProduct.reviews} reviews</span>
              </div>

              <div style={{ fontSize: "clamp(24px,4vw,34px)", fontWeight: "800", color: "#1e3a5f", marginBottom: "6px" }}>{featuredProduct.price}</div>
              <div style={{ fontSize: "12px", color: "#3a7cbd", marginBottom: "22px", fontWeight: "600" }}>4-Pack · Free Shipping</div>

              {/* Color Picker */}
              <div style={{ marginBottom: "22px" }}>
                <div style={{ fontSize: "13px", color: "#4a6b8a", marginBottom: "10px", fontWeight: "600" }}>Color: <span style={{ color: "#0f1f35" }}>{selectedColor}</span></div>
                <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                  {featuredProduct.colors.map(c => (
                    <button key={c} onClick={() => setSelectedColor(c)} title={c} style={{ width: "32px", height: "32px", borderRadius: "50%", border: selectedColor === c ? "3px solid #3a7cbd" : "2px solid #dde8f0", background: colorMap[c] || "#ccc", cursor: "pointer", outline: selectedColor === c ? "2px solid #3a7cbd" : "none", outlineOffset: "2px" }} />
                  ))}
                </div>
              </div>

              {/* Highlights */}
              <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "24px" }}>
                {featuredProduct.highlights.map(h => (
                  <div key={h.label} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                    <CheckCircle style={{ width: "16px", height: "16px", color: "#3a7cbd", marginTop: "2px", flexShrink: 0 }} />
                    <div>
                      <span style={{ fontSize: "13px", fontWeight: "700", color: "#0f1f35" }}>{h.label}</span>
                      <span style={{ fontSize: "13px", color: "#5a7a96" }}> — {h.desc}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Coming Soon button instead of Amazon link */}
              <div style={{ background: "linear-gradient(135deg,#1e3a5f,#3a7cbd)", borderRadius: "12px", padding: "16px", textAlign: "center" }}>
                <div style={{ fontSize: "13px", color: "#a8d0ea", marginBottom: "6px", fontWeight: "600", letterSpacing: "0.06em", textTransform: "uppercase" }}>Available Soon</div>
                <div style={{ fontSize: "15px", color: "#fff", fontWeight: "700" }}>Sign up below to be notified when we launch</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Install Steps */}
      <section style={{ background: "#fff", padding: "60px 20px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(1.4rem,3vw,2.2rem)", fontWeight: "800", color: "#0f1f35", marginBottom: "12px" }}>Install in 3 Simple Steps</h2>
          <p style={{ color: "#5a7a96", marginBottom: "40px", fontSize: "15px" }}>No tools required. Takes less than 15 minutes.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: "24px" }}>
            {[
              { step: "1", title: "Remove old drain tip", desc: "Take off any existing cap or elbow from your downspout outlet." },
              { step: "2", title: "Insert the extender", desc: "Slide the flexible extender into the downspout opening — it snaps into place." },
              { step: "3", title: "Direct the flow", desc: "Bend and angle the extender to direct water away from your foundation." },
            ].map(({ step, title, desc }) => (
              <div key={step} style={{ background: "#f0f5f9", borderRadius: "14px", padding: "28px 20px", position: "relative" }}>
                <div style={{ width: "46px", height: "46px", borderRadius: "50%", background: "#1e3a5f", color: "#fff", fontSize: "20px", fontWeight: "800", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>{step}</div>
                <div style={{ fontWeight: "700", color: "#0f1f35", fontSize: "15px", marginBottom: "8px" }}>{title}</div>
                <div style={{ color: "#5a7a96", fontSize: "13px", lineHeight: "1.7" }}>{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon Categories */}
      <section id="categories" style={{ background: "#f8fafc", padding: "60px 20px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <h2 style={{ fontSize: "clamp(1.4rem,3vw,2.2rem)", fontWeight: "800", color: "#0f1f35", marginBottom: "10px" }}>More Products Coming Soon</h2>
            <p style={{ color: "#5a7a96", fontSize: "15px" }}>Allfawise Solutions is expanding. Stay tuned for these categories.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: "20px" }}>
            {upcomingProducts.map(({ category, title, desc, color, accent }) => (
              <div key={category} style={{ background: color, borderRadius: "16px", padding: "28px 22px", border: "1.5px solid rgba(0,0,0,0.06)" }}>
                <div style={{ fontSize: "11px", fontWeight: "700", color: accent, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "8px" }}>{category}</div>
                <div style={{ fontWeight: "700", color: "#0f1f35", fontSize: "17px", marginBottom: "8px" }}>{title}</div>
                <div style={{ color: "#5a7a96", fontSize: "13px", lineHeight: "1.7", marginBottom: "18px" }}>{desc}</div>
                <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "rgba(255,255,255,0.6)", border: "1.5px solid rgba(0,0,0,0.1)", borderRadius: "100px", padding: "6px 14px" }}>
                  <span style={{ fontSize: "12px", color: accent, fontWeight: "600" }}>Coming Soon</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section style={{ background: "#fff", padding: "60px 20px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(1.4rem,3vw,2.2rem)", fontWeight: "800", color: "#0f1f35", marginBottom: "10px", textAlign: "center" }}>What Customers Say</h2>
          <p style={{ color: "#5a7a96", marginBottom: "40px", textAlign: "center", fontSize: "15px" }}>Real results from real homeowners</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))", gap: "20px" }}>
            {reviews.map(({ name, loc, text, stars }) => (
              <div key={name} style={{ background: "#f0f5f9", borderRadius: "14px", padding: "24px 20px" }}>
                <div style={{ display: "flex", gap: "3px", marginBottom: "12px" }}>
                  {[...Array(stars)].map((_,i) => <Star key={i} style={{ width: "14px", height: "14px", color: "#ffd700", fill: "#ffd700" }} />)}
                </div>
                <p style={{ color: "#0f1f35", fontSize: "14px", lineHeight: "1.75", marginBottom: "14px", fontStyle: "italic" }}>"{text}"</p>
                <div style={{ fontWeight: "700", color: "#1e3a5f", fontSize: "13px" }}>{name}</div>
                <div style={{ color: "#7aabcf", fontSize: "12px" }}>{loc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notify CTA */}
      <section id="notify" style={{ background: "linear-gradient(135deg,#0f2035,#1e3a5f)", padding: "60px 20px" }}>
        <div style={{ maxWidth: "560px", margin: "0 auto", textAlign: "center" }}>
          <Mail style={{ width: "40px", height: "40px", color: "#7ab8e0", margin: "0 auto 16px" }} />
          <h2 style={{ fontSize: "clamp(1.4rem,3vw,2.2rem)", fontWeight: "800", color: "#fff", marginBottom: "12px" }}>Be the First to Know</h2>
          <p style={{ color: "#b8d4e8", marginBottom: "28px", lineHeight: "1.8", fontSize: "15px" }}>
            Leave your email and we'll notify you as soon as the product launches — plus exclusive early-access pricing.
          </p>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", justifyContent: "center" }}>
            <input type="email" placeholder="your@email.com" style={{ flex: "1 1 220px", padding: "13px 18px", borderRadius: "8px", border: "none", fontSize: "14px", outline: "none", minWidth: "0" }} />
            <button style={{ background: "#3a7cbd", color: "#fff", padding: "13px 24px", borderRadius: "8px", border: "none", fontSize: "14px", fontWeight: "700", cursor: "pointer", whiteSpace: "nowrap" }}>
              Notify Me
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: "#0a1929", color: "#7aabcf", padding: "40px 20px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: "32px", marginBottom: "32px" }}>
            <div>
              <div style={{ fontWeight: "700", color: "#fff", fontSize: "15px", marginBottom: "10px" }}>Allfawise Solutions</div>
              <div style={{ fontSize: "13px", lineHeight: "1.8", color: "#5a7a96" }}>Practical, durable products that solve real everyday problems for your home and life.</div>
            </div>
            <div>
              <div style={{ fontWeight: "700", color: "#fff", fontSize: "13px", marginBottom: "12px", letterSpacing: "0.08em", textTransform: "uppercase" }}>Categories</div>
              {["Home & Garden","Books","Tools & Hardware","Outdoor"].map(l => (
                <a key={l} href="#categories" style={{ display: "block", fontSize: "13px", color: "#5a7a96", textDecoration: "none", marginBottom: "8px" }}>{l}</a>
              ))}
            </div>
            <div>
              <div style={{ fontWeight: "700", color: "#fff", fontSize: "13px", marginBottom: "12px", letterSpacing: "0.08em", textTransform: "uppercase" }}>Company</div>
              {["About","Contact","Privacy Policy","Terms"].map(l => (
                <span key={l} style={{ display: "block", fontSize: "13px", color: "#5a7a96", marginBottom: "8px" }}>{l}</span>
              ))}
            </div>
          </div>
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: "20px", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "12px", fontSize: "12px", color: "#3a5570" }}>
            <span>© 2024 Allfawise Solutions. All rights reserved.</span>
            <span>Built with care · Coming soon</span>
          </div>
        </div>
      </footer>

      {/* Responsive CSS */}
      <style>{`
        @media (max-width: 640px) {
          .desktop-nav { display: none !important; }
          .hero-img-wrap { display: none !important; }
        }
      `}</style>

    </div>
  );
}
