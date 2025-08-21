"use client";

import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { useEffect } from "react";
import { setupDemoUser } from "@/utils/userSetup";

export default function HomePage() {
  useEffect(() => {
    setupDemoUser();
  }, []);

  return (
    <LanguageProvider>
      <Navbar />
      <Hero />
      <Footer />
    </LanguageProvider>
  );
}