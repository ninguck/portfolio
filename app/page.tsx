"use client"

import { useState, useRef, useEffect } from "react"
import Navbar from "@/components/Navbar"
import Hero from "@/components/sections/Hero"
import About from "@/components/sections/About"
import Projects from "@/components/sections/Projects"
import Contact from "@/components/sections/Contact"
import Footer from "@/components/sections/Footer"
import InteractiveBackground from "@/components/InteractiveBackground"

export default function HomePage() {
  const [isDark, setIsDark] = useState(true);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark")
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({behavior: "smooth"});
  }

  return (
    <main className="relative">
      {/* Global Components */}
      <Navbar isDark={isDark} toggleTheme={toggleTheme} scrollToSection={scrollToSection} />
      <InteractiveBackground isDark={isDark} />
      <div className="relative z-10">
        {/* Sections */}
        <Hero scrollToSection={scrollToSection} />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}