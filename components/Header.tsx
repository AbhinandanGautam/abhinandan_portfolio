import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";

const Header = () => {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        {/* social icons */}

        <SocialIcon
          url="https://github.com/AbhinandanGautam"
          fgColor="grey"
          bgColor="transparent"
        />

        <SocialIcon
          url="https://www.linkedin.com/in/abhinandan-gautam-4993881ba/"
          fgColor="grey"
          bgColor="transparent"
        />

        
        <SocialIcon
          url="https://drive.google.com/file/d/1jMe2L20leW4GgEKRHrSD23d1j-pVrti0/view?usp=sharing"
          fgColor="grey"
          bgColor="transparent"
        />

        <SocialIcon
          url="https://leetcode.com/nangal_wala_2003/"
          fgColor="grey"
          bgColor="transparent"
        />
      </motion.div>

      <Link href="#contact">
        <motion.div
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          className="flex flex-row items-center text-gray-300 cursor-pointer"
        >
          <SocialIcon
            className="cursor-pointer"
            network="email"
            fgColor="grey"
            bgColor="transparent"
          />
          <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
            Get In touch
          </p>
        </motion.div>
      </Link>
    </header>
  );
};

export default Header;
