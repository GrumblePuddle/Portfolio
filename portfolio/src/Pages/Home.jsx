import React from "react";
import Portratt from "../Images/portratt.jpg";

const Home = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mt-10">
        Welcome to My Portfolio
      </h1>
      <img
        class="rounded-full w-96 h-96 mx-auto mt-8 object-cover"
        src={Portratt}
        alt="image description"
      />
      <p className="text-lg text-center mt-4 max-w-2xl mx-auto">
        I am a passionate web developer with a love for creating dynamic and
        responsive web applications. My journey in web development began with a
        curiosity for how websites work, and it has since evolved into a
        full-fledged career. I enjoy learning new technologies and applying them
        to solve real-world problems.
      </p>
    </div>
  );
};

export default Home;
