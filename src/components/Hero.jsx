import { curve, heroBackground, robot } from "../assets";
import Button from "./Button";
import Section from "./Section";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { heroIcons } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import Notification from "./Notification";
import CompanyLogos from "./CompanyLogos";
import {
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Package,
  Database,
  Server,
  Smartphone,
  Boxes,
} from "lucide-react";

const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <Section
      className="pt-[6rem] md:pt-[12rem] -mt-[5.25rem]"
      id="Home"
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[1.5rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1 mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            Transform Your Ideas&nbsp;into&nbsp;Reality with{" "}
            <span className="inline-block relative">
              Santosh Kumar{" "}
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-4 text-n-2 lg:mb-8 text-xs sm:text-sm md:text-base">
            Passionate about creating intuitive and engaging user experiences.
            Specialize in transforming ideas into beautifully crafted products.
          </p>
          <Button white>Let's Talk</Button>
        </div>
        <div className="relative max-w-[18rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem]">
              <div className="h-[1.2rem] bg-n-10 rounded-t-[0.9rem]" />

              {/* Centered Profile Section */}
              <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490] flex flex-col items-center justify-center text-center p-2 sm:p-4">
                <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 xl:w-52 xl:h-52 rounded-full overflow-hidden border-4 border-purple-500 shadow-lg mx-auto">
                  <img
                    src="/Santosh.jpeg"
                    alt="Profile"
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                {/* Name & Specialties */}
                <h1 className="text-xl sm:text-2xl md:text-3xl xl:text-5xl font-bold mt-3 sm:mt-4 md:mt-6">
                  Hello, I'm
                  <br />
                  <span className="text-xl sm:text-2xl md:text-3xl xl:text-5xl font-bold mt-3 sm:mt-4 md:mt-6 text-purple-600">
                    Santosh Kumar
                  </span>{" "}
                </h1>
                <p className="text-sm sm:text-base md:text-lg xl:text-xl text-gray-300 mt-1 sm:mt-2">
                  Web, App & Backend Developer
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap justify-center gap-1 sm:gap-2 md:gap-4 mt-2 sm:mt-4 md:mt-6 text-white text-xs sm:text-sm md:text-base">
                  <span className="flex items-center gap-1 bg-purple-600 px-1.5 py-1 sm:px-2 sm:py-1.5 md:px-3 md:py-2 rounded-lg sm:rounded-xl shadow-md">
                    <Package size={12} className="w-3 h-3 sm:w-4 sm:h-4" />{" "}
                    Docker
                  </span>
                  <span className="flex items-center gap-1 bg-blue-600 px-1.5 py-1 sm:px-2 sm:py-1.5 md:px-3 md:py-2 rounded-lg sm:rounded-xl shadow-md">
                    <Database size={12} className="w-3 h-3 sm:w-4 sm:h-4" />{" "}
                    Prisma
                  </span>
                  <span className="flex items-center gap-1 bg-green-600 px-1.5 py-1 sm:px-2 sm:py-1.5 md:px-3 md:py-2 rounded-lg sm:rounded-xl shadow-md">
                    <Boxes size={12} className="w-3 h-3 sm:w-4 sm:h-4" />{" "}
                    Node.js
                  </span>
                  <span className="flex items-center gap-1 bg-gray-700 px-1.5 py-1 sm:px-2 sm:py-1.5 md:px-3 md:py-2 rounded-lg sm:rounded-xl shadow-md">
                    <Server size={12} className="w-3 h-3 sm:w-4 sm:h-4" />{" "}
                    Express.js
                  </span>
                  <span className="flex items-center gap-1 bg-pink-600 px-1.5 py-1 sm:px-2 sm:py-1.5 md:px-3 md:py-2 rounded-lg sm:rounded-xl shadow-md">
                    <Smartphone size={12} className="w-3 h-3 sm:w-4 sm:h-4" />{" "}
                    App Dev
                  </span>
                </div>

                {/* Social Media */}
                <div className="flex gap-2 sm:gap-4 mt-2 sm:mt-4 md:mt-6">
                  <a
                    href="https://github.com/yourprofile"
                    className="text-white text-lg sm:text-xl md:text-2xl hover:text-gray-400"
                  >
                    <Github />
                  </a>
                  <a
                    href="https://linkedin.com/in/yourprofile"
                    className="text-blue-500 text-lg sm:text-xl md:text-2xl hover:text-gray-400"
                  >
                    <Linkedin />
                  </a>
                  <a
                    href="https://twitter.com/yourprofile"
                    className="text-blue-400 text-lg sm:text-xl md:text-2xl hover:text-gray-400"
                  >
                    <Twitter />
                  </a>
                  <a
                    href="https://instagram.com/yourprofile"
                    className="text-pink-500 text-lg sm:text-xl md:text-2xl hover:text-gray-400"
                  >
                    <Instagram />
                  </a>
                </div>

                <ScrollParallax isAbsolutelyPositioned>
                  <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
                    {heroIcons.map((icon, index) => (
                      <li className="p-5" key={index}>
                        <img src={icon} width={24} height={25} alt={icon} />
                      </li>
                    ))}
                  </ul>
                </ScrollParallax>

                <ScrollParallax isAbsolutelyPositioned>
                  <Notification
                    className="hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex"
                    title="Code generation"
                  />
                </ScrollParallax>
              </div>
            </div>

            <Gradient />
          </div>

          <BackgroundCircles />
        </div>
        <Section id="Experience">
          <CompanyLogos className="hidden relative z-10 mt-20 lg:block" />
        </Section>
      </div>

      <BottomLine />
    </Section>
  );
};

export default Hero;
