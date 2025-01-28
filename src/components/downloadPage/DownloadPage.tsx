import { useEffect, useState } from "react";
import { versions, versionsNames } from "../../data/versionsData";
import { FaDownload } from "react-icons/fa";
import { motion as m } from "framer-motion";
import { Link } from "react-router-dom";

// const

function DownloadPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [os, setOs] = useState(versionsNames[0]);

  const Windows10Table = () => {
    const [versionsData, setVersionsData] = useState(versions.AtomOS10Versions);

    useEffect(() => {
      setVersionsData(versions[`${os}Versions` as keyof typeof versions]);
      // console.log(`${os}Versions`);
      // console.log(versionsData);
    }, [os]);

    return (
      <>
        <div id="detailed-pricing" className="w-full overflow-x-auto ">
          <div className="overflow-hidden mt-6 border-2 border-gray-200 dark:border-gray-800 rounded-xl">
            <div className="grid md:grid-cols-5 grid-cols-4 p-4 text-sm font-medium text-gray-900 rounded bg-gray-100 border border-gray-200 gap-x-16 dark:bg-gray-950 dark:border-gray-800 dark:text-white">
              <div className="text-center">Version </div>
              <div className="col-span-3 max-w-[75%] mx-auto">What's New </div>
            </div>
            {versionsData.map((version) => (
              <div
                key={version.version}
                className="grid md:grid-cols-5 grid-cols-4 px-4 overflow-x-auto overflow-y-hidden py-5 text-sm text-gray-500 border-t border-gray-200 md:gap-x-16 gap-x-2 dark:border-gray-800"
              >
                <div className="text-gray-500 dark:text-gray-400 flex flex-col items-center justify-center">
                  <div className="md:text-sm overflow-hidden text-xs font-semibold dark:text-gray-300">
                    {version.version}
                  </div>
                  <div className="text-[10px] md:text-xs leading-3 md:leading-5 text text-gray-400 dark:text-gray-500">
                    {version.suitableFor}
                  </div>
                </div>
                <div className="col-span-3 sm:overflow-y-hidden mx-auto max-h-24 overflow-y-auto text-left md:text-center text-gray-400">
                  {version.whatsNew}
                </div>
                <div className="sm:flex items-center hidden gap-x-2 justify-center font-bold text-gray-300 transition-all ">
                  {version.price === "Free" ? (
                    <>
                      <a
                        className=" cursor-pointer hover:text-gray-100"
                        target="_blank"
                        rel="noreferrer noopener"
                        href={version.link}
                      >
                        <span className="hidden md:inline-block text-md mx-2">
                          Download for Free
                        </span>
                        <FaDownload className="inline-block md:w-auto w-4 h-4 md:h-auto" />
                      </a>
                    </>
                  ) : (
                    <span className="hidden md:inline-block ">
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
          className="bg-gradient-to-t pb-10 from-sky-700 to-sky-300  bg-clip-text text-transparent text-5xl  font-bold tracking-tight text-left  mt-20"
        >
          Download AtomOS
        </m.h1>
        <div className="mt-20 space-y-4">
          {/* The main download */}
          <m.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="bg-gray-950 p-10 rounded-xl  hover:shadow-sky-700/30 hover:shadow-md transition-all duration-300 ease-linear hover:scale-[1.01]"
          >
            <p className="text-2xl md:text-3xl font-bold">Atom Tweaks</p>
            <p className="text-xs md:text-sm text-gray-400">Version 1.2</p>
            <span className="text-xs md:text-sm text-gray-400">Size 50mb</span>
            <div className="flex justify-center items-center gap-4 mt-2">
              <Link
                className=" bg-sky-600 text-white px-4 py-2 rounded-full  block"
                to="#"
              >
                Download
              </Link>
              <Link to="#">More</Link>
            </div>
          </m.div>
          {/* grid 4 cols downloads */}
          <div className="grid md:grid-cols-4 gap-4">
            <m.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="bg-gray-950 flex flex-col w-full  p-10 rounded-xl  hover:shadow-sky-700/30 hover:shadow-md transition-all ease-linear duration-300 hover:scale-[1.01]"
            >
              <p className="text-2xl text-center md:text-3xl font-bold">
                Atom Tweaks
              </p>
              <p className="text-xs md:text-sm text-gray-400">Version 1.2</p>
              <span className="text-xs md:text-sm text-gray-400">
                Size 50mb
              </span>
              <div className="flex justify-center items-center gap-4 mt-2 flex-wrap">
                <Link
                  className=" bg-sky-600 text-white px-4 py-2 rounded-full  block"
                  to="#"
                >
                  Download
                </Link>
                <Link to="#">More</Link>
              </div>
            </m.div>

            <m.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="bg-gray-950 flex flex-col w-full  p-10 rounded-xl  hover:shadow-sky-700/30 hover:shadow-md transition-all ease-linear duration-300 hover:scale-[1.01]"
            >
              <p className="text-2xl text-center md:text-3xl font-bold">
                Atom Tweaks
              </p>
              <p className="text-xs md:text-sm text-gray-400">Version 1.2</p>
              <span className="text-xs md:text-sm text-gray-400">
                Size 50mb
              </span>
              <div className="flex justify-center items-center gap-4 mt-2 flex-wrap">
                <Link
                  className=" bg-sky-600 text-white px-4 py-2 rounded-full  block"
                  to="#"
                >
                  Download
                </Link>
                <Link to="#">More</Link>
              </div>
            </m.div>

            <m.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="bg-gray-950 flex flex-col w-full  p-10 rounded-xl  hover:shadow-sky-700/30 hover:shadow-md transition-all ease-linear duration-300 hover:scale-[1.01]"
            >
              <p className="text-2xl text-center md:text-3xl font-bold">
                Atom Tweaks
              </p>
              <p className="text-xs md:text-sm text-gray-400">Version 1.2</p>
              <span className="text-xs md:text-sm text-gray-400">
                Size 50mb
              </span>
              <div className="flex justify-center items-center gap-4 mt-2 flex-wrap">
                <Link
                  className=" bg-sky-600 text-white px-4 py-2 rounded-full  block"
                  to="#"
                >
                  Download
                </Link>
                <Link to="#">More</Link>
              </div>
            </m.div>

            <m.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="bg-gray-950 flex flex-col w-full  p-10 rounded-xl  hover:shadow-sky-700/30 hover:shadow-md transition-all ease-linear duration-300 hover:scale-[1.01]"
            >
              <p className="text-2xl text-center md:text-3xl font-bold">
                Atom Tweaks
              </p>
              <p className="text-xs md:text-sm text-gray-400">Version 1.2</p>
              <span className="text-xs md:text-sm text-gray-400">
                Size 50mb
              </span>
              <div className="flex justify-center items-center gap-4 mt-2 flex-wrap">
                <Link
                  className=" bg-sky-600 text-white px-4 py-2 rounded-full  block"
                  to="#"
                >
                  Download
                </Link>
                <Link to="#">More</Link>
              </div>
            </m.div>
          </div>
        </div>

        <m.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className=" gap-10 items-center justify-center content-center"
        >
          <div className="grid grid-cols-3  border-2 border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden">
            {versionsNames.map((versionName, index) => (
              <div
                key={index}
                onClick={() => setOs(versionName)}
                className={`truncate text-xs md:text-lg   transition-all duration-300 cursor-pointer  py-4 ${
                  os === `${versionName}` && "bg-gray-950"
                }
              
                `}
              >
                {versionName}
              </div>
            ))}
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
