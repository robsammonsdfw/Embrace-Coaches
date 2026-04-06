import { CheckCircle2, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function CoachHero() {
  const bullets = [
    "Automated Client Progress Tracking",
    "AI-Powered Nutrition & Macro Support",
    "Real-Time Workout Form Feedback",
    "Seamless Coach-Client Communication"
  ];

  return (
    <section className="bg-[#F9F7F2] py-16 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-brand-dark-blue leading-tight mb-6">
              A coaching platform your clients will <span className="text-brand-teal italic">actually</span> use
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-xl">
              Stop juggling spreadsheets and multiple apps. EmbraceHealth provides the all-in-one infrastructure to scale your coaching business while delivering a premium client experience.
            </p>
            
            <ul className="space-y-4 mb-10">
              {bullets.map((bullet, idx) => (
                <li key={idx} className="flex items-center gap-3 text-brand-dark-blue font-medium">
                  <CheckCircle2 className="text-brand-teal" size={22} />
                  {bullet}
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-brand-teal text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg flex items-center justify-center gap-2">
                Request a Coach Demo
                <ArrowRight size={20} />
              </button>
              <button className="bg-white text-brand-dark-blue border-2 border-brand-dark-blue px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition-all flex items-center justify-center">
                Explore Coach Tools
              </button>
            </div>
          </motion.div>

          {/* Right Visual - Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 grid grid-cols-12 gap-4">
              {/* Fake Coach Dashboard */}
              <div className="col-span-8 bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 overflow-hidden">
                <div className="flex items-center justify-between mb-6">
                  <div className="h-4 w-32 bg-gray-100 rounded"></div>
                  <div className="h-8 w-8 bg-brand-teal/10 rounded-full"></div>
                </div>
                <div className="space-y-4">
                  <div className="h-32 bg-gray-50 rounded-xl border border-dashed border-gray-200 flex items-center justify-center">
                    <span className="text-xs text-gray-400 font-mono">Coach Analytics View</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-20 bg-brand-teal/5 rounded-xl p-3">
                      <div className="h-2 w-12 bg-brand-teal/20 rounded mb-2"></div>
                      <div className="h-4 w-16 bg-brand-teal/40 rounded"></div>
                    </div>
                    <div className="h-20 bg-brand-orange/5 rounded-xl p-3">
                      <div className="h-2 w-12 bg-brand-orange/20 rounded mb-2"></div>
                      <div className="h-4 w-16 bg-brand-orange/40 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile Client App */}
              <div className="col-span-4 -ml-8 mt-12 bg-brand-dark-blue rounded-[2.5rem] shadow-2xl border-[6px] border-gray-800 aspect-[9/19] overflow-hidden relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-4 bg-gray-800 rounded-b-xl z-20"></div>
                <div className="p-4 pt-8">
                  <div className="h-3 w-16 bg-white/20 rounded mb-4"></div>
                  <div className="space-y-3">
                    <div className="h-12 bg-white/10 rounded-lg"></div>
                    <div className="h-24 bg-brand-teal rounded-lg p-2">
                      <div className="h-2 w-10 bg-white/30 rounded mb-2"></div>
                      <div className="h-4 w-20 bg-white/60 rounded"></div>
                    </div>
                    <div className="h-12 bg-white/10 rounded-lg"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Cards */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-4 z-20 bg-white p-4 rounded-xl shadow-xl border border-gray-100 flex items-center gap-3"
            >
              <div className="w-10 h-10 bg-brand-teal/10 rounded-lg flex items-center justify-center text-brand-teal">
                <CheckCircle2 size={20} />
              </div>
              <div>
                <p className="text-xs font-bold text-brand-dark-blue">Body Scan</p>
                <p className="text-[10px] text-gray-500">Completed 2m ago</p>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-1/2 -left-8 z-20 bg-white p-4 rounded-xl shadow-xl border border-gray-100 flex items-center gap-3"
            >
              <div className="w-10 h-10 bg-brand-orange/10 rounded-lg flex items-center justify-center text-brand-orange font-bold text-xs">
                1850
              </div>
              <div>
                <p className="text-xs font-bold text-brand-dark-blue">Macros</p>
                <p className="text-[10px] text-gray-500">On Track (92%)</p>
              </div>
            </motion.div>

            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute bottom-12 right-0 z-20 bg-white p-4 rounded-xl shadow-xl border border-gray-100 flex items-center gap-3"
            >
              <div className="w-10 h-10 bg-brand-teal/10 rounded-lg flex items-center justify-center text-brand-teal font-bold text-xs">
                88%
              </div>
              <div>
                <p className="text-xs font-bold text-brand-dark-blue">Readiness</p>
                <p className="text-[10px] text-gray-500">High Performance</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
