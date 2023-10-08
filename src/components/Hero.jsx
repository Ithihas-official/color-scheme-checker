import React from "react";
import WebDevImg from "./../assests/WebDevImg.svg";
import { FaGithub } from "react-icons/fa";

const Hero = (props) => {
  const { accentColor2, accentColor1 } = props;
  return (
    <section
      className="w-[100%] h-[65vh] flex items-center justify-around p-8 "
      style={{ background: `${accentColor1}` }}
    >
      <div className="w-[55%] hidden md:block">
        <img
          src={WebDevImg}
          alt="web development"
          style={{ stroke: `${accentColor2}` }}
        />
      </div>
      <div className="p-2 w-[100%] md:w-[35%] flex flex-col justify-center items-start">
        <h1 className="text-4xl md:text-6xl">
          I&apos;m <span style={{ color: `${accentColor2}` }}>Ithihas</span>
        </h1>
        <h1 className="capitalize text-xl md:text-3xl">full stack developer</h1>
        <a href="https://github.com/Ithihas-official" className="text-4xl p-4">
          <FaGithub style={{ color: `${accentColor2}` }} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
