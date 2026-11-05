import React from "react";
import { createPortal } from "react-dom";
import botVideo from "../videos/aqworlds-bot.mp4"; // Import the video file

const ProjectPopup = ({ pTitle, pInfo, onClick, pTags }) => {
  return createPortal(
    <div>
      <div
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        className="fixed inset-0 flex items-center justify-center z-[9999]"
        onClick={onClick}
      >
        <div
          className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <h2 className="text-xl font-bold mb-4">{pTitle}</h2>
          <video
            src={botVideo}
            autoPlay
            muted
            loop
            playsInline
            onLoadedMetadata={(e) => (e.currentTarget.playbackRate = 2)}
            className="w-full rounded-lg"
          />
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
    </div>,
    document.body,
  );
};

export default ProjectPopup;
