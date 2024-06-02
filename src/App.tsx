import Features from "./components/Features";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import VideosSection from "./components/VideosSection";
import properties from './assets/properties.png'
import desktop from './assets/desktop.jpg'
import appImage from './assets/app.png' 
import PricePlans from "./components/PricePlans";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="container overflow-hidden sm:overflow-visible">
        <HeroSection
          imageOneSrc={desktop}
        >
          <h1 className="bg-gradient-to-bl pb-3 from-purple-400 to-cyan-300 bg-clip-text text-transparent text-5xl text-left font-bold tracking-tight sm:text-6xl ">It's Time To Change</h1>
          <p>Give your device it's due and enjoy the highest performance</p>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" className='h-5 mb-1 mx-0 mr-3 inline-block' viewBox="0 0 640 512"><path fill='white' d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-167l80 80c9.4 9.4 24.6 9.4 33.9 0l80-80c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-39 39V184c0-13.3-10.7-24-24-24s-24 10.7-24 24V318.1l-39-39c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9z"/></svg>
            Download
          </div>
          <img className='sm:max-h-60 max-h-44 sm:-bottom-5 sm:-left-5 shadow-whiteShadow absolute -bottom-32 left-10 ' src={properties} alt="" />
          <p className='mb-20 text-gray-400 text-xs mt-2'>FREE ChlorideOS v1.0 (90MB)</p>
        </HeroSection>

        <VideosSection />
        <Features />

        <HeroSection
          imageOneSrc={desktop}
        >
          <h2 className="bg-gradient-to-bl pb-3 from-purple-400 to-cyan-300 bg-clip-text text-transparent text-5xl text-left font-bold tracking-tight sm:text-6xl ">Need More Than This?</h2>
          <p>Don't worry there is a premium version with 70% more tools than free version and with weekly updates, Just for 1$. Yeah less than your Espresso</p>
          <div>
            Go to Premium
          </div>
          <img className='sm:max-h-60 xl:max-h-80 max-h-44 lg:-bottom-5 sm:-left-5 shadow-lightWhiteShadow sm:shadow-hardWhiteShadow absolute  -bottom-20 left-10 rounded-xl ' src={appImage} alt="" />
          <p className='mb-20'></p>
        </HeroSection>
        <PricePlans />
      </div>
      <Footer />


    </>
  )
}


