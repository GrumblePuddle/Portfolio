import React from "react";
import Card from "../Components/Card";
import ProjectPopup from "../Components/ProjectPopup"; // Importing the ProjectPopup component
import { useState } from "react";

const Portfolio = () => {
  const [preview, setPreview] = useState(false); // State to control the preview of projects
  const [previewBtn, setPreviewBtn] = useState("Show Projects"); // State to control the button text
  const [search, setSearch] = useState(""); // State to control the search input
  const [popup, setPopup] = useState(false); // State to control the popup visibility
  const [popupData, setPopupData] = useState({}); // State to control the popup data

  // Sample project data
  // In a real application, this data would likely come from an API or database
  const projects = [
    {
      title: "Project 1",
      tags: ["#JavaScript", "#React", "#Tailwind", "#CSS"],
      info: "This is information about Project 1.",
    },
    {
      title: "Project 2",
      tags: ["#JavaScript", "#Vite", "#Tailwind"],
      info: "This is information about Project 2.",
    },
    {
      title: "Project 3",
      tags: ["#JavaScript", "#React", "#Tailwind"],
      info: "This is information about Project 3.",
    },
    {
      title: "Project 4",
      tags: ["#JavaScript", "#React", "#Tailwind"],
      info: "This is information about Project 4.",
    },
    {
      title: "Project 5",
      tags: ["#JavaScript", "#React", "#Tailwind"],
      info: "This is information about Project 5.",
    },
    {
      title: "Project 6",
      tags: ["#JavaScript", "#React", "#Tailwind"],
      info: "This is information about Project 6.",
    },
    {
      title: "Project 7",
      tags: ["#JavaScript", "#React", "#Tailwind"],
      info: "This is information about Project 7.",
    },
    {
      title: "Project 8",
      tags: ["#JavaScript", "#React", "#Tailwind"],
      info: "This is information about Project 8.",
    },
    {
      title: "Project 9",
      tags: ["#JavaScript", "#React", "#Tailwind"],
      info: "This is information about Project 9.",
    },
  ];

  // Function to toggle the preview of projects
  // and change the button text accordingly
  const changePreview = () => {
    setPreview(!preview);
    if (!preview) {
      setPreviewBtn("Hide projects");
    } else {
      setPreviewBtn("Show Projects");
    }
  };

  // Function to open the project popup
  // This function would likely set the state to show the popup with project details
  const showPopup = (index) => {
    setPopup(true);
    setPopupData({
      title: projects[index].title,
      info: projects[index].info,
      tags: projects[index].tags,
    });
  };

  // Function to close the project popup
  // This function would likely set the state to hide the popup
  const closePopup = () => {
    setPopup(false);
  };

  return (
    <div>
      {/* Header section with title and description */}
      <h1 className="text-3xl font-bold text-center mt-10">My Portfolio</h1>
      <p className="text-lg text-center mt-4 max-w-2xl mx-auto">
        Here are some of my projects that I have worked on. Each project
        showcases my skills in web development, design, and problem-solving.
      </p>
      <div className="flex justify-center mt-6">
        {/* Button to toggle the preview of projects */}
        <button
          onClick={changePreview}
          className="px-6 py-2 font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        >
          {previewBtn}
        </button>
      </div>
      {/*If preview is true, show the input*/}
      {preview && (
        <div className="flex justify-center mt-8 max-w-7xl mx-auto">
          <input
            type="text"
            className="border border-gray-300 rounded-lg px-4 py-2 w-1/3"
            placeholder="Search tag..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      )}
      {/*If preview is true, show the projects*/}
      {/* Filter projects based on the search input and map over them to create cards */}
      {/* The projects are filtered based on the tags that include the search input */}
      {preview && (
        <div className="flex justify-center mt-8 flex-wrap max-w-7xl mx-auto">
          {projects
            .filter((project) =>
              project.tags.some((tag) =>
                tag.toLowerCase().includes(search.toLowerCase())
              )
            )
            .map((project, index) => (
              <Card
                key={index}
                pTitle={project.title}
                pTags={project.tags}
                onClick={() => showPopup(index)}
              />
            ))}
        </div>
      )}
      {/* If popup is true, show the project popup */}
      {popup && (
        <ProjectPopup
          pTitle={popupData.title}
          pInfo={popupData.info}
          pTags={popupData.tags}
          onClick={closePopup}
        />
      )}
    </div>
  );
};

export default Portfolio;
