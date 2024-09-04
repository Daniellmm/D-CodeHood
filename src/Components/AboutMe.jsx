import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const AboutMe = () => {
    return (
        <div className=' relative min-h-screen overflow-hidden px-11 border-white '>
            <div class="absolute inset-0 -z-10 h-full w-full bg-white  bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"><div class="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div></div>
            <div className='relative z-10 flex flex-col pt-20 md:px-28 justify-center items-center'>
                
                <div>
                    <h1 className='font-semibold text-4xl pb-8 md:pb-14'>About Me</h1>
                </div>
                <div className='grid grid-rows-1 gap-7 md:grid-cols-2 md:gap-20 px-12 mx-6 justify-center items-center pb-11'>
                    <div className='h-[400px] w-[350px] bg-black mx-10'></div>
                    <div className='mx-10 '>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis qui nesciunt accusamus velit saepe voluptates asperiores reprehenderit natus excepturi eum praesentium officia cumque aspernatur ipsa possimus at omnis facilis, nihil est magnam, quod necessitatibus corrupti molestiae. Expedita omnis vero non?</p>

                        <div className=" flex items-center py-2 gap-4">
                            <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
                                <FaGithub className='hover:text-box2' size={20} />
                            </a>
                            <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
                                <FaInstagram className='hover:text-box2' size={20} />
                            </a>

                            <a href="#" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin className='hover:text-box2' size={20} />
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                <FaTwitter className='hover:text-box2' size={20} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe