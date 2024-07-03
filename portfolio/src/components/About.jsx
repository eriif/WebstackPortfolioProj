import React from "react";
import { Profile } from "../assets";
import { FaUserAlt } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { MdOutlineAlternateEmail, MdWifiCalling2 } from "react-icons/md";

const About = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row px-8 md:px-1 gap-10 lg:gap-10 lg:py-20">
	 <div className="w-80 h-60 flex flex-col items-center border border-gray-500 dark:bg-transparent rounded-full">
	  <img
          src={Profile}
          alt="about"
          className="h-[250px] p-1 rounded-full ease-in-out duration-300 hover:scale-125"
        />
      </div>
      <div className="w-full flex flex-col">
        <p className="text-3xl font-bold text-black dark:text-white">
          About me
        </p>
        <p className="text-lg text-black dark:text-gray-400 leading-10">
          I'm passionate full-stack software developer with  the aim of solving real-world problems through developing suitable applications. I'm able to apply my skills to create innovative solutions and deliver high-quality software. Able to design efficient algorithms and understand various data structures to solve complex problems.I've Strong analytical skills to identify, diagnose, and solve complex software issues.
        </p>
        <div
          className="mt-5 2xl:mt-10 flex flex-wrap gap-5"
          data-aos="fade-up"
          data-aos-offset="100"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <p className="flex gap-3 items-center justify-center rounded-full shadow-lg py-2 px-4 bg-[#030a1c] text-white cursor-pointer">
            <FaUserAlt size={18} />
            ERIC KARANJA
          </p>
          <p className="flex gap-3 items-center justify-center rounded-full shadow-lg py-2 px-4 bg-[#030a1c] text-white cursor-pointer">
            <MdOutlineAlternateEmail size={18} />
            erickaranja54@gmail.com
          </p>
          <a
            href="https://wa.me/+254 707 020 809"
            className="flex gap-3 items-center justify-center rounded-full shadow-lg py-2 px-4 bg-[#030a1c] text-white cursor-pointer"
          >
            <BsWhatsapp size={18} />
            +254 707 020 809
          </a>
          <p className="flex gap-3 items-center justify-center rounded-full shadow-lg py-2 px-4 bg-[#030a1c] text-white cursor-pointer">
            <MdWifiCalling2 size={20} />
            +254 707 020 809
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
