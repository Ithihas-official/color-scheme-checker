import React, { useState } from "react";
import { links } from "../data";
import Colors from "./Colors.jsx";

const Navbar = (props) => {
  const [colorMenu, setColorMenu] = useState(false);
  const {
    accentColor1,
    accentColor2,
    useBgColor1,
    useBgColor2,
    useAccentColor1,
    useAccentColor2,
    useTxtColor1,
    useTxtColor2,
  } = props;

  return (
    <>
      <section
        id="home"
        className="w-[100%] "
        style={{ background: `${accentColor1}` }}
      >
        <div className="px-8 py-6 md:py-8 max-w-7xl flex justify-between  flex-col mx-auto md:flex-row md:items-center  md:gap-x-16">
          <h1 className="font-bold text-4xl">
            Web<span style={{ color: `${accentColor2}` }}>Dev</span>
          </h1>
          <nav className=" flex gap-x-6 hoverTransition">
            {links.map((item) => {
              const { id, href, text } = item;
              return (
                <a
                  className="text-xl tracking-wide font-normal capitalize ease-in-out duration-300"
                  href={href}
                  key={id}
                >
                  {text}
                </a>
              );
            })}
          </nav>
          <button
            className="text-xl capitalize font-bold py-1 self-start  "
            onClick={() => setColorMenu(!colorMenu)}
          >
            colors
          </button>
        </div>
      </section>
      {colorMenu ? (
        <Colors
          backgroundColor1={useBgColor1}
          backgroundColor2={useBgColor2}
          accentColor1={useAccentColor1}
          accentColor2={useAccentColor2}
          textColor1={useTxtColor1}
          textColor2={useTxtColor2}
        />
      ) : (
        <div />
      )}
    </>
  );
};

export default Navbar;
