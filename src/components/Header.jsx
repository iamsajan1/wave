import { useLocation } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

import { navigation } from "../constants";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { useState } from "react";
import { HambugerMenu } from "./design/Header";
import { Download } from "lucide-react";

const Header = () => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;
    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <div
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 w-[90%] max-w-5xl z-50 rounded-full border border-n-6 bg-n-8/90 backdrop-blur-lg shadow-lg transition-all duration-300`}
    >
      <div className="flex items-center justify-between px-6 py-3">
        {/* Brand Logo */}
        <a className="flex items-center" href="#hero">
          <img
            src="logo.png"
            alt="Avatar"
            className="w-10 h-10 rounded-full object-cover mr-3"
            style={{ objectPosition: "50% 50%" }}
          />
          <h4 className="text-n-1 font-code font-bold">Santosh Kumar</h4>
        </a>

        {/* Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-6">
          {navigation.map((item) => (
            <a
              key={item.id}
              href={item.url}
              onClick={handleClick}
              className={`relative font-code uppercase text-sm text-n-1/80 transition-colors hover:text-color-1 ${
                item.url === pathname.hash ? "text-n-1 font-bold" : ""
              }`}
            >
              {item.title}
            </a>
          ))}
        </nav>

        {/* Resume Download Button */}
        <Button
          className="hidden lg:flex flex-row items-center gap-2"
          href="/resume.pdf"
          download="Santosh_Resume.pdf"
        >
          Resume
          <Download className="h-4 w-4" />
        </Button>

        {/* Mobile Menu Button */}
        <Button className="lg:hidden" px="px-3" onClick={toggleNavigation}>
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>

      {/* Mobile Navigation */}
      {openNavigation && (
        <div className="absolute top-full left-0 w-full bg-n-8/95 rounded-b-2xl shadow-lg p-5 flex flex-col items-center space-y-4 transition-all duration-300">
          {navigation.map((item) => (
            <a
              key={item.id}
              href={item.url}
              onClick={handleClick}
              className="block text-white text-lg font-code uppercase hover:text-color-1"
            >
              {item.title}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default Header;
