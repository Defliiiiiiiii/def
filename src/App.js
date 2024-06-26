import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

const App = () => {
  return (
    <Router>
      <div>
        <header>
          <Link to="/">
            <img src="banner.jpg" />
          </Link>
          <h1>WELCOME DEFLI ANGGARA PUTRA BLOG</h1>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/about">Tentang Saya</Link>
            <Link to="/contact">Kontak Saya</Link>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <footer>
          <p>&copy; 2024 My Blog. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
