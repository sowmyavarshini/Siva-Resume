import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import CaseStudy from "./pages/CaseStudy";
import PositioningCaseStudy from "./pages/PositioningCaseStudy";
import EverstageCaseStudy from "./pages/EverstageCaseStudy";
import OtherWorkArchive from "./pages/OtherWorkArchive";
import { CTA } from "./components/CTA";
import { motion } from "motion/react";
import {
  ArrowRight,
  BarChart3,
  Network,
  Quote,
  MoveRight,
  Image as ImageIcon,
  Play,
  Video,
  Linkedin,
  Mail,
  Phone,
  Menu,
  X,
} from "lucide-react";
import sivaImg from "./assets/SIVA-IMG.jpeg";
import shakespeareImg from "./assets/SHAKESPEARE.png";
import positioningImg from "./assets/positioning.png";
import scalableImg from "./assets/scalable.png";
import resume from "./assets/Siva_Subramanian - Resume.pdf";
import titan from "./assets/Titan.jpg";
import elec1 from "./assets/Election Commission - 1.jpg";
import elec2 from "./assets/Election Commission - 2.jpg";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 glass-nav border-b border-outline-variant/30 px-6 lg:px-20 py-4 lg:py-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <Link
          to="/"
          className="text-primary-container text-on-surface text-2xl tracking-tight font-headline"
        >
          S Siva Subramanian
        </Link>
      </div>
      <nav className="hidden md:flex items-center gap-10">
        <a
          className="text-on-surface-variant text-sm font-medium hover:text-primary transition-colors"
          href="/#about"
        >
          About
        </a>
        <a
          className="text-on-surface-variant text-sm font-medium hover:text-primary transition-colors"
          href="/#case-studies"
        >
          Case Studies
        </a>
        {/* <a className="text-on-surface-variant text-sm font-medium hover:text-primary transition-colors" href="/#testimonials">Testimonials</a> */}
        <a
          href="#contact"
          className="bg-primary-container text-white px-6 py-2.5 rounded-lg text-sm font-bold tracking-wide hover:shadow-lg transition-all cursor-pointer"
        >
          Get in Touch
        </a>
      </nav>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-on-surface"
      >
        {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
      </button>
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-outline-variant/30 px-6 py-4 shadow-lg">
          <nav className="flex flex-col gap-4">
            <a
              onClick={() => setIsOpen(false)}
              className="text-on-surface-variant text-sm font-medium hover:text-primary transition-colors"
              href="/#about"
            >
              About
            </a>
            <a
              onClick={() => setIsOpen(false)}
              className="text-on-surface-variant text-sm font-medium hover:text-primary transition-colors"
              href="/#case-studies"
            >
              Case Studies
            </a>
            {/* <a onClick={() => setIsOpen(false)} className="text-on-surface-variant text-sm font-medium hover:text-primary transition-colors" href="/#testimonials">Testimonials</a> */}
            <a
              onClick={() => setIsOpen(false)}
              href="#contact"
              className="bg-primary-container text-white px-6 py-2.5 rounded-lg text-sm font-bold tracking-wide hover:shadow-lg transition-all cursor-pointer text-center"
            >
              Get in Touch
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

const Hero = () => (
  <section className="relative px-6 lg:px-20 py-16 lg:py-10 overflow-hidden">
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex-1 z-10"
      >
        <h1 className="text-on-surface font-headline font-extrabold leading-[1.05] tracking-tight mb-8 text-4xl lg:text-6xl">
          Hi, this is Siva! :) <br />
        </h1>
        <p className="text-on-surface-variant text-lg lg:text-xl leading-relaxed max-w-3xl mb-10">
          I bring a creative approach to product marketing. I’m passionate about
          turning complex ideas into simple, engaging stories that shape
          customer perception.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="#case-studies"
            className="bg-primary-container text-white h-14 px-8 rounded-lg font-bold flex items-center justify-center hover:bg-primary transition-all shadow-md cursor-pointer group"
          >
            View Case Studies
          </a>
          <a
            href={resume}
            download="Siva_Subramanian-Resume.pdf"
            className="bg-white text-black border border-outline-variant/30 h-14 px-8 rounded-lg font-bold flex items-center justify-center hover:bg-surface-container-low transition-all shadow-sm cursor-pointer"
          >
            Download Resume
          </a>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        className="lg:flex-1 relative w-full max-w-sm mx-auto lg:mx-0"
      >
        <div className="absolute -top-10 -right-10 size-64 bg-primary-container/10 rounded-full blur-3xl"></div>
        <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-2xl bg-surface-container">
          <img
            alt="Professional headshot"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
            src={sivaImg}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent mix-blend-multiply"></div>
        </div>
      </motion.div>
    </div>
  </section>
);

const About = () => (
  <section
    className="bg-surface-container-low py-22 lg:pt-14 px-6 lg:px-20"
    id="about"
  >
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-32">
      <div className="lg:w-1/3">
        <h2 className="text-on-surface font-headline text-3xl font-extrabold leading-tight sticky top-30">
          An Aspiring Cricket Journalist Turned
          <br />
          Marketer
        </h2>
      </div>
      <div className="lg:w-2/3">
        <div className="space-y-8">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-on-surface text-xl leading-relaxed font-medium italic asymmetric-border pl-8 border-primary-container/30"
          >
            I started writing because I wanted to become a cricket journalist.
            Though I couldn’t pursue that path, it helped me discover my
            strength in storytelling and eventually led me to marketing.
            <br />
            <br />I began my marketing career at ad agencies as a copywriter,
            crafting stories for brands like <strong>Titan Watches</strong>,
            <strong>Tanishq</strong>, <strong>Flipkart</strong> and more.It was
            a creatively fulfilling phase that taught me how to turn ideas into
            impactful campaigns.
            <br />
            <br />
            Over time, my curiosity to build things from scratch took me to SaaS
            startups. From developing content strategy to refining positioning
            and shaping GTM strategy, I’ve worked on end-to-end content and
            product marketing initiatives for fast-growing companies.
            <br />
            <br />
            With experience across ad agencies and startups, I bring a creative
            approach to product marketing. I’m passionate about turning complex
            ideas into simple, engaging stories that shape customer perception.
          </motion.p>
        </div>
      </div>
    </div>
  </section>
);

const CaseStudyCard = ({
  title,
  image,
  delay,
  to,
}: {
  title: string;
  image: string;
  delay: number;
  to?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="group cursor-pointer block"
  >
    <Link to={to || "#"}>
      <div className="relative overflow-hidden rounded-2xl aspect-video mb-8 bg-surface-container-high transition-transform duration-500 group-hover:scale-[1.02]">
        <img
          alt={title}
          className="w-full h-full object-cover transition-all duration-500"
          referrerPolicy="no-referrer"
          src={image}
        />
      </div>
      <h3 className="text-2xl font-bold font-headline mb-4 group-hover:text-primary transition-colors">
        {title}
      </h3>

      <span className="inline-flex items-center gap-2 font-bold text-primary group-hover:gap-4 transition-all">
        View Story
        <MoveRight className="size-4" />
      </span>
    </Link>
  </motion.div>
);

const CaseStudies = () => (
  <section className="py-24 px-6 lg:px-20 bg-surface" id="case-studies">
    <div className="max-w-7xl mx-auto">
      <div className="mb-16">
        <span className="text-primary font-bold tracking-widest text-xs uppercase mb-2 block">
          Success Stories
        </span>
        <h2 className="text-on-surface font-headline text-4xl font-extrabold">
          Product Marketing Case Studies{" "}
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 md:grid-cols-2">
        <CaseStudyCard
          title="A Demo by William Shakespeare: How a Creative Launch Resulted in Record Demo Bookings "
          image={shakespeareImg}
          delay={0}
          to="/case-study"
        />
        <CaseStudyCard
          title="Refining Positioning and Messaging in an Emerging Category"
          image={positioningImg}
          delay={0.1}
          to="/positioning-study"
        />
        <CaseStudyCard
          title="Building a Scalable Content Engine from the Ground Up"
          image={scalableImg}
          delay={0.2}
          to="/everstage-study"
        />
      </div>
    </div>
  </section>
);

const OtherWork = () => (
  <section
    className="py-24 px-6 lg:px-20 lg:pt-12 bg-surface-container-low"
    id="other-work"
  >
    <div className="max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="text-on-surface font-headline text-4xl font-extrabold">
          Beyond Product Marketing
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            title: "Gandhi Jayanti post for Titan Watches",
            image: titan,
          },
          {
            title: "Voter Awareness Campaign",
            image: elec1,
          },
          {
            title: "Voter Awareness Campaign",
            image: elec2,
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group"
          >
            <div className="aspect-square bg-surface-container-lowest border border-outline-variant/30 rounded-lg flex items-center justify-center relative overflow-hidden transition-all hover:shadow-md">
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <p className="mt-4 text-sm font-bold text-on-surface text-center">
              {item.title}
            </p>
          </motion.div>
        ))}
      </div>
      <div className="mt-12 flex justify-center md:justify-end">
        <Link
          to="/other-work"
          className="text-primary font-bold inline-flex items-center gap-2 hover:gap-3 transition-all"
        >
          See more
          <ArrowRight className="size-4" />
        </Link>
      </div>
    </div>
  </section>
);

// const Testimonials = () => (
//   <section className="bg-surface py-24 px-6 lg:px-20" id="testimonials">
//     <div className="max-w-7xl mx-auto">
//       <div className="text-center mb-20">
//         <span className="text-primary font-bold tracking-widest text-xs uppercase mb-4 block">Endorsements</span>
//         <h2 className="font-headline text-on-surface text-4xl font-extrabold">What Leaders Say</h2>
//       </div>
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//         {[
//           {
//             quote: "The level of strategic depth brought to our marketing function was transformative. Not just leads, but the right accounts that accelerated our path to Series B.",
//             author: "Chief Revenue Officer",
//             company: "Everstage",
//             image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBtrYPKSiOoC5s2wLCF8cB2ug3xqFi_-b5YlTYUhk-Jz-zmo4BTkvHQRfYmknK6popczR_1qjRSDzPAWR3W8Ce7JdPN132wERWOIU7zgVQ7wwpL-vO23vj5fWC9U1tjdXsa7LlahgWXKKx2q8J0Ou4ShZI3Oq80lMP_InHR05tmL37ik7dt4mD61PVNKnpxKZvh6sz3I3cpQN6T2i5yPIgKbz_42BplkpZVYbeakYkX2sq8UnErweGwG1gkFJRRgYoSdZE1S5I3Is0h"
//           },
//           {
//             quote: "A rare blend of data obsession and creative brand building. Helped us carve out a category where none existed, leading to massive market share gains.",
//             author: "VP of Product",
//             company: "Demoboost",
//             image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDFZHwuLDEnLzG-i_KsMgnF3vu4zS3YJQZiBaT8mQh8B_Zt1c8p3S0fd_MYnZNXf5ZBdtaAKpyAzt21uYqMojs6L0FvRLsYHKXr_jqIf6u9MxY_hJpe998r7-wZLadspXYGs5QwpGUmRguhK62zVm2tQDIwN7xlwFaUQhLkvpXv-beylD1XdjX_sdgP0P2uGp6sQLJ7RS3yShEdA5gE2dZ8P83ycAsT85cQyHMmqX7UOj6j8MsqFtKHzJdxrBD4N8jhdDpU31V_GZ_5"
//           }
//         ].map((t, i) => (
//           <motion.div
//             key={i}
//             initial={{ opacity: 0, scale: 0.98 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             transition={{ delay: i * 0.1 }}
//             className="bg-surface-container-low p-10 rounded-2xl border border-outline-variant/30 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow"
//           >
//             <Quote className="size-12 text-primary/20 mb-6" />
//             <p className="text-xl leading-relaxed mb-10 text-on-surface italic">"{t.quote}"</p>
//             <div className="flex items-center gap-4">
//               <div className="size-14 rounded-full bg-surface-container-highest overflow-hidden">
//                 <img alt={t.author} className="w-full h-full object-cover" referrerPolicy="no-referrer" src={t.image} />
//               </div>
//               <div>
//                 <p className="font-bold text-on-surface text-lg">{t.author}</p>
//                 <p className="text-on-surface-variant text-sm">{t.company}</p>
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   </section>
// );

const Home = () => (
  <main className="flex-1">
    <Nav />
    <Hero />
    <About />
    <CaseStudies />
    <OtherWork />
    {/* <Testimonials /> */}
    <CTA />
  </main>
);

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden selection:bg-primary-fixed selection:text-on-primary-fixed">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/case-study" element={<CaseStudy />} />
          <Route path="/positioning-study" element={<PositioningCaseStudy />} />
          <Route path="/everstage-study" element={<EverstageCaseStudy />} />
          <Route path="/other-work" element={<OtherWorkArchive />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
