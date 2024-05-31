import React from "react";
import logo from "../images/logo.png";
import logo_icon_2 from "../images/logo_icon_2.svg";
import logo_icon_3 from "../images/logo_icon_3.svg";
import facebook from "../images/facebook.svg";
import instagram from "../images/instagram.svg";
import twitter from "../images/twitter.svg";
import pinterest from "../images/pinterest.svg";

const Footer = () => {
  return (
    <div className="bg-gray-50 px-[4%] pt-4 pb-2">
      <div className="md:flex md:justify-start w-full">
        <div className="grid grid-flow-row grid-cols-1 h-fit  ">
          <div className="min-w-fit max-w-fit min-h-fit">
            <img className="h-16 w-16 md:h-24 md:w-24" src={logo} alt="Logo" />
          </div>
          <div>
            <p className="text-slate-900 font-semibold text-sm max-w-[260px] ">
              Dribbble is the world's leading community for creatives to share,
              grow, and get hired.
            </p>
          </div>
          <div className="flex justify-normal  ">
            <img className="h-5 w-5 my-5 mr-4" src={logo_icon_3} alt="Icon" />
            <img className="h-5 w-5 my-5 mr-4" src={twitter} alt="Twitter" />
            <img className="h-5 w-5 my-5 mr-4" src={facebook} alt="Facebook" />
            <img
              className="h-5 w-5 my-5 mr-4"
              src={instagram}
              alt="Instagram"
            />
            <img
              className="h-5 w-5 my-5 mr-4"
              src={pinterest}
              alt="Pinterest"
            />
          </div>
        </div>
        <div className="grid grid-cols-2  md:grid-cols-3 md:gap-6 items-between md:max-w-sceen md:w-4/5 px-4  lg:grid-cols-5 py-8 ">
          <div>
            <h6 className="text-black font-bold">For designers</h6>
            <ul className="*:text-gray-500 *:font-semibold *:py-1 w-[156px]">
              <li>Go Pro!</li>
              <li>Explore design work</li>
              <li>Design blog</li>
              <li>Overtime postcast</li>
              <li>Playoffs</li>
              <li>Weekly Warm-Up</li>
              <li>Refer a Friend</li>
              <li>Code of conduct</li>
            </ul>
          </div>
          <div className="grid grid-col-1 grid-flow-row">
            <div>
              <h6 className="text-black font-bold">Hire designers</h6>
              <ul className="*:text-gray-500 *:font-semibold *:py-1 w-[156px]">
              
                <li>Post a job opening</li>
                <li>Post a freelance project</li>
                <li>Search for designres</li>
              </ul>
            </div>
            <div>
              <h6 className="text-black font-bold">Brands</h6>
              <ul className="*:text-gray-500 *:font-semibold *:py-1 w-[156px]">
         
                <li>Advertise with us</li>
              </ul>
            </div>
          </div>
          <div>
            <h6 className="text-black font-bold">Company</h6>
            <ul className="*:text-gray-500 *:font-semibold *:py-1 w-[156px]">
              <li>About</li>
              <li>Careers</li>
              <li>Support</li>
              <li>Media kit</li>
              <li>Playoffs</li>
              <li>Testimonials</li>
              <li>API</li>
              <li>Terms of services</li>
              <li>Privacy policy</li>
              <li>Cookie policy</li>
            </ul>
          </div>
          <div className="grid grid-col-1 grid-flow-row">
            <div>
              <h6 className="text-black font-bold">Directories</h6>
              <ul className="*:text-gray-500 *:font-semibold *:py-1 w-[156px]">
                <li>design jobs</li>
                <li>designers for hire</li>
                <li>Freelance designers for hire </li>
                <li>Tags</li>
                <li>Places</li>
              </ul>
            </div>
            <div>
              <h6 className="text-black font-bold">Design sssets</h6>
              <ul className="*:text-gray-500 *:font-semibold *:py-1 w-[156px]">
                <li>Dribbble Marketplace</li>
                <li>Creative Market</li>
                <li>Fontspring</li>
                <li>Font Squirrel</li>
              </ul>
            </div>
          </div>
          <div>
            <h6 className="text-black font-bold">For designers</h6>
            <ul className="*:text-gray-500 *:font-semibold *:py-1 w-[156px]">
              <li>Go Pro!</li>
              <li>Explore design work</li>
              <li>Design blog</li>
              <li>Overtime postcast</li>
              <li>Playoffs</li>
              <li>Weekly Warm-Up</li>
              <li>Refer a Friend</li>
              <li>Code of conduct</li>
            </ul>{" "}
          </div>
        </div>
      </div>
      <div className="flex justify-between border-t-2 border-gray-300">
        <p className="text-sm text-gray-600 pt-5">
          &copy; Dribbble. All rights reserved
        </p>
        <div className="flex justify-start">
          <p className="text-sm text-gray-500 pt-5 font-semibold">
            <span className="font-bold text-slate-950 text-sm">20,595,23 </span>
            shots dribbble
          </p>
          <img className="h-6 w-6 my-5 mx-2" src={logo_icon_2} alt="Icon" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
