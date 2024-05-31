import React from "react";
import logo from "../images/logo.png";
import user from "../images/user.svg";


const Navbar = () => {
  const image = "";
  return (
    <div className="h-16 w-full  bg-white border-b-[1px] border-b-gray-200 flex justify-between px-[4%] ">
      <img
        id="dropdownHoverButton"
        data-dropdown-toggle="dropdownHover"
        data-dropdown-trigger="hover"
        className="h-16 w-16 md:h-20 md:w-20 hover:h[]"
        src={logo}
      />
      <div
        id="dropdownHover"
        class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
      ></div>
      <div className="hidden md:block">
        <ul className="flex justify-between mt-4  *:m-2 *:text-gray-500 *:font-semibold *:text-sm ">
          <li>Insperation </li>
          <li>Find Work</li>
          <li>Learn Designe</li>
          <li>Go Pro</li>
          <li>Hire Designer</li>
        </ul>
      </div>

      <div className="flex justify-between ">
        <div className="relative mx-3">
          <input
            className="block bg-gray-100 h-8 w-[100%]  rounded-md pl-8 pr-2 my-4"
            type="text"
            id="name"
            name="name"
            value=""
            placeholder="Search"
          />
          <svg
            className="absolute top-[22px] left-2 h-5 w-5 fill-current text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="100"
            height="100"
            viewBox="0 0 40 40"
          >
            <linearGradient
              id="-2suTD81jP2ew0CFO8L6Qa_p8VkXMjDOpcE_gr1"
              x1="31.916"
              x2="25.088"
              y1="31.849"
              y2="26.05"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#b2b2b2"></stop>
              <stop offset=".999"></stop>
            </linearGradient>
            <polygon
              fill="url(#-2suTD81jP2ew0CFO8L6Qa_p8VkXMjDOpcE_gr1)"
              points="29.976,27 24.451,27.176 33.95,36.778 36.778,33.95"
            ></polygon>
            <path
              fill="#b2b2b2"
              d="M24.313,27c-1.788,1.256-3.962,2-6.313,2c-6.075,0-11-4.925-11-11S11.925,7,18,7s11,4.925,11,11	c0,2.659-0.944,5.098-2.515,7h4.776C32.368,22.909,33,20.53,33,18c0-8.284-6.716-15-15-15S3,9.716,3,18c0,8.284,6.716,15,15,15	c4.903,0,9.243-2.363,11.98-6H24.313z"
            ></path>
          </svg>
        </div>
        <div>
          <img className=" h-8 w-8 rounded-full my-4 ml-1 fa-solid fa-user" src={image ||user}></img>
        </div>
        <button className=" hidden md:block bg-pink-600 h-10 w-24 rounded-lg my-3 mx-3 text-white font-bold">
          Upload
        </button>
        {<svg
          className="md:hidden h-6 w-6 ml-3 my my-5 "
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="100"
          height="100"
          viewBox="0 0 24 24"
        >
          <path d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z"></path>
        </svg>}
        <i class="fa-solid fa-bars"></i>

      </div>
    </div>
  );
};

export default Navbar;
