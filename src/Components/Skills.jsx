import React, { useState } from 'react';
import js from "../assets/js.jpeg"
import css from "../assets/css.jpeg"
import html from "../assets/html.jpeg"
import reactjs from "../assets/react.jpeg"
import tailwind from "../assets/tailwind.jpeg"
import cSharp from "../assets/cSharp.jpeg"
import nodejs from "../assets/node.jpeg"
import dart from "../assets/dart.jpeg"
import expressjs from "../assets/expressjs.jpeg"
import flutter from "../assets/flutter.jpeg"
import git from "../assets/git.jpeg"


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
            images: [expressjs, nodejs ],
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
        <div className="relative md:h-[400px] h-[400px] overflow-hidden w-full bg-black  ">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
            <div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div>

            <div className='relative z-10'>
                <div className='flex flex-col justify-center items-center'>
                    <div className='pt-14'>
                        <h1 className='font-semibold text-4xl pb-8 md:pb-14 text-white'>Skills</h1>
                    </div>

                    
                    <div className='flex md:flex-wrap gap-x-2 md:gap-x-10 ml-3 mr-3 justify-center '>
                        {skillsData.map((skill, index) => (
                            <div 
                                key={index}
                                className={`bg-[#444342] flex justify-center items-center bg-opacity text-[18px] bg-clip-padding blur-backdrop-filter p-1 md:p-3 rounded-md text-white border border-white/30 cursor-pointer ${selectedSkill === skill.name ? 'bg-box2 text-white font-semibold  border-2 border-white/50' : ''}`}
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
