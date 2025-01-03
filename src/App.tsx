import Features from "./components/Features";
import HeroSection from "./components/HeroSection";
import VideosSection from "./components/VideosSection";
import properties from "./assets/properties.png";
import desktop from "./assets/desktop.jpg";
import appImage from "./assets/app.png";
import PricePlans from "./components/pricePlans/PricePlans";
import { motion as m } from "framer-motion";

export default function App() {
  return (
    <>
      {/* <Navbar /> */}
      <div className="overflow-hidden sm:overflow-visible px-6 mx-auto md:px-20 mt-8">
        <m.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="fixed h-screen w-screen z-0 right-0 top-0 blur-3xl xl:-top-6 bg-[#020211] "
        ></m.div>
        <HeroSection imageOneSrc={desktop}>
          <m.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="bg-gradient-to-bl pb-3 from-purple-400 to-cyan-300 bg-clip-text text-transparent text-5xl text-left font-bold tracking-tight md:text-7xl xl:text-8xl xl:mt-20"
          >
            It's Time To Change
          </m.h1>
          <m.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            Enjoy 25% better performance and lighter Experience By Removing most
            of Microsoft's tracking, pre-installed apps, and bloatware
          </m.p>

          {/* Download Button */}
          <m.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 mb-1 mx-0 mr-3 inline-block"
              viewBox="0 0 640 512"
            >
              <path
                fill="white"
                d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-167l80 80c9.4 9.4 24.6 9.4 33.9 0l80-80c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-39 39V184c0-13.3-10.7-24-24-24s-24 10.7-24 24V318.1l-39-39c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9z"
              />
            </svg> */}
            Price Plans
          </m.div>
          <img
            className="sm:max-h-60 max-h-44 sm:-bottom-5 sm:-left-5 shadow-whiteShadow absolute -bottom-32 left-10 "
            src={properties}
            alt=""
          />
          <m.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="mb-20 text-gray-400 text-xs mt-2 text-center"
          >
            Want more?
          </m.p>
        </HeroSection>

        <VideosSection />
        <Features />

        <HeroSection imageOneSrc={desktop}>
          <h2 className="bg-gradient-to-bl pb-3 from-purple-400 to-cyan-300 bg-clip-text text-transparent text-5xl text-left font-bold tracking-tight sm:text-6xl ">
            Need More Than This?
          </h2>
          <p>
 Need more? 
 ChlorideOS ultimate plan with access to all of the ChlorideOS and ChlorideTweaks Paid Releases

          </p>
          <div>Go to Premium</div>
          <img
            className="sm:max-h-60 xl:max-h-80 max-h-44 lg:-bottom-5 sm:-left-5 shadow-lightWhiteShadow sm:shadow-hardWhiteShadow absolute  -bottom-20 left-10 rounded-xl "
            src={appImage}
            alt=""
          />
          <p className="mb-20"></p>
        </HeroSection>
        <PricePlans />
      </div>
      {/* <Footer /> */}
    </>
  );
}
