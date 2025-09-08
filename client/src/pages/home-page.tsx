import HeroSection from "@/components/sections/hero-section";

import ContactSection from "@/components/sections/contact-section";
import CareerSection from "@/components/sections/career-section";
import CTASection from "@/components/sections/cta-section";
import FlowchartSection from "@/components/sections/flowchart-section";
import VideoSection from "@/components/sections/video-section";
import StatsSection from "@/components/sections/stats-section";

import EmbeddedFeatureSection from "@/components/sections/embedded-feature-section";
import AttackSimulationSection from "@/components/sections/attack-simulation-section";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <FlowchartSection />
      <VideoSection />
      <StatsSection />
      <EmbeddedFeatureSection />
      <AttackSimulationSection />
      <ContactSection />
      <CareerSection />
      <CTASection />
    </>
  );
};

export default HomePage;
