"use client";
import React, { useState, useEffect, useRef } from "react";
import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/logosaas.png";
import MenuIcon from "@/assets/menu.svg";
import CrossIcon from "@/assets/cross-svgrepo-com.svg";
import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);
  const handleLinkClick = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setIsMenuOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <div className="flex items-center justify-center bg-black text-white text-sm py-3 gap-3">
        <p className="text-white/60 hidden md:block">Streamline your workflow and boost your productivity</p>
        <div className="inline-flex gap-1 items-center">
          <p>Get started for free</p>
          <ArrowRight className="h-4 w-4" />
        </div>
      </div>
      <header className="sticky top-0 backdrop-blur-sm z-20">
        <div className="py-5">
          <div className="container flex justify-between items-center">
            <Image src={Logo} height={40} width={40} alt="logo" />
            <button onClick={toggleMenu} className="md:hidden">
              {isMenuOpen ? (
                <CrossIcon className="h-7 w-7" /> // Display cross icon when menu is open
              ) : (
                <MenuIcon className="h-7 w-7" /> // Display menu icon when menu is closed
              )}
            </button>
            <nav className="hidden md:flex gap-6 text-black/60 items-center">
              <a href="#">About</a>
              <a href="#">Features</a>
              <a href="#">Customers</a>
              <a href="#">Updates</a>
              <a href="#">Help</a>
              <button className="btn btn-primary">Get for free</button>
            </nav>
            {isMenuOpen && (
              <div ref={menuRef} className="md:hidden absolute top-14 right-[6%] rounded-2xl w-3/4 bg-white text-black shadow-lg py-4">
                <nav className="flex flex-col items-center gap-4">
                  <a href="#" onClick={handleLinkClick}>About</a>
                  <a href="#" onClick={handleLinkClick}>Features</a>
                  <a href="#" onClick={handleLinkClick}>Customers</a>
                  <a href="#" onClick={handleLinkClick}>Updates</a>
                  <a href="#" onClick={handleLinkClick}>Help</a>
                  <button className="btn btn-primary" onClick={handleLinkClick}>Get for free</button>
                </nav>
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
