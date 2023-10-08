import React from "react";
import { FaGithub } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";

const ProjectCard = ({ project, accentColor2, bgColor2 }) => {
  const { img, url, github, title, text } = project;
  return (
    <article
      className=" w-[100%] md:w-[30rem] rounded-xl p-2 ease-in-out duration-300 hover:shadow-2xl "
      style={{ background: `${bgColor2}` }}
    >
      <img src={img} className="w-[100%] rounded-lg" alt="project image" />
      <h1 className="p-2 mt-6 text-lg md:text-xl font-bold">{title}</h1>
      <p className="font-light p-2 text-sm md:text-lg">{text}</p>
      <div
        className="p-2 w-20 md:w-24 hoverTransition ease-in-out duration-500 flex justify-between items-center "
        style={{ color: `${accentColor2}` }}
      >
        <a href={url}>
          <FaGithub className="text-2xl md:text-3xl" />
        </a>
        <a href={github}>
          <TbWorldWww className="text-2xl md:text-3xl" />
        </a>
      </div>
    </article>
  );
};

export default ProjectCard;
