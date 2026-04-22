import React, { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import aviationImage from "../assets/av1.png";
import heroStudent from "../assets/herosection image.png";

const slides = [
  {
    id: "main",
    label: "LEARN. GROW. SUCCEED.",
    title: "EduforCareer – Building Skills. Creating Careers.",
    copy:
      "EduforCareer is a leading training and career development institute dedicated to preparing individuals for the fast-growing IT and corporate workforce. With expert trainers, industry-aligned curriculum, and strong placement support, we help learners gain the skills they need to build successful careers.",
    img: heroStudent,
    cta: { text: "Get Started", to: "/contact" },
  },
  {
    id: "aviation",
    label: "SOAR HIGH.",
    title: "Aviation Training — Fly Into Your Future",
    copy:
      "Our aviation programs combine hands-on flight training, simulated scenarios, and industry partnerships to prepare aspiring pilots and aviation professionals for fast-paced careers in the skies.",
    img: aviationImage,
    cta: { text: "Explore Aviation", to: "/aviation" },
  },
];

export default function HeroSection() {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setIndex((i) => (i + 1) % slides.length);

  // Auto-advance using a single timeout so it resets cleanly when `index` changes.
  // Pause when `isPaused` is true (e.g. on hover).
  useEffect(() => {
    if (isPaused) return;
    const t = setTimeout(() => setIndex((i) => (i + 1) % slides.length), 5000);
    return () => clearTimeout(t);
  }, [index, isPaused]);

  return (
    <section className="hero-gradient h-screen overflow-hidden">
      <div className="mx-auto width-full h-full">
        <div className="relative h-full overflow-hidden">
          {/* Navigation arrows */}
          <button
            onClick={prev}
            aria-label="Previous slide"
            className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white hover:bg-black/60 focus:outline-none focus:ring-2 focus:ring-white"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={next}
            aria-label="Next slide"
            className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white hover:bg-black/60 focus:outline-none focus:ring-2 focus:ring-white"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <div
            className="flex h-full transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {slides.map((s) => {
              const imgClass =
                s.id === "aviation"
                  ? "h-auto w-[220px] sm:w-[360px] md:w-[520px] lg:w-[720px] rounded-lg shadow-xl object-cover"
                  : "h-auto w-[200px] sm:w-[320px] md:w-[400px] lg:w-[460px]";
              const textMax = s.id === "aviation" ? "lg:max-w-2xl" : "";

              return (
                <div key={s.id} className="min-w-full h-full">
                  {s.id === "aviation" ? (
                    <div
                      className="relative flex h-full items-center px-6 lg:px-12"
                      style={{ backgroundImage: `url(${s.img})`, backgroundSize: "cover", backgroundPosition: "center" }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />

                      <div className="relative z-10 max-w-3xl text-left py-0 pl-6">
                        <p className="section-label mb-3 text-sm tracking-widest text-white">{s.label}</p>
                        <h1 className="font-heading text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl ">{s.title}</h1>
                        <p className="mt-4 text-lg text-white/90 max-w-xl">Start your career at the airport — hands-on training, simulator hours, and guaranteed placement assistance to jumpstart your aviation journey.</p>

                        <div className="mt-8 flex flex-wrap gap-4">
                          <Link to="/aviation" className="inline-flex items-center gap-3 rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:brightness-95">
                            Apply Now
                          </Link>

                          <Link to="/aviation" className="inline-flex items-center gap-3 rounded-full bg-white/90 px-6 py-3 text-sm font-semibold text-slate-900 shadow">
                            Get Details
                          </Link>
                        </div>

                        <div className="mt-8 inline-block rounded-full bg-white/10 py-2 px-4 text-sm text-white">
                          <strong className="text-yellow-300">Start earning in just 90 days</strong>
                        </div>

                        <div className="mt-6 text-sm text-white/80">
                          <span className="inline-block rounded-full bg-white/10 px-3 py-1">100% Guaranteed Placement Support at Major Airports Across India</span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col-reverse items-center gap-6 px-4 py-8 lg:flex-row lg:py-0 h-full">
                      <div className={`flex-1 flex flex-col justify-center items-center lg:items-start text-center lg:text-left px-4 md:pl-6 lg:pl-24 ${textMax}`}>
                        <p className="section-label mb-3 text-sm tracking-widest">{s.label}</p>
                        <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-foreground">
                          {s.title}
                        </h1>
                        <p className="mt-4 max-w-xl text-sm sm:text-base leading-relaxed text-muted-foreground lg:text-lg">{s.copy}</p>

                        <Link
                          to={s.cta.to}
                          className="mt-8 self-center lg:self-start inline-block rounded-full bg-accent-orange px-8 py-3 font-heading text-sm font-semibold text-primary-foreground shadow-md transition hover:shadow-lg hover:brightness-110"
                        >
                          {s.cta.text}
                        </Link>
                      </div>

                      <div className="mb-6 flex flex-1 items-center justify-center lg:mb-0 lg:justify-end">
                        <img src={s.img} alt={s.title} width={716} height={1024} className={`${imgClass} max-h-[45vh] sm:max-h-[60vh] md:max-h-[80vh]`} loading="eager" />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
