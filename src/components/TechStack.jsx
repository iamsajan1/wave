import { techSkills, techText } from "../constants";
import { brainwaveSymbol, check } from "../assets";
import Button from "./Button";
import Section from "./Section";

const TechStack = () => {
  return (
    <Section id="TechStack">
      <div className="container lg:flex">
        <div className="max-w-[25rem]">
          <h2 className="h2 mb-4 md:mb-8">My Tech Stack & Skills</h2>

          <ul className="max-w-[22rem] mb-10 md:mb-14">
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

          <Button>Explore More</Button>
        </div>

        <div className="lg:ml-auto xl:w-[38rem] mt-4">
          <p className="body-2 mb-8 text-n-4 md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto">
            {techText}
          </p>

          {/* Rotating Outer Ring */}
          <div className="relative left-1/2 flex w-[24rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale-100 md:scale-110 md:mr-20">
            <div className="absolute inset-0 animate-spin-slow">
              {techSkills.map((skill, index) => (
                <div
                  key={skill.id}
                  className="absolute top-0 left-1/2 h-1/2 -ml-[1.8rem]"
                  style={{
                    transform: `rotate(${
                      index * (360 / techSkills.length)
                    }deg)`,
                    transformOrigin: "bottom center",
                  }}
                >
                  <div
                    className="relative -top-[1.8rem] flex w-[3.6rem] h-[3.6rem] bg-n-7 border border-n-1/15 rounded-xl"
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
            <div className="flex w-60 aspect-square m-auto border border-n-6 rounded-full">
              <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
                <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">
                  <img
                    src="/logo.png"
                    width={100}
                    height={100}
                    alt="Tech Stack"
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
