import { motion } from 'motion/react';
import { Eye, TrendingUp, Zap, ShieldCheck, Smartphone, Camera } from 'lucide-react';

const benefits = [
  {
    title: "Built for Engagement",
    description: "Visualization drives motivation. 3D body models, progress timelines, and \"Future Me\" projections keep clients coming back.",
    icon: Eye
  },
  {
    title: "Body Recomposition Proof",
    description: "Show clients they're gaining muscle and losing fat, even when scale weight plateaus. Essential for retention.",
    icon: TrendingUp
  },
  {
    title: "Personalization at Scale",
    description: "Enable truly individualized programming based on each client's body composition. No manual measurements required.",
    icon: Zap
  },
  {
    title: "Clinically Validated",
    description: "Peer-reviewed accuracy against DEXA. Use with confidence for claims, marketing, and client trust.",
    icon: ShieldCheck
  },
  {
    title: "Seamless Integration",
    description: "Designed to disappear inside your coaching flow. Clients experience body scanning as your premium feature.",
    icon: Smartphone
  },
  {
    title: "No Hardware Required",
    description: "Deploy at scale via smartphone camera. No expensive scanners, no gym equipment, no operational friction.",
    icon: Camera
  }
];

export default function FeaturePillars() {
  return (
    <section id="features" className="py-24 bg-[#002534] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">Benefits of EmbraceHealth Body Intelligence</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Everything you need to deliver world-class results without the administrative headache.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {benefits.map((benefit, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
            >
              <div className="w-12 h-12 bg-brand-teal/20 rounded-lg flex items-center justify-center text-brand-teal mb-6">
                <benefit.icon size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}