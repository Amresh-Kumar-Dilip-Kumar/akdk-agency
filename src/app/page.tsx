"use server";
import { Hero } from "@/components/Hero";
import Mission from "@/components/Mission";
import Services from "@/components/Services";
import Technology from "@/components/Technology";
// import { Navigation } from "@/components/Navigation";
console.log("hello world");

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return (
    <main className="min-h-screen antialiased bg-grid-white/[0.02]">
      <Hero />
      <Mission />
      {/* <Navigation /> */}
      <Services />
      <Technology />
    </main>
  );
}
