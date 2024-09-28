import { useEffect, useState } from "react";
import {
  windows10Versions,
  windows11Versions,
  chlorideTweaks,
} from "../../data/versionsData";
import { FaDownload } from "react-icons/fa";
import {motion as m} from "framer-motion";
// const TrueIcon = () => (
//   <div>
//     <svg
//       className="w-3 h-3 text-green-500"
//       aria-hidden="true"
//       xmlns="http://www.w3.org/2000/svg"
//       fill="none"
//       viewBox="0 0 16 12"
//     >
//       <path
//         stroke="currentColor"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         strokeWidth={2}
//         d="M1 5.917 5.724 10.5 15 1.5"
//       />
//     </svg>
//   </div>
// );

// const FalseIcon = () => (
//   <div>
//     <svg
//       className="w-3 h-3 text-red-500"
//       aria-hidden="true"
//       xmlns="http://www.w3.org/2000/svg"
//       fill="none"
//       viewBox="0 0 14 14"
//     >
//       <path
//         stroke="currentColor"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         strokeWidth={2}
//         d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
//       />
//     </svg>
//   </div>
// );

function DownloadPage() {
  useEffect(() => { 
    window.scrollTo(0, 0);
  }, []);
  const [os, setOs] = useState("windows10");
  const Windows10Table = () => {
    const [versions, setVersions] = useState(windows10Versions);
    useEffect(() => {
      if (os === "windows11") {
        setVersions(windows11Versions);
      } else if (os === "tweaks") {
        setVersions(chlorideTweaks);
      }
    }, [os]);

    return (
      <>
        <div id="detailed-pricing" className="w-full overflow-x-auto ">
          <div className="overflow-hidden  mt-6  border border-gray-200 dark:border-gray-700 rounded-xl">
            <div className="grid md:grid-cols-5 grid-cols-4 p-4  text-sm font-medium text-gray-900 rounded-t-lg bg-gray-100 border border-gray-200 gap-x-16 dark:bg-gray-800 dark:border-gray-700 dark:text-white">
              <div className="text-center">Version </div>
              <div className="col-span-3 max-w-[75%] mx-auto">What's New </div>
            </div>
            {versions.map((version) => (
              <div className="grid max-h-32 md:grid-cols-5 grid-cols-4 px-4 overflow-x-auto overflow-y-hidden py-5 text-sm text-gray-500 border-b border-gray-200 md:gap-x-16 gap-x-2 dark:border-gray-700">
                <div className="text-gray-500 dark:text-gray-400 flex flex-col items-center justify-center">
                  <div className="md:text-lg font-semibold dark:text-gray-300">
                    {version.version}
                  </div>
                  <div className="text-xs text-gray-400 dark:text-gray-500">
                    {version.suitableFor}
                  </div>
                </div>
                <div className="col-span-3 sm:overflow-y-hidden mx-auto max-h-24 overflow-y-auto text-left md:text-center text-gray-400">
                  {version.whatsNew}
                </div>
                <div className="sm:flex items-center hidden gap-x-2 justify-center text-gray-400  cursor-pointer hover:text-gray-300 transition-all ">
                  {version.price === "Free" ? (
                    <>
                      <span className="hidden md:inline-block">
                        Download for Free
                      </span>
                      <FaDownload className="inline-block md:w-auto w-4 h-4 md:h-auto" />
                    </>
                  ) : (
                    <span className="hidden md:inline-block">
                      {version.price}
                    </span>
                  )}
                  {/* <span className="hidden md:inline-block">{version.price }</span>
                <span className="hidden md:inline-block">Download</span> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <section className="container px-4 py-6 mx-auto space-y-6 ">
        <m.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="bg-gradient-to-bl pb-10 from-purple-400 to-cyan-300 bg-clip-text text-transparent text-5xl  font-bold tracking-tight text-center md:text-7xl mt-20">
          Download ChlorideOS
        </m.h1>
        <m.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className=" gap-10 items-center justify-center content-center">
          <div className="grid grid-cols-3  border border-gray-200 dark:border-gray-700 rounded-xl">
            <div
              onClick={() => setOs("windows10")}
              className={`border-r text-sm md:text-lg border-gray-200 rounded-l-xl transition-all duration-300 cursor-pointer dark:border-gray-700 py-4 ${
                os === "windows10" && "bg-gray-700"
              }`}
            >
              Windows 10
            </div>
            <div
              onClick={() => setOs("windows11")}
              className={`border-rtext-sm md:text-lg border-gray-200 dark:border-gray-700  transition-all duration-300 cursor-pointer py-4 ${
                os === "windows11" && "bg-gray-700"
              }`}
            >
              Windows 11
            </div>
            <div
              onClick={() => setOs("tweaks")}
              className={`border-ltext-sm md:text-lg border-gray-200 dark:border-gray-700 rounded-r-xl transition-all duration-300 cursor-pointer py-4 ${
                os === "tweaks" && "bg-gray-700"
              }`}
            >
              Tweaks
            </div>
          </div>
          <Windows10Table />
        </m.div>

        {/* Gradient */}
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
      </section>
    </>
  );
}

export default DownloadPage;
