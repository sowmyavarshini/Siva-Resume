import { motion } from "motion/react";
import {
  CheckCircle,
  PlayCircle,
  Megaphone,
  FileText,
  Users,
  ArrowLeft,
} from "lucide-react";
import { Link } from "react-router-dom";
import { CTA } from "../components/CTA";
import demoboostImage from "../assets/Demoboost.png";

export default function CaseStudy() {
  return (
    <div className="bg-background text-on-surface selection:bg-primary-fixed selection:text-on-primary-fixed min-h-screen">
      {/* Top Navigation Bar */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/50 shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">
          <Link
            to="/"
            className="text-xl font-extrabold tracking-tighter text-slate-900 flex items-center gap-2"
          >
            <ArrowLeft className="size-5" />
            Home
          </Link>
        </div>
      </nav>

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative px-8 pt-12 pb-12 overflow-hidden bg-surface-container-low">
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] gap-10 items-start">
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="inline-flex items-center px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container text-[10px] font-bold tracking-widest uppercase mb-6"
                >
                  PRODUCT LAUNCH
                </motion.div>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-5xl font-extrabold tracking-tighter text-on-surface max-w-4xl mb-8 leading-[1.1] font-headline"
                >
                  A Demo by William Shakespeare: How a Creative Launch Resulted
                  in Record Demo Bookings
                </motion.h1>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: 96 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="h-1 bg-primary mb-12"
                ></motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="lg:mt-20 text-center"
              >
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary block leading-none">
                  Organization
                </span>
                <img
                  src={demoboostImage}
                  alt="Demoboost"
                  className="w-full max-w-[240px] mx-auto rounded-3xl object-contain -mt-8"
                />
              </motion.div>
            </div>
          </div>
          {/* Abstract background shape */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-container/10 to-transparent -skew-x-12 transform translate-x-1/4"></div>
        </section>

        {/* Situation Section */}
        <section className="py-20 px-8 bg-surface">
          <div className="max-w-7xl mx-auto">
            <div>
              <span className="text-lg font-bold tracking-widest text-primary uppercase">
                01. Situation
              </span>
              <p className="text-xl leading-relaxed text-on-surface-variant mt-6">
                AI was quickly becoming a major trend. We wanted to expand our
                capabilities and simplify demo delivery for customers with AI
                avatars, which are human-like presenters. At the same time, we
                aimed to reinforce Demoboost’s positioning as an all-in-one demo
                automation platform.
              </p>
            </div>
          </div>
        </section>

        {/* Execution Section */}
        <section className="py-20 px-8 bg-surface-container-low">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <span className="text-lg font-bold tracking-widest text-primary uppercase">
                02. Execution
              </span>
              <p className="text-xl leading-relaxed text-on-surface-variant mt-6">
                I handled the GTM strategy and led the launch, making sure the
                campaign captured market attention and delivered real impact.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Pre-Launch */}
              <div className="group">
                <div className="mb-6 h-1 w-full bg-surface-container-highest group-hover:bg-primary transition-colors duration-500"></div>
                <span className="text-xs font-black text-outline-variant mb-4 block">
                  STEP I
                </span>
                <h3 className="text-2xl font-bold mb-6 font-headline">
                  Pre-Launch
                </h3>
                <ul className="space-y-4 text-on-surface-variant">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-primary size-5 shrink-0" />
                    <span>
                      Partnered with product & sales teams to identify key
                      differentiators
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-primary size-5 shrink-0" />
                    <span>
                      Developed core messaging: AI avatars add a human touch to
                      demos, making them more engaging, personal, and easy to
                      scale
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-primary size-5 shrink-0" />
                    <span>
                      Built the GTM strategy and ran teaser campaigns to drive
                      anticipation
                    </span>
                  </li>
                </ul>
              </div>
              {/* Launch */}
              <div className="group">
                <div className="mb-6 h-1 w-full bg-surface-container-highest group-hover:bg-primary transition-colors duration-500"></div>
                <span className="text-xs font-black text-outline-variant mb-4 block">
                  STEP II
                </span>
                <h3 className="text-2xl font-bold mb-6 font-headline">
                  Launch
                </h3>
                <p className="text-on-surface-variant mb-8">
                  Rather than just explaining the feature, I created a
                  theatrical, highly memorable demo using an AI avatar of
                  William Shakespeare. I also developed launch content across
                  web, email, and social, along with sales enablement materials.
                </p>
              </div>
              {/* Post-Launch */}
              <div className="group">
                <div className="mb-6 h-1 w-full bg-surface-container-highest group-hover:bg-primary transition-colors duration-500"></div>
                <span className="text-xs font-black text-outline-variant mb-4 block">
                  STEP III
                </span>
                <h3 className="text-2xl font-bold mb-6 font-headline">
                  Post-Launch
                </h3>
                <ul className="space-y-4 text-on-surface-variant">
                  <li className="flex items-start gap-3">
                    <Megaphone className="text-primary size-5 shrink-0" />
                    <span>
                      Personalized follow-ups and sales outreach to convert
                      high-intent leads
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FileText className="text-primary size-5 shrink-0" />
                    <span>Rapid deployment of early-adopter case studies</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex justify-center mt-12">
              <button
                onClick={() =>
                  window.open(
                    "https://app.demoboost.com/demo/m6yvyb7i",
                    "_blank",
                  )
                }
                className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-bold text-base hover:opacity-90 active:scale-95 transition-all shadow-md cursor-pointer"
              >
                Watch the demo <PlayCircle className="size-5" />
              </button>
            </div>
          </div>
        </section>

        {/* Result Section */}
        <section className="py-20 px-8 bg-surface overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div>
              <span className="text-lg font-bold tracking-widest text-primary uppercase">
                03. Result
              </span>
              <div className="mt-12">
                <div className="text-6xl font-black text-primary mb-2">4x</div>
                <div className="text-xl font-bold text-on-surface">
                  Increase in Demo Bookings
                </div>
                <p className="text-xl leading-relaxed text-on-surface-variant mt-6">
                  The campaign drove a 4x increase in demo bookings in a single
                  day, the highest in company history. It boosted awareness of
                  Demoboost’s AI capabilities, reinforced our positioning, and
                  became a playbook for future launches.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* View Next Case Study */}
        <section className="py-5 px-8 bg-surface">
          <div className="max-w-7xl mx-auto flex justify-end">
            <Link
              to="/positioning-study"
              className="group inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all"
            >
              View Next Case Study
              <motion.div
                animate={{ x: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </motion.div>
            </Link>
          </div>
        </section>

        <CTA />
      </main>
    </div>
  );
}
