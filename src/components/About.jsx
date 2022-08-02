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
        I am a software engineering student.recently I have pass semester 5. I have one year experience in front-end development so right now 1 looking for opportunity
        </p>

        <br />

        <p className="text-xl">My aim is always to combine a pragmatic approach with aesthetics, while improving communication between people.    </p>
      </div>
    </div>
  );
};

export default About;