"use client";

import React from "react";
import { Clock, MapPin, Phone, Play, CheckCircle2, ArrowRight, FileAudio } from "lucide-react";

interface EmailReportMockupProps {
  onOpenPilot: () => void;
}

export const EmailReportMockup: React.FC<EmailReportMockupProps> = ({ onOpenPilot }) => {
  return (
    <section id="report-preview" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 font-mono block mb-2">
            Owner Notifications
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            The Report You Get on Your Phone
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Within 60 seconds of a customer hanging up, you receive an actionable summary with customer details and the audio recording link.
          </p>
        </div>

        {/* Mock Email Preview */}
        <div className="max-w-2xl mx-auto bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden card-hover">
          {/* Header Bar */}
          <div className="bg-slate-100 px-5 py-3 border-b border-slate-200 flex items-center justify-between text-xs text-slate-500 font-mono">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-slate-300"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-slate-300"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-slate-300"></span>
              <span className="ml-2 font-bold text-slate-700">Inbox Notification</span>
            </div>
            <span>Saturday 9:46 PM</span>
          </div>

          {/* Email Content */}
          <div className="p-6 sm:p-8 space-y-5">
            <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-4">
              <div>
                <span className="text-xs text-slate-500">From:</span>{" "}
                <span className="text-xs font-bold text-slate-800">NightShift Alerts &lt;dispatch@nightshiftai.com&gt;</span>
                <h3 className="text-base font-bold text-slate-900 mt-1">
                  Urgent Customer Call: David Miller
                </h3>
              </div>
              <span className="px-2.5 py-1 bg-red-50 text-red-700 border border-red-200 text-xs font-bold rounded-md shrink-0">
                HIGH URGENCY
              </span>
            </div>

            {/* Extracted Details Table */}
            <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 space-y-2.5 text-xs sm:text-sm">
              <div className="flex justify-between">
                <span className="text-slate-500 font-medium">Customer:</span>
                <span className="font-bold text-slate-900">David Miller</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500 font-medium">Phone:</span>
                <a href="tel:5550192831" className="font-bold text-blue-600 hover:underline">
                  (555) 019-2831 (Tap to call back)
                </a>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500 font-medium">Address:</span>
                <span className="font-bold text-slate-900">742 Evergreen Terrace (Confirmed)</span>
              </div>
              <div className="pt-2 border-t border-slate-200">
                <span className="text-slate-500 font-medium block mb-1">Reason for Call:</span>
                <p className="text-slate-800 leading-relaxed font-medium">
                  Pipe burst under kitchen sink. Water leaking onto floor. Advised customer to shut off main valve; requested technician callback immediately.
                </p>
              </div>
            </div>

            {/* Audio Recording Strip */}
            <div className="p-3.5 bg-slate-900 rounded-xl text-white flex flex-col gap-2.5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center text-white shadow">
                    <FileAudio className="w-4 h-4" />
                  </div>
                  <div className="text-xs">
                    <span className="font-bold block">
                      Call Audio Recording (0:36 MP3)
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono">
                      Full recording archived in your dashboard
                    </span>
                  </div>
                </div>
                <span className="text-[11px] text-blue-400 font-medium">Auto-saved to Sheet</span>
              </div>

              {/* Progress Visual Bar */}
              <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                <div className="bg-blue-500 h-full w-full rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <button
            onClick={onOpenPilot}
            className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-slate-900 hover:bg-blue-600 rounded-xl shadow transition active:scale-95 cursor-pointer"
          >
            <span>Get Reports Sent to Your Phone</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
