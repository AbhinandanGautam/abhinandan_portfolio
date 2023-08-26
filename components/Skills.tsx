import React from "react";
import { motion } from "framer-motion";


const skills= [
  {
    _createdAt: "2022-10-31T08:23:46Z",
    _id: "001506e2-c923-4cad-9dbf-7ee1df2af235",
    _rev: "rhcaYWhPaxRceuOsRDRfSK",
    _type: "skill",
    _updatedAt: "2022-10-31T08:53:09Z",
    image: "https://cdn.sanity.io/images/2rl84igg/production/0a0f777edda99668e2a3f3c27d6116dd1755e8c8-456x512.png?w=2000&fit=max&auto=format",
    progress: 70,
    title: "C",
  },
  {
    _createdAt: "2022-10-31T08:43:33Z",
    _id: "14220d88-fada-41e7-9f25-89d20aad2c6c",
    _rev: "1F2rDWghP665irIyIkpjn2",
    _type: "skill",
    _updatedAt: "2022-10-31T08:52:33Z",
    image: "https://cdn.sanity.io/images/2rl84igg/production/026715f84a02e7dda145684caf58be0688703855-100x100.png?rect=0,0,100,97&w=2000&fit=max&auto=format",
    progress: 70,
    title: "TypeScript",
  },
  {
    _createdAt: "2022-10-31T08:49:32Z",
    _id: "1cf9de06-8d40-488a-b2e1-2547638e3649",
    _rev: "LLPpfIE1lV47ytP4JTrZ1W",
    _type: "skill",
    _updatedAt: "2022-11-02T12:25:10Z",
    image: "https://cdn.sanity.io/images/2rl84igg/production/ae35edce19e64c53e5d455b22e8a2c82d093d4c9-1176x1056.png?w=2000&fit=max&auto=format",
    progress: 70,
    title: "Next JS",
  },
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
    _createdAt: "2022-10-31T08:46:52Z",
    _id: "5e9568a4-267f-473a-88d6-02b368d328ce",
    _rev: "4QieMMYW16Qi2WzTeiz65H",
    _type: "skill",
    _updatedAt: "2022-11-02T12:27:26Z",
    image: "https://cdn.sanity.io/images/2rl84igg/production/c6a43e73cef9815b015c92c122fd5f17dfa2e26d-300x300.png?w=2000&fit=max&auto=format",
    progress: 85,
    title: "MySQL",
  },
  {
    _createdAt: "2022-10-31T08:45:15Z",
    _id: "62ff3690-9f4c-4c7c-9a90-f7660d5c805c",
    _rev: "4QieMMYW16Qi2WzTeiwNcm",
    _type: "skill",
    _updatedAt: "2022-11-02T12:26:02Z",
    image: "https://cdn.sanity.io/images/2rl84igg/production/b524e02aea6e32b20371e1e2db13100974d4c2c6-920x920.png?w=2000&fit=max&auto=format",
    progress: 70,
    title: "Express JS",
  },
  {
    _createdAt: "2022-10-31T08:39:45Z",
    _id: "6cad84c2-cefb-4354-9acc-eb56483cda25",
    _rev: "j2Qg7fhhqYPp6sQH9kRTIV",
    _type: "skill",
    _updatedAt: "2022-10-31T08:52:59Z",
    image: "https://cdn.sanity.io/images/2rl84igg/production/0bcf6414665b3a3749cb4ca7eebb4165ed85fb9b-456x512.png?w=2000&fit=max&auto=format",
    progress: 90,
    title: "C++",
  },
  {
    _createdAt: "2022-10-31T08:44:31Z",
    _id: "746b15d3-dee5-4383-8f22-69b5f51bd0fb",
    _rev: "j2Qg7fhhqYPp6sQH9kQzb8",
    _type: "skill",
    _updatedAt: "2022-10-31T08:52:13Z",
    image: "https://cdn.sanity.io/images/2rl84igg/production/15ce9994b3a8c6a0a89d45046ab1767e2b2d3e3c-456x512.png?w=2000&fit=max&auto=format",
    progress: 80,
    title: "Node JS",
  },
  {
    _createdAt: "2022-10-31T08:50:40Z",
    _id: "78bccefa-be5e-488f-b817-6b0c8db32d21",
    _rev: "j2Qg7fhhqYPp6sQH9kQBdd",
    _type: "skill",
    _updatedAt: "2022-10-31T08:51:11Z",
    image: "https://cdn.sanity.io/images/2rl84igg/production/46ff7544504aa7a24b70ab75ec21fbac8ff28349-512x512.png?w=2000&fit=max&auto=format",
    progress: 85,
    title: "Git",
  },
  {
    _createdAt: "2022-10-31T08:43:53Z",
    _id: "7d9b1687-490e-48b5-b6c3-b3864049a1b8",
    _rev: "1F2rDWghP665irIyIkpaUS",
    _type: "skill",
    _updatedAt: "2022-10-31T08:52:22Z",
    image: "https://cdn.sanity.io/images/2rl84igg/production/0d21d36a6cf60922c8800dfecaedb0874eeabd20-512x456.png?w=2000&fit=max&auto=format",
    progress: 80,
    title: "React JS",
  },
  {
    _createdAt: "2022-10-31T08:41:54Z",
    _id: "8be891b2-f19e-4d0b-96fd-81dea460f052",
    _rev: "1F2rDWghP665irIyIkpwsW",
    _type: "skill",
    _updatedAt: "2022-10-31T08:52:50Z",
    image: "https://cdn.sanity.io/images/2rl84igg/production/94bc1067dd536f6a2a3e36ede52caf6ca916fb21-48x48.png?w=2000&fit=max&auto=format",
    progress: 85,
    title: "JavaScript",
  },
  {
    _createdAt: "2022-10-31T08:42:54Z",
    _id: "9499e0bf-41b1-4bac-8cea-5c35b04d1364",
    _rev: "rhcaYWhPaxRceuOsRDRRah",
    _type: "skill",
    _updatedAt: "2022-10-31T08:52:41Z",
    image: "https://cdn.sanity.io/images/2rl84igg/production/42eadeaaeedf47e6dfde046d75174c118a3f063d-150x110.png?w=2000&fit=max&auto=format",
    progress: 60,
    title: "AWS",
  },
  {
    _createdAt: "2022-10-31T08:46:12Z",
    _id: "afb723bc-be50-4197-929f-5af338005140",
    _rev: "LLPpfIE1lV47ytP4JTw85W",
    _type: "skill",
    _updatedAt: "2022-11-02T12:26:48Z",
    image: "https://cdn.sanity.io/images/2rl84igg/production/d6e4b7bd3a0ae010ed3107618ee5128f5c6d919f-400x400.png?w=2000&fit=max&auto=format",
    progress: 85,
    title: "MongoDB",
  },
  {
    _createdAt: "2022-11-04T15:20:14Z",
    _id: "9543f1e7-871d-44b1-90b3-728e47045327",
    _rev: "4QieMMYW16Qi2WzTfCQb2H",
    _type: "skill",
    _updatedAt: "2022-11-04T15:20:14Z",
    image: "https://cdn.sanity.io/images/2rl84igg/production/58f072b718b2c43df0b8330a1c28658bba06ddb2-2048x2048.png?w=2000&fit=max&auto=format",
    progress: 80,
    title: "Tailwind CSS",
  },
];

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase text-gray-500 tracking-[20px] text-xl sm:text-2xl">
        Skills
      </h3>

      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over a skill for current proficiency.
      </h3>

      <div className="grid mt-[75px] grid-cols-3 sm:grid-cols-4 gap-5" style={{"marginTop" : "90px"}}>
        {skills?.slice(0, skills.length / 2 + 1).map((skill) => (
          <div key={skill._id} className='group relative flex cursor-pointer'>
              <motion.img
              initial={{
                  x:-100,
                  opacity:0,
              }}
              transition={{
                  duration:1,
              }}
              whileInView={{
                  x:0,
                  opacity:1,
              }}
              src={skill.image} alt="" 
              className='rounded-full border border-gray-500 object-cover h-16 w-16 sm:h-20 sm:w-20 filter group-hover:grayscale transition duration-300 ease-in-out'/>
      
              <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-16 w-16 sm:h-20 sm:w-20 rounded-full z-0'>
                  <div className='flex items-center justify-center h-full'>
                      <p className='text-2xl font-bold text-black opacity-100'>{skill.progress}{"%"}</p>
                  </div>
              </div>
          </div>
        ))}

        {skills?.slice(skills.length / 2 + 1, skills.length).map((skill) => (
          <div key={skill._id} className='group relative flex cursor-pointer'>
              <motion.img
              initial={{
                  x: 100,
                  opacity:0,
              }}
              transition={{
                  duration:1,
              }}
              whileInView={{
                  x:0,
                  opacity:1,
              }}
              src={skill.image} alt="" 
              className='rounded-full border border-gray-500 object-cover h-16 w-16 sm:h-20 sm:w-20 filter group-hover:grayscale transition duration-300 ease-in-out'/>
      
              <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-16 w-16 sm:h-20 sm:w-20 rounded-full z-0'>
                  <div className='flex items-center justify-center h-full'>
                      <p className='text-2xl font-bold text-black opacity-100'>{skill.progress}{"%"}</p>
                  </div>
              </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
