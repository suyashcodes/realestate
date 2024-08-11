import Aos from "aos";
import React, { useEffect } from "react";
import { useDarkMode } from "../components/DarkModeContext";
import heroimg from "../assets/images/hero1.webp";
import "aos/dist/aos.css";
const Hero = () => {
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sin",
      delay: 100,
    });
  }, []);
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <>
      <div className={`${darkMode ? "dark bg-black" : "light bg-white"}`}>
        <section
          id="hero"
          className="w-[95%] h-[600px] bg-cover bg-center m-auto flex flex-col justify-center rounded-xl items-start lg:px-28 px-10 gap-7 z-20"
          style={{ backgroundImage: `url(${heroimg})` }}
        >
          <h1
            data-aos="zoom-in"
            className="text-white text-6xl font-semibold lg:pr[500px] pr-[0px] lg:leading-[70px] leading:[60px]"
          >
            Find Your Next Home In Las Vegas
          </h1>
          <p
            data-aos="zoom-in"
            className="text-xl text-white lg:pr[500px] pr-0"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            enim beatae dolor saepe cumque quibusdam magnam cum omnis incidunt
            recusandae.
          </p>
        </section>
      </div>

      {/* form starts here */}

      <div className={`${darkMode ? "dark bg-black" : "light bg-transparent"}`}>
        <div
          data-aos="zoom-in"
          id="form"
          className={`${
            darkMode ? "dark bg-gray-800" : "light bg-white"
          } lg:w-[70%] w-full grid lg:grid-cols-4 grid-cols-1 justify-center items-center gap-7 p-8 rounded-xl lg:m-auto lg:-mt-14 -mt-14`}
        >
          <div className="w-full">
            <h1 className="text-black font-semibold dark:text-white uppercase">
              Location
            </h1>
            <input
              type="text"
              placeholder="Enter an addrress, state, city and pincode"
              className="bg-white p-2 w-full border-b-[1px] mt-2 border-[#c9c7c1]"
            />
          </div>
          <div className="w-full">
            <h1 className="text-black font-semibold dark:text-white uppercase">
              TYPE
            </h1>
            <select
              name="selectOption"
              id="selectOption"
              className="bg-white p-2 w-full border-b-[1px] mt-2 border-[#c9c7c1] text-gray-500 text-md"
            >
              <option value="" disabled selected>
                Select Property
              </option>
              <option value="Option1">Rntals</option>
              <option value="Option2">Sales</option>
              <option value="Option3">Commercials</option>
            </select>
          </div>

          <div className="w-full">
            <h1 className="text-black font-semibold dark:text-white uppercase">
              CATEGORY
            </h1>
            <select
              name="selectOption"
              id="selectOption"
              className="bg-white p-2 w-full border-b-[1px] mt-2 border-[#c9c7c1] text-gray-500 text-md"
            >
              <option value="" disabled selected>
                Property Category
              </option>
              <option value="Option1">Apartment</option>
              <option value="Option2">Duples</option>
              <option value="Option3">Condos</option>
              <option value="Option3">Condos</option>
              <option value="Option3">Condos</option>
            </select>
          </div>

          <div className="w-full">
            <button className="bg-red-600 hover:bg-black dark:bg-red-700 dark:hover:bg-white dark:hover:text-black  text-lg w-full p-4 font-semibold text-white rounded-xl cursor-pointer transition-transform transform hover:scale-110 duration-500">
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
