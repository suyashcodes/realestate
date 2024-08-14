import React, { useEffect } from 'react'

import { useDarkMode } from "../components/DarkModeContext";
import Aos from "aos";
import "aos/dist/aos.css";
const Contact = () => {
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
    <div className={`${darkMode?"dark bg-black":"light bg-transparent"} pb-20`}>

          <section id='contact' className={`${darkMode?"dark bg-gray-800":"light bg-red-100"} lg:w-[95%] w-full h-fit m-auto rounded-xl grid lg:grid-cols-2 grid-cols-1 justify-center items-center lg:px-36 px-6 py-20 gap-10`}>

                <div data-aos="zoom-in" className='bg-white dark:bg-black p-10 flex flex-col justify-center items-start gap-4 rounded-xl'>

                <h1 className='text-black text-2xl font-semibold dark:text-white'>Send us a message today</h1>

                <input type="text" placeholder='Your Full Name Here' className='w-full px-6 py-3 border-2 border-gray-200 rounded-xl'/>
                <input type="email" placeholder='Enter your valid email' className='w-full px-6 py-3 border-2 border-gray-200 rounded-xl'/>
                <input type="tel" placeholder='Enter your full number' className='w-full px-6 py-3 border-2 border-gray-200 rounded-xl'/>
                <textarea rows={5} placeholder='Enter your full number' className='w-full px-6 py-3 border-2 border-gray-200 rounded-xl'></textarea>
                <button className='bg-red-600 w-full text-lg px-8 py-3 text-white font-semibold rounded-xl hover:bg-black dark:hover:bg-red-700'>Send Email</button>

                </div>

                <div className='flex flex-col justify-center items-start gap-8 lg:p-15 p-6'>

                <h1 data-aos="zoom-in" data-aos-delay="200" className='text-red-700 dark:text-white'>REACH US</h1>
                <h1 data-aos="zoom-in" data-aos-delay="400" className='text-black dark:text-white text-[40px] font-semibold leading-10'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis, ullam!</h1>
                <p data-aos="zoom-in" data-aos-delay="600" className='text-xl text-gray-600 text-justify dark:text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae optio, cupiditate dolorem, dicta maiores nobis incidunt temporibus, accusamus et voluptates sit quam magni nostrum architecto ad. Soluta ab eligendi odio?</p>
                <button data-aos="zoom-in" data-aos-delay="500" className='bg-red-600 text-[20px] px-8 py-3 text-white font-semibold rounded-xl hover:bg-black dark:hover:bg-red-700'>Send Email</button>

                </div>

          

          </section>
      
    </div>
  )
}

export default Contact
