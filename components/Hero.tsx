import React from 'react'
import { Cursor, useTypewriter} from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles';
import Link from "next/link"

const Hero = () => {
    const [text, count] = useTypewriter({
        words: [`Hello, from Abhinandan`, "Guy-who-loves-coffee", "<Loves_To_Code_More/>"],
        loop: true,
        delaySpeed: 2000,
    });

  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center'>
        <BackgroundCircles/>
        <img src="https://cdn.sanity.io/images/2rl84igg/production/b6858ff1f65a971e3e834e3d5d2f0033278601d9-556x571.jpg?w=2000&fit=max&auto=format" className='relative rounded-full h-32 w-32 mx-auto object-cover'/>
        
        <div className='z-20'>
          <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>Software Engineer</h2>

          {/* typer text */}
          <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
              <span className='mr-3'>{text}</span>
              <Cursor cursorColor='yellow'/>
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