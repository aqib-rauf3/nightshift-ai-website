"use client";

import React from "react";
import { Check, X, ArrowRight, ShieldCheck, Star } from "lucide-react";

interface PricingProps {
  onOpenPilot: (planName?: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onOpenPilot }) => {
  const plans = [
    {
      name: "Starter",
      tagline: "For Solo Operators & Small Offices",
      price: "$249",
      setupFee: "$197 setup",
      minutes: "150 minutes / month",
      callsEst: "~40 to 50 calls covered",
      popular: false,
      features: [
        "150 minutes included",
        "Answers in 1.4s with natural US voice",
        "Captures Name, Phone & Details",
        "Instant Email report for every call",
        "Clickable audio recording link",
        "Google Sheets automatic call log",
        "2-Minute Carrier Forwarding Guide",
        "100% Done-For-You Setup",
      ],
      ctaText: "Start 14-Day Pilot",
    },
    {
      name: "Standard",
      tagline: "Most Popular &bull; Ideal for Growing Businesses",
      price: "$349",
      setupFee: "$397 setup",
      minutes: "400 minutes / month",
      callsEst: "~100 to 130 calls covered",
      popular: true,
      features: [
        "400 minutes included",
        "Everything in Starter, plus:",
        "High-Urgency Call Flagging",
        "Detailed Address & Info Verification",
        "Instant SMS alerts to on-duty staff",
        "Spam & Telemarketer Filter",
        "Monthly prompt & greeting tuning",
        "Priority Support directly with us",
      ],
      ctaText: "Claim Standard Pilot (Free)",
    },
    {
      name: "Pro",
      tagline: "For High-Volume Teams & Multi-Location",
      price: "$499",
      setupFee: "$697 setup",
      minutes: "800 minutes / month",
      callsEst: "~200 to 250 calls covered",
      popular: false,
      features: [
        "800 minutes included",
        "Everything in Standard, plus:",
        "Multi-staff rotational routing",
        "Weekend & holiday surge coverage",
        "Custom branded greeting options",
        "Bi-weekly call performance review",
        "Dedicated VIP support",
      ],
      ctaText: "Start 14-Day Pilot",
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 font-mono block mb-2">
            Plans & Comparison
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Transparent Pricing. Zero Hidden Fees.
          </h2>
          <p className="mt-3 text-base text-slate-600">
            No long-term contracts. No expensive per-minute overage shock.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-20">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-8 flex flex-col justify-between transition-all card-hover ${
                plan.popular
                  ? "bg-slate-900 text-white shadow-xl relative lg:-translate-y-2 border-2 border-blue-600"
                  : "bg-slate-50 text-slate-900 border border-slate-200 hover:border-slate-300"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-blue-600 text-white text-[10px] font-bold uppercase tracking-wider shadow">
                  Most Popular
                </div>
              )}

              <div>
                <h3 className="text-xl font-bold">{plan.name}</h3>
                <p className={`text-xs mt-1 ${plan.popular ? "text-slate-400" : "text-slate-500"}`}>
                  {plan.tagline}
                </p>

                <div className="my-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold font-mono tracking-tight tabular-nums">
                      {plan.price}
                    </span>
                    <span className={`text-xs ${plan.popular ? "text-slate-400" : "text-slate-500"}`}>
                      / month
                    </span>
                  </div>
                  <div className={`text-xs mt-1 font-semibold ${plan.popular ? "text-blue-400" : "text-blue-600"}`}>
                    {plan.setupFee} &bull; {plan.minutes}
                  </div>
                </div>

                <div className="space-y-3 pt-4 border-t border-slate-200/20 mb-8">
                  {plan.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs">
                      <Check className={`w-4 h-4 shrink-0 ${plan.popular ? "text-blue-400" : "text-blue-600"}`} />
                      <span className={plan.popular ? "text-slate-300" : "text-slate-700"}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => onOpenPilot(plan.name)}
                className={`w-full min-h-[44px] py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition active:scale-[0.98] cursor-pointer ${
                  plan.popular
                    ? "bg-blue-600 hover:bg-blue-500 text-white shadow"
                    : "bg-slate-900 hover:bg-slate-800 text-white"
                }`}
              >
                <span>{plan.ctaText}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

        {/* COMPARISON TABLE */}
        <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8 card-hover">
          <div className="text-center max-w-xl mx-auto mb-8">
            <h3 className="text-xl font-bold text-slate-900">
              How NightShift AI Compares
            </h3>
            <p className="text-xs text-slate-600 mt-1">
              Why business owners switch from human call centers and DIY software.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-slate-200 text-slate-500 font-bold uppercase tracking-wider">
                  <th className="py-3 px-4">Feature</th>
                  <th className="py-3 px-4 text-slate-400">Traditional Call Center</th>
                  <th className="py-3 px-4 text-slate-400">DIY AI Software</th>
                  <th className="py-3 px-4 text-blue-600 bg-blue-50/50 rounded-t-lg font-extrabold">NightShift AI</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                <tr>
                  <td className="py-3.5 px-4 font-bold text-slate-900">Monthly Cost</td>
                  <td className="py-3.5 px-4 text-slate-500 font-mono">$600 &ndash; $1,500+/mo</td>
                  <td className="py-3.5 px-4 text-slate-500 font-mono">$49 &ndash; $99/mo</td>
                  <td className="py-3.5 px-4 font-bold text-blue-700 bg-blue-50/50 font-mono">$249 &ndash; $349/mo (Flat)</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-bold text-slate-900">Setup Effort</td>
                  <td className="py-3.5 px-4 text-slate-500">Call center script onboarding</td>
                  <td className="py-3.5 px-4 text-rose-600 font-medium">High &bull; You build everything</td>
                  <td className="py-3.5 px-4 font-bold text-emerald-700 bg-blue-50/50">Zero &bull; 100% Done-For-You</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-bold text-slate-900">Answer Speed</td>
                  <td className="py-3.5 px-4 text-slate-500">3 to 6 rings (hold music)</td>
                  <td className="py-3.5 px-4 text-slate-500">1 to 2 rings</td>
                  <td className="py-3.5 px-4 font-bold text-emerald-700 bg-blue-50/50">Ring 1 (&lt; 1.4s)</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-bold text-slate-900">Alert Delivery</td>
                  <td className="py-3.5 px-4 text-slate-500">30 &ndash; 60 minute delay</td>
                  <td className="py-3.5 px-4 text-slate-500">Instant webhook</td>
                  <td className="py-3.5 px-4 font-bold text-blue-700 bg-blue-50/50">Under 60s via Email + Audio</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-bold text-slate-900">Overage Fees</td>
                  <td className="py-3.5 px-4 text-rose-600 font-medium font-mono">$2.50 to $3.50 / minute</td>
                  <td className="py-3.5 px-4 text-slate-500 font-mono">API meter usage</td>
                  <td className="py-3.5 px-4 font-bold text-emerald-700 bg-blue-50/50">Predictable flat plan</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-bold text-slate-900">Keep Existing Number</td>
                  <td className="py-3.5 px-4 text-emerald-700 font-medium">Yes</td>
                  <td className="py-3.5 px-4 text-slate-500">Depends on carrier</td>
                  <td className="py-3.5 px-4 font-bold text-emerald-700 bg-blue-50/50 rounded-b-lg">Yes (*71 conditional)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 14-Day Pilot Risk-Reversal Guarantee Banner */}
        <div className="mt-14 max-w-3xl mx-auto p-6 bg-blue-50 rounded-2xl border border-blue-200 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-sm">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-900">
              The 14-Day Zero-Risk Pilot Guarantee
            </h4>
            <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
              Try NightShift AI for 14 nights. If it doesn't capture at least one customer call you would have missed, you pay <strong>$0</strong>. No contract lock-in. Cancel with one message.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
