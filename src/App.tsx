import React from "react";
import { motion } from "framer-motion";
import { ShoppingBag, ShieldCheck, Truck, Star, Mail, CheckCircle, ArrowRight } from "lucide-react";

const products = [
  {
    name: "Home & Kitchen Essentials",
    description: "Useful products designed to simplify your home routine with practical everyday solutions.",
    tag: "Everyday comfort",
  },
  {
    name: "Outdoor & Utility Products",
    description: "Reliable items created for home projects, organization, outdoor use, and daily convenience.",
    tag: "Durable solutions",
  },
  {
    name: "Smart Lifestyle Accessories",
    description: "Modern accessories selected to bring more function, simplicity, and value to your lifestyle.",
    tag: "Smart living",
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
    question: "Are your products easy to use?",
    answer: "Our goal is to offer practical products that are simple, useful, and designed for everyday customers.",
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
    icon: <CheckCircle className="h-7 w-7" />,
    title: "Practical Solutions",
    text: "Simple, smart, and useful products for homes, families, and everyday routines.",
  },
];

export default function AllfawiseWebsite() {
  return (
    <main className="min-h-screen bg-white text-neutral-950">
      <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-neutral-950 text-white shadow-sm">
              <ShoppingBag className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xl font-bold tracking-tight">Allfawise</p>
              <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">Smart Living</p>
            </div>
          </div>
          <nav className="hidden items-center gap-8 text-sm font-medium text-neutral-700 md:flex">
            <a href="#products" className="hover:text-neutral-950">Products</a>
            <a href="#about" className="hover:text-neutral-950">About</a>
            <a href="#contact" className="hover:text-neutral-950">Support</a>
          </nav>
          <a
            href="#products"
            className="rounded-full bg-neutral-950 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-neutral-800"
          >
            Shop on Amazon
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden bg-gradient-to-b from-neutral-50 to-white">
        <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-neutral-200 blur-3xl" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-4 inline-flex rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-700 shadow-sm">
              Practical products for modern homes
            </p>
            <h1 className="max-w-2xl text-5xl font-bold tracking-tight text-neutral-950 md:text-7xl">
              Smart Solutions for Everyday Living
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-600">
              Allfawise offers practical, reliable, and modern products designed to make daily life easier, more organized, and more convenient.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#products"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-neutral-950 px-7 py-4 text-base font-semibold text-white shadow-md transition hover:bg-neutral-800"
              >
                Explore Products <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center rounded-full border border-neutral-300 bg-white px-7 py-4 text-base font-semibold text-neutral-950 shadow-sm transition hover:bg-neutral-50"
              >
                Learn About Us
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="rounded-[2rem] border border-neutral-200 bg-white p-6 shadow-2xl">
              <div className="rounded-[1.5rem] bg-neutral-100 p-8">
                <div className="grid gap-4">
                  <div className="rounded-3xl bg-white p-6 shadow-sm">
                    <div className="mb-5 flex items-center justify-between">
                      <span className="rounded-full bg-neutral-950 px-3 py-1 text-xs font-semibold text-white">Allfawise</span>
                      <Star className="h-5 w-5 fill-current text-neutral-950" />
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight">Premium Everyday Products</h2>
                    <p className="mt-3 text-neutral-600">Simple. Useful. Reliable.</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-3xl bg-white p-5 shadow-sm">
                      <p className="text-3xl font-bold">Fast</p>
                      <p className="mt-1 text-sm text-neutral-500">Amazon delivery</p>
                    </div>
                    <div className="rounded-3xl bg-white p-5 shadow-sm">
                      <p className="text-3xl font-bold">Easy</p>
                      <p className="mt-1 text-sm text-neutral-500">Shopping experience</p>
                    </div>
                  </div>
                  <div className="rounded-3xl bg-neutral-950 p-6 text-white shadow-sm">
                    <p className="text-sm uppercase tracking-[0.25em] text-neutral-400">Brand promise</p>
                    <p className="mt-2 text-2xl font-semibold">Smarter choices for your home and lifestyle.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-5 md:grid-cols-3">
          {benefits.map((item) => (
            <div key={item.title} className="rounded-3xl border border-neutral-200 bg-white p-7 shadow-sm">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-neutral-950 text-white">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="mt-3 leading-7 text-neutral-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="products" className="bg-neutral-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-neutral-500">Featured Products</p>
              <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">Shop Allfawise Products</h2>
            </div>
            <p className="max-w-lg text-neutral-600">
              Browse our collection of useful products and shop directly through Amazon for a secure and convenient experience.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {products.map((product) => (
              <article key={product.name} className="group overflow-hidden rounded-[2rem] border border-neutral-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <div className="flex h-56 items-center justify-center bg-gradient-to-br from-neutral-100 to-neutral-200 p-8">
                  <div className="flex h-32 w-32 items-center justify-center rounded-[2rem] bg-white shadow-md">
                    <ShoppingBag className="h-14 w-14 text-neutral-950" />
                  </div>
                </div>
                <div className="p-7">
                  <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-semibold text-neutral-600">{product.tag}</span>
                  <h3 className="mt-4 text-2xl font-bold">{product.name}</h3>
                  <p className="mt-3 leading-7 text-neutral-600">{product.description}</p>
                  <a
                    href="#"
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-neutral-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
                  >
                    View on Amazon <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center">
        <div className="rounded-[2rem] bg-neutral-950 p-10 text-white shadow-xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-neutral-400">About Allfawise</p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight">Products made for real life.</h2>
          <p className="mt-6 text-lg leading-8 text-neutral-300">
            Allfawise is focused on bringing practical, modern, and reliable products to customers who value convenience, quality, and smart solutions for everyday living.
          </p>
        </div>
        <div className="space-y-5">
          {["Carefully selected products", "Simple and useful design", "Customer-focused shopping experience", "Available through Amazon"].map((item) => (
            <div key={item} className="flex items-center gap-4 rounded-3xl border border-neutral-200 bg-white p-5 shadow-sm">
              <CheckCircle className="h-6 w-6 text-neutral-950" />
              <p className="text-lg font-semibold">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-neutral-950 px-6 py-20 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-neutral-400">Shop with confidence</p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">Find Allfawise on Amazon</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-neutral-300">
            Enjoy secure checkout, trusted customer service, and convenient delivery when you shop Allfawise products through Amazon.
          </p>
          <a
            href="#"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-base font-bold text-neutral-950 shadow-md transition hover:bg-neutral-200"
          >
            Visit Our Amazon Store <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-neutral-500">Customer Help</p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">Frequently Asked Questions</h2>
          <p className="mx-auto mt-4 max-w-2xl text-neutral-600">
            Clear answers to help customers feel confident before shopping Allfawise products.
          </p>
        </div>
        <div className="mx-auto grid max-w-4xl gap-5">
          {faqs.map((faq) => (
            <div key={faq.question} className="rounded-3xl border border-neutral-200 bg-white p-7 shadow-sm">
              <h3 className="text-xl font-bold">{faq.question}</h3>
              <p className="mt-3 leading-7 text-neutral-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-neutral-50 px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          <div className="rounded-[2rem] bg-white p-8 shadow-sm border border-neutral-200">
            <h3 className="text-2xl font-bold">Product Support</h3>
            <p className="mt-4 leading-7 text-neutral-600">
              Need help with a product? Contact our support team and we will help you with questions, usage, or order-related guidance.
            </p>
          </div>
          <div className="rounded-[2rem] bg-white p-8 shadow-sm border border-neutral-200">
            <h3 className="text-2xl font-bold">Returns</h3>
            <p className="mt-4 leading-7 text-neutral-600">
              Orders placed through Amazon follow Amazon return policies. Please check your Amazon order page for return options.
            </p>
          </div>
          <div className="rounded-[2rem] bg-white p-8 shadow-sm border border-neutral-200">
            <h3 className="text-2xl font-bold">Partnerships</h3>
            <p className="mt-4 leading-7 text-neutral-600">
              For wholesale, collaboration, or brand partnership inquiries, please contact the Allfawise team by email.
            </p>
          </div>
        </div>
      </section>

      <footer id="contact" className="border-t border-neutral-200 bg-white px-6 py-12">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="text-2xl font-bold">Allfawise</p>
            <p className="mt-2 text-neutral-600">Smart Solutions for Everyday Living</p>
          </div>
          <div className="flex flex-col gap-3 text-sm text-neutral-600 md:items-end">
            <p className="flex items-center gap-2"><Mail className="h-4 w-4" /> support@allfawise.com</p>
            <p>© 2026 Allfawise. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
