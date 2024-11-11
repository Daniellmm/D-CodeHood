import React from 'react'

const Testing = () => {
  return (
    <div>
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
    </div>
  )
}

export default Testing