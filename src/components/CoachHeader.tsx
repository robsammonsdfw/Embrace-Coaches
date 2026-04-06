import { Link } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function CoachHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold tracking-tight text-brand-dark-blue">
                embrace<span className="text-brand-teal">health.ai</span>
              </span>
            </Link>
            <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-gray-600">
              <a href="#features" className="hover:text-brand-teal transition-colors">Features</a>
              <a href="#experience" className="hover:text-brand-teal transition-colors">Client Experience</a>
              <a href="#nutrition" className="hover:text-brand-teal transition-colors">Nutrition</a>
              <a href="#tracking" className="hover:text-brand-teal transition-colors">Progress Tracking</a>
              <a href="#pricing" className="hover:text-brand-teal transition-colors">Pricing</a>
              <a href="#resources" className="hover:text-brand-teal transition-colors">Resources</a>
              <a href="/login" className="hover:text-brand-teal transition-colors">Login</a>
            </nav>
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <a href="https://embracehealth.ai" className="text-sm font-medium text-gray-500 hover:text-brand-dark-blue transition-colors">
              Back to EmbraceHealth.ai
            </a>
            <button className="bg-brand-teal text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-opacity-90 transition-all shadow-sm">
              Request a Coach Demo
            </button>
          </div>

          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-brand-dark-blue">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-b border-gray-100 px-4 py-6 space-y-4">
          <nav className="flex flex-col gap-4 text-base font-medium text-gray-600">
            <a href="#features" onClick={() => setIsOpen(false)}>Features</a>
            <a href="#experience" onClick={() => setIsOpen(false)}>Client Experience</a>
            <a href="#nutrition" onClick={() => setIsOpen(false)}>Nutrition</a>
            <a href="#tracking" onClick={() => setIsOpen(false)}>Progress Tracking</a>
            <a href="#pricing" onClick={() => setIsOpen(false)}>Pricing</a>
            <a href="#resources" onClick={() => setIsOpen(false)}>Resources</a>
            <a href="/login" onClick={() => setIsOpen(false)}>Login</a>
          </nav>
          <div className="pt-4 flex flex-col gap-4">
            <a href="https://embracehealth.ai" className="text-sm font-medium text-gray-500">
              Back to EmbraceHealth.ai
            </a>
            <button className="w-full bg-brand-teal text-white px-6 py-3 rounded-full font-semibold text-sm">
              Request a Coach Demo
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
