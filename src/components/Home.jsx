import React from "react";
import HeroImage from "../assets/heroImage.png";
import he from "../assets/he.png"
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
    name="home"
    className="h-screen w-full bg-gradient-to-b from-black via-slate-400 to-gray-600"
  >
    <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
      <div className="flex flex-col justify-center h-full">
        <h2 className="text-4xl sm:text-7xl font-bold text-white">
          I'm a fronten Developer
        </h2>
          <p className="text-Slate-400 font-semibold py-4 max-w-md">
            I have 1 years of experience building and desgining software.
            Currently, I love to work on web application using technologies like
            React, Tailwind, Next JS and firebase.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={he}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-medium"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;