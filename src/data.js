import { nanoid } from "nanoid";
import { FaHtml5, FaJs, FaReact } from "react-icons/fa";

export const links = [
  { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#skills", text: "skills" },
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#projects", text: "projects" },
];

export const skills = [
  {
    id: nanoid(),
    title: "HTML&CSS",
    icon: <FaHtml5 className="h-16 w-16" />,
    text: "Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences",
  },
  {
    id: nanoid(),
    title: "Javascript",
    icon: <FaJs className="h-16 w-16 " />,
    text: "Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality",
  },
  {
    id: nanoid(),
    title: "React",
    icon: <FaReact className="h-16 w-16" />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
];

export const projects = [
  {
    id: nanoid(),
    img: "https://github.com/Ithihas-official/Shades/blob/main/shades.png?raw=true",
    url: "https://essence-shades.netlify.app/",
    github: "https://github.com/Ithihas-official/Shades.git",
    title: "Shades",
    text: "The Shades App is a simple and intuitive application that allows users to generate shades of a selected color, ranging from white to black.",
  },
  {
    id: nanoid(),
    img: "https://images.unsplash.com/photo-1617900906639-cab7adceb499?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    url: "https://github.com/Ithihas-official/nvim.git",
    github: "https://github.com/Ithihas-official/nvim.git",
    title: "NVIM config",
    text: "This is my neovim configuration , which i use as my daily driver",
  },
];
