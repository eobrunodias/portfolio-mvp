"use client";

import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import FeaturedProjects from "@/components/featured-projects";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className=" bg-background">
      <Header />
      <HeroSection />
      {/* <FeaturedProjects /> */}
      <Footer />
    </main>
  );
}
