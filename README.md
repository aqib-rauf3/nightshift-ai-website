# HomageVoice — After-Hours HVAC AI Receptionist Website

A modern, high-converting landing page built specifically for marketing a **Done-For-You After-Hours Voice AI Receptionist** to US residential HVAC contractors.

## Features
- **Live In-Browser Audio Player & Waveform Visualizer**: Visitors can listen to simulated real-world emergency call recordings (Saturday night freeze furnace outage, Sunday AC leak) vs. a standard abandoned voicemail.
- **Interactive Vapi Voice Integration**: Built with `@vapi-ai/web` to allow prospects to test talking directly to the AI assistant using their browser microphone.
- **Missed-Call Revenue Leak Calculator**: Real-time sliders calculating lost jobs and revenue based on Invoca benchmarks, demonstrating a 10x–20x ROI on the $249/mo Standard plan.
- **The "Owner's Morning Report" Preview**: Realistic interactive mockup of the exact email notification the contractor receives on their phone within 60 seconds of a call.
- **Carrier Forwarding Cheat Sheet**: 1-dial instructions for AT&T, Verizon, T-Mobile, and Spectrum (`*71` conditional forwarding).
- **Pricing & 14-Day Risk-Free Guarantee**: Transparent tiers (Starter $149/mo, Standard $249/mo, Pro $399/mo) with a bold zero-risk pilot guarantee.
- **Lead Capture Modal with Confetti**: Captures contractor name, company name, phone, email, and van count.

## Quick Start (Local Development)

```bash
# Navigate to the website directory
cd website

# Run development server
pnpm dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Production Build

```bash
pnpm build
pnpm start
```

## Deployment to Vercel (Free)

1. Push this repository to GitHub or run `npx vercel` directly in this directory.
2. Select default Next.js build settings.
3. Your site will be live on a fast, global CDN with automatic HTTPS.
