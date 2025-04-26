import React from "react";

const ProjectPopup = ({ pTitle, pInfo, onClick, pTags }) => {
  return (
    <div>
      <div
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        className="fixed inset-0 flex items-center justify-center z-50"
      >
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto">
          <h2 className="text-xl font-bold mb-4">{pTitle}</h2>
          <p className="mb-4">{pInfo}</p>
          <span>
            <strong>Languages:</strong>{" "}
            {pTags.map((tag, index) => (
              <span
                key={index}
                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
              >
                {tag}
              </span>
            ))}
          </span>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={onClick}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectPopup;
