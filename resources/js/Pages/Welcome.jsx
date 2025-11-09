import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Welcome() {
  const [form, setForm] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Waitlist registration:", form);
    setForm({ name: "", email: "" });
    alert("Thank you for joining our waitlist!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#050012] via-[#0a0025] to-[#13004b] text-white font-sans overflow-x-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.15)_0%,transparent_70%)] z-0"></div>

      {/* HEADER */}
      <header className="fixed top-0 w-full bg-[rgba(5,0,20,0.8)] backdrop-blur-md border-b border-[rgba(255,255,255,0.1)] z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 text-transparent bg-clip-text"
          >
            Global Chain Property
          </motion.h1>
          <nav className="hidden md:flex space-x-8 text-cyan-300 text-sm font-medium">
            {["Home", "Features", "How It Works", "Token", "Testimonials", "Waitlist"].map((item, i) => (
              <motion.a
                key={i}
                href={`#${item.toLowerCase().replace(/ /g, "")}`}
                whileHover={{ scale: 1.1, color: "#fff" }}
                className="hover:text-white transition-colors cursor-pointer"
              >
                {item}
              </motion.a>
            ))}
          </nav>
        </div>
      </header>

      {/* HERO SECTION */}
      <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-24 relative">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 drop-shadow-[0_0_15px_rgba(255,0,255,0.5)]"
        >
          Own Real Estate, The Future Way
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-lg md:text-xl text-cyan-200 max-w-2xl mb-8"
        >
          Empowering global investors to buy, sell, and earn from real-world properties
          through tokenized blockchain technology.
        </motion.p>
        <motion.a
          href="#waitlist"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-purple-600 to-cyan-500 text-white px-8 py-3 rounded-xl font-semibold shadow-[0_0_25px_rgba(0,255,255,0.3)] hover:shadow-[0_0_35px_rgba(255,0,255,0.4)] transition-all"
        >
          Join the Waitlist
        </motion.a>
      </section>

      {/* FEATURES SECTION */}
      <section id="features" className="py-20 px-6 bg-[rgba(255,255,255,0.05)] border-t border-[rgba(255,255,255,0.1)]">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl font-bold text-center mb-10 text-cyan-300"
        >
          Why Choose Global Chain Property?
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              title: "Blockchain Transparency",
              text: "Every property share and transaction is recorded immutably using BlockDAG technology.",
            },
            {
              title: "Borderless Investment",
              text: "Invest in real estate across continents from your phone, starting from as little as $10.",
            },
            {
              title: "Smart Contracts",
              text: "Automated ownership verification and dividend distribution without intermediaries.",
            },
          ].map((f, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-2xl bg-[rgba(15,15,40,0.8)] border border-[rgba(255,255,255,0.1)] shadow-[0_0_25px_rgba(0,255,255,0.2)]"
            >
              <h3 className="text-2xl font-semibold mb-3 text-purple-300">{f.title}</h3>
              <p className="text-cyan-100">{f.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="howitworks" className="py-20 px-6 text-center">
        <motion.h2 className="text-4xl font-bold text-cyan-300 mb-10">How It Works</motion.h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            { step: "1", title: "Register & Verify", text: "Sign up and complete your investor verification securely." },
            { step: "2", title: "Select Property Tokens", text: "Browse global assets and buy shares via smart contracts." },
            { step: "3", title: "Earn & Trade", text: "Receive passive income and trade your shares on our marketplace." },
          ].map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="p-6 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-2xl shadow-[0_0_20px_rgba(255,0,255,0.2)]"
            >
              <div className="text-5xl font-bold text-purple-400 mb-4">{s.step}</div>
              <h3 className="text-2xl mb-3 text-cyan-200">{s.title}</h3>
              <p className="text-cyan-100">{s.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TOKEN UTILITY */}
      <section id="token" className="py-20 px-6 bg-[rgba(255,255,255,0.03)] border-t border-[rgba(255,255,255,0.1)] text-center">
        <motion.h2 className="text-4xl font-bold text-purple-300 mb-10">Token Utility</motion.h2>
        <p className="max-w-3xl mx-auto text-cyan-200 mb-12">
          Our utility token, <span className="text-pink-400 font-semibold">GCPX</span>, fuels the ecosystem. It enables staking rewards,
          transaction fee discounts, and exclusive access to early-stage property offerings.
        </p>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="py-20 px-6 text-center">
        <motion.h2 className="text-4xl font-bold text-cyan-300 mb-10">What Investors Say</motion.h2>
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {[
            { name: "Nasredeen Abdulhaleem.", text: "Finally, a transparent way to own real estate worldwide. Global Chain Property is game-changing!" },
            { name: "Abdul Qudus Ibrahim.", text: "The ease of use and blockchain integration make this the future of investing." },
          ].map((t, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              className="p-6 rounded-2xl bg-[rgba(15,15,40,0.8)] border border-[rgba(255,255,255,0.1)] shadow-[0_0_25px_rgba(0,255,255,0.2)]"
            >
              <p className="italic text-cyan-100 mb-4">“{t.text}”</p>
              <h4 className="text-purple-300 font-semibold">{t.name}</h4>
            </motion.div>
          ))}
        </div>
      </section>

      {/* WAITLIST SECTION */}
      <section id="waitlist" className="py-20 px-6 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md shadow-[0_0_25px_rgba(0,255,255,0.3)] bg-[rgba(15,15,40,0.8)] border border-[rgba(255,255,255,0.1)] rounded-2xl p-8"
        >
          <h2 className="text-3xl font-bold text-cyan-300 mb-4">Join Our Waitlist</h2>
          <p className="text-cyan-100 mb-6">Be among the first to own the future of tokenized real estate.</p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full px-4 py-2 bg-[rgba(0,0,0,0.4)] border border-cyan-600 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full px-4 py-2 bg-[rgba(0,0,0,0.4)] border border-cyan-600 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-gradient-to-r from-purple-600 to-cyan-500 text-white py-2 rounded-xl shadow-[0_0_20px_rgba(255,0,255,0.3)] hover:shadow-[0_0_30px_rgba(0,255,255,0.5)] transition-all"
            >
              Join Waitlist
            </motion.button>
          </form>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center text-cyan-300 text-sm border-t border-[rgba(255,255,255,0.1)] bg-[rgba(0,0,0,0.3)]">
        <p>© {new Date().getFullYear()} Global Chain Property. All rights reserved.</p>
        <div className="flex justify-center space-x-6 mt-4 text-cyan-400">
          <a href="#" className="hover:text-white">Twitter</a>
          <a href="#" className="hover:text-white">LinkedIn</a>
          <a href="#" className="hover:text-white">Telegram</a>
        </div>
      </footer>
    </div>
  );
}
