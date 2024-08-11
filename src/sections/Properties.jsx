import React, { useEffect } from 'react'
import { useDarkMode } from "../components/DarkModeContext";
import Aos from "aos";
import "aos/dist/aos.css";
import {property} from '../components/export'
import {FaBath, FaShareAlt, FaBed, FaUserCircle, FaPlus, FaMapMarkerAlt, FaVideo, FaCamera} from 'react-icons/fa'
import { MdSpaceDashboard } from 'react-icons/md';
const Properties = () => {
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
    <div className={`${darkMode ? "dark bg-black" : "light bg-transparent"}`}>
        <section id='properties' className='lg:w-[90%] m-auto lg:px-20 px-6 py-20 w-full flex flex-col justify-center items-start gap-10 '>
    
          <div className='flex flex-col justify-center items-start gap-4'>
            <h1 data-aos="zoom-in" className='text-red-500 dark:text-white'>Properties</h1>
            <h1 data-aos="zoom-in" className='text-black font-semibold dark:text-white'>Explore The Latest</h1>
          </div>

          {/* Proeprty grid starts */}
          <div id='grid-box' className='w-full grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-8'>
            {
              property.map((item, index)=>(
                <div data-aos="zoom-in" data-aos-delay="200" key={index} className='bg-white dark:bg-gray-800 rounded-xl w-full'>

                <div id='imgbox' className='bg-cover bg-center h-[250px] rounded-xl p-4 flex flex-col justify-between items-end' style={{backgroundImage:`url(${item.images})`}}>
                
                <div id="top" className='flex justify-between items-end w-full'>
                    <div> <button className='px-3 py-1 bg-red-600 hover:bg-white hover:text-black text-white rounded-full text-[13px]'>Featured</button> </div>
                </div>

                </div>

                </div>
              ))
            }

          </div>

        </section>
    </div>
    </>
  )
}

export default Properties
