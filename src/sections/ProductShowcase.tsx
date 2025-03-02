"use client"
import Image from 'next/image'
import React, { useRef } from 'react'
import productImage from "@/assets/product-image.png"
import PyramidImage from "@/assets/pyramid.png"
import TubeImage from "@/assets/tube.png"
import {motion, useScroll, useTransform} from "framer-motion"

const ProductShowcase = () => {
  const sectionRef = useRef(null);
  const {scrollYProgress} =  useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  const translateY = useTransform(scrollYProgress, [0,1], [150, -150]);
  return (
    <section ref={sectionRef} className='bg-gradient-to-b overflow-x-clip from-[#FFFFFF] to-[#D2DCFF] py-24'>
      <div className='container'>
        <div className='section-heading'>
          <div className="flex items-center justify-center">
            <div className='tag'>
              Boost your productivity
            </div>
          </div>
          <h2 className='section-title mt-5'>
            A more effective way to manage your tasks
          </h2>
          <p className='section-description mt-5'>
            Effortlessly turn your tasks into actionable goals, and track your progress
            with a clear and concise overview.
          </p>
        </div>
        <div className='relative'>
          <Image src={productImage} alt='product-image' className='mt-10' />
          <motion.img src={PyramidImage.src} alt="pyramid_image" className='hidden md:block absolute -right-36 -top-32' height={262} width={262} style={{translateY}}/>
          <motion.img height={248} width={248} src={TubeImage.src} alt="tube_image" className='hidden md:block absolute -left-36 bottom-24' style={{translateY}}/>
        </div>
      </div>
    </section>
  )
}

export default ProductShowcase