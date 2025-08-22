"use server";
import { Hero } from "@/components/new-landing-blocks/HeroProfessional";
import { Hero as Hero2 } from "@/components/landing/Hero2";
import Mission from "@/components/landing/Mission";
import WhyUsMission from "@/components/new-landing-blocks/Round_WhyUs";
import ServicesMission from "@/components/new-landing-blocks/Round_Services";
import TechnologyMission from "@/components/new-landing-blocks/Round_Technology";
import TestimonialsMission from "@/components/new-landing-blocks/Round_Testimonials";
import CallToActionMission from "@/components/new-landing-blocks/Round_CallToAction";

export default async function Home() {
  return (
    <main className="min-h-screen antialiased bg-white">
      {/* <Hero /> */}
      <Hero2 />
      {/* <Mission /> */}
      <WhyUsMission />
      <ServicesMission />
      <TechnologyMission />
      <TestimonialsMission />
      <CallToActionMission />
    </main>
  );
}
