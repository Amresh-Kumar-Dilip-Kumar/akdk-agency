import { Hero } from "@/components/Hero";
import Mission from "@/components/Mission";
import Services from "@/components/Services";
import Technology from "@/components/Technology";

export default function Home() {
  return (
    <main className="min-h-screen antialiased bg-grid-white/[0.02]">
      <Hero />
      <Mission />
      <Services />
      <Technology />
    </main>

  );
}
