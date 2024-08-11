import React, { useEffect } from 'react'
import aboutimg from '../assets/images/about.jpg'
import { useDarkMode } from "../components/DarkModeContext";
import Aos from "aos";
import "aos/dist/aos.css";
const About = () => {
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
      <section id="about" className={`${darkMode ? "dark bg-black" : "light bg-transparent"} w-full m-auto lg:px-40 px-10 py-20 grid lg:grid-cols-2 grid-cols-1 justify-center items-center gap-10`}>
      <div>
        <img data-aos="zoom-in" src={aboutimg} alt="aboutimg" className='rounded-xl lg:w-[500px] lg:h-[600px]' />
      </div>

      <div className='flex flex-col justify-center items-start gap-8'>
      <h1 data-aos="zoom-in" className='text-red-500 dark:text-white'>WHO WE ARE</h1>
      <h1 data-aos="zoom-in" data-aos-delay="200" className='text-black text-[40px] font-semibold leading-10 dark:text-white'>Lorem ipsum dolor sit amet consectetur.</h1>
      <p data-aos="zoom-in" data-aos-delay="400" className='text-xl text-gray-600 dark:text-white '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, animi. Ipsam laboriosam repellat hic, dolorem cumque ullam exercitationem cupiditate deserunt illo quaerat consectetur dolore nemo.</p>
      <button data-aos="zoom-in" data-aos-delay="400" className="bg-red-600 hover:bg-black dark:bg-red-700 dark:hover:bg-white dark:hover:text-black  text-lg  p-4 font-semibold text-white rounded-xl cursor-pointer transition-transform transform hover:scale-110 duration-500">
              READ MORE
            </button>

      </div>

      </section>
    </>
  )
}

export default About
