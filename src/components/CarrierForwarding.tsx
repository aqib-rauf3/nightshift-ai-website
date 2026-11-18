"use client";

import React, { useState } from "react";
import { Smartphone, Check, Copy } from "lucide-react";

export const CarrierForwarding: React.FC = () => {
  const [carrier, setCarrier] = useState<"verizon" | "att" | "tmobile" | "spectrum">("verizon");
  const [copied, setCopied] = useState(false);

  const data = {
    verizon: {
      title: "Verizon Wireless & Business",
      on: "*71 + [Your Dedicated NightShift Number]",
      off: "*73",
      note: "No-Answer Forwarding: Rings your phone 3 times first. If you don't answer, forwards to AI.",
    },
    att: {
      title: "AT&T Wireless & Landline",
      on: "*71 + [Your Dedicated NightShift Number]",
      off: "*720 or #21#",
      note: "Conditional Call Forwarding: Daytime calls ring you as normal; unanswered night calls route to AI.",
    },
    tmobile: {
      title: "T-Mobile & Metro",
      on: "**61* + [Your Dedicated NightShift Number] + #",
      off: "##61#",
      note: "Delayed Forwarding: Transfers after 15–20 seconds if you don't answer.",
    },
    spectrum: {
      title: "Spectrum Business / Comcast Voice",
      on: "*72 or Portal Routing Toggle",
      off: "*73",
      note: "Seamless Office Routing: Toggle on handset or inside your online voice dashboard.",
    },
  };

  const curr = data[carrier];

  const handleCopy = (code: string) => {
    navigator.clipboard?.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 font-mono block mb-2">
            Zero-Hassle Forwarding
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            How Forwarding Works on Your Phone
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Keep your existing business number. When you leave work, dial the simple 1-click code below.
          </p>
        </div>

        {/* Carrier Tabs - Accessible 44px min height */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {(["verizon", "att", "tmobile", "spectrum"] as const).map((key) => (
            <button
              key={key}
              onClick={() => setCarrier(key)}
              className={`min-h-[44px] px-6 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition cursor-pointer active:scale-[0.98] ${
                carrier === key
                  ? "bg-slate-900 text-white shadow"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {data[key].title.split(" ")[0]}
            </button>
          ))}
        </div>

        {/* Instructions Card */}
        <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8 max-w-2xl mx-auto card-hover">
          <h3 className="text-lg font-bold text-slate-900 mb-1">{curr.title}</h3>
          <p className="text-xs text-slate-500 mb-6">{curr.note}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
            <div className="p-4 bg-white rounded-xl border border-slate-200 flex flex-col justify-between">
              <div>
                <span className="text-slate-400 block mb-1">To Turn On (5:00 PM):</span>
                <strong className="text-slate-900 text-sm block mb-2">{curr.on}</strong>
              </div>
              <button
                onClick={() => handleCopy(curr.on)}
                className="inline-flex items-center gap-1.5 text-[11px] text-blue-600 hover:text-blue-700 font-sans font-bold cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? "Copied" : "Copy code"}</span>
              </button>
            </div>

            <div className="p-4 bg-white rounded-xl border border-slate-200 flex flex-col justify-between">
              <div>
                <span className="text-slate-400 block mb-1">To Turn Off (Morning):</span>
                <strong className="text-slate-900 text-sm block mb-2">{curr.off}</strong>
              </div>
              <button
                onClick={() => handleCopy(curr.off)}
                className="inline-flex items-center gap-1.5 text-[11px] text-blue-600 hover:text-blue-700 font-sans font-bold cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? "Copied" : "Copy code"}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
