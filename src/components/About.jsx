import React, { useEffect, useRef } from 'react'
import { useInView, useMotionValue, useSpring } from 'framer-motion'


// framer motion to count number
const AnimatedNumbers = ({value}) => {
    const ref = useRef(null);

    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000 })
    const isInView = useInView(ref, {once: true});

    useEffect(() => {
        if(isInView){
            motionValue.set(value)
        }
    }, [isInView, value, motionValue])


    useEffect(() => {
        springValue.on("change", (latest) => {
            // console.log(latest);
            if(ref.current && latest.toFixed(0) <= value){
                ref.current.textContent = latest.toFixed(0);
            }
        })
    }, [springValue, value])

    return <span ref={ref}></span>
}


const About = () => {
    return (
        <div id='about' className='md:min-h-[60vh] min-h-[85vh] z-[100]'>
            <h4 className='title' data-aos="fade-down">About Me</h4>
            <h4 className='subtitle' data-aos="fade-up">Who I Am</h4>

            <div  className=' flex md:flex-row flex-col justify-between gap-x-10 gap-y-10 pt-5'>
                {/* first */}
                <div data-aos="slide-right" className='flex flex-col gap-y-4'>
                    <p className='tracking-wide md:text-xl text-base text-justify'>Hi, I'm Raushan Kumar, a Web Developer and Professional in UI design at Frontend Side. I have Created minimal Frontend which is more attractive and usefull. I have always looking for new and innovative ways to bring my client's visions to life.</p>
                    <p className='tracking-wide md:text-xl text-base text-justify'>Basically i'm currently a MCA student. I have learned and explored a lot by myself in less time in college time.</p>
                    <p className='tracking-wide md:text-xl text-base text-justify'>I am currently working on MERN Stack Technology, which is use to create more modern website and also reduce load time.</p>
                    <p className='tracking-wide md:text-xl text-base text-justify'>Also Can show the client's idea as a website, which can more usefull for anyone</p>
                </div>

                {/* second */}
                <div data-aos="slide-left" className='col-span-2 flex md:flex-col flex-row items-end justify-between md:w-[50%] w-[90%]'>
                    <div className='flex flex-col items-end justify-center'>
                        <span className='inline-block md:text-7xl text-5xl font-bold'><AnimatedNumbers value={10} />+</span>
                        <h3 className='md:text-xl text-base font-medium capitalize text-black/75'>Projects Completed</h3>
                    </div>
                    <div className='flex flex-col items-end justify-center'>
                        <span className='inline-block md:text-7xl text-5xl font-bold'><AnimatedNumbers value={6} />+</span>
                        <h3 className='md:text-xl text-base font-medium capitalize text-black/75'>Months Of Experience</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About