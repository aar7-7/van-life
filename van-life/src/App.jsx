import React from "react";
import Intro from "./pages/intro.jsx";
import About from "./pages/about.jsx";
import "./style/header.css";
import Header from "./components/header.jsx";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <header className="header">
        <Header />
        <nav>
          <Link to="/about">About</Link>
          <Link to="/vans">Vans</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
