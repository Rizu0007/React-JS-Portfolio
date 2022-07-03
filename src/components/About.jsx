import React from "react";

const About = () => {
  return (
    <div
    name="about"
    className="w-full h-screen bg-gradient-to-b from-gray-700 to-gray-500 text-white"
  >
    <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
      <div className="pb-8">
        <p className="text-4xl font-bold inline border-b-4 border-gray-500">
          About
        </p>
      </div>

        <p className="text-xl Slate-400 mt-20">
        My aspiration to live creativity and meet people’s actual needs when it comes to media consumption led me to complete my Bachelor’s in software. My aim is always to combine a pragmatic approach with aesthetics, while improving communication between people.
        </p>

        <br />

        <p className="text-xl">
        As a problem solver who loves facing challenges in my work, I'm excited to be at the deployment phase of my career as a web developer. I'm passionate and ambitious about my work, and love to be on a team that questions possibilities.       </p>
      </div>
    </div>
  );
};

export default About;