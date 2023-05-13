import React from 'react'
import Banner from '../components/Banner'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

const Portfolio = () => {
    return (
        <>
            <Banner />
            <div className='md:px-32 md:py-10 px-5 py-5 bg-blue-100'>
                <About />
                <Skills />
                <Projects />
                <Contact />
            </div>
        </>
    )
}

export default Portfolio