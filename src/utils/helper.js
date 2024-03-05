import {
  FaDiagramProject,
  FaEnvelope,
  FaGithub,
  FaHouse,
  FaLinkedinIn,
  FaRenren,
  FaUser,
  FaLeetcode,
} from "react-icons/fa6";
import { SiLeetcode, SiCodingninjas } from "react-icons/si";
import {
  ChatApp,
  JobPortal,
  Portfolio,
  MealsApp,
  Superhero,
  ToDoList
} from "../assets";

export const Socials = [
  
  {
    id: `linkedin-${Date.now()}`,
    Icon: FaLinkedinIn,
    uri: "https://www.linkedin.com/in/dollyaggarwal/",
    color: "#0072b1",
  },
  {
    id: `github-${Date.now()}`,
    Icon: FaGithub,
    uri: "https://github.com/dollyaggarwal",
    color: "#fff",
  },
  {
    id: `leetcode-${Date.now()}`,
    Icon: SiLeetcode,
    uri: "https://leetcode.com/Dolly_Aggarwal/",
    color: "#ff0000",
  },
  {
    id: `codestudio-${Date.now()}`,
    Icon: SiCodingninjas,
    uri: "https://www.codingninjas.com/studio/profile/89650cb5-9942-46aa-a663-e98fc84193fd",
    color: "#ff0000",
  },
];

export const Menus = [
  {
    id: `home-${Date.now()}`,
    Icon: FaHouse,
    uri: "#home",
    name: "Home",
  },
  {
    id: `about-${Date.now()}`,
    Icon: FaUser,
    uri: "#about",
    name: "About",
  },
  {
    id: `skills-${Date.now()}`,
    Icon: FaRenren,
    uri: "#skills",
    name: "Skills",
  },
  {
    id: `projects-${Date.now()}`,
    Icon: FaDiagramProject,
    uri: "#projects",
    name: "Projects",
  },
  {
    id: `contact-${Date.now()}`,
    Icon: FaEnvelope,
    uri: "#contact",
    name: "Contact",
  },
];

export const ProjectsData = [
  {
    id: `chatapp-${Date.now()}`,
    name: "Quick Chat App",
    imgSrc: ChatApp,
    gitURL: "https://github.com/dollyaggarwal/ChatApp",
  },
  {
    id: `job-${Date.now()}`,
    name: "JobGram Portal",
    imgSrc: JobPortal,
    gitURL: "https://github.com/dollyaggarwal/Job-Portal-App",
  },
  {
    id: `portfolio-${Date.now()}`,
    name: "My Portfolio",
    imgSrc: Portfolio,
    gitURL: "https://github.com/dollyaggarwal",
  },
  {
    id: `mealsapp-${Date.now()}`,
    name: "Meals App",
    imgSrc: MealsApp,
    gitURL: "https://github.com/dollyaggarwal/MealsApp",
  },
  {
    id: `superhero-${Date.now()}`,
    name: "Search Superhero",
    imgSrc: Superhero,
    gitURL: "https://github.com/dollyaggarwal/SuperHeroSearchApp",
  },
  {
    id: `todo-${Date.now()}`,
    name: "To DO List App",
    imgSrc: ToDoList,
    gitURL: "https://github.com/dollyaggarwal/TODOLIST",
  },
];
