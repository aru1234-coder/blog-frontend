import React from "react";
import { RiSearchEyeLine } from "react-icons/ri";

const Hero = () => {
  return (
    <div className="p-10 my-16">
      <div className="flex items-center flex-col gap-2">
        <div className="mb-4">
          <div className="flex space-x-2">
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

        <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto mb-3">
          <div className="relative flex-grow">
            <input
              type="text"
              placeholder="Search..."
              className="block w-full pr-10 p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm transition-all"
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <RiSearchEyeLine className="h-5 w-5 text-pink-600" />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <p className="text-gray-600 text-base font-semibold">
            Popular Searches:
          </p>
          <div className="flex gap-3">
            <p className="text-sm">#Hot News</p>
            <p className="text-sm">#Health</p>
            <p className="text-sm">#Nature</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
