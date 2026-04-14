import { motion } from "motion/react";
import { ArrowLeft, PlayCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import { CTA } from "../components/CTA";
import demoboostImage from "../assets/Everstage.png";
import closingthoughts from "../assets/Closing-Thoughts.gif";
import plantemp from "../assets/AE-comp-plan-template.webp";
import rev from "../assets/revops.jpeg";
import es1 from "../assets/ES-1.mp4";
import es2 from "../assets/ES-2.mp4";
import es3 from "../assets/ES-3.mp4";

// 🎬 Styled Video Card (matches WorkTile behavior)
function VideoCard({ src, aspect = "aspect-video", maxWidth = "w-full" }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`group cursor-pointer flex flex-col items-center`}
    >
      <div
        className={`${aspect} ${maxWidth} overflow-hidden bg-surface-container-low rounded-lg relative max-h-[70vh] mx-auto`}
      >
        <video
          ref={videoRef}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          className="w-full h-full object-cover transition-transform duration-700"
          src={src}
          muted
          playsInline
          controls
        />

        <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-all pointer-events-none">
          {!isPlaying && (
            <PlayCircle className="text-white size-12 md:size-16 opacity-90 group-hover:scale-110 transition-transform fill-white/20" />
          )}
        </div>
      </div>
    </motion.div>
  );
}

// 🧩 Image Tile (updated Everstage style)
function ImageTile({ src, link, category }) {
  return (
    <div className="flex flex-col items-center">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block aspect-video rounded-xl overflow-hidden w-full"
      >
        <img
          src={src}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          alt="Preview"
        />
      </a>
      {category && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-on-surface-variant text-sm mt-3 underline hover:text-primary transition-colors"
        >
          {category}
        </a>
      )}
    </div>
  );
}

export default function EverstageCaseStudy() {
  return (
    <div className="bg-background text-on-surface font-sans selection:bg-primary-fixed selection:text-on-primary-fixed min-h-screen">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/50 shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">
          <Link
            to="/"
            className="text-xl font-extrabold tracking-tighter text-slate-900 flex items-center gap-2 font-headline"
          >
            <ArrowLeft className="size-5" />
            Home
          </Link>
        </div>
      </nav>

      <main className="pt-16">
        {/* Hero */}
        <section className="relative px-8 pt-12 pb-12 overflow-hidden bg-surface-container-low">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] gap-10 items-start">
              <div>
 <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="inline-flex items-center px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container text-[10px] font-bold tracking-widest uppercase mb-6"
                >
                CONTENT STRATEGY
                </motion.div>

                <motion.h1 className="text-5xl font-extrabold tracking-tighter text-on-surface max-w-4xl mb-8 leading-[1.1] font-headline mt-6">
                  Building a Scalable Content Engine from the Ground Up
                </motion.h1>

                <div className="h-1 bg-primary w-24 mb-12"></div>
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
                  className="w-full max-w-[240px] mx-auto object-contain mt-4"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Situation */}
        <section className="py-20 px-8 bg-surface">
          <div className="max-w-7xl mx-auto">
            <span className="text-lg font-bold tracking-widest text-primary uppercase">
              01. Situation
            </span>
            <p className="text-xl mt-6 text-on-surface-variant">
              I joined Everstage as the 3rd marketer when it was still a
              seed-stage startup. As an early marketer, my role was to grow
              awareness and drive inbound through content marketing.
            </p>
          </div>
        </section>

        {/* Execution */}
        <section className="py-20 px-8 bg-surface-container-low">
          <div className="max-w-7xl mx-auto">
            <span className="text-lg font-bold tracking-widest text-primary uppercase">
              02. Execution
            </span>

            <p className="text-xl mt-6 text-on-surface-variant">
              I started with social media and blogs, then gradually expanded
              into other content formats like webinar, newsletter, community
              etc.
            </p>

            <p className="text-xl mt-6 text-on-surface-variant">
              All our content was rooted in our positioning and consistently
              reinforced our core messaging. We took an integrated approach,
              repurposing every piece across channels. For instance, a single
              webinar would be broken down into an e-book, blog post, social
              media content, and a newsletter.
            </p>
          </div>
        </section>

        {/* Result Section */}
        <section className="py-20 px-8 bg-surface overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div>
              <span className="text-lg font-bold tracking-widest text-primary uppercase">
                03. Result
              </span>
              <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="md:col-span-2 flex justify-center">
                  <div className="bg-surface-container-low p-10 rounded-3xl border border-outline-variant/10 shadow-sm hover:shadow-md transition-shadow w-full max-w-[36rem]">
                    <div className="text-3xl font-black text-primary mb-4">
                      Built Thought Leadership
                    </div>
                    <p className="text-on-surface-variant leading-relaxed">
                      Strategized and developed content to position Everstage as
                      a thought leader and drive inbound intent.
                    </p>
                  </div>
                </div>
                <div className="bg-surface-container-low p-10 rounded-3xl border border-outline-variant/10 shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-3xl font-black text-primary mb-4">
                    $2.5M Pipeline
                  </div>
                  <p className="text-on-surface-variant leading-relaxed">
                    Generated a pipeline of $2.5M from in-house webinars between
                    August 2023 and July 2024.
                  </p>
                </div>
                <div className="bg-surface-container-low p-10 rounded-3xl border border-outline-variant/10 shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-3xl font-black text-primary mb-4">
                    Uncappd Community
                  </div>
                  <p className="text-on-surface-variant leading-relaxed">
                    Led the launch of our sales compensation community, Uncappd.
                    Owned content and engagement strategy, contributing to a
                    $150K pipeline within 3 months.
                  </p>
                </div>
                <div className="bg-surface-container-low p-10 rounded-3xl border border-outline-variant/10 shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-3xl font-black text-primary mb-4">
                    5,000 Subscribers
                  </div>
                  <p className="text-on-surface-variant leading-relaxed">
                    Developed content and distribution strategy for our
                    newsletter, scaling it to 5,000 subscribers.
                  </p>
                </div>
                <div className="bg-surface-container-low p-10 rounded-3xl border border-outline-variant/10 shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-3xl font-black text-primary mb-4">
                    10k Followers
                  </div>
                  <p className="text-on-surface-variant leading-relaxed">
                    Scaled Everstage's LinkedIn page from 0 to 10k followers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ✅ MEDIA SECTION (UPDATED LAYOUT) */}
        <section className="px-8 py-32 bg-surface-container-low">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-3xl font-bold mb-12 text-center">
              Work Highlights
            </h3>

            {/* 3 IMAGES */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
              <ImageTile
                src={plantemp}
                link="https://www.everstage.com/resources/template/account-executive-compensation-plan"
                category="The AE Compensation Plan Template"
              />
              <ImageTile
                src={rev}
                link="https://www.everstage.com/resources/guides/revops-30-60-90-guide"
                category="Rising in RevOps"
              />
              <ImageTile
                src={closingthoughts}
                link="https://therevopscorner.substack.com/"
                category="Closing Thoughts - Newsletter"
              />
            </div>

            {/* VIDEOS */}
            <div className="space-y-20">
              {/* Wide */}
              <div className="max-w-3xl mx-auto">
                <VideoCard src={es1} />
              </div>

              {/* Vertical */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                <VideoCard
                  src={es2}
                  aspect="aspect-[9/16]"
                  maxWidth="max-w-[320px]"
                />
                <VideoCard
                  src={es3}
                  aspect="aspect-[9/16]"
                  maxWidth="max-w-[320px]"
                />
              </div>
            </div>
          </div>
        </section>

        <CTA />
      </main>
    </div>
  );
}
