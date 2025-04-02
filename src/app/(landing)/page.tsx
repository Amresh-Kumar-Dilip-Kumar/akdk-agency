"use server";
import { Hero } from "@/components/landing/Hero2";
import Mission from "@/components/landing/Mission";
import Services from "@/components/landing/Services";
import Technology from "@/components/landing/Technology";
import { WhyUs } from "@/components/landing/stats";

export default async function Home() {
  return (
    <main className="min-h-screen antialiased bg-grid-white/[0.02]">
      <Hero />
      <WhyUs />
      {/* <Mission /> */}
      <Services />
      <Technology />
    </main>
  );
}
