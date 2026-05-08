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
  amazonUrl: "https://www.amazon.com/dp/B0D4VCYXYB",
};

const upcomingProducts = [
  { category: "Books", title: "Curated Reading", desc: "Hand-picked books on home improvement, gardening, and everyday skills.", color: "#e8f0fa", accent: "#2d5986" },
  { category: "Tools & Hardware", title: "Smart Tools", desc: "Practical tools for home repairs, outdoor projects, and DIY improvements.", color: "#f0f7ee", accent: "#2d6e3e" },
  { category: "Outdoor & Garden", title: "Outdoor Living", desc: "Products for your yard, garden, and outdoor spaces — beauty and function.", color: "#fdf3e8", accent: "#8b5e2d" },
];

const reviews = [
  { name: "Michael T.", loc: "Texas", text: "Installed all 4 in about 15 minutes. Water used to pool against my house and now drains perfectly 5 feet away.", stars: 5 },
  { name: "Sarah K.", loc: "Ohio", text: "My basement used to flood every heavy rain. After these extenders, it's been completely dry for 2 seasons!", stars: 5 },
  { name: "Robert M.", loc: "Florida", text: "Good quality material, fits my standard 3x4 downspouts perfectly. Easy to angle in any direction.", stars: 4 },
];

export default function AllfawiseSolutions() {
  const [activeImg, setActiveImg] = useState(0);
  const [selectedColor, setSelectedColor] = useState("Black");

  const colorMap = { Black: "#222", Brown: "#7b4a2d", White: "#f0f0f0", Green: "#2d6e3e", Beige: "#d9c5a0" };

  return (
    <div style={{ fontFamily: "system-ui,-apple-system,sans-serif", background: "#f8fafc", color: "#0f1f35", minHeight: "100vh" }}>

      {/* Announcement Bar */}
      <div style={{ background: "#1e3a5f", color: "#a8d0ea", textAlign: "center", padding: "9px 24px", fontSize: "12.5px", letterSpacing: "0.06em" }}>
        🚚 Free Amazon Prime shipping · 30-day free returns · Amazon's Choice seller
      </div>

      {/* Header */}
      <header style={{ background: "#fff", borderBottom: "1px solid #dce8f5", position: "sticky", top: 0, zIndex: 100, boxShadow: "0 1px 12px rgba(30,58,95,0.07)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "15px 32px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: "linear-gradient(135deg,#1e3a5f,#3a7cbd)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Package style={{ width: "19px", height: "19px", color: "#fff" }} />
            </div>
            <div>
              <div style={{ fontSize: "17px", fontWeight: "700", color: "#1e3a5f" }}>Allfawise <span style={{ color: "#3a7cbd" }}>Solutions</span></div>
              <div style={{ fontSize: "10px", color: "#7aabcf", letterSpacing: "0.15em", textTransform: "uppercase" }}>Smart Products for Real Life</div>
            </div>
          </div>
          <nav style={{ display: "flex", gap: "4px" }}>
            {[["Home & Garden","#featured"],["Books","#categories"],["Tools","#categories"],["Outdoor","#categories"]].map(([label, href]) => (
              <a key={label} href={href} style={{ padding: "7px 14px", fontSize: "13px", color: "#3d5a7a", textDecoration: "none", borderRadius: "8px" }}>{label}</a>
            ))}
          </nav>
          <a href={featuredProduct.amazonUrl} target="_blank" rel="noopener noreferrer" style={{ background: "linear-gradient(135deg,#1e3a5f,#3a7cbd)", color: "#fff", padding: "10px 20px", fontSize: "13px", fontWeight: "600", textDecoration: "none", borderRadius: "8px", display: "flex", alignItems: "center", gap: "7px", whiteSpace: "nowrap" }}>
            <ShoppingBag style={{ width: "15px", height: "15px" }} /> Shop on Amazon
          </a>
        </div>
      </header>

      {/* Hero */}
      <section style={{ position: "relative", background: "linear-gradient(135deg,#0f2035,#1e3a5f 60%,#2d5986)", minHeight: "400px", display: "flex", alignItems: "center", overflow: "hidden" }}>
        <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: "48%", overflow: "hidden" }}>
          <img src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&q=85" alt="Home" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.3 }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right,#0f2035,transparent)" }} />
        </div>
        <div style={{ position: "relative", maxWidth: "1280px", margin: "0 auto", padding: "64px 32px", width: "100%" }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} style={{ maxWidth: "580px" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(74,144,196,0.2)", border: "1px solid rgba(74,144,196,0.35)", borderRadius: "100px", padding: "6px 14px", marginBottom: "20px" }}>
              <Award style={{ width: "13px", height: "13px", color: "#7ab8e0" }} />
              <span style={{ fontSize: "12px", color: "#7ab8e0" }}>Amazon's Choice · 372 Verified Reviews · 4.5 ★</span>
            </div>
            <h1 style={{ fontSize: "clamp(2rem,4vw,3.2rem)", fontWeight: "800", color: "#fff", lineHeight: "1.18", marginBottom: "18px", letterSpacing: "-0.4px" }}>
              Products That Solve<br /><span style={{ color: "#7ab8e0" }}>Real Everyday Problems</span>
            </h1>
            <p style={{ fontSize: "16px", lineHeight: "1.85", color: "#b8d4e8", marginBottom: "32px", fontWeight: "300" }}>
              Allfawise Solutions brings practical, durable products to protect your home, enrich your life, and simplify your day — all on Amazon with Prime delivery.
            </p>
            <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
              <a href="#featured" style={{ background: "#fff", color: "#1e3a5f", padding: "13px 26px", fontSize: "14px", fontWeight: "700", textDecoration: "none", borderRadius: "8px", display: "flex", alignItems: "center", gap: "8px" }}>
                See Featured Product <ArrowRight style={{ width: "16px", height: "16px" }} />
              </a>
              <a href="#why" style={{ border: "1.5px solid rgba(255,255,255,0.3)", color: "#fff", padding: "13px 26px", fontSize: "14px", fontWeight: "600", textDecoration: "none", borderRadius: "8px" }}>
                Why You Need It
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats strip */}
      <div style={{ background: "#1e3a5f" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px", display: "grid", gridTemplateColumns: "repeat(4,1fr)", textAlign: "center" }}>
          {[["10K+","Customers"],["4.5 ★","Amazon Rating"],["372","Verified Reviews"],["Prime","Fast Delivery"]].map(([v,l],i) => (
            <div key={l} style={{ padding: "22px 12px", borderRight: i < 3 ? "1px solid rgba(255,255,255,0.1)" : "none" }}>
              <div style={{ fontSize: "22px", fontWeight: "800", color: "#fff" }}>{v}</div>
              <div style={{ fontSize: "11px", color: "#7aabcf", letterSpacing: "0.15em", textTransform: "uppercase", marginTop: "4px" }}>{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Why You Need It */}
      <section id="why" style={{ background: "#fff", padding: "80px 32px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center" }}>
          <div>
            <p style={{ fontSize: "11px", letterSpacing: "0.3em", color: "#3a7cbd", textTransform: "uppercase", marginBottom: "14px", fontWeight: "600" }}>The Problem</p>
            <h2 style={{ fontSize: "clamp(1.7rem,2.8vw,2.3rem)", fontWeight: "800", color: "#0f1f35", marginBottom: "18px", lineHeight: "1.25", letterSpacing: "-0.3px" }}>
              Why Every Home Needs Downspout Extenders
            </h2>
            <p style={{ fontSize: "16px", lineHeight: "1.9", color: "#4a6a85", marginBottom: "24px" }}>
              Without proper downspout extensions, rainwater accumulates near your foundation. Over time, this causes basement flooding, soil erosion, cracked foundations, and mold growth — repairs costing thousands of dollars. A simple extender installed in minutes can prevent years of damage.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "28px" }}>
              {["Basement flooding & water intrusion","Foundation cracks from soil erosion","Mold and mildew near walls","Landscape damage around your home"].map(item => (
                <div key={item} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#e53e3e", flexShrink: 0 }} />
                  <span style={{ fontSize: "15px", color: "#4a6a85" }}>{item}</span>
                </div>
              ))}
            </div>
            <div style={{ padding: "18px 22px", background: "#f0f7ff", border: "1px solid #c3daf5", borderRadius: "12px" }}>
              <p style={{ fontSize: "14px", color: "#1e3a5f", fontWeight: "700", marginBottom: "4px" }}>💡 The Solution</p>
              <p style={{ fontSize: "14px", color: "#3d5a7a", lineHeight: "1.7" }}>A flexible downspout extender installs in under 5 minutes and diverts rainwater 4–6 feet away from your home's foundation — preventing all of the above at a fraction of the cost.</p>
            </div>
          </div>
          <div style={{ position: "relative" }}>
            <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=85" alt="Home protection" style={{ width: "100%", height: "440px", objectFit: "cover", borderRadius: "16px" }} />
            <div style={{ position: "absolute", bottom: "18px", left: "18px", right: "18px", background: "rgba(15,32,53,0.92)", backdropFilter: "blur(8px)", borderRadius: "12px", padding: "14px 18px" }}>
              <div style={{ display: "flex", gap: "4px", marginBottom: "6px" }}>
                {[1,2,3,4,5].map(i => <Star key={i} style={{ width: "13px", height: "13px", color: "#f59e0b", fill: "#f59e0b" }} />)}
                <span style={{ fontSize: "12px", color: "#a8d0ea", marginLeft: "6px" }}>4.5 · 372 Amazon reviews</span>
              </div>
              <p style={{ fontSize: "14px", color: "#fff", fontWeight: "600" }}>Amazon's Choice · Gutter Downspout Extensions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Product */}
      <section id="featured" style={{ background: "#f0f5f9", padding: "80px 32px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <p style={{ fontSize: "11px", letterSpacing: "0.3em", color: "#3a7cbd", textTransform: "uppercase", marginBottom: "12px", fontWeight: "600" }}>Featured Product · Available Now on Amazon</p>
            <h2 style={{ fontSize: "clamp(1.8rem,3vw,2.5rem)", fontWeight: "800", color: "#0f1f35", letterSpacing: "-0.3px" }}>Rain Gutter Downspout Extensions</h2>
            <p style={{ fontSize: "15px", color: "#5a7a96", marginTop: "8px" }}>4-Pack · Multiple Colors · Flexible & Easy Install</p>
          </div>

          <div style={{ background: "#fff", borderRadius: "20px", overflow: "hidden", boxShadow: "0 4px 32px rgba(30,58,95,0.1)", display: "grid", gridTemplateColumns: "1fr 1fr" }}>
            {/* Gallery */}
            <div style={{ padding: "36px", background: "#f8fafc" }}>
              <div style={{ borderRadius: "14px", overflow: "hidden", marginBottom: "14px", height: "320px", background: "#e8f0fa" }}>
                <img src={featuredProduct.images[activeImg]} alt="Product" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div style={{ display: "flex", gap: "10px" }}>
                {featuredProduct.images.map((img, i) => (
                  <button key={i} onClick={() => setActiveImg(i)} style={{ width: "68px", height: "52px", borderRadius: "8px", overflow: "hidden", border: i === activeImg ? "2.5px solid #1e3a5f" : "2px solid #dce8f0", cursor: "pointer", padding: 0, background: "none" }}>
                    <img src={img} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </button>
                ))}
              </div>
            </div>

            {/* Details */}
            <div style={{ padding: "36px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px", flexWrap: "wrap" }}>
                <span style={{ background: "#1e3a5f", color: "#7ab8e0", padding: "3px 10px", borderRadius: "5px", fontSize: "10px", fontWeight: "700", letterSpacing: "0.1em" }}>AMAZON'S CHOICE</span>
                <div style={{ display: "flex", alignItems: "center", gap: "3px" }}>
                  {[1,2,3,4,5].map(i => <Star key={i} style={{ width: "13px", height: "13px", color: "#f59e0b", fill: i <= 4 ? "#f59e0b" : "none" }} />)}
                  <span style={{ fontSize: "12px", color: "#5a7a96", marginLeft: "4px" }}>4.5 (372 reviews)</span>
                </div>
              </div>
              <h3 style={{ fontSize: "21px", fontWeight: "800", color: "#0f1f35", marginBottom: "6px", lineHeight: "1.3" }}>{featuredProduct.name}</h3>
              <p style={{ fontSize: "13px", color: "#6a8aaa", marginBottom: "18px" }}>{featuredProduct.subtitle}</p>
              <div style={{ display: "flex", alignItems: "baseline", gap: "8px", marginBottom: "20px" }}>
                <span style={{ fontSize: "32px", fontWeight: "800", color: "#0f1f35" }}>{featuredProduct.price}</span>
                <span style={{ fontSize: "13px", color: "#6a8aaa" }}>4-Pack · Free Prime Shipping</span>
              </div>

              {/* Color */}
              <div style={{ marginBottom: "20px" }}>
                <p style={{ fontSize: "13px", fontWeight: "600", color: "#3d5a7a", marginBottom: "8px" }}>Color: <span style={{ color: "#0f1f35" }}>{selectedColor}</span></p>
                <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                  {featuredProduct.colors.map(color => (
                    <button key={color} onClick={() => setSelectedColor(color)} title={color} style={{ width: "26px", height: "26px", borderRadius: "50%", background: colorMap[color] || "#888", border: selectedColor === color ? "3px solid #1e3a5f" : "2px solid #ccc", cursor: "pointer", outline: "none" }} />
                  ))}
                </div>
              </div>

              {/* Highlights */}
              <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "24px" }}>
                {featuredProduct.highlights.map(h => (
                  <div key={h.label} style={{ display: "flex", gap: "10px", alignItems: "flex-start", padding: "10px 12px", background: "#f0f7ff", borderRadius: "9px" }}>
                    <CheckCircle style={{ width: "16px", height: "16px", color: "#1e3a5f", marginTop: "2px", flexShrink: 0 }} />
                    <div>
                      <p style={{ fontSize: "12px", fontWeight: "700", color: "#0f1f35", marginBottom: "2px" }}>{h.label}</p>
                      <p style={{ fontSize: "12px", color: "#5a7a96", lineHeight: "1.6" }}>{h.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <a href={featuredProduct.amazonUrl} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", width: "100%", background: "linear-gradient(135deg,#1e3a5f,#3a7cbd)", color: "#fff", padding: "15px", fontSize: "15px", fontWeight: "700", textDecoration: "none", borderRadius: "10px", boxSizing: "border-box" }}>
                <ShoppingBag style={{ width: "17px", height: "17px" }} />
                Buy on Amazon · $48.99
              </a>
              <p style={{ fontSize: "11px", color: "#8aacca", textAlign: "center", marginTop: "9px" }}>✓ Sold by Amazon · ✓ 30-Day Free Returns · ✓ Prime Eligible</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section style={{ background: "#fff", padding: "72px 32px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <p style={{ fontSize: "11px", letterSpacing: "0.3em", color: "#3a7cbd", textTransform: "uppercase", marginBottom: "12px", fontWeight: "600" }}>Super Easy</p>
            <h2 style={{ fontSize: "clamp(1.7rem,2.8vw,2.3rem)", fontWeight: "800", color: "#0f1f35", letterSpacing: "-0.3px" }}>Install in 3 Simple Steps</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "28px" }}>
            {[
              { step: "01", title: "Find Your Downspout", desc: "Locate the existing downspout at the base of your home's gutter system — typically on each corner." },
              { step: "02", title: "Attach the Extender", desc: "Connect the flexible extender to the end of your downspout using the included mounting screws." },
              { step: "03", title: "Direct the Water", desc: "Extend and angle the tube to direct water 4–6 feet from your foundation. Done in minutes." },
            ].map(s => (
              <div key={s.step} style={{ padding: "32px 28px", background: "#f0f7ff", borderRadius: "16px", border: "1px solid #c3daf5" }}>
                <div style={{ fontSize: "40px", fontWeight: "900", color: "#c3daf5", lineHeight: "1", marginBottom: "14px" }}>{s.step}</div>
                <h3 style={{ fontSize: "17px", fontWeight: "700", color: "#0f1f35", marginBottom: "10px" }}>{s.title}</h3>
                <p style={{ fontSize: "14px", lineHeight: "1.8", color: "#5a7a96" }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section id="categories" style={{ background: "#f0f5f9", padding: "72px 32px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <p style={{ fontSize: "11px", letterSpacing: "0.3em", color: "#3a7cbd", textTransform: "uppercase", marginBottom: "12px", fontWeight: "600" }}>More Coming Soon</p>
            <h2 style={{ fontSize: "clamp(1.7rem,2.8vw,2.3rem)", fontWeight: "800", color: "#0f1f35", letterSpacing: "-0.3px" }}>Our Growing Catalog</h2>
            <p style={{ fontSize: "15px", color: "#5a7a96", marginTop: "10px", maxWidth: "480px", margin: "10px auto 0" }}>
              Allfawise Solutions is expanding. We're adding new products that solve real problems across multiple categories.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "22px" }}>
            {upcomingProducts.map(prod => (
              <div key={prod.category} style={{ background: "#fff", borderRadius: "16px", padding: "32px 28px", border: "1px solid #dce8f0", position: "relative" }}>
                <div style={{ position: "absolute", top: "14px", right: "14px", background: prod.color, color: prod.accent, padding: "3px 10px", borderRadius: "100px", fontSize: "10px", fontWeight: "700" }}>Coming Soon</div>
                <div style={{ width: "52px", height: "52px", borderRadius: "12px", background: prod.color, display: "flex", alignItems: "center", justifyContent: "center", color: prod.accent, marginBottom: "18px", fontSize: "24px" }}>
                  {prod.category === "Books" ? "📚" : prod.category === "Tools & Hardware" ? "🔧" : "🌿"}
                </div>
                <p style={{ fontSize: "10px", letterSpacing: "0.2em", color: prod.accent, textTransform: "uppercase", fontWeight: "600", marginBottom: "6px" }}>{prod.category}</p>
                <h3 style={{ fontSize: "18px", fontWeight: "700", color: "#0f1f35", marginBottom: "10px" }}>{prod.title}</h3>
                <p style={{ fontSize: "13px", lineHeight: "1.8", color: "#6a8aaa" }}>{prod.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section style={{ background: "#1e3a5f", padding: "72px 32px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <p style={{ fontSize: "11px", letterSpacing: "0.3em", color: "#7aabcf", textTransform: "uppercase", marginBottom: "12px", fontWeight: "600" }}>What Customers Say</p>
            <h2 style={{ fontSize: "clamp(1.7rem,2.8vw,2.3rem)", fontWeight: "800", color: "#fff", letterSpacing: "-0.3px" }}>Trusted by Homeowners</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "22px" }}>
            {reviews.map(r => (
              <div key={r.name} style={{ background: "rgba(255,255,255,0.06)", borderRadius: "14px", padding: "26px", border: "1px solid rgba(255,255,255,0.1)" }}>
                <div style={{ display: "flex", gap: "3px", marginBottom: "12px" }}>
                  {[1,2,3,4,5].map(i => <Star key={i} style={{ width: "13px", height: "13px", color: "#f59e0b", fill: i <= r.stars ? "#f59e0b" : "none" }} />)}
                </div>
                <p style={{ fontSize: "14px", lineHeight: "1.8", color: "#c8dff0", marginBottom: "14px", fontStyle: "italic" }}>"{r.text}"</p>
                <p style={{ fontSize: "13px", fontWeight: "600", color: "#fff" }}>{r.name} <span style={{ color: "#7aabcf", fontWeight: "400" }}>— {r.loc}</span></p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ background: "#f0f7ff", padding: "68px 32px", textAlign: "center" }}>
        <p style={{ fontSize: "11px", letterSpacing: "0.3em", color: "#3a7cbd", textTransform: "uppercase", marginBottom: "14px", fontWeight: "600" }}>Ready to Protect Your Home?</p>
        <h2 style={{ fontSize: "clamp(1.8rem,3.2vw,2.6rem)", fontWeight: "800", color: "#0f1f35", marginBottom: "14px", letterSpacing: "-0.3px" }}>Start with the #1 Downspout Extender on Amazon</h2>
        <p style={{ fontSize: "15px", color: "#5a7a96", maxWidth: "500px", margin: "0 auto 32px", lineHeight: "1.85" }}>
          Join 10,000+ homeowners protecting their foundation with Allfawise Solutions. Available now with fast Prime delivery.
        </p>
        <a href={featuredProduct.amazonUrl} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "linear-gradient(135deg,#1e3a5f,#3a7cbd)", color: "#fff", padding: "15px 34px", fontSize: "14px", fontWeight: "700", textDecoration: "none", borderRadius: "10px", boxShadow: "0 4px 20px rgba(30,58,95,0.22)" }}>
          <ShoppingBag style={{ width: "17px", height: "17px" }} />
          Shop Now on Amazon · $48.99 (4-Pack)
        </a>
        <p style={{ fontSize: "12px", color: "#8aacca", marginTop: "12px" }}>✓ Free Prime Shipping &nbsp;·&nbsp; ✓ 30-Day Returns &nbsp;·&nbsp; ✓ Amazon's Choice</p>
      </section>

      {/* Footer */}
      <footer id="contact" style={{ background: "#0a1628", padding: "48px 32px 28px", borderTop: "1px solid #1e3a5f" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: "40px", marginBottom: "36px" }}>
            <div>
              <div style={{ fontSize: "16px", fontWeight: "700", color: "#fff", marginBottom: "8px" }}>Allfawise <span style={{ color: "#3a7cbd" }}>Solutions</span></div>
              <p style={{ fontSize: "13px", color: "#5a7a96", lineHeight: "1.8", maxWidth: "260px" }}>Practical, durable products for real life. Curated for quality, sold on Amazon.</p>
            </div>
            <div>
              <p style={{ fontSize: "10px", letterSpacing: "0.2em", color: "#5a7a96", textTransform: "uppercase", marginBottom: "14px", fontWeight: "600" }}>Shop</p>
              {["Downspout Extenders","Books (Soon)","Tools (Soon)","Outdoor (Soon)"].map(l => <div key={l} style={{ fontSize: "13px", color: "#7aabcf", marginBottom: "9px" }}>{l}</div>)}
            </div>
            <div>
              <p style={{ fontSize: "10px", letterSpacing: "0.2em", color: "#5a7a96", textTransform: "uppercase", marginBottom: "14px", fontWeight: "600" }}>Support</p>
              {["Contact Us","Amazon Returns","Product FAQ","Install Guide"].map(l => <div key={l} style={{ fontSize: "13px", color: "#7aabcf", marginBottom: "9px" }}>{l}</div>)}
            </div>
            <div>
              <p style={{ fontSize: "10px", letterSpacing: "0.2em", color: "#5a7a96", textTransform: "uppercase", marginBottom: "14px", fontWeight: "600" }}>Contact</p>
              <a href="mailto:support@allfawise.com" style={{ fontSize: "13px", color: "#7aabcf", display: "flex", alignItems: "center", gap: "7px", textDecoration: "none", marginBottom: "9px" }}>
                <Mail style={{ width: "13px", height: "13px" }} /> support@allfawise.com
              </a>
              <p style={{ fontSize: "13px", color: "#5a7a96" }}>Sold on Amazon.com</p>
            </div>
          </div>
          <div style={{ borderTop: "1px solid #1e3a5f", paddingTop: "20px", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "10px" }}>
            <p style={{ fontSize: "12px", color: "#3d5a7a" }}>© 2026 Allfawise Solutions. All rights reserved.</p>
            <p style={{ fontSize: "12px", color: "#3d5a7a" }}>Products available on Amazon.com</p>
          </div>
        </div>
      </footer>

    </div>
  );
}
