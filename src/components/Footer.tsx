"use client";

import React from "react";
import { PhoneCall } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white">
              <PhoneCall className="w-4 h-4" />
            </div>
            <div>
              <span className="text-base font-bold text-white block leading-tight">
                NightShift<span className="text-blue-500">AI</span>
              </span>
              <span className="text-[10px] text-slate-500 font-semibold tracking-wider uppercase">
                After-Hours AI Receptionist
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs text-slate-400 font-medium">
            <a href="#how-it-works" className="hover:text-white transition">How It Works</a>
            <a href="#demo" className="hover:text-white transition">Live Demo</a>
            <a href="#calculator" className="hover:text-white transition">ROI Calculator</a>
            <a href="#pricing" className="hover:text-white transition">Pricing & Comparison</a>
            <a href="#faq" className="hover:text-white transition">FAQ</a>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} NightShift AI. All rights reserved. 24/7 Voice AI Receptionist for Small Businesses.
          </div>
          <div>
            100% Done-For-You Service &bull; Month-to-Month &bull; Zero Risk Pilot
          </div>
        </div>
      </div>
    </footer>
  );
};
