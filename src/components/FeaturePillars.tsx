import { useRef, useState } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const benefits = [
  {
    title: 'Built for Engagement',
    description: 'Visualization drives motivation. 3D body models, progress timelines, and “Future You” projections keep clients coming back week after week.',
    image: 'https://picsum.photos/id/1015/600/400',
    video: 'https://assets.mixkit.co/videos/12345/12345-small.mp4' // ← REPLACE WITH YOUR ACTUAL BODY SCAN DEMO VIDEO
  },
  {
    title: 'Body Recomposition Proof',
    description: 'Show clients they’re gaining muscle and losing fat — even when the scale stays the same. Essential for long-term retention.',
    image: 'https://picsum.photos/id/133/600/400',
    video: 'https://assets.mixkit.co/videos/23456/23456-small.mp4'
  },
  {
    title: 'Personalization at Scale',
    description: 'Enable truly individualized programming based on each client’s real body composition. No manual measurements required.',
    image: 'https://picsum.photos/id/201/600/400',
    video: 'https://assets.mixkit.co/videos/34567/34567-small.mp4'
  },
  {
    title: 'Clinically Validated',
    description: 'Peer-reviewed accuracy against DEXA. Use the data with complete confidence for your marketing, testimonials, and client trust.',
    image: 'https://picsum.photos/id/102/600/400',
    video: 'https://assets.mixkit.co/videos/45678/45678-small.mp4'
  },
  {
    title: 'Seamless White-Label Experience',
    description: 'Clients experience body scanning as a native part of EmbraceHealth — your premium feature, not someone else’s tool.',
    image: 'https://picsum.photos/id/160/600/400',
    video: 'https://assets.mixkit.co/videos/56789/56789-small.mp4'
  },
  {
    title: 'No Hardware Required',
    description: 'Deploy at scale with just a smartphone camera. No expensive scanners, no gym equipment, no operational friction.',
    image: 'https://picsum.photos/id/180/600/400',
    video: 'https://assets.mixkit.co/videos/67890/67890-small.mp4'
  }
];

export default function FeaturePillars() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const scrollAmount = 320; // card width + gap
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  };

  return (
    <section className="py-24 bg-[#002534] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">Benefits of EmbraceHealth Body Intelligence</h2>
            <p className="text-gray-400 max-w-md">Everything you need to deliver world-class coaching results.</p>
          </div>
          <div className="flex gap-3">
            <button onClick={() => scroll('left')} className="w-12 h-12 rounded-2xl border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors">
              <ChevronLeft size={24} />
            </button>
            <button onClick={() => scroll('right')} className="w-12 h-12 rounded-2xl border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8"
          style={{ scrollbarWidth: 'none' }}
        >
          {benefits.map((benefit, idx) => {
            const videoRef = useRef<HTMLVideoElement>(null);

            const handleMouseEnter = () => {
              if (videoRef.current) {
                videoRef.current.play();
              }
            };

            const handleMouseLeave = () => {
              if (videoRef.current) {
                videoRef.current.pause();
                videoRef.current.currentTime = 0;
              }
            };

            return (
              <motion.div
                key={idx}
                whileHover={{ y: -8 }}
                className="min-w-[300px] snap-start bg-white/5 border border-white/10 rounded-3xl overflow-hidden group"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="relative aspect-video">
                  <img
                    src={benefit.image}
                    alt={benefit.title}
                    className="absolute inset-0 w-full h-full object-cover transition-opacity group-hover:opacity-0"
                  />
                  <video
                    ref={videoRef}
                    src={benefit.video}
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}