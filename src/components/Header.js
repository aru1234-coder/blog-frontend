import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="flex items-center justify-center sticky top-0 z-10">
      <div className="bg-white w-1/2 m-2 max-w-6xl mx-auto p-2">
        <div className="p-2 flex justify-between items-center">
          {/* Left navigation */}
          <nav className="space-x-8">
            <Link
              href="/"
              className="text-gray-800 font-medium py-2 px-1 border-2 border-transparent hover:border-gray-50 rounded-md transition-all duration-200 hover:bg-gray-50"
            >
              Home
            </Link>
            <Link
              href="/categories"
              className="text-gray-800 font-medium py-2 px-1 border-2 border-transparent hover:border-gray-50 rounded-md transition-all duration-200 hover:bg-gray-50"
            >
              Categories
            </Link>
            <Link
              href="/about"
              className="text-gray-800 font-medium py-2 px-1 border-2 border-transparent hover:border-gray-50 rounded-md transition-all duration-200 hover:bg-gray-50"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-gray-800 font-medium py-2 px-1 border-2 border-transparent hover:border-gray-50 rounded-md transition-all duration-200 hover:bg-gray-50"
            >
              Contact
            </Link>
          </nav>

          {/* Right navigation */}
          <nav className="space-x-6">
            <Link
              href="/login"
              className="text-gray-800 font-medium py-2 px-1 border-2 border-transparent hover:border-gray-50 rounded-md transition-all duration-200 hover:bg-gray-50"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="bg-gray-500 hover:bg-black text-white px-4 py-2 rounded-md transition-colors font-medium"
            >
              Sign up
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
