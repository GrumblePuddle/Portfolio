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

const Home = () => {
  return (
    <div>
      <h2 className="text-2xl text-gray-500 text-center mt-30">PORTFOLIO</h2>
      <h1 className="text-6xl font-bold text-center text-shadow-lg/20 text-white">
        Gustav Liffner{" "}
      </h1>
      <h2 className="text-2xl text-gray-500 text-center mt-10">
        Frontend Developer
      </h2>
      <h3 className="text-lg text-gray-500 text-center mt-4">
        Building modern web and mobile applications
      </h3>
      <div className="w-full overflow-hidden py-6 mt-10">
        <div className="flex flex-wrap justify-center items-center gap-8 max-w-xl mx-auto">
          {technologies.map((tech) => (
            <div key={tech.id}>
              <i className={`${tech.icon} text-6xl`}></i>
            </div>
          ))}
        </div>
      </div>
      );
    </div>
  );
};

export default Home;
