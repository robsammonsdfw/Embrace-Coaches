import { Dumbbell, Utensils, HeartPulse, Trophy, Users, Stethoscope, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

const audiences = [
  {
    title: "Personal Trainers",
    description: "Scale your 1-on-1 sessions with automated programming and form tracking.",
    icon: Dumbbell,
    color: "bg-blue-50 text-blue-600"
  },
  {
    title: "Nutrition Coaches",
    description: "AI-powered macro tracking and meal planning that actually sticks.",
    icon: Utensils,
    color: "bg-orange-50 text-orange-600"
  },
  {
    title: "Registered Dietitians",
    description: "Clinical-grade data tracking with a consumer-grade user experience.",
    icon: HeartPulse,
    color: "bg-red-50 text-red-600"
  },
  {
    title: "Sports Coaches",
    description: "Team management, readiness scores, and performance analytics.",
    icon: Trophy,
    color: "bg-yellow-50 text-yellow-600"
  },
  {
    title: "Wellness Coaches",
    description: "Holistic habit tracking, sleep data, and mindfulness integration.",
    icon: Users,
    color: "bg-teal-50 text-teal-600"
  },
  {
    title: "Providers & Doctors",
    description: "Remote patient monitoring and lifestyle intervention tools.",
    icon: Stethoscope,
    color: "bg-purple-50 text-purple-600"
  }
];

export default function CoachAudienceGrid() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-brand-dark-blue mb-4">
            Built for every type of coach
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Whether you're a solo trainer or a large medical group, our platform adapts to your specific workflow.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {audiences.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -8 }}
              className="p-8 rounded-2xl border border-gray-100 bg-white shadow-sm card-shadow-hover transition-all group animate-reveal"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${item.color}`}>
                <item.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-brand-dark-blue mb-3">{item.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {item.description}
              </p>
              <a href="#" className="inline-flex items-center gap-2 text-brand-teal font-bold group-hover:gap-3 transition-all">
                Learn More
                <ArrowRight size={18} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
