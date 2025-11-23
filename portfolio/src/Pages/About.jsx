import React from "react";
import Portratt from "../Images/portratt.jpg";

const About = () => {
  return (
    <div>
      <div className="max-w-2/3 m-auto shadow-lg">
        <h1 className="text-3xl font-bold text-center mt-10">
          Welcome to My PORT<span className="dark:text-yellow-500">FOLIO</span>
        </h1>
        <div className="flex max-w-screen-lg px-4 py-2 w-full mx-auto">
          <img
            class="w-96 h-96 mx-auto mt-8 object-cover"
            src={Portratt}
            alt="image description"
          />
          <p className="text-lg text-center mt-20 max-w-2xs mx-auto">
            I am a passionate web developer with a love for creating dynamic and
            responsive web applications. My journey in web development began
            with a curiosity for how websites work, and it has since evolved
            into a full-fledged career. I enjoy learning new technologies and
            applying them to solve real-world problems.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
