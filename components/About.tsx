import React from 'react'
import { motion } from "framer-motion"

const About = () => {
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
     className='relative flex flex-col h-screen text-center md:flex-row md:text-left max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase text-gray-500 tracking-[20px] text-xl sm:text-2xl'>About</h3>

        <motion.img
        initial={{
            x:-200,
            opacity:0,
        }}
        transition={{
            duration:1.5,
        }}
        whileInView={{
            opacity:1,
            x:0,
        }}
        viewport={{
            once:true,
        }}
         src="https://cdn.sanity.io/images/2rl84igg/production/c1206b8e7fcf17a556aec1a7f4983eec1e509344-867x1156.jpg?w=2000&fit=max&auto=format"
        className='-mb-24 md:mb-0 flex-shrink-0 w-44 h-44 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[350px] xl:h-[450px]'/>

        <div className='space-y-10 px-0 md:px-10'>
            <h4 className='text-lg sm:text-3xl md:text-4xl font-semibold'>
                Here is a{" "}
                <span className='underline decoration-[#66FCF1]'>little</span>
                {" "}background
            </h4>
            <p className='text-xs sm:text-sm md:text-base'>
            Hello, I am Abhinandan Gautam. Currently I am doing B.Tech in Computer Science Engineering from NIT Jalandhar, Punjab. I am fullstack web developer with frontend in react framework and backend in both Node JS or flask. I am also good at Data Structures and Algorithms. I solved more than 400 problems on both leetcode and geeksforgeeks. I am 3 ⭐ coder at codechef. I have little interest in Data Science, Machine Learning and Cloud. I am working in field of web development form past 2 years and have enough knowledge to do large projects. Also I am incoming SDE intern at Amazon.
            </p>
        </div>
    </motion.div>
  )
}

export default About