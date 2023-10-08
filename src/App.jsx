import React, { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Skills from "./components/Skills.jsx";
import "./scss/basic.scss";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";

const App = () => {
  const [bgColor1, useBgColor1] = useState("#e2e8f0");
  const [bgColor2, useBgColor2] = useState("white");
  const [accentColor1, useAccentColor1] = useState("#a7f3d0");
  const [accentColor2, useAccentColor2] = useState("#059669");
  const [txtColor1, useTxtColor1] = useState("black");
  const [txtColor2, useTxtColor2] = useState("slategray");

  document.body.style.backgroundColor = bgColor1;
  document.body.style.color = txtColor1;

  return (
    <>
      <Navbar
        useBgColor1={useBgColor1}
        useBgColor2={useBgColor2}
        accentColor1={accentColor1}
        accentColor2={accentColor2}
        useAccentColor1={useAccentColor1}
        useAccentColor2={useAccentColor2}
        useTxtColor1={useTxtColor1}
        useTxtColor2={useTxtColor2}
      />
      <Hero accentColor2={accentColor2} accentColor1={accentColor1} />
      <Skills accentColor2={accentColor2} />
      <About
        accentColor2={accentColor2}
        bgColor2={bgColor2}
        txtColor2={txtColor2}
      />
      <Projects bgColor2={bgColor2} accentColor2={accentColor2} />
    </>
  );
};

export default App;
