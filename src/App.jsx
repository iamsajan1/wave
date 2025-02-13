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
const App = () => {
  useEffect(() => {
    // Canvas for effects
    const canvas = document.createElement("canvas");
    canvas.id = "mouse-effect";
    canvas.style.position = "fixed";
    canvas.style.top = 0;
    canvas.style.left = 0;
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.zIndex = 1000;
    canvas.style.pointerEvents = "none";
    document.body.appendChild(canvas);

    // Custom cursor
    const cursor = document.createElement("div");
    cursor.id = "custom-cursor";
    cursor.style.position = "fixed";
    cursor.style.width = "15px";
    cursor.style.height = "15px";
    cursor.style.borderRadius = "50%";
    cursor.style.backgroundColor = "#FFBD33"; // Orange base
    cursor.style.boxShadow = "0 0 8px #FFBD33";
    cursor.style.transition = "transform 0.2s ease-out";
    cursor.style.zIndex = 1001;
    cursor.style.pointerEvents = "none";
    document.body.appendChild(cursor);

    const ctx = canvas.getContext("2d");
    const particles = [];
    const colors = ["#FFBD33", "#33FF57", "#57C7FF", "#9D33FF"]; // Adjusted theme colors

    function createParticle(x, y, color, shape = "circle", type = "default") {
      particles.push({
        x,
        y,
        radius: Math.random() * 5 + 3,
        color,
        dx: (Math.random() - 0.5) * 4,
        dy: (Math.random() - 0.5) * 4,
        life: type === "scroll" ? 80 : 100,
        shape,
        type,
      });
    }

    function updateParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p, i) => {
        p.x += p.dx;
        p.y += p.dy;
        p.life -= 2;

        if (p.life <= 0) {
          particles.splice(i, 1);
        } else {
          ctx.beginPath();

          // Shape types
          if (p.shape === "circle") {
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          } else if (p.shape === "triangle") {
            ctx.moveTo(p.x, p.y - p.radius);
            ctx.lineTo(p.x - p.radius, p.y + p.radius);
            ctx.lineTo(p.x + p.radius, p.y + p.radius);
            ctx.closePath();
          } else if (p.shape === "square") {
            ctx.rect(
              p.x - p.radius,
              p.y - p.radius,
              p.radius * 2,
              p.radius * 2
            );
          }

          ctx.fillStyle = p.color;
          ctx.fill();
        }
      });

      requestAnimationFrame(updateParticles);
    }

    function handleMouseMove(event) {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      createParticle(event.clientX, event.clientY, randomColor);
      cursor.style.transform = `translate(${event.clientX - 7}px, ${
        event.clientY - 7
      }px) scale(1.5) rotate(${Math.random() * 10}deg)`;
    }

    function handleMouseLeave() {
      cursor.style.transform = "scale(0)";
    }

    function handleClick(event) {
      const color = colors[Math.floor(Math.random() * colors.length)];
      for (let i = 0; i < 15; i++) {
        createParticle(event.clientX, event.clientY, color, "circle", "click");
      }
    }

    function handleRightClick(event) {
      event.preventDefault();
      const color = colors[Math.floor(Math.random() * colors.length)];
      for (let i = 0; i < 15; i++) {
        createParticle(
          event.clientX,
          event.clientY,
          color,
          "triangle",
          "rightClick"
        );
      }
    }

    function handleScroll(event) {
      const color = colors[Math.floor(Math.random() * colors.length)];
      createParticle(
        Math.random() * window.innerWidth,
        event.deltaY < 0 ? 0 : window.innerHeight,
        color,
        "square",
        "scroll"
      );
    }

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("click", handleClick);
    window.addEventListener("contextmenu", handleRightClick);
    window.addEventListener("wheel", handleScroll);

    updateParticles();

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("click", handleClick);
      window.removeEventListener("contextmenu", handleRightClick);
      window.removeEventListener("wheel", handleScroll);
      document.body.removeChild(canvas);
      document.body.removeChild(cursor);
    };
  }, []);

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
    </>
  );
};

export default App;
