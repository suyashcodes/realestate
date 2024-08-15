import React, { useEffect } from 'react'
import { useDarkMode } from "../components/DarkModeContext";
import { FaFacebookF, FaInstagram, FaTwitter,FaYoutube,FaBuilding,FaMobile,FaFax,FaArrowUp, FaMoon, FaSun } from 'react-icons/fa';
import lp1 from '../assets/images/prop7.jpg'
import lp2 from '../assets/images/prop8.jpg'
import { IoMdMail } from 'react-icons/io';
import Aos from "aos";
import "aos/dist/aos.css";
import prop7 from '../assets/images/prop7.jpg'
import prop8 from '../assets/images/prop8.jpg'

import { Link } from 'react-scroll';
import { FaS } from 'react-icons/fa6';

const Footer = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sin",
      delay: 100,
    });
  }, []);
  return (
    <>
      <footer className={`${darkMode ? "dark bg-black" : "light bg-gray-800"} lg:px-20 px-10 py-20 m-auto w-full grid lg:grid-cols-3 grid-cols-1 justify-center items-start lg:gap-20 gap-10`}>

      <div className='flex flex-col items-start gap-5'>

        <h2 className='text-2xl font-semibold text-white'>About Us</h2>
        <p className='text-slate-200 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla excepturi error eaque laboriosam dolores consequatur ut aspernatur commodi ratione impedit.</p>

        <div className='flex justify-start items-center gap-4 mt-4'>
          <div className='p-3 rounded-xl bg-white hover:bg-red-600 hover:text-white cursor-pointer transform hover:scale-110 transition-transform duration-300'>
            <FaFacebookF className='size-5' />
          </div>
          <div className='p-3 rounded-xl bg-white hover:bg-red-600 hover:text-white cursor-pointer transform hover:scale-110 transition-transform duration-300'>
            <FaInstagram className='size-5' />
          </div>
          <div className='p-3 rounded-xl bg-white hover:bg-red-600 hover:text-white cursor-pointer transform hover:scale-110 transition-transform duration-300'>
            <FaTwitter className='size-5' />
          </div>
          <div className='p-3 rounded-xl bg-white hover:bg-red-600 hover:text-white cursor-pointer transform hover:scale-110 transition-transform duration-300'>
            <FaYoutube className='size-5' />
          </div>
        </div>
        <h1 className='text-white mt-8'>Copyrights Real Estate, All rights reserved</h1>

      </div>

      <div className='flex flex-col justify-center items-start gap-5'>
        <h1 className='text-white text-2xl font-semibold'>Contact Us</h1>
        <div className='flex items-center justify-center gap-3'>

        <FaBuilding className='text-white size-5' />
        <p className='text-white text-lg'>10845 Griffith Peak Dr, Las Vegas, NV 89135</p>

        </div>
        <div className='flex items-center justify-center gap-3'>

        <FaMobile className='text-white size-5' />
        <p className='text-white text-lg'>+91 879 098 8901</p>

        </div>
        <div className='flex items-center justify-center gap-3'>

        <FaFax className='text-white size-5' />
        <p className='text-white text-lg'>+91 123 678 0912</p>

        </div>
        <div className='flex items-center justify-center gap-3'>

        <IoMdMail className='text-white size-5' />
        <p className='text-white text-lg'>office23@gmail.com</p>

        </div>
      </div>

      <div className='flex flex-col justify-center items-start gap-5'>

          <h1 className='text-white text-2xl font-semibold'>Latest Properties</h1>
          <div className='flex justify-start items-center gap-3'>
            <img src={lp1} alt="build1" className='h-[75px] w-[140px] rounded-xl transform hover:scale-110 transition-transform duration-300'/>
            <div className='flex flex-col justify-center items-start gap-1'>
              <h1 className='text-white text-lg '>Villa with amazing view</h1>
              <h1 className='text-slate-500 text-base '>$345.55</h1>
            </div>
          </div>
          <div className='flex justify-start items-center gap-3'>
            <img src={lp2} alt="build1" className='h-[75px] w-[140px] rounded-xl transform hover:scale-110 transition-transform duration-300'/>
            <div className='flex flex-col justify-center items-start gap-1'>
              <h1 className='text-white text-lg '>Sea View Villa</h1>
              <h1 className='text-slate-500 text-base '>$564.88</h1>
            </div>
          </div>
      </div>


      
      </footer>

      {/* slide to top button */}

      <div className='bg-red-600 p-4 rounded-full hover:bg-black cursor-pointer fixed lg:bottom-12 bottom-6 right-6'>
      <Link to='hero' spy={true} offset={-120} smooth={true}>
        <FaArrowUp className='size-6 text-white'/>
      </Link>

      </div>

      {/* dark mode toggle button section */}

      <div>
        <button onClick={toggleDarkMode} className='flex items-center p-4 rounded-full bg-orange-500 fixed lg:top-52 right-6'>
          {darkMode? <FaMoon size={25} className='text-black'/> : <FaSun size={25} className='text-black'/>}
        </button>
      </div>
    </>
  )
}

export default Footer
