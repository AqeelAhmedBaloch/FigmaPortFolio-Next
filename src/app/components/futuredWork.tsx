import React from "react";
import Image from "next/image";

const FuturedWork = () => {
  return (
    <div className="flex justify-center items-center px-4 py-6">
      <div className="w-full md:w-[919px]">
        <h2 className="text-myBlack font-semibold text-center text-lg md:text-xl">Futured Work</h2>

        {/* First Work Item */}
        <div className="flex flex-col md:flex-row gap-4 mt-5">
          <Image
            className="rounded-lg w-full md:w-auto"
            src={"/assets/One.png"}
            alt="first-image"
            width={236}
            height={180}
          />
          <div>
            <h1 className="text-myBlack font-semibold text-lg">Designing Dashboard</h1>
            <div className="mt-3">
              <div className="flex items-center gap-3">
                <p className="text-sm bg-myPink rounded-lg w-12 h-5 text-center text-white">2024</p>
                <p className="text-gray-500 text-sm">Dashboard</p>
              </div>
              <p className="mt-3 text-gray-400 text-sm leading-relaxed">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
                officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
          </div>
        </div>

        {/* Second Work Item */}
        <div className="flex flex-col md:flex-row gap-4 mt-5">
          <Image
            className="rounded-lg w-full md:w-auto"
            src={"/assets/Two.png"}
            alt="second-image"
            width={236}
            height={180}
          />
          <div>
            <h1 className="text-myBlack font-semibold text-lg">Designing Dashboard</h1>
            <div className="mt-3">
              <div className="flex items-center gap-3">
                <p className="text-sm bg-myPink rounded-lg w-12 h-5 text-center text-white">2024</p>
                <p className="text-gray-500 text-sm">Dashboard</p>
              </div>
              <p className="mt-3 text-gray-400 text-sm leading-relaxed">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
                officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
          </div>
        </div>

        {/* Third Work Item */}
        <div className="flex flex-col md:flex-row gap-4 mt-5">
          <Image
            className="rounded-lg w-full md:w-auto"
            src={"/assets/three.png"}
            alt="third-image"
            width={236}
            height={180}
          />
          <div>
            <h1 className="text-myBlack font-semibold text-lg">Designing Dashboard</h1>
            <div className="mt-3">
              <div className="flex items-center gap-3">
                <p className="text-sm bg-myPink rounded-lg w-12 h-5 text-center text-white">2024</p>
                <p className="text-gray-500 text-sm">Dashboard</p>
              </div>
              <p className="mt-3 text-gray-400 text-sm leading-relaxed">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
                officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FuturedWork;
