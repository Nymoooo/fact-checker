import Header from "../components/Header";
import { useState } from "react";

export default function Results() {
  return (
    <div>
      <Header />
      <Main />
    </div>
  );
}

function Main() {
  const [article, setArticle] = useState("");

  const resultBoxOutput = article === "" ? "" : article <= 0 ? "Cap" : "No cap";

  function handleSubmit(e) {
    e.preventDefault();

    if (!article) return;
  }

  return (
    <div className="results-page">
      <p className="ai-text">AI Fact checker</p>
      <form className="form-area" onSubmit={handleSubmit}>
        <div className="text-area">
          <textarea
            type="text"
            placeholder="Enter Text:"
            value={article}
            onChange={(e) => setArticle(e.target.value)}
          />
          <div className="capcheckbutton">
            <button>capCheck</button>
          </div>
        </div>

        <div className="right-side-content">
          <div className="result-container">
            <p className="right-side-title">Results</p>
            <p className="right-side-result">
              <span
                style={
                  article <= 0 ? { color: "#F16E6E" } : { color: "#80F16E" }
                }
              >
                {resultBoxOutput}
              </span>
            </p>
          </div>

          <div className="result-container">
            <p className="right-side-title">Interpretation</p>
            <p className="right-side-interpretation">
              <span>
                {resultBoxOutput === article
                  ? ""
                  : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis fermentum lectus. Suspendisse potenti. Phasellus in semper lectus, ut placerat mi. Duis tristique elit id odio rhoncus fringilla. Etiam et lacinia nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis fermentum lectus. Suspendisse potenti. Phasellus in semper lectus, ut placerat mi. Duis tristique elit id odio rhoncus fringilla. Etiam et lacinia nibh. "}
              </span>
            </p>
          </div>

          <div className="result-container">
            <p className="right-side-title">Reference Links</p>
            {resultBoxOutput === article ? (
              ""
            ) : (
              <div className="right-side-reference">
                <img src="header/link-img.png" alt="link-img"></img>
                <p>
                  link.lorem/ipsum+dolor+sit+amet+consectetur+adipiscing+elit
                </p>
              </div>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}
