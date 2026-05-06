"use client";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import CatalogGrid from "../../components/CatalogGrid/CatalogGrid";
import AboutSection from "../../components/AboutSection/AboutSection";
import HeroSection from "../../components/HeroSection/HeroSection";
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
      <Footer />
    </>
  );
}