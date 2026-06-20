import React from "react";
import Hero from "@/components/sections/Hero";
import TrustedBy from "@/components/sections/TrustedBy";
import Stats from "@/components/sections/Stats";
import HomeServices from "@/components/sections/HomeServices";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ProcessTimeline from "@/components/sections/ProcessTimeline";
import HomeTestimonials from "@/components/sections/HomeTestimonials";
import TechStack from "@/components/sections/TechStack";
import HomeFAQ from "@/components/sections/HomeFAQ";
import HomeCTA from "@/components/sections/HomeCTA";

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* Premium Hero Section */}
      <Hero />
      
      {/* Infinite slider for branding */}
      <TrustedBy />

      {/* Services Overview section */}
      <HomeServices />

      {/* Bento grid benefits */}
      <WhyChooseUs />

      {/* Dynamic progress stats counter */}
      <Stats />

      {/* Scroll-driven Vertical workflow timeline */}
      <ProcessTimeline />

      {/* Premium client quotes slider */}
      <HomeTestimonials />

      {/* Dynamic tech stack grid */}
      <TechStack />

      {/* Collapsible FAQ sections */}
      <HomeFAQ />

      {/* Interactive Conversion bottom banner */}
      <HomeCTA />
    </div>
  );
}
