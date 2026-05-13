"use client";

import PageLayout from "@/components/PageLayout/PageLayout";
import HeroSection from "@/components/HeroSection/HeroSection";
import CatalogGrid from "@/components/CatalogGrid/CatalogGrid";
import AboutSection from "@/components/AboutSection/AboutSection";
import NewArrivalsSection from "@/components/NewArrivalsSection/NewArrivalsSection";
import ReviewsSection from "@/components/ReviewsSection/ReviewsSection";
import FaqSection from "@/components/FaqSection/FaqSection";

export default function MainPageContent() {
  return (
    <PageLayout>
      <HeroSection />
      <div id="catalog">
        <CatalogGrid />
      </div>
      <div id="about">
        <AboutSection />
      </div>
      <NewArrivalsSection />
      <ReviewsSection />
      <FaqSection />
    </PageLayout>
  );
}
