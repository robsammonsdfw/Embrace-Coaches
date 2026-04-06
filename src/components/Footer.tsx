import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-brand-dark-blue text-white pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 mb-20">
          {/* Col 1 */}
          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-wider text-gray-400">Coach Types</h4>
            <ul className="space-y-4 text-sm text-gray-300">
              <li><a href="#" className="hover:text-brand-teal transition-colors">Personal Trainers</a></li>
              <li><a href="#" className="hover:text-brand-teal transition-colors">Nutrition Coaches</a></li>
              <li><a href="#" className="hover:text-brand-teal transition-colors">Dietitians</a></li>
              <li><a href="#" className="hover:text-brand-teal transition-colors">Sports Coaches</a></li>
            </ul>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-wider text-gray-400">Features</h4>
            <ul className="space-y-4 text-sm text-gray-300">
              <li><a href="#" className="hover:text-brand-teal transition-colors">Progress Tracking</a></li>
              <li><a href="#" className="hover:text-brand-teal transition-colors">AI Nutrition</a></li>
              <li><a href="#" className="hover:text-brand-teal transition-colors">Workout Library</a></li>
              <li><a href="#" className="hover:text-brand-teal transition-colors">Habit Design</a></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-wider text-gray-400">Coach Tools</h4>
            <ul className="space-y-4 text-sm text-gray-300">
              <li><a href="#" className="hover:text-brand-teal transition-colors">Program Builder</a></li>
              <li><a href="#" className="hover:text-brand-teal transition-colors">Client CRM</a></li>
              <li><a href="#" className="hover:text-brand-teal transition-colors">Payments</a></li>
              <li><a href="#" className="hover:text-brand-teal transition-colors">Messaging</a></li>
            </ul>
          </div>

          {/* Col 4 */}
          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-wider text-gray-400">Resources</h4>
            <ul className="space-y-4 text-sm text-gray-300">
              <li><a href="#" className="hover:text-brand-teal transition-colors">Coach Blog</a></li>
              <li><a href="#" className="hover:text-brand-teal transition-colors">Webinars</a></li>
              <li><a href="#" className="hover:text-brand-teal transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-brand-teal transition-colors">API Docs</a></li>
            </ul>
          </div>

          {/* Col 5 */}
          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-wider text-gray-400">Company</h4>
            <ul className="space-y-4 text-sm text-gray-300">
              <li><a href="#" className="hover:text-brand-teal transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-brand-teal transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-brand-teal transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-brand-teal transition-colors">Terms</a></li>
            </ul>
          </div>

          {/* Col 6 */}
          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-wider text-gray-400">Brand</h4>
            <ul className="space-y-4 text-sm text-gray-300">
              <li><a href="https://embracehealth.ai" className="hover:text-brand-teal transition-colors">Back to EmbraceHealth.ai</a></li>
              <li><a href="#" className="hover:text-brand-teal transition-colors">For Employers</a></li>
              <li><a href="#" className="hover:text-brand-teal transition-colors">For Health Plans</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 text-center">
          <div className="flex justify-center mb-8">
            <span className="text-xl font-bold tracking-tight text-white">
              embrace<span className="text-brand-teal">health.ai</span>
            </span>
          </div>
          <p className="text-[10px] text-gray-500 max-w-3xl mx-auto leading-relaxed uppercase tracking-widest">
            LegitScript Disclaimer: EmbraceHealth is a technology platform, not a medical provider. Our AI tools and coaching infrastructure are designed to support health and wellness professionals. Always consult with a qualified healthcare provider for medical advice.
          </p>
          <p className="mt-6 text-xs text-gray-600">
            © 2026 EmbraceHealth AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
