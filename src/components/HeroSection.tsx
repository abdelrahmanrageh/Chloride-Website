import React, { Children } from "react";
import { Link } from "react-scroll";

function HeroSection({
  children,
  imageOneSrc,
}: {
  children: React.ReactNode;
  imageOneSrc: string;
}) {
  const childrenArray = Children.toArray(children);
  return (
    <div className="w-full flex lg:flex-row flex-col items-center lg:justify-between min-h-svh pt-28 lg:pt-10 ">
      {/* main text & button div */}
      <div className="flex items-start flex-col lg:max-w-md ">
        {childrenArray[0]}
        <div className="mt-0 text-xl text-gray-500 text-left w-3/4">
          {childrenArray[1]}
        </div>

        {/*  button */}
        <div>
          <Link
            to="prices"
            smooth={true}
            duration={500}
            className="bg-lightBlue mt-14 flex items-center shadow-blueShadow cursor-pointer text-white px-14 py-3 rounded-3xl transition-all hover:bg-blue-700 left-0"
          >
            {childrenArray[2]}
          </Link>
          {childrenArray[4]}
          {/* <p className='mb-20 text-gray-400 text-xs mt-2'>ChlorideOS v1.0 (300MB)</p> */}
        </div>
      </div>

      {/* images div */}
      <div className="relative sm:p-5 flex flex-col items-start">
        <img
          className="max-h-96 shadow-lightBlueShadow rounded-2xl"
          src={imageOneSrc}
          alt=""
        />
        {childrenArray[3]}
      </div>

      {/* background gradient */}
      <div
        className="absolute -right-0 top-0 -mt-40 -z-10 blur-3xl xl:-top-6"
        aria-hidden="true"
      >
        <div
          className="aspect-[955/1078] w-[60rem] bg-gradient-to-tl from-violet-600 to-cyan-800 opacity-20 blur-3xl"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
    </div>
  );
}

export default HeroSection;
