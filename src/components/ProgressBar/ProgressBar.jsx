import React from "react";
import "./ProgressBar.scss";
const ProgressBar = () => {
  return (
    <div className="center">
      <div className="progress">
        <svg className="progress-bar" width="300" height="300">
          <circle className="progress-circle" cx="45" cy="150" r="40"></circle>
          <circle className="progress-circle" cx="45" cy="150" r="40"></circle>
        </svg>
        <div className="text">
          <span className="percent-completed">70%</span>
          <span className="completed-text">Completed</span>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
