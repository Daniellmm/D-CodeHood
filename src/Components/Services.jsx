import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Text1 from '../assets/dot1.png';
import Text2 from '../assets/dot2.png';
import Text3 from '../assets/dot3.png';
import Text4 from '../assets/dot4.png';
import Text5 from '../assets/dot5.png';
import Text6 from '../assets/dot6.png';

import { fadeIn } from '../varients';
import { Link } from 'react-router-dom';


const imageData = [
  { image: Text1, title: "Hull's D Sauce Landing Page", text: "This web project show case the Hull's D barbecue sauce and the details of the product..." },
  { image: Text2, title: "MedAd4CHD Admin Panel", text: "A medical admin panel combine with AI to detect coronary heart disease" },
  { image: Text3, title: "Remeda Creative Studio", text: "Remeda studio world of endless imagination and boundless creativity. Specialised in 3D and motion designs" },
  { image: Text4, title: "HubbyNation Music Landing Page", text: "Landing page to showcase his new album and playlist" },
  { image: Text5, title: "L.B.I portfolio", text: "let's Build It portfolio website for the agency  " },
  { image: Text6, title: "Hull's D Shopify Store", text: "This s the sales store for Hull's D barbecue sauce..." },
];

const Services = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageData.length);
    }, 10000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  const handleDotClick = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="relative min-h-screen w-full bg-white pb-28">
      <div className="absolute bottom-0 left-0 right-0 top-[0px] bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]">
      </div>

      <div className='relative z-10'>
        <div className='flex flex-col items-center justify-center'>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeIn("down", .3)}
            className='flex items-center justify-center pt-6'>
            <h1 className='text-4xl font-semibold pt-9'>Projects</h1>
          </motion.div>

          <div className='flex md:flex-row flex-col-reverse px-10 py-20 md:px-24 gap-20 justify-center items-center'>
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeIn("right", .5)}
              className='bg-white bg-opacity-10 bg-clip-padding  py-5 px-5 rounded-lg shadow-black shadow-2xl blur-backdrop-filter'>
              <div>
                <motion.h1
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1, }}
                  variants={{ opacity: 1 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2, duration: 3 }}

                  className='text-4xl md:text-2xl lg:text-4xl font-bold pb-4'>Here is an awesome project  <span className='text-textblue'>{imageData[currentImageIndex].title}</span></motion.h1>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1, }}
                  variants={{ opacity: 1 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2, duration: 3 }}
                  className='pb-6'>{imageData[currentImageIndex].text}</motion.p>
              </div>


              <div>
                <Link to={"/project"}>
                  <motion.button
                    whileTap={{ scale: 0.7 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ bounceDamping: 10, bounceStiffness: 600 }}
                    className='btn-1 md:px-5 py-2 px-4 rounded-full bg-slate-100 font-semibold'>View More
                  </motion.button>
                </Link>
              </div>


              <div className='gap-2 pt-7 hidden md:flex'>
                {imageData.map((_, index) => (
                  <div
                    key={index}
                    className={`w-4 h-4 rounded-full cursor-pointer hover:bg-textblue ${index === currentImageIndex ? 'bg-textblue' : 'bg-gray-300 border-textblue border'}`}
                    onClick={() => handleDotClick(index)}
                  ></div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeIn("left", .5)}
            >
              <img src={imageData[currentImageIndex].image} className='rounded-md h-auto w-[1300px] fade' alt="Service" />
              <div className='flex gap-2 pt-7 md:hidden justify-center items-center'>
                {imageData.map((_, index) => (
                  <div
                    key={index}
                    className={`w-4 h-4 rounded-full cursor-pointer  ${index === currentImageIndex ? 'bg-textblue' : 'bg-gray-300 border-textblue border'}`}
                    onClick={() => handleDotClick(index)}
                  ></div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
