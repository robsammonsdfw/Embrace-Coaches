import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const useCases = [
  {
    title: "Top-of-Funnel Client Acquisition",
    description: "Convert prospects into paying clients with a free body scan health report.",
    bullets: [
      "Offer instant, shareable body composition reports as a lead magnet",
      "Build trust with objective clinical-grade data before the first session"
    ]
  },
  {
    title: "Client Engagement & Retention",
    description: "Keep clients engaged and coming back with body insights beyond what a scale can tell them.",
    bullets: [
      "Retention is the #1 challenge for coaches. Provide comprehensive body insights beyond scale weight",
      "Show muscle gains, fat loss, and body shape changes that keep clients motivated",
      "Create habit loops. Clients who see progress scan more often, driving higher engagement"
    ]
  },
  {
    title: "Progress Tracking & Motivation",
    description: "Keep clients motivated by visualizing comprehensive progress beyond what the scale reveals.",
    bullets: [
      "Show body recomposition with lean mass increases and fat mass decreases",
      "Visualize progress with 3D body models and circumference changes",
      "Celebrate non-scale victories that keep clients motivated during weight plateaus"
    ]
  },
  {
    title: "Personalized Programming",
    description: "Deliver truly personalized workout and nutrition recommendations based on body composition.",
    bullets: [
      "Tailor workout recommendations based on current lean mass and body fat percentage",
      "Calculate accurate caloric needs using precise basal metabolic rate",
      "Adjust programming as body composition changes to optimize continued progress"
    ]
  },
  {
    title: "Body Recomposition Validation",
    description: "Prove your coaching methodology works with objective body composition data.",
    bullets: [
      "Track skeletal muscle mass changes to validate strength training effectiveness",
      "Generate compelling before/after body composition reports for marketing and testimonials",
      "Differentiate your coaching with objective outcome data, not just client stories"
    ]
  }
];

export default function CoachAudienceGrid() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-brand-dark-blue mb-4">
            Use Cases
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Click through the use cases below to explore how EmbraceHealth supports your coaching success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -8 }}
              className="p-8 rounded-2xl border border-gray-100 bg-white shadow-sm card-shadow-hover transition-all group animate-reveal"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <h3 className="text-xl font-bold text-brand-dark-blue mb-4">{item.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{item.description}</p>
              <ul className="space-y-3 mb-8 text-sm text-gray-600">
                {item.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-brand-teal mt-1">•</span>
                    {bullet}
                  </li>
                ))}
              </ul>
              <a href="#" className="inline-flex items-center gap-2 text-brand-teal font-bold group-hover:gap-3 transition-all">
                Tell us about your case
                <ArrowRight size={18} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}