import React, { useEffect } from 'react'
import Swal from 'sweetalert2'
import { fadeIn } from '../varients';
import { motion } from 'framer-motion';

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };


const Contact = () => {



    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "51751a6e-35bb-4a3d-bb80-18d88564d1b2");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            const Toast = Swal.mixin({
                toast: true,
                position: "top",
                showConfirmButton: false,
                timer: 5000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                }
            });
            Toast.fire({
                icon: "success",
                title: "Message sent successfully"
            });

            event.target.reset();
        }
    };

    return (
        <div id='contact' className="relative min-h-screen w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#C9EBFF,transparent)]"></div>

            <div className='relative z-10 pt-16'>
                <div className='flex flex-col justify-center items-center'>
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        variants={fadeIn("down", .3)}>
                        <h1 className='text-4xl font-semibold'>Contact Us</h1>
                    </motion.div>

                    <div className='py-10 px-3 my-16 mx-3 md:w-3/5 bg-black bg-opacity-10 bg-clip-padding blur-backdrop-filter-2 rounded-md z-40'>
                        <div className='flex flex-col gap-10 items-center'>

                            <div className='flex gap-10 '>
                                <motion.div
                                    initial="hidden"
                                    whileInView="show"
                                    viewport={{ once: true }}
                                    variants={fadeIn("right", .4)}
                                    className='size-28 bg-box1'>

                                </motion.div>
                                <motion.div
                                    initial="hidden"
                                    whileInView="show"
                                    viewport={{ once: true }}
                                    variants={fadeIn("left", .4)}
                                    className='size-28 bg-box3'>

                                </motion.div>
                            </div>

                            <motion.form 
                            initial={{opacity: 0}}
                            whileInView={{opacity: 1,}}
                            transition={{ delay: 1.0, duration: 2 }}
                            
                            onSubmit={onSubmit} 
                            className='w-[100%] mx-0 bg-transparent shadow-[#C9EBFF] shadow-2xl rounded-lg'>
                                <div className='input-box'>
                                    <label>Full Name</label>
                                    <input type="text" className='field' placeholder='Enter your name' name='name' required />
                                </div>
                                <div className='input-box'>
                                    <label>Email Address</label>
                                    <input type="text" className='field' placeholder='example@gmail.com' name='email' required />
                                </div>
                                <div className='input-box'>
                                    <label>Your Message</label>
                                    <textarea name="message" id="" className='field mess' placeholder='Enter your message' required></textarea>
                                </div>

                                <button type='submit'>Send Message</button>
                            </motion.form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;
