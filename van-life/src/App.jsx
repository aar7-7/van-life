import React from "react";
import Intro from "./pages/intro.jsx";
import About from "./pages/about.jsx";
import Vans from "./pages/vans.jsx";
import logo from "./assets/logo.png";

import "./style/header.css";
import "./style/footer.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <header>
        <div className="header">
          <Link to="/">
            <div>
              <img src={logo} className="header--logo" />
            </div>
          </Link>

          <div>
            <nav>
              <Link className="link" to="/about">
                About
              </Link>
              <Link className="link" to="/vans">
                Vans
              </Link>
            </nav>
          </div>
        </div>
      </header>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
      </Routes>
      <footer>
        <p className="footer-copy">© 2025 VanLife — All rights reserved.</p>
      </footer>
    </BrowserRouter>
  );
}

export default App;
