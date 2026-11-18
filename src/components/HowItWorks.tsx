"use client";

import React from "react";
import { PhoneForwarded, Cpu, BellRing, Check, ArrowRight } from "lucide-react";

interface HowItWorksProps {
  onOpenPilot: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenPilot }) => {
  const steps = [
    {
      icon: PhoneForwarded,
      step: "1",
      title: "Keep Your Number",
      desc: "No porting or phone system changes. When you leave at 5:00 PM, dial *71 on your cell or office phone. Calls forward to AI only when you don't answer.",
    },
    {
      icon: Cpu,
      step: "2",
      title: "AI Answers on Ring 1",
      desc: "NightShift AI greets the caller with your business name, qualifies their urgency, confirms contact details, and screens out spam robocalls.",
    },
    {
      icon: BellRing,
      step: "3",
      title: "Instant Phone Alert",
      desc: "Within 60 seconds of hanging up, you receive an email summary, caller details, and an audio recording link right on your smartphone.",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 font-mono block mb-2">
            Simple 3-Step Workflow
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            How NightShift AI Works
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Zero software to learn. We set up your number and custom prompt for you.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-blue-300 card-hover flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-lg mb-6 shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono font-bold text-blue-600 block mb-1">
                    STEP {item.step}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center gap-2 text-xs font-semibold text-emerald-700">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>100% Done-for-you</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
