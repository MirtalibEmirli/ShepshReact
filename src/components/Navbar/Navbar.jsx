import React from "react";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import DarkMode from "./DarkMode";
const Navbar = () => {
  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40 ">
      {/* upper Navbar */}
      <div className="bg-primary/40 py-2  ">
        <div className="container flex justify-between items-center ">
          <div>
            <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
              <img
                src="https://shopsy-tcj.netlify.app/assets/logo-Jm4BVSCI.png"
                alt="Logo"
                className="w-10 uppercase"
              />
              Shepsy
            </a>
          </div>
          {/* searchbar and  */}
          <div className="flex justify-between items-center gap-4">
            <div className="group hidden sm:block   relative  ">
              <input
                type="text"
                placeholder="search"
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all rounded-full duration-300 
               border border-gray-300 py-1 px-2 focus:border-primary focus:outline-none  
                "
              />
              <IoMdSearch className="text-2xl text-gray-500 absolute top-1/2 -translate-y-1/2 right-3 group-hover:text-primary" />
            </div>
          {/* order buttom */}
          <button
            onClick={() => alert("this not ready")}
            className="bg-gradient-to-r from-primary to-secondary transition-all ease-in-out duration-400 flex
          text-white py-1 px-2 rounded-full items-center gap-3 group hover:shadow-lg hover:brightness-110 hover:scale-105"
          >
            <span className="group-hover:block hidden transition-all duration-400 ">Order</span>

            <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer"/>
          </button>
          {/* Darkmode <Switch></Switch> */}
        <div>
          <DarkMode/>
        </div>
          </div>
        </div>
      </div>
      {/* lower Navbar */}

      <div></div>
    </div>
  );
};

export default Navbar;
