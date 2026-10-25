import React from "react";

const technologies = [
  {
    id: 1,
    title: "React",
    icon: "devicon-react-original colored",
  },
  {
    id: 2,
    title: "TypeScript",
    icon: "devicon-typescript-plain colored",
  },
  {
    id: 3,
    title: "JavaScript",
    icon: "devicon-javascript-plain colored",
  },
  {
    id: 4,
    title: "HTML5",
    icon: "devicon-html5-plain colored",
  },
  {
    id: 5,
    title: "CSS3",
    icon: "devicon-css3-plain colored",
  },
  {
    id: 6,
    title: "Firebase",
    icon: "devicon-firebase-plain colored",
  },
  {
    id: 7,
    title: "Node.js",
    icon: "devicon-nodejs-plain colored",
  },
];

const ProjectCarousel = () => {
  const items = [...technologies, ...technologies]; // duplicera för sömlös loop

  return (
    <div className="w-full overflow-hidden py-6">
      <div className="group relative">
        <div
          className="
            flex gap-6
            animate-carousel-scroll
          "
        >
          {items.map((tech, index) => (
            <a
              key={tech.id + "-" + index}
              className="shrink-0 w-50 rounded-2xl bg-zinc-900 shadow-md overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              <div className="h-30 w-full overflow-hidden">
                <i
                  className={`${tech.icon} text-6xl text-center w-full h-full flex items-center justify-center`}
                ></i>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCarousel;
