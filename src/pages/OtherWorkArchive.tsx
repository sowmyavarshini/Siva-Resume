import { motion } from "motion/react";
import { ArrowLeft, PlayCircle, Award, Trophy } from "lucide-react";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import { CTA } from "../components/CTA";
import titan from "../assets/Titan.jpg";
import elec1 from "../assets/Election Commission - 1.jpg";
import elec2 from "../assets/Election Commission - 2.jpg";
import elec3 from "../assets/Election Commission - 3.jpg";
import tanishq from "../assets/Tanishq.jpg";
import funds from "../assets/Mutual Funds.jpg";
import tanishqvideo from "../assets/TANISHQ.mp4";
import titanvideo from "../assets/TITAN.mp4";
import vsmani from "../assets/VSMANI.mp4";
import spotify from "../assets/SPOTIFY.mp4";
import flipkart from "../assets/FLIPKART.mp4";

const WorkTile = ({
  title,
  category,
  image,
  isVideo = false,
  span = "md:col-span-4",
  aspect = "aspect-square",
  mt = "",
  maxWidth = "w-full",
}: {
  title: string;
  category: string;
  image: string;
  isVideo?: boolean;
  span?: string;
  aspect?: string;
  mt?: string;
  maxWidth?: string;
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`${span} ${mt} group flex flex-col items-center`}
    >
      <div
        className={`${aspect} ${maxWidth} overflow-hidden bg-surface-container-low rounded-lg relative max-h-[70vh] mx-auto ${isVideo ? "cursor-pointer" : ""}`}
      >
        {isVideo ? (
          <>
            <video
              ref={videoRef}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              className="w-full h-full object-cover transition-transform duration-700"
              src={image}
              muted
              playsInline
              controls
              onEnded={() => setIsPlaying(false)}
            />

            <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-all pointer-events-none">
              {!isPlaying && (
                <PlayCircle className="text-white size-12 md:size-16 opacity-90 group-hover:scale-110 transition-transform fill-white/20" />
              )}
            </div>
          </>
        ) : (
          <img
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            referrerPolicy="no-referrer"
            src={image}
            alt={title}
          />
        )}
      </div>
      <div className="mt-4 text-center">
        {/* <h3 className="font-headline font-bold text-xl text-on-surface">
          {title}
        </h3> */}
        <p className="text-on-surface-variant text-sm mt-1">{category}</p>
      </div>
    </motion.div>
  );
};

export default function OtherWorkArchive() {
  return (
    <div className="bg-surface text-on-surface font-body selection:bg-primary-container selection:text-on-primary-container min-h-screen">
      {/* Top Navigation Bar */}
      <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/15 shadow-sm">
        <nav className="flex justify-between items-center h-20 px-8 max-w-7xl mx-auto">
          <Link
            to="/"
            className="text-xl font-extrabold tracking-tighter text-slate-900 font-headline flex items-center gap-2"
          >
            <ArrowLeft className="size-5" />
            Home
          </Link>
        </nav>
      </header>

      <main className="pt-32 pb-24 px-8 max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="mb-20">
          {/* <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="uppercase tracking-[0.1em] text-primary font-bold text-xs mb-4 block"
          >
            Portfolio Archive
          </motion.span> */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-5xl font-headline font-extrabold tracking-tight text-on-surface leading-none"
          >
            Creative Work Across Brands
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-on-surface-variant max-w-2xl text-lg leading-relaxed"
          >
            A curated selection of creative work for Indian and global brands!
          </motion.p>
        </div>

        {/* 6 Images - 3 in a row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {[
            {
              title: "Brand Identity System",
              category: "Gandhi Jayanti post for Titan Watches",
              image: titan,
            },
            {
              title: "Editorial Layout",
              category: "Voter Awareness Campaign",
              image: elec1,
            },
            {
              title: "Digital Illustration",
              category: "Voter Awareness Campaign",
              image: elec2,
            },
            {
              title: "Packaging Design",
              category: "Voter Awareness Campaign",
              image: elec3,
            },
            {
              title: "Typography Study",
              category: "Social post for Murugappa Group",
              image: funds,
            },
            {
              title: "UI Component Library",
              category: "Independence Day post for Tanishq",
              image: tanishq,
            },
          ].map((item, i) => (
            <WorkTile
              key={i}
              title={item.title}
              category={item.category}
              image={item.image}
              span="md:col-span-1"
              aspect="aspect-square"
            />
          ))}
        </div>

        {/* Award Banner */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-surface-container-low py-16 px-12 rounded-xl flex flex-col md:flex-row items-center justify-between gap-8 border border-outline-variant/15"
          >
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <Award className="text-primary size-5 fill-primary/10" />
                <span className="font-label font-bold text-primary tracking-widest text-xs uppercase">
                  Award
                </span>
              </div>
              <h2 className="font-headline font-extrabold text-2xl md:text-4xl text-on-surface leading-tight max-w-4xl">
                Madras Ad Club's Maddys Award for TN Election Commission Voter
                Awareness Campaign
              </h2>
            </div>
            <div className="flex-shrink-0">
              <div className="w-24 h-24 rounded-full border-4 border-primary/20 flex items-center justify-center">
                <Trophy className="text-primary size-10" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* 5 Videos - Centered Rows */}
        <div className="space-y-20">
          {/* Row 1: 2 Square Videos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <WorkTile
              title="Social Campaign Reel"
              category="Social video for Tanishq"
              image={tanishqvideo}
              isVideo={true}
              span="col-span-1"
              aspect="aspect-square"
            />
            <WorkTile
              title="Product Featurette"
              category="Socilal video for Flipkart"
              image={flipkart}
              isVideo={true}
              span="col-span-1"
              aspect="aspect-square"
            />
          </div>

          {/* Row 2: 1 Wide Video */}
          <div className="max-w-3xl mx-auto">
            <WorkTile
              title=""
              category="Social video for Titan Watches"
              image={titanvideo}
              isVideo={true}
              span="w-full"
              aspect="aspect-video"
            />
          </div>

          {/* Row 3: 2 Vertical Videos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <WorkTile
              title="Digital Ad for VS Mani "
              category="Digital Ad for VS Mani & Co."
              image={vsmani}
              isVideo={true}
              span="col-span-1"
              aspect="aspect-[9/16]"
              maxWidth="max-w-[320px]"
            />
            <WorkTile
              title="Short Form Content"
              category="Social video for Spotify"
              image={spotify}
              isVideo={true}
              span="col-span-1"
              aspect="aspect-[480/854]"
              maxWidth="max-w-[320px]"
            />
          </div>
        </div>
      </main>
      <CTA />
    </div>
  );
}
