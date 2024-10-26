import React from 'react'
import { Cursor, useTypewriter} from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles';
import Link from "next/link"

const Hero = () => {
    const [text, count] = useTypewriter({
        words: [`Hello, from Abhinandan`, "Guy-who-loves-sweets", "<Loves To Code More/>"],
        loop: true,
        delaySpeed: 2000,
    });

  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center'>
        <BackgroundCircles/>
        <img src="/pic.jpg" className='relative rounded-full h-32 w-32 mx-auto object-cover'/>
        
        <div className='z-20'>
          <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>SDE1 @ Amazon</h2>

          {/* typer text */}
          <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
              <span className='mr-3'>{text}</span>
              <Cursor cursorColor='skyblue'/>
          </h1>

          {/* different links */}
          <div className='pt-5'>
            <Link href="#about">
              <button className='heroButton'>About</button>
            </Link>
            <Link href="#experience">
              <button className='heroButton'>Experience</button>
            </Link>
            <Link href="#skills">
              <button className='heroButton'>Skills</button>
            </Link>
            <Link href="#projects">
              <button className='heroButton'>Projects</button>
            </Link>
          </div>
        </div>
    </div>
  )
}

export default Hero