import { Activity, Zap, ShieldCheck, BarChart3, Star, Settings } from 'lucide-react';
import { motion } from 'motion/react';

const pillars = [
  {
    title: "Client Progress Tracking",
    description: "Automated data collection from wearables and manual logs, visualized in real-time.",
    icon: BarChart3
  },
  {
    title: "AI Nutrition Coaching",
    description: "Smart macro suggestions and photo-based logging for effortless client compliance.",
    icon: Zap
  },
  {
    title: "Workout & Form Support",
    description: "Video analysis and AI-driven form feedback to keep clients safe and effective.",
    icon: Activity
  },
  {
    title: "Readiness & Habits",
    description: "Holistic view of client recovery, sleep, and daily habit consistency.",
    icon: ShieldCheck
  },
  {
    title: "Rewards & Accountability",
    description: "Gamified experience with badges, streaks, and community challenges.",
    icon: Star
  },
  {
    title: "Coach Tools",
    description: "Powerful backend for program design, billing, and client communication.",
    icon: Settings
  }
];

export default function FeaturePillars() {
  return (
    <section id="features" className="py-24 bg-[#002534] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">The 6 Pillars of Modern Coaching</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Everything you need to deliver world-class results without the administrative headache.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
            >
              <div className="w-12 h-12 bg-brand-teal/20 rounded-lg flex items-center justify-center text-brand-teal mb-6">
                <pillar.icon size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4">{pillar.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
