import React from 'react'
import { motion } from 'framer-motion';
import { fadeIn } from '../varients';


const Testimonials = () => {
    return (
        <div class="relative min-h-screen w-full overflow-hidden bg-black pb-24">
            <div class="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]"></div>

            <div className='relative z-10'>
                <div className='flex flex-col justify-center items-center'>
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        variants={fadeIn("down", .3)}
                        className='flex items-center justify-center pt-6'>
                        <h1 className='md:text-4xl text-2xl font-semibold text-white pt-10'>Customer's Reviews</h1>
                    </motion.div>

                    <div className='md:px-24 pt-20 flex flex-col md:flex-row justify-center items-center gap-8 mx-10 px-6'>
                        <motion.div
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            variants={fadeIn("right", .2)}
                            className=' bg-white size-[350px] md:size-96 bg-opacity-10 bg-clip-padding blur-backdrop-filter shadow-[#C9EBFF] shadow-lg rounded-lg p-10 flex justify-center items-center text-white'>

                            <div>
                                <div className='text-white font-bold text-5xl'>
                                    <h1>"</h1>
                                </div>
                                <p>It was a pleasure working with you too !The website turned out beautifully Daniel.
                                    Thanks again for your patience and making this sauce launch a success.
                                    & I will definitely recommend your work to others </p>
                                <p className='flex justify-end pt-6 italic'>Tammi</p>
                            </div>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            variants={fadeIn("right", .4)}
                            className=' bg-white size-[350px] md:size-96 bg-opacity-10 bg-clip-padding blur-backdrop-filter shadow-[#C9EBFF] shadow-lg rounded-lg p-10 flex justify-center items-center text-white'>

                            <div>
                                <div className='text-white font-bold text-5xl'>
                                    <h1>"</h1>
                                </div>
                                <p>Daniel’s work exceeded all expectations! The website is not only beautiful but also functions flawlessly. 
                                    His patience and expertise made the whole process smooth and stress-free. 
                                    I can’t thank him enough for making this project a success, and I’ll definitely refer his services to others.</p>
                                <p className='flex justify-end pt-6 italic'>Daniel</p>
                            </div>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            variants={fadeIn("right", .6)}
                            className=' bg-white size-[350px] md:size-96 bg-opacity-10 bg-clip-padding blur-backdrop-filter shadow-[#C9EBFF] shadow-lg rounded-lg p-10 flex justify-center items-center text-white'>

                            <div>
                                <div className='text-white font-bold text-5xl'>
                                    <h1>"</h1>
                                </div>
                                <p>Working with Daniel was a fantastic experience! He brought our vision to life with a stunning website. 
                                    His attention to detail and willingness to go the extra mile made all the difference. 
                                    Thanks to him, our project launch was a huge success, and I’ll absolutely recommend him to others</p>
                                <p className='flex justify-end pt-6 italic'>Hubert</p>

                            </div>
                        </motion.div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Testimonials