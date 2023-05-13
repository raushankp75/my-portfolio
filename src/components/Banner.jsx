import React, { useState } from "react";
import {Link} from "react-router-dom";

// external libraries
import Typewriter from "typewriter-effect";

// Image
import profilePic from "../assets/profilePic.png";

// react icons
// import { SiGmail } from "react-icons/si";
// import { IoDocumentAttachSharp } from "react-icons/io";


const Banner = () => {

  // for autotyping text
  const [state] = useState({
    main: "Build Minimal Website With Latest Technology",
  });

  return (
    <div id="/" className="md:min-h-[70vh] min-h-[80vh] w-full flex md:flex-row flex-col gap-x-8 items-center justify-between md:pt-12 pt-24 md:px-72 px-5 text-center bg-blue-200">
      {/* left */}
      <div data-aos="slide-right" className="flex flex-col gap-y-12">
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
          <Link to="https://drive.google.com/file/d/1w2IxTGsz1n1moWpvq6TlTTHNilMNVi_G/view?usp=sharing">
            <button className="px-6 py-1">Resume</button>
          </Link>
          <Link to="mailto:https://raushankp75@gmail.com">
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
