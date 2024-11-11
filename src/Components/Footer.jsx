import React from 'react'

const Footer = () => {
    return (
        <div id='home' className="relative w-full h-[150px] overflow-hidden bg-slate-900 px-20 items-center flex">
            <div className="absolute bottom-0 left-[-18%] right-0 top-[-90%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(0,0,255,.15),rgba(255,255,255,0))]"></div>
            <div className="absolute bottom-0 right-[-10%] top-[5%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(0,255,0,.15),rgba(255,255,255,0))]"></div>
        
        <div className='relative z-10 flex justify-center items-center'>
            <div className='flex justify-between items-center gap-32'>
               <div><h1 className="btn-1 p-1 rounded-md text-xl font-bold  mix-blend-difference ">D-CodeHood</h1></div>
               <div><h1 className="btn-1 p-1 rounded-md text-xl font-bold  mix-blend-difference ">D-CodeHood</h1></div>
               <div><h1 className="btn-1 p-1 rounded-md text-xl font-bold  mix-blend-difference ">D-CodeHood</h1></div>
               
            </div>
        </div>

        </div>
    )
}

export default Footer