import Header from "../components/Header";

export default function Whitepaper() {
  return (
    <div>
      <Header />
      <MainContent />
    </div>
  );
}

function MainContent() {
  return (
    <div className="main-content">
      <div className="main-content-title">
        <span>Whitepaper</span>
      </div>
      <div className="main-content-info">
        <span></span>
      </div>
    </div>
  );
}
