/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useEffect, useRef } from "react";
import SectionHeading from "./sectionheading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About", 0.75);

  return (
    <motion.section
      ref={ref}
      className="mb-[1rem] max-w-[45rem] text-center leading-8 sm:mb-20 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>

      {/* <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Computer Science</span>, I decided to
        pursue my passion for programming. I learned{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>
      <p>
        {" "}
        <span className="italic">When I'm not coding</span>, I enjoy playing
        Tennis, watching and analysing films and cinema, and playing chess. I
        also enjoy <span className="font-medium">learning new things</span>. I
        am currently learning about{" "}
        <span className="font-medium">history and philosophy</span>. I'm also
        learning how to play the guitar.
      </p> */}
      <p className="mb-3">
        As a recent graduate from the{" "}
        <span className="font-medium">University of South Florida</span>,
        majoring in <span className="font-medium">Computer Science</span> with a
        minor in <span className="font-medium">Mathematics</span>, I'm on the
        lookout for a <span className="font-medium">full-time position</span>{" "}
        where I can put my skills to work. I'm fully open to relocating anywhere
        within the United States, ready to embark on new challenges and
        opportunities.
      </p>
      <p className="mb-3">
        I am your one-stop expert for{" "}
        <span className="font-medium">full-stack development</span> needs,
        equipped to transform your visionary tech concepts into reality. Whether
        it's designing polished, user-centric websites for businesses or
        developing cutting-edge software solutions, my skill set covers the
        gamut from{" "}
        <span className="font-medium">
          JavaScript, React.js, Angular, and Node.js
        </span>{" "}
        to <span className="font-medium">Express.js, CSS, Next.js,</span> and{" "}
        <span className="font-medium">LangChain</span>. My expertise lies in
        crafting intuitive interfaces, architecting robust RESTful APIs, and
        integrating diverse external services with ease.
      </p>
      <p className="mb-3">
        As a technically proficient and innovative{" "}
        <span className="font-medium">Software Engineer</span>, I have garnered
        experience in software development, coding, quality assurance, and
        operational enhancement. My proactive approach to troubleshooting,
        debugging, and system upgrades has consistently driven project success
        and technological advancement.
      </p>
      <p>
        Beyond the world of code, I'm an avid{" "}
        <span className="italic">
          tennis player, chess enthusiast, and guitar player
        </span>
        , finding joy in the strings and strategies of each. My passion for{" "}
        <span className="font-medium">
          20th-century cinema and documentaries
        </span>{" "}
        fuels my cinephile tendencies, while my interests in{" "}
        <span className="font-medium">
          evolution, philosophy, and historical figures and events
        </span>{" "}
        keep me constantly exploring and learning.
      </p>
      <p>
        In essence, I am a dedicated professional eager to leverage my technical
        expertise and creative problem-solving skills in a dynamic work
        environment. Let's connect and explore how I can contribute to your team
        and bring our shared goals to fruition.
      </p>
    </motion.section>
  );
}
