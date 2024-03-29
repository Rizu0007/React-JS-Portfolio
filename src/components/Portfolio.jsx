import React from "react";
import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
import installNode from "../assets/portfolio/installNode.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";
import weather from "../assets/weather.jpg"
import blog from "../assets/blog.png"
import todo from "../assets/todo.PNG"
import ka from "../assets/ka.PNG"
import kmi from "../assets/kmi.PNG"
const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: weather,
    },
    {
      id: 2,
      src: blog,
    },
    {
      id: 3,
      src: navbar,
    },
    {
      id: 4,
      src: todo,
      button:"github user finder"
    },
    {
      id: 4,
      src: kmi,
      button:"github user finder"
    },
    
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <br></br>
          <br></br>
          <p className="text-5xl font-bold inline border-b-2 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src , button }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"

              /> 
              <div key={button}className="flex items-center justify-center text-black">
               
            
                </div>
              </div>
            
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;