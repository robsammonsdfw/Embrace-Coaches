import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const useCases = [
  {
    id: 'acquisition',
    tab: 'Top-of-Funnel Client Acquisition',
    title: 'Convert prospects into paying clients with a free body scan health report',
    subtitle: 'Client acquisition is expensive. Free trials commoditize your offering.',
    description: 'A free EmbraceHealth body scan delivers instant, personalized value prospects can’t get elsewhere, driving higher conversion without discounting.',
    bullets: [
      'Offer a free 5-second face scan as a lead magnet that delivers full body composition insights instantly',
      'Convert prospects with personalized health insights they can’t access without signing up',
      'Reduce friction to first value — no equipment, no gym visit, just immediate results',
      'Proven to drive significantly higher conversion rates than traditional free trials'
    ],
    image: '/acquisition.png' // ← Replace with real images
  },
  {
    id: 'engagement',
    tab: 'Client Engagement & Retention',
    title: 'Keep clients engaged and coming back with body insights beyond what a scale can tell them',
    subtitle: 'Retention is the #1 challenge for coaches.',
    description: 'EmbraceHealth shows muscle gains, fat loss, and body shape changes that keep clients excited even during weight plateaus.',
    bullets: [
      'Give clients a reason to open your app regularly with engaging progress visualization',
      'Reduce churn by demonstrating progress they can’t see in the mirror or on the scale',
      'Create powerful habit loops — clients who see progress scan more often',
      'Differentiate your coaching with clinical-grade body tracking clients love'
    ],
    image: '/engagement.png'
  },
  {
    id: 'progress',
    tab: 'Progress Tracking & Motivation',
    title: 'Keep clients motivated by visualizing comprehensive progress beyond what the scale reveals',
    subtitle: 'The scale doesn’t tell the full story.',
    description: 'EmbraceHealth shows the truth: body recomposition with lean mass gains and fat loss.',
    bullets: [
      'Show body recomposition with lean mass increases and fat mass decreases',
      'Visualize progress with 3D body models and circumference changes across 14+ regions',
      'Provide motivating insights like metabolic age, basal metabolic rate, and body fat trends',
      'Celebrate non-scale victories that keep clients motivated and reduce churn'
    ],
    image: '/progress.png'
  },
  {
    id: 'personalization',
    tab: 'Personalized Programming',
    title: 'Deliver truly personalized workout and nutrition recommendations based on body composition',
    subtitle: 'One-size-fits-all doesn’t work.',
    description: 'EmbraceHealth gives you precise data to tailor every program to each client’s actual body composition.',
    bullets: [
      'Tailor workouts based on current lean mass and body fat for optimal results',
      'Calculate accurate caloric needs using precise basal metabolic rate',
      'Set macronutrient targets based on real body composition and client goals',
      'Automatically adjust programming as body composition changes'
    ],
    image: 'https://picsum.photos/id/133/800/600'
  },
  {
    id: 'validation',
    tab: 'Body Recomposition Validation',
    title: 'Prove your coaching methodology works with objective body composition data',
    subtitle: 'Marketing claims need proof.',
    description: 'EmbraceHealth gives you clinical-grade data to back every result and build undeniable credibility.',
    bullets: [
      'Track skeletal muscle mass changes to validate strength training effectiveness',
      'Monitor body fat and visceral fat reduction with objective data',
      'Create powerful before/after reports for your marketing and testimonials',
      'Differentiate your coaching with undeniable outcome data'
    ],
    image: 'https://picsum.photos/id/201/800/600'
  }
];

export default function CoachAudienceGrid() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-5xl font-bold text-brand-dark-blue mb-4">Use Cases</h2>
          <p className="text-lg text-gray-600">Click through the use cases below to explore how EmbraceHealth transforms your coaching.</p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-x-8 border-b border-gray-200 mb-12 overflow-x-auto pb-2">
          {useCases.map((useCase, idx) => (
            <button
              key={useCase.id}
              onClick={() => setActiveTab(idx)}
              className={`px-6 py-4 text-sm font-semibold whitespace-nowrap transition-colors ${
                activeTab === idx
                  ? 'text-brand-teal border-b-2 border-brand-teal'
                  : 'text-gray-500 hover:text-brand-dark-blue'
              }`}
            >
              {useCase.tab}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* LEFT IMAGE — Wrapped in AnimatePresence + unique key */}
          <div className="lg:col-span-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={`image-${useCases[activeTab].id}-${activeTab}`} // More unique key forces full remount
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.4 }}
                className="rounded-3xl overflow-hidden shadow-2xl aspect-video bg-gray-100"
              >
                <img
                  src={useCases[activeTab].image}
                  alt={useCases[activeTab].tab}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT CONTENT */}
          <motion.div
            key={`content-${useCases[activeTab].id}-${activeTab}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-7"
          >
            <h3 className="text-3xl font-bold text-brand-dark-blue mb-2">{useCases[activeTab].title}</h3>
            <p className="text-xl text-gray-600 mb-6">{useCases[activeTab].subtitle}</p>
            <p className="text-gray-600 leading-relaxed mb-8">{useCases[activeTab].description}</p>
            
            <ul className="space-y-4 mb-10">
              {useCases[activeTab].bullets.map((bullet, i) => (
                <li key={i} className="flex gap-3 text-gray-600">
                  <span className="text-brand-teal font-bold mt-1">→</span>
                  {bullet}
                </li>
              ))}
            </ul>

            <button className="bg-brand-teal text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-opacity-90 transition-all">
              Tell us about your coaching practice
              <ArrowRight size={20} />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}