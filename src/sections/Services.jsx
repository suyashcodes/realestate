import React, { useEffect } from 'react'
import {service} from '../components/export'
import { useDarkMode } from "../components/DarkModeContext";
import Aos from "aos";
import "aos/dist/aos.css";
// import { TbUvIndex } from 'react-icons/tb';
const Services = () => {
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
    <div id='service' className={`${darkMode ? "dark bg-black" : "light bg-transparent"} pb-20`}>

        <section  className={`${darkMode ? "dark bg-gray-800" : "light bg-red-100"} lg:w-[95%] w-full h-fit m-auto rounded-xl flex flex-col justify-center items-center px-6 py-20 gap-10`}>
        
        <div className='w-full flex flex-col justify-center items-start gap-4 lg:px-12'>
        <h1 data-aos="zoom-in" className='uppercase text-red-500 dark:text-white '>Our Service</h1>
        <h1 data-aos="zoom-in" data-aos-delay="400" className='uppercase text-black text-[40px] font-semibold leading-10 dark:text-white '>top real estate service available</h1>

        </div>

        <div id="service-box" className='grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-8 lg:px-12'>
        {
          service.map((item,index)=>(
            <div data-aos="zoom-in" data-aos-delay="200" key={index} className='bg-white dark:bg-black h-[350px] px-8 py-16 flex flex-col justify-center items-start gap-4 rounded-xl border-b-[5px] border-red-600 hover:bg-red-300'>

                <div className='p-6 rounded-full bg-red-200'>
                    <item.icon className='text-red-600 size-10 transform hover:scale-110 transition-transform duration-300 cursor-pointer' />
                </div>
                <h1 className='text-black  text-[22px] font-semibold dark:text-white'>{item.title}</h1>
                <p className='text-lg dark:text-white text-slate-700'>{item.desc}</p>
                <button className='uppercase border-b border-red-700 text-red-700 dark:text-white p-0 font-semibold'>
                  read more
                </button>
            </div>
          ))
        }

        </div>

        </section>


      
    </div>
  )
}

export default Services
