import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
  {
    _createdAt: "2023-01-21T14:23:16Z",
    _id: "49856a98-fef8-44b5-b390-05be6e1a27da",
    _rev: "B2fwdoKxWxkI0kBn0b4vm6",
    _type: "project",
    _updatedAt: "2023-01-21T14:23:16Z",
    image:
      "https://cdn.sanity.io/images/2rl84igg/production/d8aff557b5402bf1d600780ac823bf7090fd2047-1625x932.png?w=2000&fit=max&auto=format",
    linkToBuild: "https://abhis-blogs-abhinandangautam.vercel.app/",
    summary:
      "This is my own blog website, where I write blogs related to different topics. This site is build by me in latest version of Next JS and used Tailwind CSS in frontend. The backend is provided by Sanity.io and in this site I complete customize sanity studio and used it for adding new blog to website. This site revalidate after every 30s using Next JS 13 feature.",
    technologies: [
      {
        _createdAt: "2022-10-31T08:49:32Z",
        _id: "1cf9de06-8d40-488a-b2e1-2547638e3649",
        _rev: "LLPpfIE1lV47ytP4JTrZ1W",
        _type: "skill",
        _updatedAt: "2022-11-02T12:25:10Z",
        image:
          "https://cdn.sanity.io/images/2rl84igg/production/ae35edce19e64c53e5d455b22e8a2c82d093d4c9-1176x1056.png?w=2000&fit=max&auto=format",
        progress: 70,
        title: "Next JS",
      },
      {
        _createdAt: "2022-10-31T08:43:53Z",
        _id: "7d9b1687-490e-48b5-b6c3-b3864049a1b8",
        _rev: "1F2rDWghP665irIyIkpaUS",
        _type: "skill",
        _updatedAt: "2022-10-31T08:52:22Z",
        image:
          "https://cdn.sanity.io/images/2rl84igg/production/0d21d36a6cf60922c8800dfecaedb0874eeabd20-512x456.png?w=2000&fit=max&auto=format",
        progress: 80,
        title: "React JS",
      },
      {
        _createdAt: "2022-11-04T15:20:14Z",
        _id: "9543f1e7-871d-44b1-90b3-728e47045327",
        _rev: "4QieMMYW16Qi2WzTfCQb2H",
        _type: "skill",
        _updatedAt: "2022-11-04T15:20:14Z",
        image:
          "https://cdn.sanity.io/images/2rl84igg/production/58f072b718b2c43df0b8330a1c28658bba06ddb2-2048x2048.png?w=2000&fit=max&auto=format",
        progress: 80,
        title: "Tailwind CSS",
      },
    ],
    title: "Blog Website",
  },
  {
    _createdAt: "2023-01-21T14:18:09Z",
    _id: "699569e8-baa8-4eb1-b416-ae9c12d83ffd",
    _rev: "kI5vt96XusuM8inmmn4ptj",
    _type: "project",
    _updatedAt: "2023-01-21T14:18:09Z",
    image:
      "/emailgen.png",
    linkToBuild: "https://email-generator-mseo.onrender.com",
    summary:
      "An email generator web app built with Flask, HTML, and Tailwind CSS streamlines cold email creation for recruiters. Users submit a job post URL, which the app scrapes using LangChain, extracting key information via Llama-based AI. The processed data is used to automatically craft a tailored, professional email for recruiter outreach.",
    technologies: [
      {
        _createdAt: "2022-10-31T08:40:09Z",
        _id: "3283e100-3812-4683-b9be-11d4e16b6d84",
        _rev: "1F2rDWghP665irIyIkqSjq",
        _type: "skill",
        _updatedAt: "2022-10-31T08:53:31Z",
        image: "https://cdn.sanity.io/images/2rl84igg/production/54776bbe4c53cf67705e19722e5be7747c91a31d-508x512.png?w=2000&fit=max&auto=format",
        progress: 80,
        title: "Python",
      },
      {
        _createdAt: "2022-10-31T08:45:50Z",
        _id: "5dcb19f2-d23d-44fd-a417-c097ec83817f",
        _rev: "4QieMMYW16Qi2WzTeizUym",
        _type: "skill",
        _updatedAt: "2022-11-02T12:28:14Z",
        image: "https://cdn.sanity.io/images/2rl84igg/production/11298a301d3372893fd29a0751ca6d60f8d19178-219x230.png?w=2000&fit=max&auto=format",
        progress: 80,
        title: "Flask",
      },
      {
        _createdAt: "2022-11-04T15:20:14Z",
        _id: "9543f1e7-871d-44b1-90b3-728e47045327",
        _rev: "4QieMMYW16Qi2WzTfCQb2H",
        _type: "skill",
        _updatedAt: "2022-11-04T15:20:14Z",
        image:
          "https://cdn.sanity.io/images/2rl84igg/production/58f072b718b2c43df0b8330a1c28658bba06ddb2-2048x2048.png?w=2000&fit=max&auto=format",
        progress: 80,
        title: "Tailwind CSS",
      },
    ],
    title: "Email Generator",
  },
  {
    _createdAt: "2023-01-21T14:12:53Z",
    _id: "d0e83951-87ff-4d64-8f07-015dc98e1906",
    _rev: "kI5vt96XusuM8inmmn3mzr",
    _type: "project",
    _updatedAt: "2023-01-21T14:12:53Z",
    image:
      "https://cdn.sanity.io/images/2rl84igg/production/61a083d1ff83c9a3711b674793cae5539b05db2f-1494x904.png?w=2000&fit=max&auto=format",
    linkToBuild: "https://ecommerce-zeta-peach.vercel.app/",
    summary:
      "This is clone of Amazon website with various features build using Next JS framework. In frontend Next JS and Tailwind CSS is used. The data of different items is fetched from API and Firestore backend is used for storing different user transactions. Stripe payment system is also integrated in website. ",
    technologies: [
      {
        _createdAt: "2022-10-31T08:49:32Z",
        _id: "1cf9de06-8d40-488a-b2e1-2547638e3649",
        _rev: "LLPpfIE1lV47ytP4JTrZ1W",
        _type: "skill",
        _updatedAt: "2022-11-02T12:25:10Z",
        image:
          "https://cdn.sanity.io/images/2rl84igg/production/ae35edce19e64c53e5d455b22e8a2c82d093d4c9-1176x1056.png?w=2000&fit=max&auto=format",
        progress: 70,
        title: "Next JS",
      },
      {
        _createdAt: "2022-10-31T08:43:53Z",
        _id: "7d9b1687-490e-48b5-b6c3-b3864049a1b8",
        _rev: "1F2rDWghP665irIyIkpaUS",
        _type: "skill",
        _updatedAt: "2022-10-31T08:52:22Z",
        image:
          "https://cdn.sanity.io/images/2rl84igg/production/0d21d36a6cf60922c8800dfecaedb0874eeabd20-512x456.png?w=2000&fit=max&auto=format",
        progress: 80,
        title: "React JS",
      },
      {
        _createdAt: "2022-11-04T15:20:14Z",
        _id: "9543f1e7-871d-44b1-90b3-728e47045327",
        _rev: "4QieMMYW16Qi2WzTfCQb2H",
        _type: "skill",
        _updatedAt: "2022-11-04T15:20:14Z",
        image:
          "https://cdn.sanity.io/images/2rl84igg/production/58f072b718b2c43df0b8330a1c28658bba06ddb2-2048x2048.png?w=2000&fit=max&auto=format",
        progress: 80,
        title: "Tailwind CSS",
      },
    ],
    title: "Ecommerce Clone",
  },
  {
    _createdAt: "2022-10-31T09:40:20Z",
    _id: "13d1f086-0943-4865-be0c-3a8b1239228a",
    _rev: "qCJyxDoxGnsT6smLZX77gO",
    _type: "project",
    _updatedAt: "2022-10-31T11:54:02Z",
    image:
      "https://cdn.sanity.io/images/2rl84igg/production/9f4c91a88182bdc6f94d31c5d060ec97cb93d3bf-1920x941.png?w=2000&fit=max&auto=format",
    linkToBuild: "https://note-maker-abhi.onrender.com/",
    summary:
      "Handy web application for making notes. Provide features to create, read, update and delete notes. Fully secured application with authentication by user login. User first have to login in order to reach home page. If user not exist then sign up form is also available. This is basically a flask project having backend in python (Flask), frontend in plain HTML with jinja templating and database used is SQLite.",
    technologies: [
      {
        _createdAt: "2022-10-31T08:45:50Z",
        _id: "5dcb19f2-d23d-44fd-a417-c097ec83817f",
        _rev: "4QieMMYW16Qi2WzTeizUym",
        _type: "skill",
        _updatedAt: "2022-11-02T12:28:14Z",
        image:
          "https://cdn.sanity.io/images/2rl84igg/production/11298a301d3372893fd29a0751ca6d60f8d19178-219x230.png?w=2000&fit=max&auto=format",
        progress: 80,
        title: "Flask",
      },
      {
        _createdAt: "2022-10-31T08:42:54Z",
        _id: "9499e0bf-41b1-4bac-8cea-5c35b04d1364",
        _rev: "rhcaYWhPaxRceuOsRDRRah",
        _type: "skill",
        _updatedAt: "2022-10-31T08:52:41Z",
        image:
          "https://cdn.sanity.io/images/2rl84igg/production/7a32e220a9c5dc03bfb90e25fa7568ddfb4df6fa-48x48.png?w=2000&fit=max&auto=format",
        progress: 80,
        title: "HTML",
      },
      {
        _createdAt: "2022-10-31T08:46:52Z",
        _id: "5e9568a4-267f-473a-88d6-02b368d328ce",
        _rev: "4QieMMYW16Qi2WzTeiz65H",
        _type: "skill",
        _updatedAt: "2022-11-02T12:27:26Z",
        image:
          "https://cdn.sanity.io/images/2rl84igg/production/c6a43e73cef9815b015c92c122fd5f17dfa2e26d-300x300.png?w=2000&fit=max&auto=format",
        progress: 85,
        title: "MySQL",
      },
    ],
    title: "Note Maker",
  },
  {
    _createdAt: "2022-10-31T11:54:32Z",
    _id: "63249351-70c2-4bde-8b40-ee6da6ddd5d4",
    _rev: "lOSYp7IVLWqfiuFO4Ob8dX",
    _type: "project",
    _updatedAt: "2022-10-31T12:01:42Z",
    image:
      "https://cdn.sanity.io/images/2rl84igg/production/8e466f0e4b4b4dd4607315f06114a958f350ae55-1901x793.png?w=2000&fit=max&auto=format",
    linkToBuild: "https://fake-news-detection-on6w.onrender.com/",
    summary:
      "This is machine learning project. Here we created a machine learning model which can predict whether a news is fake or true using news title only. This is basically a group project. ML model is made using python and some libraries of ml. This model this then connected to web application using flask in backend and frontend is plain HTML with jinja templating.",
    technologies: [
      {
        _createdAt: "2022-10-31T08:40:09Z",
        _id: "3283e100-3812-4683-b9be-11d4e16b6d84",
        _rev: "1F2rDWghP665irIyIkqSjq",
        _type: "skill",
        _updatedAt: "2022-10-31T08:53:31Z",
        image:
          "https://cdn.sanity.io/images/2rl84igg/production/54776bbe4c53cf67705e19722e5be7747c91a31d-508x512.png?w=2000&fit=max&auto=format",
        progress: 80,
        title: "Python",
      },
      {
        _createdAt: "2022-10-31T08:45:50Z",
        _id: "5dcb19f2-d23d-44fd-a417-c097ec83817f",
        _rev: "4QieMMYW16Qi2WzTeizUym",
        _type: "skill",
        _updatedAt: "2022-11-02T12:28:14Z",
        image:
          "https://cdn.sanity.io/images/2rl84igg/production/11298a301d3372893fd29a0751ca6d60f8d19178-219x230.png?w=2000&fit=max&auto=format",
        progress: 80,
        title: "Flask",
      },
      {
        _createdAt: "2022-10-31T08:42:54Z",
        _id: "9499e0bf-41b1-4bac-8cea-5c35b04d1364",
        _rev: "rhcaYWhPaxRceuOsRDRRah",
        _type: "skill",
        _updatedAt: "2022-10-31T08:52:41Z",
        image:
          "https://cdn.sanity.io/images/2rl84igg/production/7a32e220a9c5dc03bfb90e25fa7568ddfb4df6fa-48x48.png?w=2000&fit=max&auto=format",
        progress: 80,
        title: "HTML",
      },
    ],
    title: "Fake News Detector",
  },
  {
    _createdAt: "2022-10-31T12:10:47Z",
    _id: "085112e3-72d5-4eba-8670-0491507c5a23",
    _rev: "qCJyxDoxGnsT6smLZXHvgi",
    _type: "project",
    _updatedAt: "2022-10-31T12:10:47Z",
    image:
      "https://cdn.sanity.io/images/2rl84igg/production/5c4161eabaf76d9ed9137dcde83b68184982a07c-1920x941.png?w=2000&fit=max&auto=format",
    linkToBuild: "https://abhinandangautam.github.io/LCS-Calculator/",
    summary:
      "This is a simple Longest Common Subsequence (LCS) calculator. This calculator tell details like length of Longest Common Subsequence, Value of Longest Common Subsequence and also print DP table for LCS of two input strings. This site is full responsive, work both in desktop and mobile. Documentation page is also available is anyone want to understand concept of LCS.",
    technologies: [
      {
        _createdAt: "2022-10-31T08:42:54Z",
        _id: "9499e0bf-41b1-4bac-8cea-5c35b04d1364",
        _rev: "rhcaYWhPaxRceuOsRDRRah",
        _type: "skill",
        _updatedAt: "2022-10-31T08:52:41Z",
        image:
          "https://cdn.sanity.io/images/2rl84igg/production/7a32e220a9c5dc03bfb90e25fa7568ddfb4df6fa-48x48.png?w=2000&fit=max&auto=format",
        progress: 80,
        title: "HTML",
      },
      {
        _createdAt: "2022-10-31T08:43:33Z",
        _id: "14220d88-fada-41e7-9f25-89d20aad2c6c",
        _rev: "1F2rDWghP665irIyIkpjn2",
        _type: "skill",
        _updatedAt: "2022-10-31T08:52:33Z",
        image:
          "https://cdn.sanity.io/images/2rl84igg/production/e3c6d174dd3fb82e254758f80d7efc04c73d1bd3-48x48.png?w=2000&fit=max&auto=format",
        progress: 80,
        title: "CSS",
      },
      {
        _createdAt: "2022-10-31T08:41:54Z",
        _id: "8be891b2-f19e-4d0b-96fd-81dea460f052",
        _rev: "1F2rDWghP665irIyIkpwsW",
        _type: "skill",
        _updatedAt: "2022-10-31T08:52:50Z",
        image:
          "https://cdn.sanity.io/images/2rl84igg/production/94bc1067dd536f6a2a3e36ede52caf6ca916fb21-48x48.png?w=2000&fit=max&auto=format",
        progress: 85,
        title: "JavaScript",
      },
    ],
    title: "LCS Calculator",
  },
];

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex flex-col overflow-hidden text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase text-gray-500 tracking-[20px] text-xl sm:text-2xl">
        Projects
      </h3>

      <div className="realtive flex w-full overflow-y-hidden overflow-x-scroll scroll-smooth snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#66FCF1]/80">
        {projects?.map((project, i) => (
          <div
            key={project._id}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-10 sm:p-20 md:p-44 h-screen"
          >
            <Link href={project.linkToBuild}>
              <motion.img
                initial={{
                  y: -300,
                  opacity: 0,
                }}
                transition={{ duration: 1.2 }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                }}
                viewport={{ once: true }}
                src={project.image}
                alt=""
                className="rounded-lg w-64 h-36 md:w-72 md:h-56 xl:w-[450px] xl:h-[350px]"
              />
            </Link>
            <div className="space-y-3 sm:space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-lg sm:text-2xl lg:text-3xl font-semibold text-center">
                <span className="underline decoration-[#66FCF1]/50">
                  Project Details {i + 1} of {projects.length}:
                </span>{" "}
                {project?.title}
              </h4>

              <p className="text-xs sm:text-sm text-center md:text-left md:text-md">
                {project?.summary}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute w-full h-[500px] bg-[#66FCF1]/10 top-[30%] left-0 -skew-y-12" />
    </motion.div>
  );
};

export default Projects;
