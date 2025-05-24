import React from "react";
import { RiSearchEyeLine } from "react-icons/ri";

const Hero = () => {
  return (
    <div className="p-10 mt-14">
      <div className="flex items-center flex-col gap-2">
        <div className="mb-4">
          <div className="flex space-x-2 space-y-2">
            <h1 className="font-bold text-5xl bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Crafting Spectacular
            </h1>
            <h1 className="font-bold text-5xl bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent">
              Websites that
            </h1>
          </div>
          <h1 className="font-bold text-5xl text-center text-gray-700">
            Speak for Themselves
          </h1>
        </div>

        <div className="mb-4">
          <p className="text-gray-500 font-medium text-lg text-center">
            Design A Professional Website In Minutes With Syron. Use Free
            Customizable
          </p>
          <p className="text-gray-500 font-medium text-lg text-center">
            Templates, Easy Drag-and-drop Tools.
          </p>
        </div>

        <div className="flex md:flex-col flex-row gap-4 max-w-xl mx-auto">
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <RiSearchEyeLine />
            </div>
          </div>
          <input
            type="text"
            placeholder="search...."
            className="block w-full pl-10 p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm transition-all"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
