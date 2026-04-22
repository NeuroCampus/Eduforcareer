import { useNavigate } from "@tanstack/react-router";
import { Plane, MonitorPlay, Briefcase, Award, ArrowRight } from "lucide-react";

// 1. Import all Background Images directly
// Use absolute src paths for assets to avoid Vite import resolution issues
// Use the exact image files requested by the user (these exist in /src/assets)
import aviationBg from "../assets/aviationlogo.jpg";
import itTrainingBg from "../assets/it training.jpg";
import corporateTrainingBg from "../assets/corporate training.jpg";
import skillsBg from "../assets/skill india.png";

// 2. Use Lucide React icons instead of image files for a much cleaner, professional look
const categories = [
  {
    name: "Aviation",
    icon: Plane,
    background: aviationBg,
    path: "/aviation",
  },
  {
    name: "IT Training",
    icon: MonitorPlay,
    background: itTrainingBg,
    path: "/it-training",
  },
  {
    name: "Corporate Training",
    icon: Briefcase,
    background: corporateTrainingBg,
    path: "/corporate-training",
  },
  {
    name: "Skills",
    icon: Award,
    background: skillsBg,
    path: "/skills",
  },
];

export default function CoursesOffered() {
  const navigate = useNavigate();

  const handleCardClick = (path: string) => {
    navigate({ to: path });
  };

  return (
    <section className="bg-[#FAFAFC] py-24 lg:py-32 font-['Poppins'] overflow-hidden">
      {/* Dynamic Font Injection for a premium look */}
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Poppins:wght@300;400;500;600;700&display=swap');
        .font-montserrat { font-family: 'Montserrat', sans-serif; }
      `}} />

      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-12 bg-orange-500/50" />
            <span className="font-montserrat text-xs font-bold tracking-[0.2em] text-orange-500 uppercase">
              Popular Categories
            </span>
            <span className="h-px w-12 bg-orange-500/50" />
          </div>
          <h2 className="font-montserrat text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
            Courses Offered
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            Choose from industry-focused programs designed to help you learn faster, grow smarter, and secure your future.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c) => (
            <div
              key={c.name}
              onClick={() => handleCardClick(c.path)}
              className="group relative cursor-pointer overflow-hidden rounded-3xl min-h-[360px] shadow-sm transition-all duration-500 hover:shadow-[0_20px_40px_rgb(0,0,0,0.15)] hover:-translate-y-2"
            >
              {/* Background Image with Smooth Zoom on Hover */}
              <div
                className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-110"
                style={{
                  backgroundImage: `url('${c.background}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              
              {/* Complex Gradient Overlay for Depth and Text Legibility */}
              <div className="absolute inset-0 bg-gradient-to-b from-slate-900/20 via-slate-900/40 to-slate-900/95 transition-opacity duration-500 group-hover:opacity-90" />
              
              {/* Card Content */}
              <div className="relative z-10 flex h-full flex-col p-8">
                
                {/* Top Glassmorphism Icon */}
                <div className="mb-auto inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:bg-orange-500 group-hover:border-orange-400 group-hover:-rotate-3">
                  <c.icon strokeWidth={1.5} className="h-8 w-8" />
                </div>
                
                {/* Bottom Text and Hover Reveal */}
                <div className="transform translate-y-6 transition-transform duration-500 group-hover:translate-y-0">
                  <h3 className="font-montserrat text-2xl font-bold text-white mb-3 tracking-wide">
                    {c.name}
                  </h3>
                  
                  {/* Action Link (Fades in on hover) */}
                  <div className="flex items-center text-orange-400 opacity-0 transition-all duration-500 group-hover:opacity-100 font-semibold text-sm tracking-wide">
                    Explore Program 
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-500 delay-100 group-hover:translate-x-2" />
                  </div>
                </div>
                
              </div>
              
              {/* Accent Border Line at the bottom that expands on hover */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-orange-500 transition-all duration-500 ease-out group-hover:w-full z-20" />
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}