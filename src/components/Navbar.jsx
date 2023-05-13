import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";

// react icons
import { RiMenu3Fill } from "react-icons/ri";
import { AiFillCloseCircle } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiFillPhone } from "react-icons/ai";


const Navbar = () => {
  const [navMenu, setNavMenu] = useState(false);
  const [shadow, setShadow] = useState(false);

  const handleNavMenu = () => {
    setNavMenu(!navMenu);
  };


  useEffect(()=>{
    const handleShadow = () => {
      if(window.scrollY >= 90) {
        setShadow(true)
      } else {
        setShadow(false)
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, []);




  return (
    <div className= {shadow ? 'fixed w-full h-20 z-[10000] bg-blue-200 shadow-md' : 'fixed w-full h-20 z-[10000] bg-blue-200'}>
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        {/* <p className="text-3xl font-semibold">Raushan Kumar</p> */}
        <div className="flex items-center justify-between p-4 w-[60%] sm:w-[25%]">
          <Link to='https://github.com/raushankp75' className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
            <AiFillGithub />
          </Link>
          <Link to='https://www.linkedin.com/in/raushankumar75/' className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
            <AiFillLinkedin />
          </Link>
          <Link to='https://wa.me/7079907765' className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
            <AiOutlineWhatsApp />
          </Link>
          <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
            <AiFillPhone />
          </div>
        </div>

        {/* navlink */}
        <div>
          <ul className="hidden md:flex ">
            <a href="/">
              <li className="ml-10 text-sm uppercase hover:border-b-2 hover:border-b-orange-500 font-semibold">Main</li>
            </a>
            <a href="/#about">
              <li className="ml-10 text-sm uppercase hover:border-b-2 hover:border-b-orange-500 font-semibold">About</li>
            </a>
            <a href="/#skill">
              <li className="ml-10 text-sm uppercase hover:border-b-2 hover:border-b-orange-500 font-semibold">Skills</li>
            </a>
            <a href="/#projects">
              <li className="ml-10 text-sm uppercase hover:border-b-2 hover:border-b-orange-500 font-semibold">
                Projects
              </li>
            </a>
            <a href="/#contact">
              <li className="ml-10 text-sm uppercase hover:border-b-2 hover:border-b-orange-500 font-semibold">
                Contact
              </li>
            </a>
          </ul>

          {/* Hamburger icon - mobile */}
          <div onClick={handleNavMenu} className="md:hidden cursor-pointer">
            <RiMenu3Fill size={25} />
          </div>
        </div>
      </div>

      {/* nav menus - mobile */}
      <div
        className={
          navMenu
            ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70"
            : ""
        }
      >
        <div
          className={
            navMenu
              ? "fixed left-0 top-0 w-[75%] sm:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between border-b-2 border-gray-300 pb-2">
              <p className="text-2xl font-semibold">Raushan Kumar</p>

              {/* close icon - mobile */}
              <div
                onClick={handleNavMenu}
                className="rounded-full shadow-lg shadow-gray-400 cursor-pointer"
              >
                <AiFillCloseCircle size={25} />
              </div>
            </div>
          </div>

          {/* navlink - mobile */}
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <a href="/">
                <li className="py-4 text-sm">Main</li>
              </a>
              <a href="/#about">
                <li className="py-4 text-sm">About</li>
              </a>
              <a href="/#skill">
                <li className="py-4 text-sm">Skills</li>
              </a>
              <a href="/#projects">
                <li className="py-4 text-sm">Projects</li>
              </a>
              <a href="/#contact">
                <li className="py-4 text-sm">Contact</li>
              </a>
            </ul>
            <p className="pt-40 uppercase text-sm tracking-widest text-[#5651e5]">
              Hire me for developing your modern website
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
