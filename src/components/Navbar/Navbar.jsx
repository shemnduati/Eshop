import React from "react";
import { FaCaretDown, FaCartShopping } from "react-icons/fa6";
import { IoMdSearch } from "react-icons/io";
import DarkMode from "./DarkMode";
const MenuLinks = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Shop",
    link: "/#shop",
  },
  {
    id: 3,
    name: "About",
    link: "/#about",
  },
  {
    id: 4,
    name: "Blog",
    link: "/#blog",
  },
];
const DropdownLinks = [
  {
    id: 1,
    name: "Trending Products",
    link: "/#",
  },
  {
    id: 2,
    name: "Best Selling",
    link: "/#shop",
  },
  {
    id: 3,
    name: "Top Rated",
    link: "/#about",
  },
];
const Navbar = () => {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white">
      <div className="py-4">
        <div className="container flex justify-between items-center">
          {/* Logo and Links Section */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl
                                        duration-200 relative z-40"
            >
              Eshop
            </a>
            <div>
              {/* Menu items */}
              <div className="hidden lg:block">
                <ul className="flex items-center gap-4">
                  {MenuLinks.map((data, index) => (
                    <li key={index}>
                      <a
                        href={data.link}
                        className="inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200"
                      >
                        {data.name}
                      </a>
                    </li>
                  ))}
                  {/* Dropdown */}
                  <li className="relative cursor-pointer group">
                    <a 
                        href="#" 
                        className="flex items-center gap-[2px] font-semibold text-gray-500
                                    hover:text-black dark:hover:text-white py-2 duration-200">
                        Quick Links
                        <span>
                          <FaCaretDown className="group-hover:rotate-180 duration-300" />
                        </span>
                    </a>
                      {/* Dropdown links */}
                      <div>
                        <ul>
                          {
                            DropdownLinks.map((data, index) => (
                              <li key={index}>{data.name}</li>
                            ))
                          }
                        </ul>
                      </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Navbar Right Section */}
          <div className="flex justify-between items-center gap-4">
            {/* Search bar Section */}
            <div className="relative group hidden sm:block">
              <input type="text" placeholder="Search" className="search-bar" />
              <IoMdSearch
                className="text-xl text-gray-600 dark:text-gray-400 group-hover:text-primary
                                                absolute top-1/2 -translate-y-1/2 right-3 duration-200"
              />
            </div>
            {/* Order button Section */}
            <button className="relative p-3">
              <FaCartShopping className="text-xl text-gray-600 dark:text-gray-400" />
              <div className="w-4 h-4 rounded-full text-white bg-red-400 absolute top-0 right-0 flex items-center justify-center text-xs">
                4
              </div>
            </button>
            {/* Dark Mode  Section */}
            <div>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
