import React from "react";
import { skills } from "../data";
import Skillcard from "./Skillcard.jsx";
const Skills = (props) => {
  const { accentColor2 } = props;
  return (
    <section id="skills" className="w-[100%] p-4">
      <div
        className="p-4 w-[80%] mx-auto"
        style={{ borderBottom: `${accentColor2} solid 1px` }}
      >
        <h1 className="text-2xl w-[15rem] text-center mx-auto p-4 md:text-4xl">
          Skills
        </h1>
      </div>

      <div className="py-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3 ">
        {skills.map((skill) => {
          const { id, title, icon, text } = skill;
          return (
            <Skillcard
              key={id}
              title={title}
              icon={icon}
              text={text}
              accentColor2={accentColor2}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
