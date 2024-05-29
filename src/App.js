import "./App.scss";
import { Routes, Route, useLocation } from "react-router-dom";
import Particles from "react-tsparticles";
// import { loadFull } from "tsparticles";
import Myportfolio from "./containers/Myportfolio";
import Home from "./containers/home";
import About from "./containers/about";
import Skills from "./containers/skills";
import Resume from "./containers/resume";
import Contact from "./containers/contact";
import Navbar from "./components/navbar";
import particles from "./utils/particles.js";
import { useCallback } from "react";
import { loadSlim } from "tsparticles-slim";

function App() {
  const location = useLocation();

  const handleInit = useCallback(async (main) => {
    console.log("Particles Init:", main); // Logging the main object
    await loadSlim(main);
  }, []);

  const renderParticleJsInHomePage = location.pathname === "/";
  return (
    <div className="App">
      {/* Particle.js */}

      {renderParticleJsInHomePage && (
        <Particles id="particles" options={particles} init={handleInit} />
      )}
      {/* Navbar */}
      <Navbar />

      {/* pages */}

      <div className="App__main-page-content">
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Myportfolio" element={<Myportfolio />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
