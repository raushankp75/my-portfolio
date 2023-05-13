import React from 'react'
import { content } from '../contents/Content';

import { Link } from 'react-router-dom';

const Projects = () => {
    const { projects } = content;
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