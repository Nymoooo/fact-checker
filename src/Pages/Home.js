import NavBar from "../components/Header";
import React from "react";

function Home() {
  return (
    <div>
      <NavBar />
      <Main />
    </div>
  );
}

function Main() {
  return (
    <div className="main-content">
      <div className="ai-text">
        <span>AI Fact Checker</span>
      </div>

      <div className="Main-split">
        <div className="main-split-left">
          <div className="text-area">
            <textarea type="text" placeholder="Enter Text: " />

            <div className="capcheckbutton">
              <a href="Results">
                <button>capCheck</button>
              </a>
            </div>
          </div>
        </div>

        <div className="main-split-right">
          <div className="cap-logo-right-container">
            <img
              className="cap-logo-right"
              src="header/cap-logo-w-text.png"
              alt="fact-checker-logo"
            />
          </div>

          <div className="home-right-side-content">
            <span>Is it cap or not? </span>
            <p>
              capCheck is here to help you figure out if something's true or
              just pure cap in the online world. With our AI powered and a easy
              verification process, you'll know what's what in no time. Join the
              mission to tackle misinformation and make the digital world a more
              trustworthy place!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
