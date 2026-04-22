import { Link } from "@tanstack/react-router";
import { Facebook, Youtube, Linkedin, MapPin, Mail, Phone, ArrowRight } from "lucide-react";
import logo from "../assets/eduforcareer-logow.png";

const whatWeOffer = [
  { label: "About Us", to: "/about" },
  { label: "IT Training", to: "/" },
  { label: "Corporate Training", to: "/" },
  { label: "Careers", to: "/careers" },
  { label: "Contact Us", to: "/contact" },
];

const popularCourses = [
  "Python Full Stack Development",
  "Java full Stack Development",
  "Artificial Intelligence",
  "Cyber Security",
];

export default function Footer() {
  return (
    <footer className="bg-footer-bg text-footer-foreground">
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <img src={logo} alt="EduforCareer" className="mb-5 h-14 w-auto" />
            <p className="text-sm leading-relaxed opacity-80">
              Empowering learners with quality online courses and skill-building programs.
            </p>
            <p className="mt-4 text-sm font-semibold opacity-90">
              2025 © All Rights Reserved
            </p>
          </div>

          {/* What we offer */}
          <div>
            <h4 className="mb-5 font-heading text-lg font-semibold">What we offer</h4>
            <ul className="space-y-3">
              {whatWeOffer.map((item) => (
                <li key={item.label}>
                  <Link to={item.to} className="flex items-center gap-2 text-sm opacity-80 transition hover:opacity-100">
                    <ArrowRight className="h-3.5 w-3.5 text-primary" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Courses */}
          <div>
            <h4 className="mb-5 font-heading text-lg font-semibold">Popular Courses</h4>
            <ul className="space-y-3">
              {popularCourses.map((course) => (
                <li key={course} className="flex items-center gap-2 text-sm opacity-80">
                  <ArrowRight className="h-3.5 w-3.5 flex-shrink-0 text-primary" />
                  {course}
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="mb-5 font-heading text-lg font-semibold">Connect</h4>
            <ul className="space-y-3 text-sm opacity-80">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                No. 130, 1st Block, Dr. Rajkumar Road Rajajinagar, Bengaluru-560010
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0 text-primary" />
                <a href="mailto:info@eduforcareer.com" className="hover:opacity-100">info@eduforcareer.com</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0 text-primary" />
                <a href="tel:+917760826949" className="hover:opacity-100">+91-77608 26949</a>
              </li>
            </ul>
            <div className="mt-5 flex gap-2">
              <a href="#" className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground transition hover:opacity-80">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground transition hover:opacity-80">
                <Youtube className="h-4 w-4" />
              </a>
              <a href="#" className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground transition hover:opacity-80">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
