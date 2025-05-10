import { useState } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

export default function App() {
  const [dark, setDark] = useState(false);
  return (
    <div
      className={
        dark ? "dark bg-gray-900 text-white" : "bg-white text-gray-900"
      }
    >
      <Helmet>
        <title>SoftSell - Software License Resale Platform</title>
        <meta
          name="description"
          content="Sell your unused software licenses securely with SoftSell"
        />
      </Helmet>
      <header className="flex justify-between items-center p-6">
        <div className="flex items-center gap-2">
          <img src="/logo.svg" alt="SoftSell Logo" className="w-8 h-8" />
          <span className="font-bold text-2xl">SoftSell</span>
        </div>
        <button
          onClick={() => setDark(!dark)}
          className="rounded-full p-2 border"
        >
          {dark ? "🌙" : "☀️"}
        </button>
      </header>
      <HeroSection />
      <HowItWorks />
      <WhyChooseUs />
      <Testimonials />
      <ContactForm />
      <ChatWidget />
      <footer className="p-4 text-center text-gray-500">
        © 2025 SoftSell. All rights reserved.
      </footer>
    </div>
  );
}

function HeroSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="py-24 text-center bg-gradient-to-b from-blue-50 to-white"
    >
      <h1 className="text-5xl font-bold mb-4">
        Turn Unused Software into Cash
      </h1>
      <p className="text-xl mb-8">
        Sell your software licenses securely with our trusted platform
      </p>
      <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition">
        Get Instant Valuation
      </button>
    </motion.section>
  );
}

function HowItWorks() {
  const steps = [
    {
      icon: "⬆️",
      title: "Upload License",
      desc: "Submit your license details securely.",
    },
    {
      icon: "💰",
      title: "Get Valuation",
      desc: "Receive an instant, fair offer.",
    },
    { icon: "🏦", title: "Get Paid", desc: "Accept and get paid fast." },
  ];
  return (
    <section className="py-16 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-10">How It Works</h2>
      <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
        {steps.map((step, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-xl shadow w-72 text-center"
          >
            <div className="text-4xl mb-3">{step.icon}</div>
            <h3 className="font-semibold text-xl mb-2">{step.title}</h3>
            <p className="text-gray-500">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function WhyChooseUs() {
  const features = [
    {
      icon: "🔒",
      title: "Secure",
      desc: "Your data and transactions are protected.",
    },
    {
      icon: "⚡",
      title: "Fast Payments",
      desc: "Get paid within 24 hours of acceptance.",
    },
    {
      icon: "💡",
      title: "Expert Valuations",
      desc: "Fair pricing from software experts.",
    },
    {
      icon: "🤝",
      title: "Trusted by 1000+ Clients",
      desc: "Proven track record in license resale.",
    },
  ];
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center mb-10">Why Choose Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {features.map((f, i) => (
          <div
            key={i}
            className="bg-blue-50 p-6 rounded-xl text-center shadow-sm"
          >
            <div className="text-3xl mb-2">{f.icon}</div>
            <h4 className="font-semibold mb-1">{f.title}</h4>
            <p className="text-gray-600">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  const reviews = [
    {
      name: "Jane Doe",
      role: "IT Manager",
      company: "Acme Corp",
      text: "SoftSell made selling our unused licenses effortless and fast. Highly recommended!",
    },
    {
      name: "John Smith",
      role: "Procurement Lead",
      company: "Beta Ltd",
      text: "Great service, transparent process, and quick payment. Will use again!",
    },
  ];
  return (
    <section className="py-16 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-10">
        Customer Testimonials
      </h2>
      <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
        {reviews.map((r, i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow w-80">
            <p className="mb-4 italic">"{r.text}"</p>
            <div className="font-semibold">{r.name}</div>
            <div className="text-sm text-gray-500">
              {r.role}, {r.company}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    type: "",
    message: "",
  });
  const [error, setError] = useState("");
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (
      !form.name ||
      !form.email ||
      !form.company ||
      !form.type ||
      !form.message
    ) {
      setError("Please fill all fields.");
      return;
    }
    setSubmitted(true);
    setError("");
  }
  return (
    <section className="py-16" id="contact">
      <h2 className="text-3xl font-bold text-center mb-10">Contact Us</h2>
      <form
        className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <input
            className="w-full border rounded p-3"
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <input
            className="w-full border rounded p-3"
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <input
            className="w-full border rounded p-3"
            type="text"
            name="company"
            placeholder="Company"
            value={form.company}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <select
            className="w-full border rounded p-3"
            name="type"
            value={form.type}
            onChange={handleChange}
          >
            <option value="">Select License Type</option>
            <option>Microsoft</option>
            <option>Adobe</option>
            <option>Autodesk</option>
            <option>Other</option>
          </select>
        </div>
        <div className="mb-4">
          <textarea
            className="w-full border rounded p-3"
            name="message"
            placeholder="Message"
            value={form.message}
            onChange={handleChange}
          />
        </div>
        {error && <div className="text-red-500 mb-2">{error}</div>}
        {submitted ? (
          <div className="text-green-600 font-semibold">
            Thank you! We'll get back to you soon.
          </div>
        ) : (
          <button
            className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
            type="submit"
          >
            Send Message
          </button>
        )}
      </form>
    </section>
  );
}

function ChatWidget() {
  // Simple mock LLM-powered chat
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "Hi! How can I help you with selling your software license?",
    },
  ]);
  const [input, setInput] = useState("");
  const exampleQuestions = [
    "How do I sell my license?",
    "How fast do I get paid?",
    "Is my data safe?",
  ];
  function sendMessage(msg) {
    setMessages([...messages, { from: "user", text: msg }]);
    // Mocked LLM response
    let response = "I'm sorry, I don't understand.";
    if (msg.toLowerCase().includes("sell"))
      response =
        "Just use our form above, and we'll guide you through selling your license.";
    else if (msg.toLowerCase().includes("paid"))
      response = "Payment is made within 24 hours of offer acceptance.";
    else if (msg.toLowerCase().includes("safe"))
      response = "Your data is encrypted and never shared.";
    setTimeout(
      () => setMessages((m) => [...m, { from: "bot", text: response }]),
      800
    );
  }
  return (
    <div className="fixed bottom-4 right-4 z-50">
      {open ? (
        <div className="w-80 bg-white dark:bg-gray-800 rounded-xl shadow-lg flex flex-col">
          <div className="p-3 border-b flex justify-between items-center">
            <span className="font-bold">SoftSell Chat</span>
            <button onClick={() => setOpen(false)}>✖️</button>
          </div>
          <div
            className="flex-1 p-3 overflow-y-auto"
            style={{ maxHeight: 240 }}
          >
            {messages.map((m, i) => (
              <div
                key={i}
                className={`mb-2 ${
                  m.from === "user" ? "text-right" : "text-left"
                }`}
              >
                <span
                  className={`inline-block px-3 py-1 rounded-lg ${
                    m.from === "user"
                      ? "bg-blue-100 dark:bg-blue-900"
                      : "bg-gray-200 dark:bg-gray-700"
                  }`}
                >
                  {m.text}
                </span>
              </div>
            ))}
          </div>
          <div className="p-3 border-t">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (input) {
                  sendMessage(input);
                  setInput("");
                }
              }}
            >
              <input
                className="w-full border rounded p-2"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your question..."
              />
            </form>
            <div className="mt-2 text-xs text-gray-500">
              Try: {exampleQuestions.join(" / ")}
            </div>
          </div>
        </div>
      ) : (
        <button
          className="bg-blue-600 text-white p-4 rounded-full shadow-lg"
          onClick={() => setOpen(true)}
        >
          💬
        </button>
      )}
    </div>
  );
}
