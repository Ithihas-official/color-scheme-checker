import React from "react";
import { projects } from "../data";
import ProjectCard from "./ProjectCard.jsx";

const Projects = (props) => {
  const { bgColor2, accentColor2 } = props;
  return (
    <section id="projects" className="w-[100%] p-8 ">
      <h1
        className="font-bold text-2xl md:text-4xl p-2 w-[80%] md:w-[40%] mx-auto text-center"
        style={{ borderBottom: `${accentColor2} solid 1px` }}
      >
        Projects
      </h1>
      <div className="py-4 w-[95%] mt-4  mx-auto flex flex-col md:flex-row gap-6 md:gap-16 justify-center md:flex-wrap">
        {projects.map((project) => {
          return (
            <ProjectCard
              key={project.id}
              project={project}
              bgColor2={bgColor2}
              accentColor2={accentColor2}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
