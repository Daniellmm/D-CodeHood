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
        <div className="w-full z-50 fixed  bg-white bg-opacity-10 bg-clip-padding h-16 blur-backdrop-filter ">
           

            <div className="flex justify-between items-center p-4 px-7 md:px-32 text-white">
                <h1 className="btn-1 p-1 rounded-md text-xl font-bold  mix-blend-difference ">D-CodeHood</h1>

                <div className="flex items-center btn-1 p-1 rounded-md mix-blend-difference">
                    {menu ? (
                        <AiOutlineClose size={25} onClick={handleChange} />
                    ) : (
                        <AiOutlineMenuUnfold size={25} onClick={handleChange} />
                    )}
                </div>
            </div>

            <div className={`${menu ? "translate-x-0" : "-translate-x-full"} -inset-0 -z-10 justify-center items-center translate-y-10 flex flex-col lg:flex-col bg-slate-900 text-white font-semibold fixed lg:static left-0 top-20  px-5 text-left pt-8 pb-8 lg:pt-5 lg:pb-5 gap-8 w-full h-fit transition-transform duration-300 `}>
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
                    to="skills"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="hover:text-brightColor transition-all cursor-pointer"
                    onClick={closeMenu}
                >
                    Skills
                </Link>
                <Link
                    to="services"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="hover:text-brightColor transition-all cursor-pointer"
                    onClick={closeMenu}
                >
                    Our Services
                </Link>
                <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="hover:text-brightColor transition-all cursor-pointer"
                    onClick={closeMenu}
                >
                    Contact
                </Link>
            </div>
        </div>
    );
};

export default Navbar;












// import React, { useState } from 'react';
// import { FaBars, FaTimes } from 'react-icons/fa';

// const Navbar = () => {
//   const [nav, setNav] = useState(false);

//   const links = [
//     { id: 1, link: 'Home' },
//     { id: 2, link: 'About' },
//     { id: 3, link: 'Skills' },
//     { id: 4, link: 'Services' },
//     { id: 5, link: 'Testimonials' },
//     { id: 6, link: 'Contact' },
//   ];

//   return (
//     <div className="fixed w-full z-40 h-16 flex justify-between items-center px-4  bg-white bg-opacity-10 bg-clip-padding blur-backdrop-filter">
//       {/* Logo */}
//       <div className="text-2xl font-bold">
//         <h1 className="btn-1 p-1 rounded-md text-xl font-bold">D-CodeHood</h1>
//       </div>

//       {/* Desktop Menu */}
//       <ul className="hidden md:flex">
//         {links.map(({ id, link }) => (
//           <li key={id} className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:text-white duration-200">
//             <a href={`#${link.toLowerCase()}`}>{link}</a>
//           </li>
//         ))}
//       </ul>

//       {/* Mobile Menu Icon */}
//       <div
//         onClick={() => setNav(!nav)}
//         className="cursor-pointer md:hidden z-10"
//       >
//         {nav ? <FaTimes color='white' size={30} /> : <FaBars size={30} />}
//       </div>

//       {/* Mobile Menu */}
//       {nav && (
//         <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full py-20 bg-gray-800 text-white">
//           {links.map(({ id, link }) => (
//             <li
//               key={id}
//               className="px-4 cursor-pointer capitalize py-6 text-2xl"
//             >
//               <a href={`#${link.toLowerCase()}`} onClick={() => setNav(false)}>
//                 {link}
//               </a>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default Navbar;
