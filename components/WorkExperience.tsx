import React from "react";
import { motion } from "framer-motion";



const  experiences = [
    {
      _createdAt: "2022-10-31T09:11:56Z",
      _id: "2b09037b-c8b1-4431-ac3e-4a29ae27c54a",
      _rev: "j2Qg7fhhqYPp6sQH9kdfRi",
      _type: "experience",
      _updatedAt: "2022-10-31T09:11:56Z",
      company: "GDSC NIT-J",
      companyImage: "https://cdn.sanity.io/images/2rl84igg/production/a2339727ac7ef9ef8ad62b5ece641c5a71e352a2-200x200.jpg?w=2000&fit=max&auto=format",
      dateStarted: "2020-11-01",
      isCurrentlyWorkingHere: true,
      jobTitle: "Volunteer",
      points: [
        "Coding Club of NITJ",
        "Conduct hackathons and events",
        "Focus on development skills"
      ],
      technologies: [
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
          _createdAt: "2022-10-31T08:46:12Z",
          _id: "afb723bc-be50-4197-929f-5af338005140",
          _rev: "LLPpfIE1lV47ytP4JTw85W",
          _type: "skill",
          _updatedAt: "2022-11-02T12:26:48Z",
          image: "https://cdn.sanity.io/images/2rl84igg/production/d6e4b7bd3a0ae010ed3107618ee5128f5c6d919f-400x400.png?w=2000&fit=max&auto=format",
          progress: 85,
          title: "MongoDB",
        }
      ],
    },
    {
      _createdAt: "2022-10-30T18:45:11Z",
      _id: "fa80d2bf-3f7c-495a-8f27-1009eeefaa2a",
      _rev: "rhcaYWhPaxRceuOsRDWBcE",
      _type: "experience",
      _updatedAt: "2022-10-31T09:02:13Z",
      company: "OPENGEEST SOCIETY",
      companyImage: "https://cdn.sanity.io/images/2rl84igg/production/a80f5018aed4d0b097c65dc63a27392c338cbbba-200x200.jpg?w=2000&fit=max&auto=format",
      dateStarted: "2022-09-01",
      isCurrentlyWorkingHere: true,
      jobTitle: "Team Member",
      points: [
        "Core Team Member",
        "Educational Club",
        "Spread Technology and Career Awareness"
      ],
      technologies: [
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
          _createdAt: "2022-10-31T08:43:53Z",
          _id: "7d9b1687-490e-48b5-b6c3-b3864049a1b8",
          _rev: "1F2rDWghP665irIyIkpaUS",
          _type: "skill",
          _updatedAt: "2022-10-31T08:52:22Z",
          image: "https://cdn.sanity.io/images/2rl84igg/production/0d21d36a6cf60922c8800dfecaedb0874eeabd20-512x456.png?w=2000&fit=max&auto=format",
          progress: 80,
          title: "React JS",
        }
      ],
    }
];

const WorkExperience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative flex flex-col h-screen overflow-hidden md:flex-row text-left max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase text-gray-500 tracking-[20px] text-xl sm:text-2xl">
        Experience
      </h3>

      <div className="w-full flex space-x-5 overflow-x-scroll scroll-smooth p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {experiences?.map((experience) => (
          <article key={experience._id} className='flex flex-col rounded-lg items-center space-y-5 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <motion.img
        initial={{
            y:-100,
            opacity:0,
        }}
        transition={{duration:1.5}}
        whileInView={{
            y:0,
            opacity:1,
        }}
        viewport={{once:true}}
         src={experience.companyImage} alt="image"
         className='w-28 h-28 rounded-full xl:w-[120px] xl:h-[120px] object-cover object-center' />

         <div className='px-0 md:px-10'>
            <h4 className='text-2xl md:text-3xl font-light'>{experience?.jobTitle}</h4>
            <p className='font-bold text-lg md:text-xl mt-1'>{experience?.company}</p>
            <div className='flex space-x-2 my-1'>
                {experience.technologies.map((technology) => (
                    <img className='h-10 w-10 rounded-full' key={technology._id} src={technology.image} alt="" />
                ))}
            </div>
            <p className='uppercase py-3 text-gray-300'>{new Date(experience.dateStarted).toDateString()} - {" "} 
            { experience.isCurrentlyWorkingHere ? "Present" : ""}</p>
            <ul className='list-disc space-y-2 text-sm md:text-md'>
                {experience.points.map((point,i) => (
                    <li key={i}>{point}</li>
                ))}
            </ul>
         </div>
    </article>
        ))}
      </div>
    </motion.div>
  );
};

export default WorkExperience;
