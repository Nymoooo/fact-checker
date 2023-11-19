import React from "react";

function Header() {
  return (
    <div>
      <NavBar />
    </div>
  );
}

function NavBar() {
  return (
    <div className="header">
      <div>
        <a href="LandingPage">
          <img src="header/factchek-logo.png" alt="factchecker-logo" />
        </a>
      </div>

      <div className="navigation">
        <ul>
          <li>
            <a href="Home">Home</a>
          </li>
          <li>
            <a href="Whitepaper">Whitepaper</a>
          </li>
          <li>
            <a href="About">About</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

/* function Body() {
  return (
    <div>
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
          <button>capCheck</button>
        </div>
      </div>
    </div>
  );
} */

export default Header;
