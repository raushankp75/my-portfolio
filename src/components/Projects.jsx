import React from 'react'

import { Link } from 'react-router-dom';

// projects
import project1 from "../assets/images/Projects/weatherApi.png";
import project2 from "../assets/images/projects/movieApi.png";
import project3 from "../assets/images/projects/taskTracker.png";
import project4 from "../assets/images/projects/chatApp.png";
import project5 from "../assets/images/projects/noteTaking.png";
import project6 from "../assets/images/projects/collegeWebsite.png";


const projects = {
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
}



const Projects = () => {

    return (
        <div id='projects' className='md:py-0 py-5'>
            <div className='md:py-4 py-5'>
                <h3 className='title' data-aos="fade-down">{projects.title}</h3>
                <h3 className='subtitle' data-aos="fade-up">{projects.subtitle}</h3>
            </div>

            <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5'>
                {
                    projects.project_content.map((content, i) => (
                        <div key={i} data-aos="fade-down" data-aos-delay={i * 400} className="flex flex-col gap-y-5 bg-white rounded-3xl p-5 border-b-8 border-[#FAF9FD] h-fit hover:duration-200 hover:scale-105 hover:translate-y-2 cursor-pointer">
                            <img src={content.image} alt="..." />
                            <div className='flex flex-row justify-between px-2'>
                                <p className='font-bold font-Poppins'>{content.title}</p>
                                <Link to={content.project_detail_link}><button className='capitalize px-4 py-1 bg-gradient-to-r from-[#8c9697] to-[#748775] text-gray-200'>Detail</button></Link>
                                <Link to={content.live_url_link} className='font-bold text-gray '>Live URL</Link>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Projects