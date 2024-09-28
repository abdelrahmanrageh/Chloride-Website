// import YouTube from "react-youtube"

import { useState } from "react";

function VideosSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const YouTubeFacade = ({ videoId }: { videoId: string }) => (
    <div className="relative mb-10 lg:mb-0 mx-auto lg:mx-5 shadow-lightBlueShadow rounded-xl my-20 w-full min-h-[200px] sm:min-h-[300px] sm:min-w-[500px] 2xl:h-[400px] 2xl:w-[650px]">
      {!isLoaded ? (
        <div
          className="relative z-0 rounded-xl h-full bg-gray-200 min-h-[200px] sm:min-h-[300px] flex justify-center items-center cursor-pointer"
          onClick={handleLoad}
          style={{
            backgroundImage: `url(https://img.youtube.com/vi/${videoId}/hqdefault.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <button className="absolute bg-red-500 text-white h-16 w-16 p-2 rounded-full hover:bg-red-400 transition-all">
            ▶
          </button>
        </div>
      ) : (
        <iframe
          loading="lazy"
          className="mb-10 lg:mb-0 mx-auto lg:mx-5 shadow-lightBlueShadow rounded-xl my-20 w-full min-h-[200px] sm:min-h-[300px]  sm:min-w-[500px] 2xl:h-[400px] 2xl:w-[650px] "
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );

  return (
    <>
      <div className="relative features flex  mt-40  lg:flex-row flex-col md:flex-wrap xl:flex-nowrap  justify-center  sm:gap-x-32 xl:gap-20">
        <div>
          <YouTubeFacade videoId="a2LvxQtIdoo" />

          <p className="sm:text-5xl 2xl:text-6xl  z-2 absolute text-3xl font-semibold text-left md:-ml-5 md:-mt-12 -mt-14 ">
            How it works?
          </p>
        </div>
        <div className="max-h-full">
          <YouTubeFacade videoId="a2LvxQtIdoo" />
          <p className="sm:text-5xl 2xl:text-6xl z-20 absolute text-3xl font-semibold text-left md:-ml-5 md:-mt-12 -mt-14">
            How to use?
          </p>
        </div>

        {/* backgound gradient */}
        <div
          className="absolute sm:-left-32 top-0 left-0 sm:top-20 -z-10  blur-3xl "
          aria-hidden="true"
        >
          <div
            className="aspect-[1155/678] lg:w-[900px] w-[600px]  bg-gradient-to-br from-yellow-100 via-emerald-100 to-red-500 opacity-20 "
            style={{
              clipPath: "circle(50% at 5% 51%)",
            }}
          />
        </div>
      </div>
    </>
  );
}

export default VideosSection;
