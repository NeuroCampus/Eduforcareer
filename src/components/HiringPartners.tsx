import accentureLogo from "../assets/accenture.jpg";
import synchemronLogo from "../assets/Syncheron.jpg";
import virtusaLogo from "../assets/VIRTUSA.jpg";
import wipproLogo from "../assets/wipro.jpg";
import crayonLogo from "../assets/Crayon.png";
import deloitteLogo from "../assets/deloitte-1.png";
import flipkartLogo from "../assets/Flipkart.png";
import fractalLogo from "../assets/Fractal.png";
import infosysLogo from "../assets/Infosys.png";
import mathcompanyLogo from "../assets/Math-company.png";
import tcsLogo from "../assets/tcs-2.png";

const partners = [
  { name: "Accenture", logo: accentureLogo },
  { name: "Syncheron", logo: synchemronLogo },
  { name: "Virtusa", logo: virtusaLogo },
  { name: "Wipro", logo: wipproLogo },
  { name: "Crayon", logo: crayonLogo },
  { name: "Deloitte", logo: deloitteLogo },
  { name: "Flipkart", logo: flipkartLogo },
  { name: "Fractal", logo: fractalLogo },
  { name: "Infosys", logo: infosysLogo },
  { name: "Math Company", logo: mathcompanyLogo },
  { name: "TCS", logo: tcsLogo },
];

export default function HiringPartners() {
  return (
    <section className="bg-background py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
        <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">Hiring Partners</h2>
      </div>
      <div className="relative mt-10 overflow-hidden">
        <div className="marquee-track gap-6">
          {[...partners, ...partners].map((p, i) => (
            <div
              key={`${p.name}-${i}`}
              className="flex h-[90px] min-w-[180px] items-center justify-center rounded-lg bg-white px-4 shadow-sm ring-1 ring-border"
            >
              <img src={p.logo} alt={p.name} className="max-h-14 max-w-[140px] object-contain" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
