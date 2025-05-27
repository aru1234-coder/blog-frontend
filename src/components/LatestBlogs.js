import Image from "next/image";
import React from "react";

const LatestBlogs = () => {
  return (
    <div className="m-20">
      <h1 className="font-bold text-3xl text-center mb-10 text-gray-600">
        Discover Latest Blogs
      </h1>

      <div className="w-full flex gap-4">
        <div className="w-1/4 bg-red-500">
          <Image
            alt=""
            src="/assets/images/bg-1.jpg"
            width={500}
            height={500}
          />
        </div>
        <div className="w-2/4 bg-blue-500">
          <Image
            alt=""
            src="/assets/images/bg-2.jpg"
            width={500}
            height={500}
          />
        </div>
        <div className="w-1/4 bg-yellow-500">
          <Image
            alt=""
            src="/assets/images/bg-3.jpg"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};

export default LatestBlogs;
