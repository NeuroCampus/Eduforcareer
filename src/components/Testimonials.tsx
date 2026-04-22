import { Star } from "lucide-react";

// 1. Import local assets for the first three reviews
// (Adjust the path to "../assets/..." if your Vite alias "@/" is not configured)
import test2 from "@/assets/test-2.png";
import test3 from "@/assets/test-3.png";
import test5 from "@/assets/test-5.png";

const testimonials = [
  {
    text: "Great platform for learning! The courses are easy to follow, and the instructors explain everything clearly. I gained practical skills that helped me in my job.",
    name: "Aravind",
    role: "App Developer",
    avatar: test2, // Using imported local asset
  },
  {
    text: "The online classes are well-structured and flexible. I could learn at my own pace, and the certificate really boosted my confidence during interviews.",
    name: "Sneha R",
    role: "Data Analyst",
    avatar: test5, // Using imported local asset
  },
  {
    text: "Excellent experience! The lessons, assignments, and support team made learning smooth and enjoyable. I highly recommend these courses to anyone looking to upskill.",
    name: "Rahul",
    role: "Python Developer",
    avatar: test3, // Using imported local asset
  },
  // --- NEW AVIATION REVIEWS ---
  {
    text: "The Airport Ground Staff Training was a game-changer. The hands-on modules on Customer Service & Passenger Handling were incredibly detailed. Within weeks of completing the program, I secured a placement at a major international airport!",
    name: "Shravan s.",
    role: "Ground Operations Executive",
    // Realistic AI/Stock Indian Face
    avatar: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?q=80&w=150&auto=format&fit=crop", 
  },
  {
    text: "I highly recommend the aviation program. Learning about Ramp Operations and Aviation Safety & Procedures from industry experts gave me the exact skills airlines are looking for. The placement assistance is genuine!",
    name: "Priya Sharma",
    role: "Aviation Security Officer",
    // Realistic AI/Stock Indian Face
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150&auto=format&fit=crop", 
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#FAFAFC] py-24 lg:py-32 overflow-hidden font-['Poppins']">
      {/* Injecting CSS for the scrolling marquee effect and premium fonts */}
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Poppins:wght@300;400;500;600;700&display=swap');
        
        @keyframes scroll-testimonials {
          0% { transform: translateX(0); }
          /* Shifts left by exactly half the width of the duplicated track to loop seamlessly */
          100% { transform: translateX(calc(-50% - 0.75rem)); } 
        }
        
        .animate-scroll-track {
          animation: scroll-testimonials 40s linear infinite;
        }
        
        /* Pause the scrolling when the user hovers over the cards */
        .animate-scroll-track:hover {
          animation-play-state: paused;
        }
      `}} />

      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-12 bg-orange-500/50" />
            <span className="font-['Montserrat'] text-xs font-bold tracking-[0.2em] text-orange-500 uppercase">
              Reviews
            </span>
            <span className="h-px w-12 bg-orange-500/50" />
          </div>
          <h2 className="font-['Montserrat'] text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
            What they say about us?
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            Discover how our industry-focused training and guaranteed placement assistance have transformed careers.
          </p>
        </div>

        {/* Marquee Track Container */}
        <div className="relative flex w-full overflow-hidden py-4 -mx-4 px-4 sm:mx-0 sm:px-0">
          
          {/* Fading gradient edges for a clean scroll look */}
          <div className="absolute left-0 top-0 z-10 h-full w-16 md:w-32 bg-gradient-to-r from-[#FAFAFC] to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 z-10 h-full w-16 md:w-32 bg-gradient-to-l from-[#FAFAFC] to-transparent pointer-events-none" />

          {/* The Scrolling Track */}
          <div className="flex w-max animate-scroll-track gap-6">
            {/* Duplicating the array twice allows for an infinite seamless loop */}
            {[...testimonials, ...testimonials].map((t, idx) => (
              <div 
                key={`${t.name}-${idx}`} 
                className="w-[320px] md:w-[400px] flex-shrink-0 group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-white border border-slate-200 p-8 shadow-[0_4px_20px_rgb(0,0,0,0.03)] transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1 hover:border-orange-200 cursor-default"
              >
                <div>
                  {/* Stars row */}
                  <div className="mb-6 flex gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-orange-400 text-orange-400" />
                    ))}
                  </div>

                  {/* Review text */}
                  <p className="text-[15px] leading-relaxed text-slate-600 mb-8 relative z-10">
                    "{t.text}"
                  </p>
                </div>

                {/* Author row with quote watermark */}
                <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-6">
                  <div className="flex items-center gap-4">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="h-14 w-14 rounded-full object-cover border-2 border-orange-100 shadow-sm transition-transform duration-300 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div>
                      <p className="font-['Montserrat'] text-base font-bold text-slate-900">{t.name}</p>
                      <p className="text-xs font-semibold text-orange-500 uppercase tracking-wide mt-1">{t.role}</p>
                    </div>
                  </div>
                  
                  {/* Quote watermark */}
                  <svg className="h-12 w-12 text-slate-200 opacity-50 group-hover:text-orange-100 transition-colors duration-300" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}