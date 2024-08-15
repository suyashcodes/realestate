import React, { useEffect, useState } from 'react'
import { useDarkMode } from "../components/DarkModeContext";
import { FaXmark, FaBars } from 'react-icons/fa6';
import logo from '../assets/images/logo.png'
import Aos from "aos";
import "aos/dist/aos.css";
import { FaPhoneAlt, FaUserCircle } from 'react-icons/fa';

import { Link } from 'react-scroll';

const Header = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sin",
      delay: 100,
    });
  }, []);
  const [isMenuOpen, setIsMenuOpen]  = useState(false);
  const toggleMenu=()=>{
    setIsMenuOpen(!isMenuOpen);
  }
  const closeMenu=()=>{
    setIsMenuOpen(false);
  }

  const navItem = [
    {
      link : 'Home', path:'home'
    },
    {
      link : 'About', path:'about'
    },
    {
      link : 'Properties', path:'properties'
    },
    {
      link : 'Service', path:'service'
    },
    {
      link : 'Testimonials', path:'testimonials'
    },
    {
      link : 'Contact', path:'contact'
    }
  ]
  return (
    <>
      <nav className={`${darkMode? 'dark bg-black':'light bg-[#f3f3f3]'} flex justify-between items-center gap-4 lg:px-20 px-4 py-3 sticky top-0 z-30 h-fit`}>

        <div id='logo'> <img src={logo} alt="company logo" className='lg:w-[150px] w-[120px] dark:invert' /> </div>

        <ul className='lg:flex justify-center items-center hidden'>
             
             {
              navItem.map(({link,path})=>(
                  <Link key={path} className='text-black text-[15px] uppercase font-semibold cursor-pointer px-3 py-2 dark:text-white rounded-lg hover:bg-red-600 hover:text-white' to={path} spy={true} offset={true} smooth={true}>{link}</Link>

              ))
             }

        </ul>

        {/* mobiel menu */}
        <div onClick={toggleMenu} className='flex justify-center items-center lg:hidden'>
            <div>
            {isMenuOpen ? <FaXmark className='text-black dark:text-white text-2xl cursor-pointer'/> : <FaBars className='text-black dark:text-white text-2xl cursor-pointer'/>}
            </div>

        </div>

            <div className={`${isMenuOpen?'flex flex-col':'hidden'} w-full h-fit opacity-90 bg-slate-800 p-4 absolute top-[80px] left-0 `} onClick={closeMenu}>
              <ul className='flex flex-col gap-2 w-full justify-center items-center'>
                {
                  navItem.map(({link,path})=>(
                    <Link key={path} className='text-white uppercase font-semibold p-3 rounded-lg hover:bg-red-600 hover:text-black w-full cursor-pointer text-center' to={path} spy={true} offset={500} smooth={true} onClick={closeMenu}>
                      {link}
                    </Link>
                  ))
                }

                </ul>
            </div>

            <div className='flex justify-center items-center lg:gap-8 gap-2'>
                <div className='flex justify-center items-center lg:gap-3 gap-1'>
                    <FaPhoneAlt className='size-5 text-red-600 ' />
                    <h1 className='lg:text-xl text-sm text-black dark:text-white font-semibold'> 9922557836 </h1>

                </div>
                <FaUserCircle className='text-red-600 size-6' />
            </div>
      </nav>
    </>
  )
}

export default Header
