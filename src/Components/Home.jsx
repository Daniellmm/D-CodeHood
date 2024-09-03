import React from 'react';
import CountUp from 'react-countup'

const Home = () => {
    return (
        <div className="relative w-full min-h-screen overflow-hidden bg-slate-900">
            <div className="absolute bottom-0 left-[-18%] right-0 top-[-20%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(0,0,255,.15),rgba(255,255,255,0))]"></div>
            <div className="absolute bottom-0 right-[-20%] top-[50%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(0,255,0,.15),rgba(255,255,255,0))]"></div>

            <div className="relative z-10 flex flex-col justify-center items-center pt-32  md:px-20">
                <div className='pt-16 px-10 md:px-28 flex justify-center gap-3 items-center flex-col text-center'>
                    <div className='border-2 border-white rounded-full px-3 py-1'> <h3 className='text-white'>Hello Welcome to</h3></div>
                    <h1><span className='text-textblue font-semibold text-3xl md:text-7xl'>D-CodeHood</span></h1>
                    <p className='text-white text-[15px] md:text-2xl'>Where innovation meets elegant design in the digital space, Empowering businesses with cutting-edge web development.</p>
                </div>
                <div className='flex md:flex-row flex-col gap-7 pt-10'>
                    <div>
                        <button className='md:p-3 py-2 px-4 rounded-full bg-slate-100 font-semibold'>View Projects</button>
                    </div>
                    <div>
                        <button className='md:p-3 py-2 px-5 rounded-full bg-slate-100 font-semibold'>Our services</button>
                    </div>
                </div>

                <div className='flex mx-8 lg:flex-row flex-wrap justify-center lg:px-0 items-center gap-10  pt-28 pb-10'>
                    <div className='h-[170px] box-1 text-lightText hover:text-white md:w-[350px] rounded-xl px-4 py-6'>
                        <div className='flex'>
                            <CountUp className='md:text-7xl text-5xl text-brightColor font-bold block text-white' end={4} duration={7} />
                            {/* <p className='flex justify-end items-end text-5xl font-bold'>+</p> */}
                            <p className='flex items-end font-bold text-2xl text-white'>Year</p>
                        </div>
                        <div className='pt-2 text'>
                            <h1 className=' text-[16px]'>
                                Delivering excellence in web development for over 4 years.
                            </h1>
                        </div>
                    </div>
                    <div className='h-[170px] box-2 text-lightText hover:text-white md:w-[350px] rounded-xl px-4 py-7'>
                        <div className='flex'>
                            <CountUp className='md:text-7xl text-5xl text-white font-bold block' end={6} duration={6} />
                            <p className='flex justify-end items-end text-4xl font-bold text-white'>+</p>
                            <p className='flex items-end font-bold text-2xl text-white'>Projects</p>
                        </div>
                        <div  className='pt-2'>
                            <h1 className=' text-[16px]'>
                                Achieving success through the completion of 6+ impactful projects.
                            </h1>
                        </div>
                    </div>
                    <div className='h-[170px] box-3 text-lightText hover:text-white md:w-[350px] rounded-xl px-4 py-6'>
                        <div className='flex'>
                            <CountUp className='md:text-7xl text-5xl text-white font-bold block' end={200} duration={5} />
                            <p className='flex justify-end items-end text-4xl font-bold text-white'>+</p>
                            <p className='flex items-end font-bold text-2xl text-white'>Commits</p>
                        </div>
                        <div className='pt-2'>
                            <h1 className=' text-[16px]'>
                                Achieving milestones with more than 200 commits.
                            </h1>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Home;


