"use client"
import React from 'react'
import logo1 from "@/assets/logo-acme.png"
import logo2 from "@/assets/logo-apex.png"
import logo3 from "@/assets/logo-celestial.png"
import logo4 from "@/assets/logo-echo.png"
import logo5 from "@/assets/logo-pulse.png"
import logo6 from "@/assets/logo-quantum.png"
import Image from 'next/image'
import { motion } from "framer-motion"

export const LogoTicker = () => {
  return (
    <div className='py-8 md:py-12 bg-white'>
      <div className='container'>
        <div className='flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]'>
          <motion.div className='flex gap-14 flex-none pr-14'
            animate={{
              translateX: "-50%",
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
            >
            <Image className='logo-ticker-image' src={logo1} alt='logo1' />
            <Image className='logo-ticker-image' src={logo2} alt='logo2' />
            <Image className='logo-ticker-image' src={logo3} alt='logo3' />
            <Image className='logo-ticker-image' src={logo4} alt='logo4' />
            <Image className='logo-ticker-image' src={logo5} alt='logo5' />
            <Image className='logo-ticker-image' src={logo6} alt='logo6' />

            <Image className='logo-ticker-image' src={logo1} alt='logo1' />
            <Image className='logo-ticker-image' src={logo2} alt='logo2' />
            <Image className='logo-ticker-image' src={logo3} alt='logo3' />
            <Image className='logo-ticker-image' src={logo4} alt='logo4' />
            <Image className='logo-ticker-image' src={logo5} alt='logo5' />
            <Image className='logo-ticker-image' src={logo6} alt='logo6' />
          </motion.div>
        </div>
      </div>
    </div>
  )
}
