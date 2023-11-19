import Header from "../components/Header";
import React from "react";

export default function About() {
  return (
    <div>
      <Header />
      <Main />
    </div>
  );
}

function Main() {
  return (
    <div className="main-content-about">
      <div className="main-content-about-capcheck">
        <span>About capCheck</span>
        <p>
          Welcome to capCheck, your go-to destination for reliable and accurate
          information verification on the internet. In the era of fast-paced
          digital communication, it's crucial to have a tool that empowers users
          to distinguish between factual information and misinformation. That's
          where capCheck comes in. <br></br> <br></br>Our Information Fact-Check
          Web Tool is a cutting-edge online platform designed to be
          user-friendly and effective. Harnessing the power of AI-driven
          algorithms, our tool rigorously evaluates the reliability of the input
          data, delivering clear and concise verdicts. These verdicts are
          presented as intuitive labels, including "True," "False," "Altered,"
          "Partly False," "Missing Context," or "Satire," enabling users to
          quickly gauge the veracity of the information they encounter.
        </p>
      </div>
      <div className="main-content-mission-capcheck">
        <span>capCheck’s Mission</span>
        <p>
          capCheck’s mission is to foster a more informed online community by
          providing users with a robust Online Information Fact-Check Web Tool.
          We understand the importance of ensuring the accuracy of the
          information circulating on the internet, and we are dedicated to
          equipping users with the tools they need to make well-informed
          decisions.
        </p>
      </div>
      <div className="main-content-features-capcheck">
        <span>Key Features</span>
        <p>
          • AI-Driven Accuracy: Our tool utilizes state-of-the-art artificial
          intelligence to assess the reliability of information, ensuring
          precise and trustworthy results.<br></br>
          <br></br>• Clear Verdicts: We believe in simplicity. Our tool provides
          straightforward labels, making it easy for users to understand the
          accuracy level of the information they are fact-checking.<br></br>
          <br></br>• Reliable Sources: We base our fact-checking on information
          from reliable news outlets, contributing to the credibility of our
          assessments.
        </p>
      </div>
      <div className="developers">
        <div className="developers-title">
          <span>Developers</span>
        </div>
        <div className="big-3">
          <div>
            <img src="developers/ivan.png" alt="Ivan Guillermo" />
            <h1>Ivan Guillermo</h1>
            <h2>Project Manager</h2>
          </div>
          <div>
            <img src="developers/ez.png" alt="Myke Ezekiel Narvasa" />
            <h1>Myke Ezekiel Narvasa</h1>
            <h2>Software Engineer</h2>
          </div>
          <div>
            <img src="developers/leonard.png" alt="John Leonard Leaño" />
            <h1>John Leonard Leaño</h1>
            <h2>Assistant Software Engineer</h2>
          </div>
        </div>
        <div className="two-big">
          <div>
            <img src="developers/evehn.png" alt="Evehn Kadusale" />
            <h1>Evehn Kadusale</h1>
            <h2>Programmer</h2>
          </div>
          <div>
            <img src="developers/felix.png" alt="John Felix Ballon" />
            <h1>John Felix Ballon</h1>
            <h2>Programmer</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
