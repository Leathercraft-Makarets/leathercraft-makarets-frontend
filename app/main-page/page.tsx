"use client";

import Header from "@/components/Header/Header";
import HeroSection from "@/components/HeroSection/HeroSection";
import CatalogGrid from "@/components/CatalogGrid/CatalogGrid";
import AboutSection from "@/components/AboutSection/AboutSection";
import NewArrivalsSection from "@/components/NewArrivalsSection/NewArrivalsSection";
import ReviewsSection from "@/components/ReviewsSection/ReviewsSection";
import FaqSection from "@/components/FaqSection/FaqSection";
import Footer from "@/components/Footer/Footer";
import styles from "./MainPage.module.css";

export default function MainPage() {
  return (
    <>
      <Header />
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
      <Footer />
    </>
  );
}