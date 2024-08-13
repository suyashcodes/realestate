import React, { useEffect } from 'react'

import { FaStar } from 'react-icons/fa';
import {client} from '../components/export'
import { useDarkMode } from "../components/DarkModeContext";
import Aos from "aos";
import "aos/dist/aos.css";
const CLients = () => {
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
    <div className={`${darkMode?"dark bg-black":"light bg-transparent"}`}>

    <section id='testimonials' className='flex flex-col lg:w-[95%] h-fit m-auto bg-cover bg-center rounded-xl w-full justify-center items-start lg:px-20 py-20 px-6'>

    <div className='flex flex-col justify-center items-start gap-4'>
    <h1 data-aos="zoom-in" className='uppercase text-red-500 dark:text-white'>our clients</h1>
    <h1  data-aos="zoom-in" className='uppercase font-semibold text-red-500 dark:text-white text-[40px]'>what our clients saying about us</h1>
    </div>
    <div className='py-14 grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-8 w-full'>
    {
      client.map((item,index)=>(
        <div data-aos="zoom-in" data-aos-delay={200} key={index} className='bg-white dark:bg-gray-900 hover:bg-red-100 cursor-pointer p-12 flex flex-col justify-center items-center gap-6 rounded-xl w-full'>
        
        <div className='flex justify-start w-full gap-4'>
            <img src={item.image} alt="itemimage" className='w-[70px] transform hover:scale-110 transition-transform duration-300 ' />
            <div className='flex flex-col justify-center gap-1'>
                  <h1 className='text-xl font-semibold text-black dark:text-white'>{item.name}</h1>
                  <h1 className='text-md text-slate-600 dark:text-white'>{item.text}</h1>

            </div>

        </div>

        <div>
          <p className='text-md tuxt-justify text-slate-600 dark:text-white'>{item.feedback}</p>

          <div className='flex justify-start mt-4 items-start gap-2 w-full'>

          <FaStar className="size-4 text-yellow-400" />
          <FaStar className="size-4 text-yellow-400" />
          <FaStar className="size-4 text-yellow-400" />
          <FaStar className="size-4 text-yellow-400" />
          <FaStar className="size-4 text-yellow-400" />

          </div>
        </div>
        
         </div>
      ))
    }
    </div>

    </section>
      
    </div>
  )
}

export default CLients
