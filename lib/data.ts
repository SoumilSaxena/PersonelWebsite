import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

import oasis from "@/public/oasis.png";
import emr from "@/public/emr.png";
import car from "@/public/car.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated Bachelors",
    location: "Tampa, FL",
    description:
      "Graduated from University of South Florida with a Major in Computer Science and a minor in Mathematics\n Relevant Courses: Analysis of Algorithms, Database Design, Software Engineering, Object Oriented Programming, Computer Architecture, Operating Systems, Software Testing, Secure Coding, Software Systems Design.",
    icon: React.createElement(LuGraduationCap),
    date: "2019 - 2023",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "ER EMR Streamlining",
    description:
      "Utilized ER datasets from a local hospital to identify potential annual cost savings exceeding $2M+ through streamlined patient timelines, resulting in improved operational efficiency and patient outcomes",
    tags: ["Python", "Pandas", "SQL", "Git", "PostGreSql"],
    imageUrl: emr,
  },
  {
    title: "Car Enterprise",
    description:
      "Developed a robust and scalable web application using Flask and Bootstrap, meeting the complex requirements of a leading car enterprise with advanced Python skills",
    tags: ["Flask", "JavaScript", "Python", "SQL", "PostGreSql", "Git"],
    imageUrl: car,
  },
  // {
  //   title: "Word Analytics",
  //   description:
  //     "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
  //   tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
  //   imageUrl: wordanalyticsImg,
  // },
  // {
  //   title: "rmtDev",
  //   description:
  //     "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
  //   tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
  //   imageUrl: rmtdevImg,
  // },
  {
    title: "Oasis USA Website",
    description:
      "I worked as a full-stack developer on this NGO project for a year. Users can access and contribute to the vision of the Human Trafficking NGO.",
    tags: ["Angular", "Node.js", "MongoDB", "Tailwind", "Express.js"],
    imageUrl: oasis,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "C++",
  "Java",
  "MongoDB",
  "ReactNative",
  "GraphQL",
  "Angular",
  "AngularJS",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
