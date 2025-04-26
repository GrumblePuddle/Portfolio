import React from "react";

const About = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mt-10">About Me</h1>
      <p className="text-lg text-center mt-4 max-w-2xl mx-auto">
        I am a passionate web developer with a love for creating dynamic and
        responsive web applications. My journey in web development began with a
        curiosity for how websites work, and it has since evolved into a
        full-fledged career. I enjoy learning new technologies and applying them
        to solve real-world problems.
      </p>
      <div className="flex justify-center mt-8">
        <img
          src="https://via.placeholder.com/150"
          alt="My Portrait"
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default About;
