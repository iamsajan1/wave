import { benefits } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";

const Projects = () => {
  return (
    <Section id="Projects">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="My Tech Projects Showcase"
          text="A collection of my most innovative and impactful tech projects, showcasing my expertise in web development, App Development, and more."
        />

        <div className="flex flex-wrap gap-10 mb-10">
          {benefits.map((item) => (
            <div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem] group"
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
              }}
              key={item.id}
            >
              {/* Text and Icons */}
              <div
                className={`relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] ${
                  item.imageUrl.endsWith(".mp4")
                    ? "opacity-0 group-hover:opacity-100"
                    : "opacity-100 "
                } transition-opacity`}
              >
                <h5 className="h5 mb-5">{item.title}</h5>
                <p
                  className={`body-2 mb-6 text-n-3 ${
                    item.imageUrl.endsWith(".mp4")
                      ? " group-hover:opacity-100"
                      : "group-hover:opacity-0 "
                  }`}
                >
                  {item.text}
                </p>
                <div className="flex items-center mt-auto">
                  <img
                    src="/gitt.png"
                    width={48}
                    height={48}
                    alt={item.title}
                  />
                  <a
                    href={item.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider hover:underline cursor-pointer"
                  >
                    View Project
                  </a>

                  <Arrow />
                </div>
              </div>

              {/* Gradient Light (if applicable) */}
              {item.light && <GradientLight />}

              {/* Video or Image Section */}
              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              >
                {/* If video is available, show it by default and hide on hover */}
                {item.imageUrl.endsWith(".mp4") ? (
                  <div className="absolute inset-0 transition-opacity group-hover:opacity-0">
                    <video
                      autoPlay
                      loop
                      muted
                      className="w-full h-full object-cover"
                    >
                      <source src={item.imageUrl} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                ) : (
                  // If no video, show default image on hover
                  <div className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100">
                    <img
                      src={item.imageUrl}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </div>

              {/* ClipPath */}
              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Projects;
