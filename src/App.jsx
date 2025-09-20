import { useState } from "react";
import {
  BoltIcon,
  ChartBarIcon,
  ChatBubbleLeftRightIcon,
  UsersIcon,
  CheckIcon,
  ShieldCheckIcon,
  CloudIcon,
} from "@heroicons/react/24/outline";

export default function LandingPage() {
  const [pricingPlan, setPricingPlan] = useState("Professional");

  return (
    <div className="font-sans text-gray-200 ">
      {/* Navbar  */}
      <nav className="absolute top-0 left-0 w-full flex justify-between items-center px-8 py-4 bg-transparent z-50">
        <div className="font-bold text-xl text-white">AIFlow</div>

        <div className="flex justify-between items-center gap-4">
          <div className="hidden md:flex gap-6">
            <a
              href="#features"
              className="text-md text-white hover:text-teal-400"
            >
              Features
            </a>
            <a
              href="#testimonials"
              className=" text-md text-white hover:text-teal-400"
            >
              Testimonials
            </a>
            <a
              href="#pricing"
              className="text-md text-white hover:text-teal-400"
            >
              Pricing
            </a>
            <a
              href="#contact"
              className="text-md text-white hover:text-teal-400"
            >
              Contact
            </a>
          </div>
          <button className="text-sm px-4 py-2 rounded-xl border border-white hover:border-teal-200 hover:text-teal-200">
            Sign In
          </button>
          <button className="bg-white text-black px-4 py-2 rounded-xl hover:bg-teal-400">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative flex flex-col text-center items-center justify-center h-screen bg-gradient-to-b from-zinc-950  to-emerald-200 ">
        {/* Grid overlay */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Columns */}
          <div className="grid grid-cols-25 h-full w-full">
            {Array.from({ length: 25 }).map((_, i) => (
              <div key={i} className="border-l border-gray-50/10"></div>
            ))}
          </div>
          {/* Rows */}
          <div className="grid grid-rows-12 h-full w-full absolute top-0 left-0">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="border-t border-gray-50/10"></div>
            ))}
          </div>
        </div>

        <span className="bg-white text-emerald-700 text-sm px-3 py-1 rounded-full inline-block mb-4">
          🤖 New: AI-Powered Insights Dashboard
        </span>
        <h1 className="text-7xl font-bold text-white">
          Automate Your Decisions
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-300">
          Leverage the power of AI to optimize workflows, gain actionable
          insights, and scale your business smarter, faster, and easier.
        </p>
        <div className="flex justify-center gap-4 mt-6">
          <button className="bg-white text-black px-6 py-3 rounded-lg shadow hover:bg-teal-200">
            Start Free Trial
          </button>
          <button className="border border-white text-white px-6 py-3 rounded-lg hover:border-teal-200 hover:text-teal-200">
            Watch Demo
          </button>
        </div>
        <p className="mt-6 text-gray-300 text-sm">
          Trusted by 10,000+ AI-forward companies worldwide
        </p>
      </section>

      {/* Features */}
      <section id="features" className="relative py-20 px-8 bg-zinc-950 ">
        {/* Blurred blob */}
        <div className="absolute top-1/2 left-1/2 w-1/2 h-1/2 bg-teal-400 blur-3xl opacity-10 -translate-x-1/2 -translate-y-1/2 rounded-full"></div>

        <h2 className="text-6xl font-bold text-center mb-12 text-white">
          AI Features for Modern Teams
        </h2>
        <p className="text-center mt-4 max-w-2xl mx-auto text-lg text-gray-300">
          Streamline your workflow and make smarter decisions. Collaborate
          efficiently and get more done with AI-powered tools.
        </p>
        <div className="py-6 grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              icon: <BoltIcon />,
              title: "Smart Automation",
              desc: "Automate repetitive tasks and save time, letting your team focus on more important work.",
            },
            {
              icon: <ChartBarIcon />,
              title: "Predictive Analytics",
              desc: "Use AI predictions to make smarter decisions and plan ahead with confidence.",
            },
            {
              icon: <ChatBubbleLeftRightIcon />,
              title: "Natural Language Processing",
              desc: "Extract insights from text and chat to understand customers and improve communication.",
            },
            {
              icon: <UsersIcon />,
              title: "Collaboration Tools",
              desc: "Get AI-powered suggestions to improve team workflow and project efficiency.",
            },
            {
              icon: <ShieldCheckIcon />,
              title: "Security & Compliance",
              desc: "Keep your data protected with built-in security and compliance features you can trust.",
            },
            {
              icon: <CloudIcon />,
              title: "Scalable Cloud",
              desc: "Easily scale your operations with AI services running on fast, reliable cloud infrastructure.",
            },
          ].map((f, i) => (
            <div
              key={i}
              className="p-6 border border-gray-700 rounded-lg shadow-sm bg-gray-50/10 flex flex-col items-center py-20 justify-between text-center backdrop-blur-md "
            >
              <div className="w-8 h-8 text-teal-200 mb-4">{f.icon}</div>
              <h3 className="font-semibold text-lg mb-2 text-white">
                {f.title}
              </h3>
              <p className="text-sm text-gray-300">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-8 bg-zinc-950">
        <h2 className="text-6xl font-bold text-center mb-6 text-white">
          Loved by AI Enthusiasts
        </h2>
        <p className="text-center mt-4 max-w-2xl mx-auto text-lg text-gray-300">
          Thousands of teams and professionals trust our tools to boost
          efficiency. See why AI enthusiasts rely on us to make smarter
          decisions every day.
        </p>

        <div className="py-6 columns-1 sm:columns-2 md:columns-3 gap-6">
          {[
            {
              text: "Our workflows are smarter and faster with AIFlow automation. Tasks that used to take hours now take minutes.",
              name: "Priya Singh",
              color: "bg-emerald-400",
            },
            {
              text: "AIFlow boosted our decision-making speed by 50%. Incredible results in record time! With the AIFlow dashboard, we were able to identify bottlenecks instantly, automate repetitive tasks, and optimize our workflows across multiple teams. The insights provided allowed us to make smarter, faster decisions and improve overall productivity dramatically.",
              name: "Alex Johnson",
              color: "bg-orange-400",
            },
            {
              text: "AIFlow's predictive insights saved us hundreds of hours every month, allowing us to focus on strategic growth initiatives, streamline operations across multiple departments, and make data-driven decisions faster than ever before. The automation tools have not only increased our productivity but also improved team collaboration, reduced errors, and empowered our managers to concentrate on high-impact projects that drive long-term growth.",
              name: "David Chen",
              color: "bg-pink-400",
            },
            {
              text: "The automation tools helped our startup scale rapidly and efficiently. Every department benefits from AI-powered processes.",
              name: "Sophia Patel",
              color: "bg-orange-400",
            },
            {
              text: "The AI insights dashboard is a game-changer for our analytics team, helping us uncover hidden trends and make informed decisions.",
              name: "Michael Lee",
              color: "bg-cyan-400",
            },
            {
              text: "We improved team collaboration and reduced errors using AIFlow, leading to higher efficiency and happier clients.",
              name: "Emily Kiki",
              color: "bg-indigo-400",
            },
          ].map((t, i) => {
            const initials = t.name
              .split(" ")
              .map((n) => n[0])
              .join("");
            return (
              <div
                key={i}
                className={`break-inside-avoid mb-6 p-6 border border-gray-700 rounded-lg shadow-sm flex flex-col justify-between text-left ${
                  i === 1
                    ? "bg-teal-300 "
                    : i === 4 || i === 3
                    ? "bg-gray-50/10 backdrop-blur-md"
                    : i === 2
                    ? "bg-white/90"
                    : "bg-gray-800/30"
                }`}
              >
                <p
                  className={`text-l italic mb-4 ${
                    i === 2 || i === 1 ? "text-black" : "text-gray-300"
                  }`}
                >
                  “{t.text}”
                </p>
                <div className="flex items-center gap-3 mt-2">
                  <div
                    className={`w-10 h-10 flex items-center justify-center rounded-full font-bold ${
                      t.color
                    } ${i === 2 || i === 1 ? "text-black" : "text-white"}`}
                  >
                    {initials}
                  </div>
                  <p
                    className={`text-sm font-semibold ${
                      i === 2 || i === 1 ? "text-black" : "text-white"
                    }`}
                  >
                    {t.name}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-8 bg-zinc-950">
        <h2 className="text-5xl font-bold text-center mb-12 text-white">
          Simple, AI-Powered Pricing
        </h2>
        <p className="text-center mt-4 max-w-2xl mx-auto text-lg text-gray-300">
          Choose the plan that fits your team and scale effortlessly.
          Transparent pricing, no hidden fees, just AI tools that work for you.
        </p>
        <div className="py-6 grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            {
              plan: "Starter",
              price: "$39",
              features: [
                "Up to 5 users",
                "Basic AI tools",
                "10GB storage",
                "Email support",
              ],
            },
            {
              plan: "Professional",
              price: "$99",
              features: [
                "Up to 25 users",
                "Advanced AI automation",
                "100GB storage",
                "Priority support",
                "Custom workflows",
                "AI analytics dashboard",
                "Collaboration tools",
                "Email & chat support",
              ],
            },
            {
              plan: "Enterprise",
              price: "$249",
              features: [
                "Unlimited users",
                "Custom AI solutions",
                "Unlimited storage",
                "24/7 dedicated support",
              ],
            },
          ].map((p, i) => (
            <div
              key={i}
              className={`p-6  flex flex-col self-start gap-6  border rounded-lg shadow-sm ${
                pricingPlan === p.plan ? "border-teal-300" : "border-gray-700"
              } ${
                i === 1
                  ? "bg-teal-300 text-black"
                  : "bg-gray-800/30 text-gray-300"
              }`}
            >
              <h3
                className={`font-bold text-lg mb-2 ${
                  i === 1 ? "text-black" : "text-white"
                }`}
              >
                {p.plan}
              </h3>
              <p
                className={`text-2xl font-bold mb-4 ${
                  i === 1 ? "text-black" : "text-white"
                }`}
              >
                {p.price}/month
              </p>
              <ul
                className={`mb-6 text-sm space-y-1 ${
                  i === 1 ? "text-black" : "text-gray-300"
                }`}
              >
                {p.features.map((f, i2) => (
                  <li key={i2} className="flex items-center gap-2">
                    <CheckIcon
                      className={`w-4 h-4 ${
                        i === 1 ? "text-black" : "text-teal-400"
                      }`}
                    />
                    {f}
                  </li>
                ))}
              </ul>
              <button
                className={`px-4 py-2 rounded-3xl w-full ${
                  i === 1
                    ? "bg-black text-white hover:bg-teal-500"
                    : "bg-gray-100 text-black hover:bg-teal-400"
                }`}
                onClick={() => setPricingPlan(p.plan)}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-8 bg-zinc-950 text-center text-white">
        <h2 className="text-6xl font-bold mb-4">
          Ready to Leverage AI in Your Business?
        </h2>
        <p className="mb-6 max-w-2xl mx-auto text-gray-300 text-2xl">
          Join thousands of teams already boosting efficiency and insights with
          AIFlow.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-teal-400 text-white px-6 py-3 rounded-lg shadow hover:bg-teal-500">
            Start Free Trial
          </button>
          <button className="border border-gray-600 px-6 py-3 rounded-lg hover:border-teal-400 hover:text-teal-400">
            Schedule Demo
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-8 bg-zinc-950 text-gray-400 text-sm">
        <div className="grid md:grid-cols-[2fr_1fr_1fr] gap-6 max-w-6xl mx-auto">
          <div>
            <h3 className="text-white font-bold mb-2">AIFlow</h3>
            <p>
              Empower your team with AI to optimize decisions, automate tasks,
              and scale smarter.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Product</h4>
            <ul className="space-y-1">
              <li>Features</li>
              <li>Pricing</li>
              <li>Integrations</li>
              <li>API</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Company</h4>
            <ul className="space-y-1">
              <li>About</li>
              <li>Blog</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
        <p className="text-center mt-6">© 2025 AIFlow. All rights reserved.</p>
      </footer>
    </div>
  );
}
