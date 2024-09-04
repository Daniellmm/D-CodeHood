import React, { useState } from 'react';
import Text1 from '../assets/dot1.png';
import Text2 from '../assets/dot2.png';
import Text3 from '../assets/dot3.png';
import Text4 from '../assets/dot4.png';
import Text5 from '../assets/dot5.png';
import Text6 from '../assets/dot6.png';

const imageData = [
  { image: Text1, text: "Lol Image testing 1" },
  { image: Text2, text: "Lol Image testing 2" },
  { image: Text3, text: "Lol Image testing 3" },
  { image: Text4, text: "Lol Image testing 4" },
  { image: Text5, text: "Lol Image testing 5" },
  { image: Text6, text: "Lol Image testing 6" },
];

const Services = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleDotClick = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="relative min-h-screen w-full bg-white pb-40">
      <div className="absolute bottom-0 left-0 right-0 top-[-130px] bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]">
      </div>

      <div className='relative z-10'>
        <div className='flex flex-col items-center justify-center'>
          <div className='flex items-center justify-center pt-6'>
            <h1 className='text-4xl font-semibold'>Services</h1>
          </div>

          <div className='flex md:flex-row flex-col-reverse px-10 py-20 md:px-24 gap-20 justify-center items-center '>
            <div>
              <div>
                <h1 className='text-4xl md:text-2xl lg:text-4xl font-bold pb-4'>Lorem ipsum, dolor sit amet <span className='text-textblue'>{imageData[currentImageIndex].text}</span> elit.</h1>
                <p className='pb-6'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda libero vel id? Quo, nesciunt necessitatibus.</p>
              </div>

              <button className='btn-1 md:px-5 py-2 px-4 rounded-full bg-slate-100 font-semibold'>View More</button>

              <div className='gap-2 pt-7 hidden md:flex'>
                {imageData.map((_, index) => (
                  <div
                    key={index}
                    className={`w-4 h-4 rounded-full cursor-pointer ${index === currentImageIndex ? 'bg-textblue' : 'bg-gray-300 border-textblue border'}`}
                    onClick={() => handleDotClick(index)}
                  ></div>
                ))}
              </div>
            </div>

            <div>
              <img src={imageData[currentImageIndex].image} className='rounded-md' alt="Service" />
              <div className='flex gap-2 pt-7 md:hidden justify-center items-center'>
                {imageData.map((_, index) => (
                  <div
                    key={index}
                    className={`w-4 h-4 rounded-full cursor-pointer ${index === currentImageIndex ? 'bg-textblue' : 'bg-gray-300 border-textblue border'}`}
                    onClick={() => handleDotClick(index)}
                  ></div>
                ))}
              </div>
            </div>
          </div>
          
          

        </div>
      </div>
    </div>
  );
};

export default Services;
