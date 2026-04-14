import { motion } from "motion/react";
import { 
  ArrowLeft, 
  CheckCircle, 
  TrendingDown, 
  AlertCircle, 
  Layers, 
  Sparkles, 
  RefreshCw, 
  Rocket,
  BarChart3
} from "lucide-react";
import { Link } from "react-router-dom";
import { CTA } from "../components/CTA";
import demoboostImage from "../assets/Demoboost.png";

// Note: Using standard Lucide icons as fallback for Material Symbols
export default function PositioningCaseStudy() {
  return (
    <div className="bg-background text-on-surface font-sans selection:bg-primary-fixed selection:text-on-primary-fixed min-h-screen">
      {/* Top Navigation Bar */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/50 shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">
          <Link to="/" className="text-xl font-extrabold tracking-tighter text-slate-900 flex items-center gap-2 font-headline">
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
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container text-[10px] font-bold tracking-widest uppercase mb-8"
                >
                 
                  POSITIONING and MESSAGING
                </motion.div>
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-5xl font-extrabold tracking-tighter text-on-surface max-w-4xl mb-8 leading-[1.1] font-headline"
                >
                  Revamping Positioning and Messaging for an Emerging Category
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
              <span className="text-lg font-bold tracking-widest text-primary uppercase">01. Situation</span>
              <p className="text-xl leading-relaxed text-on-surface-variant mt-6">
               When I joined Demoboost, demo automation was still an emerging category. Prospects often compared us to sales enablement or recording tools, and our messaging was inconsistent. This made it difficult to clearly communicate our value, leading to lower-quality leads and slower sales cycles. 
              </p>
            </div>
          </div>
        </section>

     

        {/* Execution Section */}
        <section className="py-20 px-8 bg-surface-container-low">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <span className="text-lg font-bold tracking-widest text-primary uppercase">02. Execution</span>
              <p className="text-xl leading-relaxed text-on-surface-variant mt-6">
            I worked closely with the C-suite to refine Demoboost’s positioning, build a clear, differentiated messaging framework, and improve lead quality.               </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Pre-Launch */}
              <div className="group">
                <div className="mb-6 h-1 w-full bg-surface-container-highest group-hover:bg-primary transition-colors duration-500"></div>
                <span className="text-xs font-black text-outline-variant mb-4 block">STEP I</span>
                <h3 className="text-2xl font-bold mb-6 font-headline">Research & Insight Gathering</h3>
                <ul className="space-y-4 text-on-surface-variant">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-primary size-5 shrink-0" />
                    <span>Conducted market and category analysis (demo automation & adjacent categories)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-primary size-5 shrink-0" />
                    <span>Analyzed competitor positioning and identified key differentiators</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-primary size-5 shrink-0" />
                    <div className="flex flex-col gap-2">
                      <span> Spoke with sales and presales teams across companies to understand their pain points:</span>
                      <ul className="pl-4 space-y-2 text-sm border-l-2 border-primary/20 mt-1">
                        <li><strong className="text-on-surface">Sales:</strong> dependent on presales, lack of technical expertise, quota pressure</li>
                        <li><strong className="text-on-surface">Presales:</strong> overloaded with demo requests, spending time on low-quality deals</li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
              {/* Launch */}
              <div className="group">
                <div className="mb-6 h-1 w-full bg-surface-container-highest group-hover:bg-primary transition-colors duration-500"></div>
                <span className="text-xs font-black text-outline-variant mb-4 block">STEP II</span>
                <h3 className="text-2xl font-bold mb-6 font-headline">Defining Positioning & Messaging Framework</h3>
                <ul className="space-y-4 text-on-surface-variant">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-primary size-5 shrink-0" />
                    <span>Identified Demoboost’s core strength: an all-in-one demo automation platform supporting multiple use cases</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-primary size-5 shrink-0" />
                    <span>Built a clear POV: For complex B2B products, fragmented or one-size-fits-all demos don’t work</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-primary size-5 shrink-0" />
                    <div className="flex flex-col gap-2">
                      <span>Created persona-specific messaging:</span>
                      <ul className="pl-4 space-y-2 text-sm border-l-2 border-primary/20 mt-1">
                        <li><strong className="text-on-surface">Sales:</strong> Be confident and demo-ready at all times</li>
                        <li><strong className="text-on-surface">Presales:</strong> Focus on high-quality, winnable deals instead of repetitive demo work</li>
                      </ul>
                    </div>
                  </li>
                </ul>
               
              </div>
              {/* Post-Launch */}
              <div className="group">
                <div className="mb-6 h-1 w-full bg-surface-container-highest group-hover:bg-primary transition-colors duration-500"></div>
                <span className="text-xs font-black text-outline-variant mb-4 block">STEP III</span>
                <h3 className="text-2xl font-bold mb-6 font-headline">Rollout & Enablement</h3>
                <ul className="space-y-4 text-on-surface-variant">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-primary size-5 shrink-0" />
                    <span>Updated website copy, landing pages, and refreshed outbound campaigns</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-primary size-5 shrink-0" />
                    <span>Revised sales decks and demo scripts in line with the new narrative</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-primary size-5 shrink-0" />
                    <span>Trained the sales team to deliver consistent messaging across all touchpoints</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Result Section */}
        <section className="py-20 px-8 bg-surface overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div >
              <span className="text-lg font-bold tracking-widest text-primary uppercase">03. Result</span>
              <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-surface-container-low p-10 rounded-3xl border border-outline-variant/10 shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-3xl font-black text-primary mb-4">2x</div>
                  <p className="text-on-surface-variant leading-relaxed">Increase in qualified leads within 3 months.</p>
                </div>
                
                <div className="bg-surface-container-low p-10 rounded-3xl border border-outline-variant/10 shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-3xl font-black text-primary mb-4">High Lead Quality</div>
                  <p className="text-on-surface-variant leading-relaxed">Improved lead quality, resulting in a more relevant pipeline.</p>
                </div>

                <div className="bg-surface-container-low p-10 rounded-3xl border border-outline-variant/10 shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-3xl font-black text-primary mb-4">Reduced Friction</div>
                  <p className="text-on-surface-variant leading-relaxed">Sales reported smoother conversations, as prospects better understood the product and its differentiation.</p>
                </div>

                <div className="bg-surface-container-low p-10 rounded-3xl border border-outline-variant/10 shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-3xl font-black text-primary mb-4">Better Alignment </div>
                  <p className="text-on-surface-variant leading-relaxed">Strong alignment across marketing and sales, creating a consistent buyer experience.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* View Next Case Study */}
        <section className="py-5 px-8 bg-surface">
          <div className="max-w-7xl mx-auto flex justify-end">
            <Link to="/everstage-study" className="group inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all">
              View Next Case Study
              <motion.div
                animate={{ x: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
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
