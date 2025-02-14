import { techSkills, techText } from "../constants";
import { brainwaveSymbol, check } from "../assets";
import Button from "./Button";
import Section from "./Section";

const TechStack = () => {
  return (
    <Section id="TechStack">
      <div className="container lg:flex">
        {/* Left Column: Text Content */}
        <div className="max-w-[25rem] mx-auto lg:mx-0">
          <h2 className="h2 mb-4 md:mb-8 text-center lg:text-left">
            My Tech Stack & Skills
          </h2>

          <ul className="max-w-[22rem] mb-6 md:mb-10 mx-auto lg:mx-0">
            {techSkills.map((item) => (
              <li className="mb-3 py-3" key={item.id}>
                <div className="flex items-center">
                  <img src={check} width={24} height={24} alt="check" />
                  <h6 className="body-2 ml-5">{item.title}</h6>
                </div>
                {item.text && (
                  <p className="body-2 mt-3 text-n-4">{item.text}</p>
                )}
              </li>
            ))}
          </ul>

          <div className="text-center lg:text-left">
            <Button>Let's Talk</Button>
          </div>
        </div>

        {/* Right Column: Rotating Ring */}
        <div className="lg:ml-auto xl:w-[38rem] mt-8 lg:mt-0">
          <p className="body-2 mb-8 text-n-4 md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto text-center lg:text-left">
            {techText}
          </p>

          {/* Rotating Outer Ring */}
          <div className="relative left-1/2 flex w-[16rem] sm:w-[20rem] md:w-[24rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale-75 sm:scale-90 md:scale-100 lg:scale-110 lg:mr-20">
            <div className="absolute inset-0 animate-spin-slow">
              {techSkills.map((skill, index) => (
                <div
                  key={skill.id}
                  className="absolute top-0 left-1/2 h-1/2 -ml-[1.2rem] sm:-ml-[1.5rem] md:-ml-[1.8rem]"
                  style={{
                    transform: `rotate(${
                      index * (360 / techSkills.length)
                    }deg)`,
                    transformOrigin: "bottom center",
                  }}
                >
                  <div
                    className="relative -top-[1.2rem] sm:-top-[1.5rem] md:-top-[1.8rem] flex w-[2.4rem] sm:w-[3rem] md:w-[3.6rem] h-[2.4rem] sm:h-[3rem] md:h-[3.6rem] bg-n-7 border border-n-1/15 rounded-xl"
                    style={{
                      transform: `rotate(-${
                        index * (360 / techSkills.length)
                      }deg)`,
                    }}
                  >
                    <img
                      className="m-auto"
                      width={skill.width}
                      height={skill.height}
                      alt={skill.title}
                      src={skill.icon}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Static Inner Circle */}
            <div className="flex w-40 sm:w-48 md:w-60 aspect-square m-auto border border-n-6 rounded-full">
              <div className="w-[4rem] sm:w-[5rem] md:w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
                <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">
                  <img
                    src="/logo.png"
                    width={80}
                    height={80}
                    alt="Tech Stack"
                    className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default TechStack;
