import React from 'react'
import { motion } from "framer-motion"

type Props = {}

const BackgroundCircles = (props: Props) => {
  return (
    <motion.div
    initial={{
      opacity:0,
    }}
    animate={{
      scale:[1,2,2,3,2,1],
      opacity:[0.1,0.3,0.5,0.8,0.5,0.3],
      borderRadius:["20%","40%","60%","80%","60%","40%"]
    }}
    transition={{
      duration:2.5
    }}
     className='relative flex items-center justify-center'>
        <div className='absolute border border-[#333333] rounded-full h-[200px] w-[200px] mt-52 animate-ping'/>
        <div className='absolute border border-[#333333] rounded-full h-[300px] w-[300px] mt-52'/>
        <div className='absolute border border-[#333333] rounded-full h-[500px] w-[500px] mt-52'/>
        <div className="absolute border border-[#66FCF1] rounded-full h-[650px] w-[650px] mt-52 animate-pulse"/>
        <div className="absolute border border-[#333333] rounded-full h-[800px] w-[800px] mt-52"/>
        <div/>
    </motion.div>
  )
}

export default BackgroundCircles