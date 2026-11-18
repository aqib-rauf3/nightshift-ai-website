"use client";

import React, { useState } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";

interface FaqProps {
  onOpenPilot: () => void;
}

export const Faq: React.FC<FaqProps> = ({ onOpenPilot }) => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "What is an after-hours AI receptionist and how does it work?",
      a: "An after-hours AI receptionist is an intelligent voice assistant that answers your business telephone whenever you are closed or unavailable. When a customer calls after hours, your phone forwards to NightShift AI. The AI answers in under 1.5 seconds, speaks naturally with the caller, identifies their urgency, collects their details, and emails you an audio recording and written transcript within 60 seconds.",
    },
    {
      q: "Will callers know they are speaking with an AI assistant?",
      a: "NightShift AI uses state-of-the-art conversational voice models with natural pacing and American regional accents. It sounds like an attentive, professional receptionist sitting in an office. To comply with US regulations and maintain full transparency, the assistant politely introduces itself as an automated after-hours receptionist for your company.",
    },
    {
      q: "Do I have to change my existing business phone number?",
      a: "No. You keep your current business number, Google Business Profile, and phone carrier. Setup requires zero porting and takes only 2 minutes using standard conditional call forwarding (*71). During business hours, your phone rings normally; after hours or on weekends, unanswered calls forward smoothly to your AI.",
    },
    {
      q: "How does an AI receptionist compare to a traditional answering service?",
      a: "Traditional virtual receptionists charge $600 to $1,500+ per month with expensive $3.50/minute overages and often delay sending messages for 30–60 minutes. NightShift AI costs a flat $249 to $349 per month, picks up on ring one (under 1.4 seconds), and emails you the full audio recording and summary immediately.",
    },
    {
      q: "Can I customize what the AI receptionist says to callers?",
      a: "Yes. During onboarding, we tailor the greeting with your business name, operating hours, emergency service guidelines, and the exact questions you need asked (such as service address, symptoms, or priority time slots).",
    },
    {
      q: "Are there long-term contracts or cancellation penalties?",
      a: "None. All NightShift AI plans are strictly month-to-month. You can cancel or pause your service anytime with a simple email. We also provide a 14-day zero-risk trial so you can experience it before spending a dollar.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 font-mono block mb-2">
            Frequently Asked Questions
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Common Questions About AI Receptionists
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Everything you need to know about setup, voice quality, and call routing.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-blue-600 transition"
                >
                  <span className="text-sm sm:text-base">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform ${
                      isOpen ? "rotate-180 text-blue-600" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-14 p-8 bg-white rounded-2xl border border-slate-200 text-center shadow-sm max-w-xl mx-auto">
          <h3 className="text-xl font-bold text-slate-900 mb-1">
            Ready to test it for your business?
          </h3>
          <p className="text-xs text-slate-500 mb-5">
            We'll set up your private demo assistant so you can test it directly with your phone.
          </p>
          <button
            onClick={onOpenPilot}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow transition"
          >
            Claim Your 14-Day Free Pilot
          </button>
        </div>
      </div>
    </section>
  );
};
