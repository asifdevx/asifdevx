import React from "react";

import Image from "next/image";

const Hero = () => {
  const startingYear = new Date("03 march 2020").getFullYear();
  const currentYear = new Date().getFullYear();

  return (
    <section className="max-w-7xl mx-auto w-full md:h-screen h-4/2 px-5 md:px-14 xl:px-20 gap-20 md:gap-0 flex flex-col md:flex-row justify-center items-center">
      <div className="w-full md:w-1/2 flex flex-col  items-start mt-36">
        <h2 className="text-[24px] leading-3 font-extrabold  mb-4 text-red-600 mx-auto md:mx-0">
          HEY THERE!
        </h2>
        <h1 className="mx-auto md:mx-0 text-[30px] md:text-[50px] lg:text-[64px] tsukimi mb-3">
          I&apos;M JASHEDUL ASIF.
        </h1>
        <span className="w-full my-12 h-1 md:flex hidden dark:bg-white rounded-full bg-black bg-spanLine" />

        <p className="raleway">
          I&apos;m a freelancer. specializing in{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r font-extrabold text-2xl from-[#4ca5ffce] to-[#b673f8c9]">
            website developer
          </span>{" "}
          , Community management and crypto trader
        </p>
        <p className=" mt-3 raleway">
          I have <strong>{currentYear - startingYear}+ years</strong> + years of experience as an Web
          developer and have worked with various clients including Blockchain
          Innovators . Check out my portfolio to see what I do.
        </p>

        <button className="relative dark:bg-[#fff] bg-[#000] mx-auto dark:text-[#000] text-white md:mx-0 top-5 text-white font-semibold py-2 px-12 transform  z-20 transition-all duration-300 ">
          <a
            href="https://github.com/asifdevx"
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-30 "
          >
            GitHub
          </a>
        </button>
      </div>
      <div className="relative w-full md:w-1/2 flex justify-center items-center  ">
        {/* Outer container with padding and background color */}
        <div className="relative p-3 bg-transparent border-4 dark:border-red-400 border-purple rounded-lg md:rounded-full flex justify-center items-center">
          {/* Inner container for the image */}
          <div className="relative w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] hover:scale-105 md:hover:scale-100 transition-transform duration-75 ease-in-out  rounded-lg md:rounded-full overflow-hidden">
            <Image
              src="/profile.jpg"
              alt="profile"
              layout="fill"
              className="object-cover pointer-events-none"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
