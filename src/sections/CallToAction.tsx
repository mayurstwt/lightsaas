"use client"
import React, { useRef } from 'react'
import ArrowRight from "@/assets/arrow-right.svg"
import StarImage from "@/assets/star.png"
import SpringImage from "@/assets/spring.png"
import Image from 'next/image'
import { motion, useScroll, useTransform } from "framer-motion"

const CallToAction = () => {

  const sectionRef = useRef(null)

  const {scrollYProgress} = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  })

  const translateY = useTransform(scrollYProgress, [0,1], [150,-150])

  return (
    <section ref={sectionRef} className='bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip'>
      <div className='container'>
        <div className="section-heading relative">
          <h2 className='section-title'>Sign up for free today</h2>
          <p className='section-description mt-5'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam recusandae qui ullam velit? Optio, at!
          </p>
          <motion.img src={StarImage.src} alt='star_iamge' width={360} className='absolute -left-[350px] -top-[137px]'
            style={{translateY}}
          />
          <motion.img src={SpringImage.src} alt='spring_iamge' width={360} className='absolute -right-[331px] -top-[19px]' style={{translateY}}/>
        </div>
        <div className='flex gap-2 mt-10 justify-center'>
          <button className='btn btn-primary'>Get for free</button>
          <button className='btn btn-text gap-1'>Learn more <ArrowRight className="h-5 w-5" /></button>
        </div>
      </div>
    </section>
  )
}

export default CallToAction