/* import { text } from "express"; */
import NavBar from "../components/Header";
import React from "react";

function LandingPage() {
  return (
    <div>
      <NavBar />
      <Body />
    </div>
  );
}
function Body() {
  return (
    <div className="landing-page-body">
      <div className="cap-logo">
        <img
          className="cap-logo"
          src="header/cap-logo.png"
          alt="factchecker-logo"
        />
      </div>

      <div className="cap-logo-content">
        <div>
          <img src="header/cap-logo-w-text.png" alt="fact-checker-logo" />
        </div>

        <div className="cap-logo-text">
          <span>Tagline goes right here!</span>
          <p>
            Project capCheck.ai is an Online Information Fact-Check Web Tool
            designed to help users verify the accuracy of information they come
            across on the internet based on reliable news outlet. Using the
            integration of AI-driven algorithms, capCheck.ai assess the
            reliability of the input data by providing
          </p>
        </div>

        <div className="button">
          <span>Try now</span>
          <a href="Home">
            <button>capCheck</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
