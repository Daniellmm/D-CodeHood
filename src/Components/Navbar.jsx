import React, { useState } from 'react';
import { AiOutlineMenuUnfold, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-scroll";
import '../Utilis/style.css'

const Navbar = () => {
    const [menu, setMenu] = useState(false);

    const handleChange = () => {
        setMenu(!menu);
    };

    const closeMenu = () => {
        setMenu(false);
    };

    return (
        <div className="w-full z-50 fixed overflow-hidden bg-white bg-opacity-10 bg-clip-padding h-16 blur-backdrop-filter ">
           

            <div className="flex justify-between items-center p-4 px-7 md:px-32 text-white">
                <h1 className="text-xl font-bold  mix-blend-difference ">D-CodeHood</h1>

                <div className="flex items-center mix-blend-difference">
                    {menu ? (
                        <AiOutlineClose size={25} onClick={handleChange} />
                    ) : (
                        <AiOutlineMenuUnfold size={25} onClick={handleChange} />
                    )}
                </div>
            </div>

            <div className={`${menu ? "translate-x-0" : "-translate-x-full"} -inset-0 -z-50 justify-center items-center translate-y-10 flex flex-col lg:flex-col bg-black text-white font-semibold fixed lg:static left-0 top-20  px-5 text-left pt-8 pb-8 lg:pt-5 lg:pb-5 gap-8 w-full h-fit transition-transform duration-300 `}>
                <Link
                    to="home"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="hover:text-brightColor transition-all cursor-pointer"
                    onClick={closeMenu}
                >
                    Home
                </Link>
                <Link
                    to="about"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="hover:text-brightColor transition-all cursor-pointer"
                    onClick={closeMenu}
                >
                    About
                </Link>
                <Link
                    to="deal"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="hover:text-brightColor transition-all cursor-pointer"
                    onClick={closeMenu}
                >
                    Hot Deals
                </Link>
                <Link
                    to="product"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="hover:text-brightColor transition-all cursor-pointer"
                    onClick={closeMenu}
                >
                    Our Products
                </Link>
                <Link
                    to="service"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="hover:text-brightColor transition-all cursor-pointer"
                    onClick={closeMenu}
                >
                    Services
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
