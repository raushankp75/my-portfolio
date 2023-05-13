// skills
import html from "../assets/images/Skills/html.png";
import css from "../assets/images/Skills/css.png";
import js from "../assets/images/Skills/js.png";
import reactjs from "../assets/images/Skills/react.png";
import java from "../assets/images/Skills/java.png";
import mysql from "../assets/images/Skills/mysql.png";
import figma from "../assets/images/Skills/figma.png";
import github from "../assets/images/Skills/github.png";
import aws from "../assets/images/Skills/aws.png";
import nodejs from "../assets/images/Skills/node.png";
import expressjs from "../assets/images/Skills/expressjs.png";
import mongoDB from "../assets/images/Skills/mongo.png";
import tailwindCSS from "../assets/images/Skills/tailwind.png";
import materialUI from "../assets/images/Skills/material.png";
import framerMotion from "../assets/images/Skills/framer.svg";



// contact
import contactPic from "../assets/images/contact/contact.jpg"

// react icons
import { MdArrowForward } from "react-icons/md";
import { SiGmail } from "react-icons/si";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiFillPhone } from "react-icons/ai";


export const content = {
  skills: {
    title: "Skills",
    subtitle: "What I Can Do",
    skills_content: [

      {
        name: "mongoDB",
        logo: mongoDB,
      },
      {
        name: "ExpressJS",
        logo: expressjs,
      },
      {
        name: "ReactJS",
        logo: reactjs,
      },
      {
        name: "NodeJS",
        logo: nodejs,
      },
      {
        name: "Tailwind CSS",
        logo: tailwindCSS,
      },
      {
        name: "Material UI",
        logo: materialUI,
      },
      {
        name: "Framer",
        logo: framerMotion,
      },
      {
        name: "HTML",
        logo: html,
      },
      {
        name: "CSS",
        logo: css,
      },
      {
        name: "JavaScript",
        logo: js,
      },
      {
        name: "Figma",
        logo: figma,
      },
      {
        name: "Git",
        logo: github,
      },
      {
        name: "MySql",
        logo: mysql,
      },
      {
        name: "Java",
        logo: java,
      },

      {
        name: "AWS",
        logo: aws,
      },

    ],
  },

  

  contact: {
    title: "Contact Me",
    subtitle: "Send a message to me",
    contactPic: contactPic,
    MyName: "Raushan Kumar",
    MyRole: "Web Developer",
    social_media: [
      {
        text: "raushankp75@gmail.com",
        icon: SiGmail,
        link: "mailto:raushankp75@gmail.com",
      },
      {
        text: "Whatsapp",
        icon: AiOutlineWhatsApp,
        link: "https://wa.me/7079907765",
      },
      {
        text: "+917079907765",
        icon: AiFillPhone,
        link: "",
      },
    ],
  }
}
