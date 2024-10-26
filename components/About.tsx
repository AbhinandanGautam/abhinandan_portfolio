import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative flex flex-col h-screen text-center md:flex-row md:text-left max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase text-gray-500 tracking-[20px] text-xl sm:text-2xl">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.5,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{
          once: true,
        }}
        src="/intropic.jpg"
        className="-mb-24 md:mb-0 flex-shrink-0 w-44 h-44 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[350px] xl:h-[450px]"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-lg sm:text-3xl md:text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#66FCF1]">little</span>{" "}
          background
        </h4>
        <p className="text-xs sm:text-sm md:text-base">
          Hello, I am Abhinandan Gautam. Currently I am working as SDE1 at
          Amazon India. I completed my B.Tech in Computer Science and
          Engineering from NIT Jalandhar with a CGPA of 8.73.
          <br></br>I love developing full-stack web applications and have built
          several web-related projects. I’m also skilled in problem-solving and
          data structures, with experience solving over 1800 problems on
          platforms like LeetCode and participating in numerous coding contests.
          <br></br>My internships include developing a full-stack placement
          website for my university and working on AWS services and backend
          development with Amazon India's International Machine Learning team.
          Additionally, I gained in-depth training in AI and machine learning at
          Accenture while working there for 3 months.
        </p>
      </div>
    </motion.div>
  );
};

export default About;
