import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { fadeIn } from '../varients';
import { motion } from 'framer-motion';
import authur from '../assets/DCoder1.png'

const AboutMe = () => {
    return (
        <div id='about' className=' relative min-h-screen overflow-hidden px-11 border-white '>
            <div class="absolute inset-0 -z-10 h-full w-full bg-white  bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"><div class="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div></div>
            <div className='relative z-10 flex flex-col pt-20 md:px-28 justify-center items-center'>

                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={fadeIn("down", .3)}
                >

                    <h1 className='font-semibold text-4xl pb-8 md:pb-14'>About Me</h1>
                </motion.div>
                <div className='grid grid-rows-1 gap-7 md:grid-cols-2 md:gap-1 px-5 mx-6 justify-center items-center pb-11'>
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        variants={fadeIn("right", .5)}
                        className='w-[300px] h-[300px] mb-20  rounded-md md:h-[400px] md:w-[350px] bg-black mx-10'>
                        <img src={authur} className='bg-cover rounded-md' alt="" />
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        variants={fadeIn("left", .5)}
                        className='mx-10 '>
                        <p>Hello! My name is Daniel, and I am a seasoned Full Stack Developer with over four years of experience.
                            I possess comprehensive expertise in all stages of the development lifecycle, encompassing both dynamic web
                            projects and mobile applications. My skill set includes advanced proficiency in <span className='font-bold text-textblue'> HTML5, CSS3, JavaScript, React.js,
                            and Flutter</span>. Additionally, I have a strong background in No-Code/Low-Code Development like <span className='font-bold text-textblue'> Shopify, WordPress,
                            ClickFunnel and WebFlow</span>, enabling me to deliver versatile and innovative solutions across various platforms.</p>

                        <div className=" flex items-center py-5 gap-4">
                            <motion.a
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                                variants={fadeIn("down", .1)} href="/" target="_blank" rel="noopener noreferrer">
                                <FaGithub className='hover:text-box2' size={20} />
                            </motion.a>
                            <motion.a
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                                variants={fadeIn("down", .3)}
                                href="/" target="_blank" rel="noopener noreferrer">
                                <FaInstagram className='hover:text-box2' size={20} />
                            </motion.a>

                            <motion.a
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                                variants={fadeIn("down", .4)}
                                href="#" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin className='hover:text-box2' size={20} />
                            </motion.a>
                            <motion.a
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                                variants={fadeIn("down", .5)}
                                href="#" target="_blank" rel="noopener noreferrer">
                                <FaTwitter className='hover:text-box2' size={20} />
                            </motion.a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe