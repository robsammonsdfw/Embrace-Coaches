import { CheckCircle2, ArrowRight, TrendingDown, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';

export default function CoachHero() {
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
              Transform Your Coaching with <span className="text-brand-teal">Body Composition Intelligence</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-xl">
              Discover how EmbraceHealth transforms coaching with body composition tracking that proves results beyond the scale. Increase retention, demonstrate body recomposition, and deliver personalized programming with clinical-grade data clients can access from their phones.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-brand-teal text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg flex items-center justify-center gap-2">
                Request a Coach Demo
                <ArrowRight size={20} />
              </button>
              <button className="bg-white text-brand-dark-blue border-2 border-brand-dark-blue px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition-all">
                Explore Client Tools
              </button>
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Metrics Card */}
            <div className="hero-card-base widget-large shadow-2xl border border-gray-100 p-8 mb-8">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <div className="flex items-center gap-2 text-sm font-medium text-gray-500 mb-1">BODY FAT</div>
                  <div className="text-5xl font-bold text-brand-dark-blue">22.6%</div>
                  <div className="flex items-center gap-1 text-red-500 font-semibold">
                    <TrendingDown size={24} />
                    <span className="text-2xl">-1.4%</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-2 text-sm font-medium text-gray-500 mb-1">LEAN MASS</div>
                  <div className="text-5xl font-bold text-brand-dark-blue">107.4 lb</div>
                  <div className="flex items-center gap-1 text-brand-teal font-semibold">
                    <TrendingUp size={24} />
                    <span className="text-2xl">+5.7%</span>
                  </div>
                </div>
              </div>
              <div className="text-center text-xs text-gray-400 pt-6 border-t">
                Powered by EmbraceHealth AI • Clinical-grade • Smartphone scan
              </div>
            </div>

            {/* Grid with Video in Coach Analytics View + Mobile Mockup */}
            <div className="relative z-10 grid grid-cols-12 gap-4">
              
              <div className="col-span-8 hero-card-base widget-large shadow-2xl border border-gray-100 overflow-hidden relative">
                <video
                  src="/prismmobile.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 text-white text-sm font-medium flex items-center gap-2">
                  <div className="w-2 h-2 bg-brand-teal rounded-full animate-pulse" />
                  Coach Analytics Dashboard
                </div>
              </div>

              {/* Mobile Client App Mockup (with recent body scan) */}
              <div className="col-span-4 -ml-8 mt-12 bg-brand-dark-blue rounded-[2.5rem] shadow-2xl border-[6px] border-gray-800 aspect-[9/19] overflow-hidden relative product-lift">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-4 bg-gray-800 rounded-b-xl z-20" />
                <div className="p-4 pt-8">
                  <div className="h-3 w-16 bg-white/20 rounded mb-4" />
                  <div className="space-y-3">
                    <div className="h-12 bg-white/10 rounded-lg" />
                    <div className="h-24 bg-brand-teal rounded-lg p-2">
                      <div className="h-2 w-10 bg-white/30 rounded mb-2" />
                      <div className="h-4 w-20 bg-white/60 rounded" />
                    </div>
                    <div className="h-12 bg-white/10 rounded-lg" />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Cards */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-4 z-20 hero-card-base p-4 rounded-xl shadow-xl border border-gray-100 flex items-center gap-3"
            >
              <div className="w-10 h-10 bg-brand-teal/10 rounded-lg flex items-center justify-center text-brand-teal">
                <span className="font-bold text-xs">SCAN</span>
              </div>
              <div>
                <p className="text-xs font-bold text-brand-dark-blue">Body Scan</p>
                <p className="text-[10px] text-gray-500">Completed 2m ago</p>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-1/2 -left-8 z-20 hero-card-base p-4 rounded-xl shadow-xl border border-gray-100 flex items-center gap-3"
            >
              <div className="w-10 h-10 bg-brand-orange/10 rounded-lg flex items-center justify-center text-brand-orange font-bold text-xs">
                1850
              </div>
              <div>
                <p className="text-xs font-bold text-brand-dark-blue">Macros</p>
                <p className="text-[10px] text-gray-500">On Track (92%)</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}