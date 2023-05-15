import React, { useRef } from 'react'
import { content } from '../contents/Content';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
// import toast, { Toaster } from 'react-hot-toast';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { HiChevronDoubleUp } from 'react-icons/hi'


const Contact = () => {
    const { contact } = content;

    const form = useRef();


    // Send Email
    const sendEmail = (e) => {
        e.preventDefault();

        // you can add keys in env file
        emailjs.sendForm('service_rl0tkko', 'template_c5jo9df', form.current, 'iDYEOqmDfenlrJhOn')
            .then((result) => {
                console.log(result.text);
                // clear all input field values
                form.current.reset();
                // success toast message
                message('Email send successfully!');
            }, (error) => {
                console.log(error.text);
                toast.error(error.text);
                message('Server problem try after some time!');
            });
    };




    /* message */
    const message = (Test) => {
        // alert('Data added successfully!');
        if (Test) {
            // console.log('here');
            toast.success('Email send successfully!', {
                position: "top-center"
            });
        } else {
            toast.error('Server problem try after some time!', {
                position: "top-center"
            });
        }

    }


    return (
        <div id='contact' className='w-full mt-10'>
            <div className='md:py-4 py-5'>
                <h3 className='title' data-aos="fade-down">{contact.title}</h3>
                <h3 className='subtitle' data-aos="fade-up">{contact.subtitle}</h3>
            </div>

            <div className='max-w-[1240px] m-auto px-2 md:py-0 py-0 w-full'>
                <div className='grid lg:grid-cols-5 gap-5'>
                    {/* left */}
                    <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
                        <div className='p-4'>
                            <form ref={form} onSubmit={sendEmail} >
                                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                                    <div className='flex flex-col' data-aos="fade-down">
                                        <label htmlFor="name" className='uppercase text-sm py-2 font-semibold'>Name</label>
                                        <input name='from_name' type="text" id='name' className='border-2 rounded-lg p-3 flex border-x-gray-300 outline-none border-blue-300 focus:border-2 focus:border-blue-600 active:bottom-2 active:border-b-blue-600' />
                                    </div>
                                    <div className='flex flex-col' data-aos="fade-up">
                                        <label htmlFor="phone" className='uppercase text-sm py-2 font-semibold'>Phone Number</label>
                                        <input name='mobile' type="text" id='phone' className='border-2 rounded-lg p-3 flex border-x-gray-300 outline-none border-blue-300 focus:border-2 focus:border-blue-600 active:bottom-2 active:border-b-blue-600' />
                                    </div>
                                </div>

                                <div className='flex flex-col py-2' data-aos="fade-down">
                                    <label htmlFor="email" className='uppercase text-sm py-2 font-semibold'>Email</label>
                                    <input name='user_email' type="email" id='phone' className='border-2 rounded-lg p-3 flex border-x-gray-300 outline-none border-blue-300 focus:border-2 focus:border-blue-600 active:bottom-2 active:border-b-blue-600' />
                                </div>

                                <div className='flex flex-col py-2' data-aos="fade-up">
                                    <label htmlFor="subject" className='uppercase text-sm py-2 font-semibold'>Subject</label>
                                    <input name='title' type="text" id='subject' className='border-2 rounded-lg p-3 flex border-x-gray-300 outline-none border-blue-300 focus:border-2 focus:border-blue-600 active:bottom-2 active:border-b-blue-600' />
                                </div>

                                <div className='flex flex-col py-2' data-aos="fade-down">
                                    <label htmlFor="message" className='uppercase text-sm py-2 font-semibold'>Message</label>
                                    <textarea name="message" id="message" rows="5" className='border-2 rounded-lg p-3 border-x-gray-300 outline-none border-blue-300 focus:border-2 focus:border-blue-600 active:bottom-2 active:border-b-blue-600'></textarea>
                                </div>

                                <div className='py-8' data-aos="fade-up">
                                    <button className='py-3 px-10 font-bold tracking-widest'>Send</button>
                                </div>

                            </form>
                        </div>
                    </div>


                    {/* right */}
                    <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4 md:order-none order-first'>
                        <div className='lg:p-4 h-full rounded-xl flex flex-col gap-4'>
                            <div>
                                <img src={contact.contactPic} alt="Contact" className='rounded-xl hover:scale-105 ease-in duration-300' />
                            </div>
                            <div>
                                <h2 data-aos="fade-down">{contact.MyName}</h2>
                                <h3 data-aos="fade-up">{contact.MyRole}</h3>
                            </div>
                            <div className='flex flex-col gap-3'>
                                {contact.social_media.map((content, i) => (
                                    <Link key={i} data-aos="fade-up" data-aos-delay={i * 400} to={content.link}><button className='lowercase px-4 py-1 tracking-widest shadow-xl shadow-gray-400 rounded-xl bg-gradient-to-r from-[#14b029] to-[#70ff79] text-gray-200'>{content.text}</button></Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div data-aos="fade-up" className='flex justify-center py-12'>
                <a href='/'>
                    <div className='rounded-full shadow-xl shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <HiChevronDoubleUp size={30} className='text-gray-500' />
                    </div>
                </a>
            </div>
            <ToastContainer
                className="toast-position"
                position="bottom-right"
                autoClose={10000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />

        </div>
    )
}

export default Contact