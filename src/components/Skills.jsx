// import content
import React, { useState } from 'react'
import { content } from '../contents/Content';

// import modal package
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        maxWidth: '23rem',
        width: '90%'
    },
    overlay: {
        padding: '2rem',
    }
};
Modal.setAppElement('#root');





const Skills = () => {
    const { skills } = content;

    const [modalIsOpen, setIsOpen] = useState(false);

    const [selectSkill, setSelectSkill] = useState(null)

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }



    return (
        <div id='skill' className='min-h-fit bg-bg_light_primary'>

            {/* Modal */}
            <Modal isOpen={modalIsOpen} onRequestClose={closeModal}
                style={customStyles}>

                <div className="flex items-center gap-2">
                    <img className='h-10' src={selectSkill?.logo} alt="..." />
                    <h6>{selectSkill?.name}</h6>
                </div>
                <br />
                <ul className='list-decimal px-4 font-Poppins sm:text-sm text-xs !leading-7'>
                    <li>Lorem ipsum dolor sit amet consectetur.</li>
                    <li>Lorem ipsum dolor sit amet consectetur.</li>
                    <li>Lorem ipsum dolor sit amet consectetur.</li>
                    <li>Lorem ipsum dolor sit amet consectetur.</li>
                    <li>Lorem ipsum dolor sit amet consectetur.</li>
                    <li>Lorem ipsum dolor sit amet consectetur.</li>
                    <li>Lorem ipsum dolor sit amet consectetur.</li>
                </ul>
                <br />
                <div className='flex justify-end'>
                    <button onClick={closeModal} className='px-4 py-1'>close</button>
                </div>
            </Modal>



            {/* Content */}
            <div className='md:py-14 py-5'>
                <h2 className='title' data-aos="fade-down">{skills.title}</h2>
                <h4 className='subtitle' data-aos="fade-up">{skills.subtitle}</h4>
                <br />
                <div className='flex flex-wrap gap-10 justify-center'>
                    {
                        skills.skills_content.map((skill, i) => (
                            <div key={i} data-aos="fade-up" data-aos-delay={i * 200} onClick={() => { setSelectSkill(skill); openModal(); console.log(skill); }} className=''>
                                {
                                    <div className="flex flex-col justify-center items-center bg-white rounded-full shadow-2xl px-2 py-2 h-[120px] w-[120px] ease-in hover:duration-200 hover:scale-105 hover:translate-y-2 cursor-pointer">
                                        <div>
                                            <img src={skill.logo} alt="..." className='w-10 group-hover:scale-125 duration-200' />
                                        </div>
                                        <div>
                                            <h6>{skill.name}</h6>
                                        </div>
                                    </div>
                                }
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Skills