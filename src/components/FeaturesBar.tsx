import { MonitorPlay, Trophy, Users } from "lucide-react";

const features = [
  {
    icon: MonitorPlay,
    title: "10+ Online Courses",
    desc: "Access high-quality online courses and learn at your own pace from anywhere.",
  },
  {
    icon: Trophy,
    title: "Expert Instruction",
    desc: "Learn directly from industry professionals and certified trainers.",
  },
  {
    icon: Users,
    title: "Community & Support",
    desc: "Get mentor guidance and join learner communities.",
  },
];

export default function FeaturesBar() {
  return (
    <section className="border-b bg-background py-12">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:grid-cols-3 lg:px-8">
        {features.map((f) => (
          <div key={f.title} className="flex items-start gap-4">
            <div className="feature-icon">
              <f.icon className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-heading text-base font-semibold text-foreground">{f.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
