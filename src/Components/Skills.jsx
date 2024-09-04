import React, { useState } from 'react';
import js from "../assets/11.png"
import css from "../assets/4.png"
import html from "../assets/6.png"
import reactjs from "../assets/9.png"
import tailwind from "../assets/8.png"
import cSharp from "../assets/3.png"
import nodejs from "../assets/7.png"
import dart from "../assets/2.png"
import expressjs from "../assets/10.png"
import flutter from "../assets/1.png"
import git from "../assets/5.png"


const Skills = () => {

    const skillsData = [
        {
            name: 'Frontend',
            images: [html, css, js, reactjs, tailwind]
        },
        {
            name: 'Backend',
            images: [cSharp, nodejs, dart, git],
        },
        {
            name: 'Server Side',
            images: [expressjs, nodejs],
        },
        {
            name: 'Mobile',
            images: [flutter, dart],
        },
    ];


    const [selectedSkill, setSelectedSkill] = useState(null);


    const handleSkillClick = (skill) => {
        setSelectedSkill(skill);
    };


    const filteredImages = skillsData.find(skill => skill.name === selectedSkill)?.images || [];

    return (
        <div className="relative h-[550px]  overflow-hidden w-full bg-black  ">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
            <div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div>

            <div className="custom-shape-divider-top-1725454015 ">
                <svg className='sm:hidden' data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
                </svg>
            </div>
            <div className="custom-shape-divider-bottom-1725455523">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                </svg>
            </div>

            <div className='relative z-10'>
                <div className='flex flex-col justify-center items-center'>
                    <div className='pt-14'>
                        <h1 className='font-semibold text-4xl pb-8 md:pb-14 text-black'>Skills</h1>
                    </div>


                    <div className='flex md:flex-wrap gap-x-2 md:gap-x-10 ml-3 mr-3 justify-center '>
                        {skillsData.map((skill, index) => (
                            <div
                                key={index}
                                className={`bg-[#444342] mt-12 flex justify-center hover:bg-textblue items-center bg-opacity text-[12px] md:text-[17px] bg-clip-padding blur-backdrop-filter p-1 md:p-3 rounded-md text-white border border-white/30 cursor-pointer ${selectedSkill === skill.name ? 'bg-textblue text-white font-semibold  border-2 border-white/50' : ''}`}
                                onClick={() => handleSkillClick(skill.name)}
                            >
                                <h1>{skill.name}</h1>
                            </div>
                        ))}
                    </div>


                    <div className='mt-10 flex flex-wrap gap-4 px-10 justify-center'>
                        {filteredImages.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={selectedSkill}
                                className="md:w-24 md:h-24 w-14 h-14 object-cover rounded-md"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
