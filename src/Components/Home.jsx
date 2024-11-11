import { motion, useInView } from 'framer-motion';
import React from 'react';
import { useRef } from 'react';
import CountUp from 'react-countup'
import { fadeIn } from "../varients";
import { Link } from 'react-router-dom';

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };


const myNames = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.25
        }
    }
}

const letters = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
}



const Home = () => {
    
    const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);

  const isInView1 = useInView(ref1, { once: true });
  const isInView2 = useInView(ref2, { once: true });
  const isInView3 = useInView(ref3, { once: true });
  


    return (
        <div id='home' className="relative w-full min-h-screen overflow-hidden bg-slate-900">
            <div className="absolute bottom-0 left-[-18%] right-0 top-[-20%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(0,0,255,.15),rgba(255,255,255,0))]"></div>
            <div className="absolute bottom-0 right-[-20%] top-[50%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(0,255,0,.15),rgba(255,255,255,0))]"></div>

            <div className="relative z-10 flex flex-col justify-center items-center pt-32  md:px-20">
                <div className='pt-16 px-10 md:px-28 flex justify-center gap-3 items-center flex-col text-center'>
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, ...transition }}
                        viewport={{once: true, }}
                        className='border-2 border-white rounded-full px-3 py-1'> <h3 className='text-white'>Hello Welcome to</h3></motion.div>
                    <motion.h1 variants={myNames}>
                        <motion.span 
                            variants={myNames}
                            initial="hidden"
                            animate="show"
                            transition={{deley: 0.2, ...transition}}
                            className='text-textblue font-semibold text-3xl md:text-7xl'>
                            <motion.span variants={letters}>D</motion.span>
                            <motion.span variants={letters}>-</motion.span>
                            <motion.span variants={letters}>C</motion.span>
                            <motion.span variants={letters}>o</motion.span>
                            <motion.span variants={letters}>d</motion.span>
                            <motion.span variants={letters}>e</motion.span>
                            <motion.span variants={letters}>H</motion.span>
                            <motion.span variants={letters}>o</motion.span>
                            <motion.span variants={letters}>o</motion.span>
                            <motion.span variants={letters}>d</motion.span>
                        </motion.span>
                    </motion.h1>
                    <motion.p 
                    initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, ...transition }}
                        viewport={{once: true}}
                    className='text-white text-[15px] md:text-2xl'>Where innovation meets elegant design in the digital space, Empowering businesses with cutting-edge web development.
                    </motion.p>
                </div>
                <div className='flex md:flex-row flex-col gap-7 pt-10'>
                    <div>
                        <Link to={"/project"}>
                        <motion.button
                            initial="hidden"
                            whileInView="show"
                            viewport={{once: true}}
                            whileTap={{ scale: 0.8 }}
                            whileHover={{ scale: 1.1 }}
                            transition={{ bounceDamping: 10, bounceStiffness: 600, type: 'spring'}}
                            variants={fadeIn("right", .4)}
                            className='btn-1 md:p-3 py-2 px-4 rounded-full bg-slate-100 font-semibold'>View Projects
                        </motion.button>
                        </Link>
                    </div>
                    <div>
                        <motion.button
                            initial="hidden"
                            whileInView="show"
                            variants={fadeIn("left", .4)}
                            viewport={{once: true}}
                            whileTap={{ scale: 0.8 }}
                            whileHover={{ scale: 1.1 }}
                            transition={{  bounceDamping: 10, bounceStiffness: 600, type: 'spring' }}
                            className='btn-2 md:p-3 py-2 px-5 rounded-full bg-slate-100 font-semibold'>Our services
                        </motion.button>
                    </div>
                </div>

                <div className='flex mx-8 md:mx-0 lg:flex-row flex-wrap justify-center lg:px-0 items-center gap-10  pt-36 pb-10'>
                    <motion.div
                    initial="hidden"
                    whileInView="show"
                    variants={fadeIn(0, .5)}
                    viewport={{once: true}}
                    
                    className='h-[170px] box-1 text-lightText hover:text-white md:w-[350px] rounded-xl px-4 py-6'>
                        <motion.div className='flex'  ref={ref1} initial={{ opacity: 0 }} animate={{ opacity: isInView1 ? 1 : 0 }}>
                        {isInView1 &&  <CountUp className='md:text-7xl text-5xl text-brightColor font-bold block text-white' end={4} duration={7} />}
                            {/* <p className='flex justify-end items-end text-5xl font-bold'>+</p> */}
                            <p className='flex items-end font-bold text-2xl text-white'>Year</p>
                        </motion.div>
                        <div className='pt-2 text'>
                            <h1 className=' text-[16px]'>
                                Delivering excellence in web development for over 4 years.
                            </h1>
                        </div>
                    </motion.div>
                    <motion.div
                    initial="hidden"
                    whileInView="show"
                    variants={fadeIn(0, .5)}
                    viewport={{once: true}}
                     className='h-[170px] box-2 text-lightText hover:text-white md:w-[350px] rounded-xl px-4 py-7'>
                        <motion.div className='flex' ref={ref2} initial={{ opacity: 0 }} animate={{ opacity: isInView2 ? 1 : 0 }}>
                           {isInView2 && <CountUp className='md:text-7xl text-5xl text-white font-bold block' end={6} duration={6} />}
                            <p className='flex justify-end items-end text-4xl font-bold text-white'>+</p>
                            <p className='flex items-end font-bold text-2xl text-white'>Projects</p>
                        </motion.div>
                        <div className='pt-2'>
                            <h1 className=' text-[16px]'>
                                Achieving success through the completion of 6+ impactful projects.
                            </h1>
                        </div>
                    </motion.div>
                    <motion.div
                    initial="hidden"
                    whileInView="show"
                    variants={fadeIn("", .5)}
                    viewport={{once: true}}
                    className='h-[170px] box-3 text-lightText hover:text-white md:w-[350px] rounded-xl px-4 py-6'>
                        <motion.div className='flex' ref={ref3} initial={{ opacity: 0 }} animate={{ opacity: isInView3 ? 1 : 0 }}>
                           {isInView3 && <CountUp className='md:text-7xl text-5xl text-white font-bold block' end={200} duration={5} />}
                            <p className='flex justify-end items-end text-4xl font-bold text-white'>+</p>
                            <p className='flex items-end font-bold text-2xl text-white'>Commits</p>
                        </motion.div>
                        <div className='pt-2'>
                            <h1 className=' text-[16px]'>
                                Achieving milestones with more than 200 commits.
                            </h1>
                        </div>
                    </motion.div>
                </div>

            </div>
        </div>
    );
}

export default Home;


