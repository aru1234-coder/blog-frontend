import React from "react";
import {
  FaHandHoldingUsd,
  FaHouseDamage,
  FaCarCrash,
  FaHeartbeat,
  FaPlane,
  FaShip,
  FaHome,
  FaUserShield,
  FaGraduationCap,
  FaUmbrellaBeach,
} from "react-icons/fa";

const categories = [
  { icon: <FaHandHoldingUsd size={20} />, title: "Need a help in Claim" },
  { icon: <FaHouseDamage size={20} />, title: "Home Insurance" },
  { icon: <FaCarCrash size={20} />, title: "Auto Insurance" },
  { icon: <FaHeartbeat size={20} />, title: "Health Insurance" },
  { icon: <FaPlane size={20} />, title: "Travel Insurance" },
  { icon: <FaShip size={20} />, title: "Marine Insurance" },
  { icon: <FaHome size={20} />, title: "Property Insurance" },
  { icon: <FaUserShield size={20} />, title: "Life Insurance" },
  { icon: <FaGraduationCap size={20} />, title: "Education Plans" },
  { icon: <FaUmbrellaBeach size={20} />, title: "Retirement Plans" },
];

const Categories = () => {
  return (
    <div className="flex items-center justify-center flex-wrap gap-4 p-4 border-b-2">
      {categories.map((category, index) => {
        return (
          <div
            key={index}
            className="max-w-sm p-3 border border-gray-200 rounded-full shadow-sm dark:bg-gray-800 dark:border-gray-700 flex gap-2 items-center cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700"
          >
            <div className="text-gray-500 dark:text-gray-400">
              {category.icon}
            </div>
            <h5 className="text-base font-semibold tracking-tight text-gray-900 dark:text-white whitespace-nowrap">
              {category.title}
            </h5>
          </div>
        );
      })}
    </div>
  );
};

export default Categories;
