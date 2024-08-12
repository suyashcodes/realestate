import React, { useEffect } from 'react'
import { useDarkMode } from "../components/DarkModeContext";
import Aos from "aos";
import "aos/dist/aos.css";
import {property} from '../components/export'
import {FaBath, FaShareAlt, FaBed, FaUserCircle, FaPlus, FaMapMarkerAlt, FaVideo, FaCamera, FaMapMarkedAlt, FaHeart} from 'react-icons/fa'
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
                
                    <div id="top" className='flex flex-row justify-between items-end w-full'>
                        <div> <button className='px-3 py-1 bg-red-600 hover:bg-white hover:text-black text-white rounded-full text-[13px]'>Featured</button> </div>
                        <div  className='flex flow-row items-center gap-3'>
                        <div> <button className=' px-3 py-1 bg-red-600 hover:bg-white hover:text-black text-white rounded-full text-[13px]'>Sales</button> </div>
                        <div> <button className='px-3 py-1 bg-red-600 hover:bg-white hover:text-black text-white rounded-full text-[13px]'>Active</button> </div>
                        </div>
                    </div>

                    
                    <div id="botom" className='flex flex-row justify-between items-end w-full'>
                        <div className='flex justify-start items-center gap-2'>
                              <FaMapMarkerAlt className='size-4 text-white'/>
                              <h1 className='text-white'>{item.address}</h1>
                        </div>
                        <div className='flex justify-end items-center gap-4'>
                              <FaVideo className='size-4 text-white'/>
                              <FaCamera className='size-4 text-white'/>
                        </div>
                    </div>

                </div>

                <div className='px-2 py-6 w-full flex flex-col justif-center items-start gap-2'>
                      <h1 className='text-xl text-black font-semibold dark:text-white'>{item.name}</h1>
                      <h1 className='text-2xl text-red-600 font-bold dark:text-white'>{item.price}</h1>
                      <h1 className=' dark:text-white'>{item.about}</h1>

                      <div id='icons' className='flex flex-row items-start justify-center gap-4'>
                         
                         <div className='flex justify-start items-center gap-2'>
                              <FaBath className='size-5 text-red-600' />
                              <p className='text-base text-whblack dark:text-white p-0 m-0'>{item.bath}</p>
                         </div>
                         <div className='flex justify-start items-center gap-2'>
                              <FaBed className='size-5 text-red-700' />
                              <p className=' dark:text-white p-0 m-0'>{item.bath}</p>
                         </div>
                         <div className='flex justify-start items-center gap-2'>
                              <MdSpaceDashboard className='size-5 text-red-700' />
                              <p className='dark:text-white p-0 m-0'>{item.area}</p>
                         </div>
                         
                         

                      </div>

                      <div className='h-[1px] w-full bg-gray-800 mt-8'>
                      </div>

                      <div className='flex justify-between items-center w-full mt-2'>
                            <div className='flex justify-center items-start gap-2'>
                              <FaUserCircle className='size-5 text-red-400' />
                              <h1 className='flex dark:text-white'>{item.owner}</h1>
                            </div>
                            <div className='flex justify-center items-center gap-4'>
                              <div className='p-2 border-2 border-gray-200 hover:bg-black cursor-pointer transform hover:scale-110 transition-transform duration-300'>
                                <FaShareAlt className='size-4 text-red-500'/>
                              </div>
                              <div className='p-2 border-2 border-gray-200 hover:bg-black cursor-pointer transform hover:scale-110 transition-transform duration-300'>
                                <FaHeart className='size-4 text-red-500'/>
                              </div>
                              <div className='p-2 border-2 border-gray-200 hover:bg-black cursor-pointer transform hover:scale-110 transition-transform duration-300'>
                                <FaPlus className='size-4 text-red-500'/>
                              </div>
                            </div>
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
