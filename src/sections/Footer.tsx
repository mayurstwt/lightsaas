import React from 'react'
import logo from '@/assets/logosaas.png'
import Image from 'next/image'
import X from "@/assets/social-x.svg"
import Insta from "@/assets/social-insta.svg"
import Linkedin from "@/assets/social-linkedin.svg"
import Pinterest from "@/assets/social-pin.svg"
import Youtube from "@/assets/social-youtube.svg"

const Footer = () => {
  return (
    <footer className='bg-black text-[#BCBCBC] text-sm py-10 text-center'>
      <div className="container">
        <div className="inline-flex relative before:content-[''] before:w-full before:top-2 before:bottom-0 before:blur before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD98,#C2F0B1,#2FD8FE)] before:absolute">
        <Image src={logo} height={40} alt='Saas_logo' className='relative'/> 
        </div>
        <nav className='flex flex-col md:flex-row md:justify-center gap-6 mt-6'>
          <a href="#">About</a>
          <a href="#">Features</a>
          <a href="#">Customers</a>
          <a href="#">Blog</a>
          <a href="#">Contact</a>
          <a href="#">Careers</a>
        </nav>
        <div className='flex justify-center gap-6 mt-6'>
          <X/>
          <Youtube/>
          <Linkedin/>
          <Youtube/>
          <Pinterest/>
          <Insta/>
        </div>

        <p className='mt-6'>2024 All Rights Reserved</p>
      </div>
    </footer>
  )
}

export default Footer