"use server";
import { Hero } from "@/components/new-landing-blocks/HeroProfessional";
import { WhyUs } from "@/components/new-landing-blocks/WhyUsProfessional";
import { ServicesProfessional } from "@/components/new-landing-blocks/ServicesProfessional";
import { TechnologyProfessional } from "@/components/new-landing-blocks/TechnologyProfessional";
import { TestimonialsProfessional } from "@/components/new-landing-blocks/TestimonialsProfessional";
import { CallToActionProfessional } from "@/components/new-landing-blocks/CallToActionProfessional";

export default async function Home() {
  return (
    <main className="min-h-screen antialiased bg-white">
      <Hero />
      <WhyUs />
      <ServicesProfessional />
      <TechnologyProfessional />
      <TestimonialsProfessional />
      <CallToActionProfessional />
    </main>
  );
}
