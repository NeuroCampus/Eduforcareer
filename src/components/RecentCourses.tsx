import React from "react";
import { Link } from "@tanstack/react-router";
import { Check, ArrowRight, Plane, Code, Shield, BrainCircuit, Coffee } from "lucide-react";
import av4 from "../assets/av4.png";
import av3 from "../assets/av3.png";

const courses = [
  {
    image: av3,
    title: "Aviation & Airport Management",
    icon: <Plane className="w-5 h-5 text-teal-600" />,
    desc: "Launch your career at world-class hubs like KIA Bangalore. Get trained in premium passenger handling, ramp operations, and modern airport logistics.",
    bullets: [
      "Airport Ground Staff & T2 Operations",
      "International Flight Handling & Safety",
      "Luxury Customer Service Excellence",
      "Advanced Soft Skills & Grooming",
    ],
    career: "Ground Staff, Cabin Crew, Terminal Manager, VIP Services.",
  },
  {
    image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=2031&auto=format&fit=crop",
    title: "Python Full Stack",
    icon: <Code className="w-5 h-5 text-slate-700" />,
    desc: "Master the most in-demand tech stack from front-end to back-end deployment.",
    bullets: ["Python & Django", "React & Modern UI", "PostgreSQL/NoSQL", "Cloud Deployment"],
    career: "Full Stack Developer, Software Engineer.",
  },
  {
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop",
    title: "Java Enterprise",
    icon: <Coffee className="w-5 h-5 text-slate-700" />,
    desc: "Build robust, scalable enterprise applications with modern Java frameworks.",
    bullets: ["Spring Boot & Hibernate", "Microservices Architecture", "API Security", "Design Patterns"],
    career: "Java Developer, Backend Engineer.",
  },
  {
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop",
    title: "Cyber Security",
    icon: <Shield className="w-5 h-5 text-slate-700" />,
    desc: "Defend modern networks and data against sophisticated digital threats.",
    bullets: ["Ethical Hacking", "Network Defense", "Threat Intelligence", "Vulnerability Assessment"],
    career: "SOC Analyst, Security Engineer.",
  },
  {
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
    title: "AI & ML Engineering",
    icon: <BrainCircuit className="w-5 h-5 text-slate-700" />,
    desc: "Master the math and models behind the Generative AI and RAG revolution.",
    bullets: ["Deep Learning & NLP", "Model Deployment", "RAG Pipelines", "Advanced Data Science"],
    career: "AI Engineer, ML Architect, Data Scientist.",
  },
];

export default function RecentCourses() {
  const heroImages = [av4, av3];
  const [heroIndex, setHeroIndex] = React.useState(0);

  React.useEffect(() => {
    const t = setInterval(() => {
      setHeroIndex((i) => (i + 1) % heroImages.length);
    }, 3000);
    return () => clearInterval(t);
  }, [heroImages.length]);

  return (
    <section id="recent-courses" className="bg-[#FAFAFC] py-24 lg:py-32 overflow-hidden">
      {/* Import Fonts */}
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Poppins:wght@300;400;500;600;700&display=swap');
        .font-montserrat { font-family: 'Montserrat', sans-serif; }
        .font-poppins { font-family: 'Poppins', sans-serif; }
      `}} />

      {/* Increased max-width slightly to perfectly accommodate 4 cards */}
      <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
        
        {/* Minimalist Header */}
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <span className="font-montserrat text-xs font-bold tracking-[0.2em] text-teal-600 uppercase mb-4 block">
            Career Programs
          </span>
          <h2 className="font-montserrat text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Designed for the <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-500">
              Modern Professional
            </span>
          </h2>
          <p className="mt-6 font-poppins text-lg text-slate-500 font-light leading-relaxed">
            Industry-validated certifications bridging the gap between education and high-impact careers.
          </p>
        </div>

        {/* Updated Grid: 4 columns on desktop (lg:grid-cols-4) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
          
          {courses.map((course, index) => {
            const isHero = index === 0;

            if (isHero) {
              // HERO CARD: Spans all 4 columns, ultra-wide layout
              return (
                <div
                  key={course.title}
                  className="group relative flex flex-col lg:flex-row bg-white rounded-[2rem] border border-slate-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 overflow-hidden md:col-span-2 lg:col-span-4 mb-6"
                >
                  {/* Left Side: Panoramic Image (60% width) */}
                  <div className="relative w-full lg:w-[55%] xl:w-[60%] h-72 sm:h-96 lg:h-auto overflow-hidden">
                    <img
                      src={heroImages[heroIndex]}
                      alt={`${course.title} - ${heroIndex + 1}`}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                      loading="lazy"
                    />
                    {/* small indicators */}
                    <div className="absolute bottom-4 left-4 flex gap-2 z-10">
                      {heroImages.map((_, i) => (
                        <span
                          key={i}
                          className={`w-2 h-2 rounded-full transition-opacity ${i === heroIndex ? 'bg-white/90' : 'bg-white/40'}`}
                        />
                      ))}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900/10 to-transparent mix-blend-multiply" />
                  </div>

                  {/* Right Side: Clean Content (40% width) */}
                  <div className="flex flex-col justify-center w-full lg:w-[45%] xl:w-[40%] p-8 sm:p-12 xl:p-14 bg-white">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2.5 bg-teal-50 rounded-xl">
                        {course.icon}
                      </div>
                      <span className="font-montserrat font-bold text-slate-900 text-sm tracking-wide uppercase">
                        Featured Track
                      </span>
                    </div>
                    
                    <h3 className="font-montserrat text-3xl xl:text-4xl font-extrabold text-slate-900 leading-tight mb-4">
                      {course.title}
                    </h3>
                    <p className="font-poppins text-slate-500 text-base xl:text-lg leading-relaxed mb-8 font-light">
                      {course.desc}
                    </p>

                    <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-4 mb-10">
                      {course.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" strokeWidth={2.5} />
                          <span className="font-poppins text-sm text-slate-700 font-medium">{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto flex flex-col xl:flex-row items-start xl:items-center justify-between gap-6 pt-8 border-t border-slate-100">
                      <div>
                        <span className="font-montserrat text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Career Paths</span>
                        <p className="font-poppins text-sm font-medium text-slate-800">{course.career}</p>
                      </div>
                      <Link
                        to="/aviation"
                        className="shrink-0 flex items-center justify-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-xl font-montserrat font-semibold text-sm transition-all duration-300 hover:bg-teal-600 hover:shadow-[0_10px_20px_rgba(13,148,136,0.2)] hover:-translate-y-0.5 active:scale-95 w-full xl:w-auto"
                      >
                        Apply Now
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            }

            // STANDARD CARDS: 4 in a row, optimized for vertical space
            return (
              <div
                key={course.title}
                className="group flex flex-col bg-white rounded-3xl border border-slate-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:border-teal-500/20 transition-all duration-500 hover:-translate-y-2 overflow-hidden h-full"
              >
                {/* Image Aspect Ratio adjusted for narrower cards */}
                <div className="relative w-full h-48 overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover transition-transform duration-1000 ease-in-out group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 p-2 bg-white/90 backdrop-blur-sm rounded-lg shadow-sm">
                    {course.icon}
                  </div>
                </div>

                <div className="flex flex-col flex-1 p-6">
                  <h3 className="font-montserrat text-lg font-bold text-slate-900 mb-2 line-clamp-1">
                    {course.title}
                  </h3>
                  <p className="font-poppins text-slate-500 text-sm leading-relaxed mb-6 font-light line-clamp-2">
                    {course.desc}
                  </p>

                  {/* Bullet Points */}
                  <ul className="space-y-3 flex-1 mb-2">
                    {course.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-teal-500 shrink-0 mt-0.5" strokeWidth={3} />
                        <span className="font-poppins text-xs text-slate-600 leading-snug">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}