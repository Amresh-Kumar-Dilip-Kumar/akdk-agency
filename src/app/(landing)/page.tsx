"use server";
import { Hero } from "@/components/Hero2";
import { Hero as OldHero } from "@/components/Hero";
import Mission from "@/components/Mission";
import Services from "@/components/Services";
import Technology from "@/components/Technology";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ old: string }>;
}) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const showOld = (await searchParams).old === "true";
  return (
    <main className="min-h-screen antialiased bg-grid-white/[0.02]">
      {showOld ? <OldHero /> : <Hero />}
      <Mission />
      <Services />
      <Technology />
      {!showOld ? (
        <Link href="/?old=true">
          <Button className="fixed bottom-4 right-4  opacity-30 transition-all duration-200 hover:opacity-100">
            Switch to Old
          </Button>
        </Link>
      ) : (
        <Link href="/?old=false">
          <Button className="fixed bottom-4 right-4  opacity-30 transition-all duration-200 hover:opacity-100">
            Switch to New
          </Button>
        </Link>
      )}
    </main>
  );
}
