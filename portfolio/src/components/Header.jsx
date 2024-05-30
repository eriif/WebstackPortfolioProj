import React from "react";
import { Mongodb, Nodejs, Profile, Reactjs, Redux } from "../assets/index";

const Header = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row px-8 md:px-10 gap-10 2xl:gap-20 py-20">
      <div
        className="flex flex-col mb-20 lg:mb-0
	"
        data-aos="fade-down"
        data-aos-offset="100"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        <span className="text-lg font-bold text-red-500">
          SOFTWARE DEVELOPER
        </span>
        <div className="flex  gap-3 items-center my-4">
          <h1 className="text-gray-800 dark:text-neutral-100 text-3xl 2xl:text-7xl font-bold text-center">
            I'm a
          </h1>
          <div className="flex items-center justify-center text-white shadow-lg bg-blue-600 dark:bg-[#224cff10] dark:text-[#224cff] rounded-full">
            <p className="text-2xl 2xl:text-5xl font-bold px-3 py-2 pb-2 text center tracking-tighter">
              Software Developer
            </p>
          </div>
        </div>

        <h1 className="text-5xl 2xl:text-7xl font-extrabold text-black dark:text-neutral-100 tracking-wider">
          ERIC KARANJA
        </h1>
        <p className="tex-md text-black dark:text-gray-100 mt-5 2xl:mt-10">
          Fullstack software Developer with ability to learn and collaborate in
          rapidly changing environments. A degree holder in mathematics (pure and applied), highly skilled in Excel, Matlab, python, e.t.c
        </p>
        <div className="mt-10 flex gap-10">
	   <button className="bg-orange-700 text-lg text-white font-bold rounded-md py-3 px-5">
            Contact Me
          </button>
	  <a href="#skills">
            <button className="text-lg text-white font-semibold rounded-md py-3 px-5 bg-black dark:bg-[#224cff10]">
              Skills
            </button> 
          </a>
        </div>
      </div>

      <div className="w-[320px] h-[320px] md:w-[410px] md:h-[410px] 2xl:w-[500px] 2xl:h-[500px] rounded-full border border-gray-600 dark:border-gray-200 relative md:nt-20 lg:mt-0 flex items-center justify-center ">
        <img
          src={Profile}
          alt="profile"
          className="w-[250px] h-[250px] absolute top-5 md:top-10 object-cover animate-pulse rounded-full"
          data-aos="fade-down"
          data-aos-offset="100"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        />
        <div
          className="relative w-full h-full rounded-full "
          data-aos="fade-up"
          data-aos-offset="100"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <img
            src={Reactjs}
            alt="recatjs"
            className="absolute top-7 md:top-10 left-4 md:left-0 2xl:left-8 w-12 h-12 md:w-20 md:h-20"
          />
          <img
            src={Redux}
            alt="recatjs"
            className="absolute bottom-7 md:bottom-10 left-3 md:left-0 2xl:left-12 w-12 h-12 md:w-20 md:h-20"
          />
          <img
            src={Mongodb}
            alt="recatjs"
            className="absolute top-3 md:top-10 right-0  2xl:right-8 w-16 h-16 md:w-20 md:h-20"
          />
          <img
            src={Nodejs}
            alt="recatjs"
            className="absolute bottom-7 md:bottom-10 right-3  2xl:right-12 w-12 h-12 md:w-20 md:h-20"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
