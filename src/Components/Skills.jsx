import React, { useState, useRef } from 'react';
import { useInView, motion } from 'framer-motion';
import CountUp from 'react-countup';  // Import CountUp package
import js from "../assets/11.png";
import css from "../assets/4.png";
import html from "../assets/6.png";
import reactjs from "../assets/9.png";
import tailwind from "../assets/8.png";
import cSharp from "../assets/3.png";
import nodejs from "../assets/7.png";
import dart from "../assets/2.png";
import expressjs from "../assets/10.png";
import flutter from "../assets/1.png";
import git from "../assets/5.png";
import { fadeIn } from '../varients';

const Skills = () => {

    const ref1 = useRef(null);
    const isInView1 = useInView(ref1, { once: true });


    const skillsData = [
        {
            name: 'Frontend',
            skills: [
                { image: html, name: "HTML", progress: 90 },
                { image: css, name: "CSS", progress: 85 },
                { image: js, name: "JavaScript", progress: 80 },
                { image: reactjs, name: "React", progress: 75 },
                { image: tailwind, name: "Tailwind", progress: 85 },
            ]
        },
        {
            name: 'Backend',
            skills: [
                { image: cSharp, name: "C#", progress: 70 },
                { image: nodejs, name: "Node.js", progress: 80 },
                { image: dart, name: "Dart", progress: 60 },
                { image: git, name: "Git", progress: 85 }
            ],
        },
        {
            name: 'Server Side',
            skills: [
                { image: expressjs, name: "Express.js", progress: 75 },
                { image: nodejs, name: "Node.js", progress: 80 }
            ],
        },
        {
            name: 'Mobile',
            skills: [
                { image: flutter, name: "Flutter", progress: 80 },
                { image: dart, name: "Dart", progress: 60 }
            ],
        },
    ];

    const [selectedSkill, setSelectedSkill] = useState('Frontend');

    const handleSkillClick = (skill) => {
        setSelectedSkill(skill);
    };

    const filteredSkills = skillsData.find(skill => skill.name === selectedSkill)?.skills || [];

    return (
        <div id='skills' className="relative min-h-screen overflow-hidden w-full bg-black">
            <div class="relative h-full w-full bg-black"><div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div><div class="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div>
                <div className='relative z-10'>
                    <div className='flex flex-col justify-center items-center'>
                        <motion.div
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            variants={fadeIn("down", .3)}
                            className='pt-14'>
                            <h1 className='font-semibold text-4xl pb-8 md:pb-7 pt-10 text-white'>Skills</h1>
                        </motion.div>

                        <div className='flex md:flex-wrap gap-x-2 md:gap-x-10 ml-3 mr-3 justify-center'>
                            {skillsData.map((skill, index) => (
                                <motion.div
                                    initial="hidden"
                                    whileInView="show"
                                    viewport={{ once: true }}
                                    variants={fadeIn("down", .5)}
                                    whileTap={{ scale: 0.6 }}
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ bounceDamping: 10, bounceStiffness: 600, staggerChildren: 0.25 }}
                                    key={index}
                                    className={`bg-[#444342] flex justify-center hover:bg-textblue items-center bg-opacity text-[12px] md:text-[17px] bg-clip-padding blur-backdrop-filter p-1 md:p-3 rounded-md text-white border border-white/30 cursor-pointer ${selectedSkill === skill.name ? 'bg-textblue text-white font-semibold border-2 border-white/50' : ''}`}
                                    onClick={() => handleSkillClick(skill.name)}
                                >
                                    <h1>{skill.name}</h1>
                                </motion.div>
                            ))}
                        </div>

                        <div className='mt-10 flex flex-wrap gap-4 px-10 justify-center'>
                            {filteredSkills.map((skill, index) => (
                                <div key={index} className="flex flex-col items-center justify-center">
                                    <motion.img
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1, }}
                                        transition={{ delay: 0.9, duration: 4 }}
                                        src={skill.image}
                                        alt={skill.name}
                                        className="md:w-fit md:h-24 w-14 h-14 object-contain rounded-md"
                                    />
                                    <motion.h2 
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1, }}
                                    transition={{ delay: 0.9, duration: 4 }}
                                    className='text-white mt-2'>{skill.name}</motion.h2>


                                    <motion.div 
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1, }}
                                    transition={{ delay: 0.9, duration: 4 }}
                                    className="w-32 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-2">
                                        <motion.div
                                            initial={{ width: 0, opacity: 0 }}
                                            whileInView={{ opacity: 1,  width: `${skill.progress}%` }}  // Trigger when in view
                                            transition={{ duration: 1.5, ease: "easeInOut" }}
                                            className="bg-blue-600 h-2.5 rounded-full"
                                        ></motion.div>
                                    </motion.div>


                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ duration: 5.5,  ease: "easeInOut" }}
                                    >
                                        <CountUpPercentage target={skill.progress} />
                                    </motion.div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


const CountUpPercentage = ({ target }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div ref={ref}>
            {isInView && (
                <CountUp
                    start={0}
                    end={target}
                    duration={1.5}
                    suffix="%"
                    className="text-white text-sm mt-1"
                />
            )}
        </div>
    );
};

export default Skills;
