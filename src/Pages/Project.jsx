import React from 'react'
import Text1 from '../assets/dot1.png';
import Text2 from '../assets/dot2.png';
import Text3 from '../assets/dot3.png';
import Text4 from '../assets/dot4.png';
import Text5 from '../assets/dot5.png';
import Text6 from '../assets/dot6.png';
import { Link } from 'react-router-dom';


function Project() {
  return (
    //  <div className='flex justify-center items-center text-6xl mx-10 min-h-screen'>Coming Soon</div>
    <div class="relative min-h-screen w-full overflow-hidden bg-slate-950 px-12 py-20 text-white">
      <div class="absolute inset-0 bg-[#C9EBFF] bg-[size:20px_20px] opacity-20 blur-[100px]"></div>

      <div className='relative z-10 flex flex-col md:px-20'>
        <div className='flex flex-col md:bg-slate-700 md:px-5 md:py-5 md:shadow-slate-500 md:shadow-lg justify-start'>
          <div className='flex gap-3 text-[12px] md:text-[15px]'>
           <Link to={'/'}><h1>Homepage</h1></Link> 
            <span>/</span>
            <h1 className='text-gray-400'>Portfolio</h1>
          </div>

          <div className='py-5 text-2xl md:text-4xl '>
            <h1>Here are the awesome project we've worked on</h1>
          </div>
        </div>



        <div className='pt-20'>
          <div className='flex flex-col md:flex-row pb-20 gap-5 md:pb-16 justify-between'>
            <div className='hover:cursor-pointer'>
              <img className='hover:scale-50  ease-out' src={Text1} alt="" />
              <div className='pt-5 md:text-2xl flex gap-3'>
                <h1>Hull's D Sauce Page</h1>
                <span>-</span>
                <p className='text-[12px] items-end justify-items-end'>2024</p>
              </div>
            </div>
            <div className='hover:cursor-pointer'>
              <img  src={Text2} alt="" />
              <div className='pt-5 md:text-2xl flex gap-3'>
                <h1>Hull's D Sauce Page</h1>
                <span>-</span>
                <p className='text-[12px] items-end justify-items-end'>2024</p>
              </div>
            </div>
          </div>

          <div className='flex flex-col md:flex-row pb-20 gap-5 md:pb-16 justify-between'>
            <div className='hover:cursor-pointer'>
              <img src={Text3} alt="" />
              <div className='pt-5 md:text-2xl flex gap-3'>
                <h1>Hull's D Sauce Page</h1>
                <span>-</span>
                <p className='text-[12px] items-end justify-items-end'>2024</p>
              </div>
            </div>
            <div className='hover:cursor-pointer'>
              <img src={Text4} alt="" />
              <div className='pt-5 md:text-2xl flex gap-3'>
                <h1>Hull's D Sauce Page</h1>
                <span>-</span>
                <p className='text-[12px] items-end justify-items-end'>2024</p>
              </div>
            </div>
          </div>

          <div className='flex flex-col md:flex-row pb-20 gap-5 md:pb-16 justify-between'>
            <div className='hover:cursor-pointer'>
              <img src={Text5} alt="" />
              <div className='pt-5 md:text-2xl flex gap-3'>
                <h1>Hull's D Sauce Page</h1>
                <span>-</span>
                <p className='text-[12px] items-end justify-items-end'>2024</p>
              </div>
            </div>
            <div className='hover:cursor-pointer'>
              <img src={Text6} alt="" />
              <div className='pt-5 md:text-2xl flex gap-3'>
                <h1>Hull's D Sauce Page</h1>
                <span>-</span>
                <p className='text-[12px] items-end justify-items-end'>2024</p>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Project