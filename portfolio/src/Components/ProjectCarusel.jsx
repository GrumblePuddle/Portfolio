import React from "react";

const projects = [
  {
    id: 1,
    title: "Projekt 1",
    image: "/images/project1.jpg",
    link: "/portfolio/project-1",
  },
  {
    id: 2,
    title: "Projekt 2",
    image: "/images/project2.jpg",
    link: "/portfolio/project-2",
  },
  {
    id: 3,
    title: "Projekt 3",
    image: "/images/project3.jpg",
    link: "/portfolio/project-3",
  },
  // lägg till fler projekt...
];

const ProjectCarousel = () => {
  const items = [...projects, ...projects]; // duplicera för sömlös loop

  return (
    <div className="w-full overflow-hidden py-6">
      <div className="group relative">
        <div
          className="
            flex gap-6
            animate-carousel-scroll
          "
        >
          {items.map((project, index) => (
            <a
              key={project.id + "-" + index}
              className="shrink-0 w-64 rounded-2xl bg-white shadow-md overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              <div className="h-40 w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCarousel;
