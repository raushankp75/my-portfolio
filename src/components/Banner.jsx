import React, { useState } from "react";
import { Link } from "react-router-dom";

// external libraries
import Typewriter from "typewriter-effect";



// react icons
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiFillPhone } from "react-icons/ai";


const Banner = () => {

  // images
  const profilePic = "https://drive.google.com/uc?export=view&id=1H3UdTp3tuZyN0MyT12qZx8w_wGco6iDF"

  // for autotyping text
  const [state] = useState({
    main: "Build Minimal Website With Latest Technology",
  });

  return (
    <div id="/" className="md:min-h-[70vh] min-h-[80vh] w-full flex md:flex-row flex-col gap-x-8 items-center justify-between md:pt-12 pt-24 md:px-72 px-5 text-center bg-blue-200">
      <div className="flex items-center justify-between gap-10 p-3">
        <Link to='https://github.com/raushankp75' className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
          <AiFillGithub />
        </Link>
        <Link to='https://www.linkedin.com/in/raushankumar75/' className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
          <AiFillLinkedin />
        </Link>
        <Link to='https://wa.me/7079907765' className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
          <AiOutlineWhatsApp />
        </Link>
        <Link to='tel:+917079907765' className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
          <AiFillPhone />
        </Link>
      </div>

      {/* left */}
      <div data-aos="slide-right" className="flex flex-col gap-y-8">
        <div className="flex flex-col gap-y-5 max-w-[600px] md:mx-10 mx-4  my-0">
          <div className=" bg-clip-text text-blue-600 md:text-[34px] text-2xl font-semibold">
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                delay: 40,
                strings: ["I'm Raushan Kumar", "I'm a Web Developer"],
              }}
            />
          </div>
          <div className="tex-xl font-normal text-gray-700">{state.main}</div>
        </div>

        <div className="flex flex-row md:gap-x-10 gap-x-5 md:px-10 px-4">
          <Link to="https://drive.google.com/file/d/1BEbFdg9eLBgu72n8KQ_gHii7p2lQnrPT/view?usp=sharing">
            <button className="px-6 py-1">Resume</button>
          </Link>
          <Link to="mailto:raushankp75@gmail.com">
            <button className="px-6 py-1">Mail</button>
          </Link>
        </div>
      </div>

      {/* right */}
      <div className="md:w-[300px] w-[400px] md:px-0 px-20 md:pt-[55px] pt-10">
        <img src={profilePic} data-aos="slide-left" alt="profilePic" />
      </div>
    </div>
  );
};

export default Banner;
