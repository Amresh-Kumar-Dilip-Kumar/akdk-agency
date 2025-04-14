"use server";
import { Hero } from "@/components/landing/Hero2";
// import Mission from "@/components/landing/Mission";
// import Services from "@/components/landing/Services";
import Services2 from "@/components/landing/Services2";
import Technology from "@/components/landing/Technology";
import { WhyUs } from "@/components/landing/stats";

export default async function Home() {
  return (
    <main className="min-h-screen antialiased bg-grid-white/[0.02] w-screen overflow-hidden">
      <Hero />
      <WhyUs />
      {/* <Mission /> */}
      {/* <Services /> */}
      <Services2 />
      <Technology />
    </main>
  );
}
