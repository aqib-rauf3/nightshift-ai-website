"use client";

import React from "react";
import { ArrowRight, CheckCircle2, PhoneIncoming, Clock, Zap, Calculator } from "lucide-react";

interface HeroProps {
  onOpenPilot: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenPilot }) => {
  return (
    <section id="hero" className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden bg-gradient-to-b from-white via-slate-50 to-slate-100 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12] mb-5">
            Never Miss Another <span className="text-blue-600">After-Hours</span> Customer Call.
          </h1>

          {/* Subtitle - Punchy, low-text, universal */}
          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed mb-8 max-w-2xl mx-auto font-normal">
            A 24/7 Voice AI receptionist that answers in 1.4 seconds, qualifies customer urgency, confirms their details, and emails you the recording before they call your competitor.
          </p>

          {/* Action Buttons - 44px minimum touch target, high contrast, cursor pointer */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-10">
            <button
              onClick={onOpenPilot}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 min-h-[48px] text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-md hover:shadow-lg transition-all active:scale-[0.98] cursor-pointer"
            >
              <span>Claim 14-Day Free Pilot</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="#calculator"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 min-h-[48px] text-sm font-bold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 rounded-xl shadow-sm transition active:scale-[0.98] cursor-pointer"
            >
              <Calculator className="w-4 h-4 text-blue-600" />
              <span>Calculate Missed Revenue</span>
            </a>
          </div>

          {/* 3 Reassurance Bullets */}
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2.5 text-xs sm:text-sm font-semibold text-slate-600 mb-14">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Keep your existing phone number</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>2-minute carrier setup (<code className="font-mono bg-slate-100 px-1 py-0.5 rounded text-slate-800 text-xs">*71</code>)</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>100% Done-for-you service</span>
            </span>
          </div>
        </div>

        {/* Visual Call Flow Interactive Card */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-slate-200 shadow-clean p-6 sm:p-8 card-hover">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            {/* Step 1 */}
            <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 font-bold">
                <PhoneIncoming className="w-5 h-5 text-amber-600" />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                  1. Call Arrives
                </span>
                <h3 className="text-sm font-bold text-slate-900 mt-0.5">
                  Customer calls after hours
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Your phone forwards to NightShift AI when unanswered.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start gap-4 p-4 rounded-xl bg-blue-50/70 border border-blue-100">
              <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 font-bold">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block">
                  2. AI Answers (1.4s)
                </span>
                <h3 className="text-sm font-bold text-slate-900 mt-0.5">
                  Natural conversation
                </h3>
                <p className="text-xs text-slate-600 mt-1">
                  Identifies caller name, urgency, and confirms address/phone.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start gap-4 p-4 rounded-xl bg-emerald-50/70 border border-emerald-100">
              <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 font-bold">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider block">
                  3. Instant Delivery
                </span>
                <h3 className="text-sm font-bold text-slate-900 mt-0.5">
                  Email summary + Audio
                </h3>
                <p className="text-xs text-slate-600 mt-1">
                  Formatted report and MP3 link sent directly to your phone.
                </p>
              </div>
            </div>
          </div>

          {/* Industry Support Pills */}
          <div className="mt-6 pt-5 border-t border-slate-100 flex flex-wrap items-center justify-center gap-2 text-xs text-slate-500">
            <span className="font-semibold text-slate-700">Perfect for:</span>
            <span className="px-2.5 py-1 rounded-md bg-slate-100 font-medium">Home Services & Trades</span>
            <span className="px-2.5 py-1 rounded-md bg-slate-100 font-medium">Medical & Dental Clinics</span>
            <span className="px-2.5 py-1 rounded-md bg-slate-100 font-medium">Law & Professional Services</span>
            <span className="px-2.5 py-1 rounded-md bg-slate-100 font-medium">Auto Repair & Towing</span>
            <span className="px-2.5 py-1 rounded-md bg-slate-100 font-medium">Property Management</span>
          </div>
        </div>
      </div>
    </section>
  );
};
