"use client";

import React, { useState } from "react";
import { ArrowRight, DollarSign, TrendingDown, CheckCircle2 } from "lucide-react";

interface RoiCalculatorProps {
  onOpenPilot: () => void;
}

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({ onOpenPilot }) => {
  const [callsPerWeek, setCallsPerWeek] = useState(4);
  const [avgTicket, setAvgTicket] = useState(650);

  // Accurate, spot-on math
  const monthlyCalls = callsPerWeek * 4;
  const closeRate = 0.4; // 40% industry average
  const lostJobsPerMonth = Math.max(1, Math.round(monthlyCalls * closeRate));
  const monthlyLostRevenue = lostJobsPerMonth * avgTicket;
  const planCost = 349; // Standard plan
  const netSavings = monthlyLostRevenue - planCost;

  return (
    <section id="calculator" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 font-mono block mb-2">
            Revenue Loss Calculator
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            How Much Are Missed Calls Costing You?
          </h2>
          <p className="mt-3 text-base text-slate-600 font-normal">
            Slide the bars below to see how quickly after-hours calls add up to lost revenue.
          </p>
        </div>

        {/* Calculator Card */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center card-hover">
          {/* Sliders (Left 7 Cols) */}
          <div className="lg:col-span-7 space-y-7">
            {/* Slider 1 */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label htmlFor="calls-slider" className="text-sm font-bold text-slate-800">
                  Unanswered calls per week:
                </label>
                <span className="text-base font-extrabold text-blue-600 bg-blue-50 px-3 py-1 rounded-lg border border-blue-200 font-mono tabular-nums">
                  {callsPerWeek} calls / week
                </span>
              </div>
              <input
                id="calls-slider"
                type="range"
                min={1}
                max={20}
                value={callsPerWeek}
                aria-label="Unanswered calls per week"
                aria-valuemin={1}
                aria-valuemax={20}
                aria-valuenow={callsPerWeek}
                onChange={(e) => setCallsPerWeek(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
              <div className="flex justify-between text-xs text-slate-400 mt-1 font-mono">
                <span>1 call</span>
                <span>~{monthlyCalls} calls/month</span>
                <span>20 calls</span>
              </div>
            </div>

            {/* Slider 2 */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label htmlFor="ticket-slider" className="text-sm font-bold text-slate-800">
                  Average job or customer value:
                </label>
                <span className="text-base font-extrabold text-blue-600 bg-blue-50 px-3 py-1 rounded-lg border border-blue-200 font-mono tabular-nums">
                  ${avgTicket.toLocaleString()}
                </span>
              </div>
              <input
                id="ticket-slider"
                type="range"
                min={150}
                max={2500}
                step={50}
                value={avgTicket}
                aria-label="Average job or customer value"
                aria-valuemin={150}
                aria-valuemax={2500}
                aria-valuenow={avgTicket}
                onChange={(e) => setAvgTicket(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
              <div className="flex justify-between text-xs text-slate-400 mt-1 font-mono">
                <span>$150 (Quick service)</span>
                <span>$650 (Average)</span>
                <span>$2,500+ (High ticket)</span>
              </div>
            </div>

            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-600 leading-relaxed">
              <strong className="text-slate-900 font-bold">The Reality:</strong> Over 80% of callers who reach voicemail hang up and immediately dial your competitor. Capturing just <strong>{lostJobsPerMonth} customer{lostJobsPerMonth > 1 ? "s" : ""}</strong> per month covers your entire service.
            </div>
          </div>

          {/* Result Card (Right 5 Cols) */}
          <div className="lg:col-span-5 bg-slate-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-md">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-rose-400 block mb-2 font-mono">
                Estimated Monthly Loss:
              </span>
              <div className="text-4xl font-extrabold font-mono text-white mb-2 tabular-nums">
                ${monthlyLostRevenue.toLocaleString()}
                <span className="text-xs font-sans text-slate-400 block sm:inline sm:ml-2 font-normal">
                  / month
                </span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed mb-6">
                Based on ~{lostJobsPerMonth} lost job{lostJobsPerMonth > 1 ? "s" : ""} going to competitors.
              </p>

              <div className="pt-4 border-t border-slate-800 space-y-2 text-xs text-slate-300">
                <div className="flex justify-between">
                  <span>NightShift Standard Plan:</span>
                  <span className="font-bold text-white font-mono">${planCost}/month</span>
                </div>
                <div className="flex justify-between text-emerald-400 font-bold pt-1 border-t border-slate-800">
                  <span>Your Net Gain / ROI:</span>
                  <span className="font-mono tabular-nums">+${netSavings.toLocaleString()} / mo</span>
                </div>
              </div>
            </div>

            <button
              onClick={onOpenPilot}
              className="w-full mt-6 min-h-[48px] py-3.5 px-4 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow transition active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Stop Missing Calls Today</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
