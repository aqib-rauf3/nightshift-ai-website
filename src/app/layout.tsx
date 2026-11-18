import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NightShift AI | 24/7 After-Hours AI Receptionist for Local Businesses",
  description: "Never miss another after-hours customer call. NightShift AI answers on ring one, qualifies caller urgency, captures details, and delivers the recording to your phone in 60 seconds.",
  keywords: [
    "AI receptionist",
    "after hours answering service",
    "virtual receptionist for small business",
    "voice AI phone answering",
    "automated phone receptionist",
    "24/7 call answering service",
  ],
  openGraph: {
    title: "NightShift AI — 24/7 After-Hours AI Receptionist",
    description: "Done-for-you voice AI receptionist for small businesses. Keep your number. 2-minute setup.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased min-h-screen flex flex-col font-sans bg-slate-50 text-slate-900">
        {children}
      </body>
    </html>
  );
}
