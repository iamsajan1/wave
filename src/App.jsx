"use client";
import { useEffect } from "react";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Button from "./components/Button";
import Collabration from "./components/TechStack";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/ContactMe";
import Roadmap from "./components/Roadmap";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import ContactMe from "./components/ContactMe";
import ScrollToTop from "./components/ScrollToTop";
const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Projects />
        <TechStack />
        <Roadmap />
        <ContactMe />
        <Footer />
      </div>
      <ButtonGradient />
      <ScrollToTop />
    </>
  );
};

export default App;
