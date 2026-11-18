"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { RoiCalculator } from "@/components/RoiCalculator";
import { EmailReportMockup } from "@/components/EmailReportMockup";
import { CarrierForwarding } from "@/components/CarrierForwarding";
import { Pricing } from "@/components/Pricing";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { PilotModal } from "@/components/PilotModal";

export default function Home() {
  const [isPilotModalOpen, setIsPilotModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("Standard");

  const handleOpenPilot = (plan: string = "Standard") => {
    setSelectedPlan(plan);
    setIsPilotModalOpen(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Navbar onOpenPilot={() => handleOpenPilot("Standard")} />
      
      <main className="flex-grow">
        <Hero onOpenPilot={() => handleOpenPilot("Standard")} />
        <HowItWorks onOpenPilot={() => handleOpenPilot("Standard")} />
        <RoiCalculator onOpenPilot={() => handleOpenPilot("Standard")} />
        <EmailReportMockup onOpenPilot={() => handleOpenPilot("Standard")} />
        <CarrierForwarding />
        <Pricing onOpenPilot={(plan) => handleOpenPilot(plan || "Standard")} />
        <Faq onOpenPilot={() => handleOpenPilot("Standard")} />
      </main>

      <Footer />

      <PilotModal
        isOpen={isPilotModalOpen}
        onClose={() => setIsPilotModalOpen(false)}
        initialPlan={selectedPlan}
      />
    </div>
  );
}
