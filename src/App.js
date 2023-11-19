import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import LandingPage from "./Pages/LandingPage";
import Home from "./Pages/Home";
import Results from "./Pages/Results";
import About from "./Pages/About";
import Whitepaper from "./Pages/Whitepaper";
import "./index.css";

export default function App() {
  return (
    <div className="body">
      <BrowserRouter>
        <Routes>
          <Route index element={<LandingPage />} />
          <Route path="/landingpage" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/whitepaper" element={<Whitepaper />} />
          <Route path="/about" element={<About />} />
          <Route path="/results" element={<Results />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
