import Hero from "@/components/Hero";
import LearningCommunitySection from "@/components/LearningCommunitySection";
import TestimonialSection from "@/components/TestimonialSection";
import EventsSection from "@/components/EventsSection";
import PartnersSection from "@/components/PartnersSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      
      <TestimonialSection />
      <PartnersSection />
      <LearningCommunitySection />
      <EventsSection />
    </div>
  );
}
