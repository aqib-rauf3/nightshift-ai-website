"use client";

import React, { useState, useEffect } from "react";
import { PhoneCall, ArrowRight, Menu, X } from "lucide-react";

interface NavbarProps {
  onOpenPilot: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenPilot }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3.5"
          : "bg-white border-b border-slate-100 py-4"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-sm group-hover:bg-blue-700 transition">
              <PhoneCall className="w-4 h-4" />
            </div>
            <div>
              <span className="text-lg font-bold tracking-tight text-slate-900 block leading-tight">
                NightShift<span className="text-blue-600">AI</span>
              </span>
              <span className="text-[10px] font-semibold text-slate-500 tracking-wider uppercase">
                After-Hours AI Receptionist
              </span>
            </div>
          </a>

          {/* Nav links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-semibold text-slate-600">
            <a href="#how-it-works" className="hover:text-blue-600 transition">
              How It Works
            </a>
            <a href="#calculator" className="hover:text-blue-600 transition">
              ROI Calculator
            </a>
            <a href="#report-preview" className="hover:text-blue-600 transition">
              Report Preview
            </a>
            <a href="#pricing" className="hover:text-blue-600 transition">
              Pricing & Comparison
            </a>
            <a href="#faq" className="hover:text-blue-600 transition">
              FAQ
            </a>
          </nav>

          {/* Simple CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenPilot}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-slate-900 hover:bg-blue-600 rounded-xl shadow-sm transition active:scale-95"
            >
              <span>14-Day Free Pilot</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 border-t border-slate-100 space-y-2 bg-white pb-3">
            <a
              href="#how-it-works"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-slate-700 font-semibold hover:bg-slate-50 rounded-lg text-sm"
            >
              How It Works
            </a>
            <a
              href="#calculator"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-slate-700 font-semibold hover:bg-slate-50 rounded-lg text-sm"
            >
              ROI Calculator
            </a>
            <a
              href="#report-preview"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-slate-700 font-semibold hover:bg-slate-50 rounded-lg text-sm"
            >
              Report Preview
            </a>
            <a
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-slate-700 font-semibold hover:bg-slate-50 rounded-lg text-sm"
            >
              Pricing & Comparison
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-slate-700 font-semibold hover:bg-slate-50 rounded-lg text-sm"
            >
              FAQ
            </a>
            <div className="pt-2 px-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenPilot();
                }}
                className="w-full py-3 bg-blue-600 text-white rounded-xl font-bold text-sm text-center shadow-sm"
              >
                Start 14-Day Free Pilot
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
