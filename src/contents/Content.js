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

// projects
import project1 from "../assets/images/projects/weatherApi.png";
import project2 from "../assets/images/projects/movieApi.png";
import project3 from "../assets/images/projects/taskTracker.png";
import project4 from "../assets/images/projects/chatApp.png";
import project5 from "../assets/images/projects/noteTaking.png";
import project6 from "../assets/images/projects/collegeWebsite.png";

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

  projects: {
    title: "Projects",
    subtitle: "These Are My Work",
    project_content: [
      {
        title: "Live Weather API",
        image: project1,
        project_detail_link: '/projectdetail',
        live_url_link: 'https://current-weather-api-4.netlify.app/'
      },
      {
        title: "Hollywood Movie API",
        image: project2,
        project_detail_link: '/projectdetail',
        live_url_link: 'https://react-movie-api88.netlify.app/'
      },
      {
        title: "Task Tracker - TODO",
        image: project3,
        project_detail_link: '/projectdetail',
        live_url_link: 'https://task-tracker-cb.netlify.app/'
      },
      {
        title: "Note Taking",
        image: project4,
        project_detail_link: '/projectdetail',
        live_url_link: 'https://63d4113c8864f5263af4c1a4--mychatapp-react.netlify.app/'
      },
      {
        title: "Chat App",
        image: project5,
        project_detail_link: '/projectdetail',
        live_url_link: 'https://note-taking-app-react-88.netlify.app/'
      },
      {
        title: "College Website",
        image: project6,
        project_detail_link: '/projectdetail',
        live_url_link: 'https://college-wgt-test.000webhostapp.com/'
      },
      // {
      //   title: "My First Portfolio",
      //   image: project7,
      //   project_detail_link: '/projectdetail',
      //   live_url_link: 'https://mypersonalportfolioapp.netlify.app/'
      // },
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
