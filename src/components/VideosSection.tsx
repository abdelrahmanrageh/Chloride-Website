import { useState } from "react";

function VideosSection() {
  const [isLoaded, setIsLoaded] = useState({ first: false, second: false });

  const handleLoad = (video: string) => {
    setIsLoaded((prevState) => ({ ...prevState, [video]: true }));
  };

  const VideoComponent = ({
    videoId,
    title,
    videoKey,
    children,
  }: {
    videoId: string;
    title: string;
    videoKey: string;
    children?: React.ReactNode;
  }) => (
    <div className="relative mb-10 lg:mb-0 mx-auto lg:mx-5 shadow-lightBlueShadow rounded-xl my-20 w-full min-h-[200px] sm:min-h-[300px] sm:min-w-[500px] 2xl:h-[400px] 2xl:w-[650px]">
      {!isLoaded[videoKey as keyof typeof isLoaded] ? (
        <>
          <div className="absolute bottom-0 left-0 w-full z-10 sm:h-[150px] h-[80px]  bg-opacity-50 bg-gradient-to-t from-black to-transparent rounded-b-xl"></div>
          <div
            className="relative z-0 rounded-xl md:h-full bg-gray-200 min-h-[200px] sm:min-h-[300px] flex justify-center items-center cursor-pointer"
            onClick={() => handleLoad(videoKey)}
            style={{
              backgroundImage: `url(https://img.youtube.com/vi/${videoId}/hqdefault.jpg)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <button className="absolute bg-red-500 text-white h-16 w-16 p-2 z-50 rounded-full hover:bg-red-400 transition-all">
              ▶
            </button>
          </div>
          {children}
        </>
      ) : (
        <iframe
          width="100%"
          height="250"
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          // frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="mb-10 lg:mb-0 mx-auto  shadow-lightBlueShadow rounded-xl my-20 w-full min-h-[200px] sm:min-h-[300px] sm:min-w-[500px] 2xl:h-[400px] 2xl:w-[650px]"
        ></iframe>
      )}
    </div>
  );

  return (
    <>
      <div className="relative features flex mt-40 lg:flex-row flex-col md:flex-wrap xl:flex-nowrap justify-center sm:gap-x-32 xl:gap-20">
        <div>
          <VideoComponent
            videoId="l1XjxVCDfLQ"
            title="The best custom windows for gamers? ChlorideOS 10 SE"
            videoKey="first"
          >
            <p className="sm:text-3xl z-20 absolute text-xl font-semibold text-left md:-ml-5 -mt-10 ">
              The best custom windows for gamers? ChlorideOS 10 SE
            </p>
          </VideoComponent>
        </div>
        <div className="max-h-[200px] ">
          <VideoComponent
            videoId="wNrzCIhxEAs"
            title="This is Windows 10 X - ChlorideOS X"
            videoKey="second"
          >
            <p className="sm:text-3xl  z-20 absolute text-xl font-semibold text-left md:-ml-5 -mt-10 ">
              This is Windows 10 X - ChlorideOS X
            </p>
          </VideoComponent>
        </div>

        {/* background gradient */}
        <div
          className="absolute sm:-left-32 top-0 left-0 sm:top-20 -z-10 blur-3xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[1155/678] lg:w-[900px] w-[600px] bg-gradient-to-br from-yellow-100 via-emerald-100 to-red-500 opacity-20"
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
