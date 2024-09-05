import React from 'react'

const Testimonials = () => {
    return (
        <div class="relative min-h-screen w-full overflow-hidden bg-slate-900 pb-24">
            <div class="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]"></div>

            <div className='relative z-10'>
                <div className='flex flex-col justify-center items-center'>
                    <div className='flex items-center justify-center pt-6'>
                        <h1 className='md:text-4xl text-2xl font-semibold text-white pt-10'>Customer's Reviews</h1>
                    </div>

                    <div className='md:px-24 pt-20 flex flex-col md:flex-row justify-center items-center gap-8 mx-10 px-6'>
                        <div className=' bg-white size-[350px] md:size-96 bg-opacity-10 bg-clip-padding blur-backdrop-filter shadow-[#C9EBFF] shadow-lg rounded-lg p-10 flex justify-center items-center text-white'>
                            
                            <div>
                                <div className='text-white font-bold text-5xl'>
                                <h1>"</h1>
                            </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem in, harum incidunt quibusdam dolor dolorum. Nulla sunt expedita quas consectetur!</p>
                                <p className='flex justify-end pt-6 italic'>Idowu Daniel</p>
                            </div>
                        </div>
                        <div className=' bg-white size-[350px] md:size-96 bg-opacity-10 bg-clip-padding blur-backdrop-filter shadow-[#C9EBFF] shadow-lg rounded-lg p-10 flex justify-center items-center text-white'>
                            
                            <div>
                                <div className='text-white font-bold text-5xl'>
                                <h1>"</h1>
                            </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem in, harum incidunt quibusdam dolor dolorum. Nulla sunt expedita quas consectetur!</p>
                                <p className='flex justify-end pt-6 italic'>Idowu Daniel</p>
                            </div>
                        </div>
                        <div className=' bg-white size-[350px] md:size-96 bg-opacity-10 bg-clip-padding blur-backdrop-filter shadow-[#C9EBFF] shadow-lg rounded-lg p-10 flex justify-center items-center text-white'>
                            
                            <div>
                                <div className='text-white font-bold text-5xl'>
                                <h1>"</h1>
                            </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem in, harum incidunt quibusdam dolor dolorum. Nulla sunt expedita quas consectetur!</p>
                                <p className='flex justify-end pt-6 italic'>Idowu Daniel</p>

                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Testimonials