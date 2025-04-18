import Features from "./components/Features";

// import properties from "./assets/properties.png";
import desktop from "./assets/aboutAtomOS.jpg";
import appImage from "./assets/app.png";
// import PricePlans from "./components/pricePlans/PricePlans";

import { PricePlans } from "./components/pricePlans/price-plans";
import FAQ from "./components/faq/faq";
import InfoSection from "./components/InfoSection";
import HeroSection from "./components/hero-section";

export default function App() {
  return (
    <>
      <div className="bg-slate-900 bg-opacity-0 rounded-b-3xl overflow-hidden">
        <HeroSection />
      </div>
      <div className="overflow-hidden sm:overflow-visible px-6 mx-auto md:px-20 mt-8">
        {/* <VideosSection /> */}
        <section
            id="features"
          className="mt-20">
          <h2 className="bg-gradient-to-t pb-3 mx-auto text-center from-sky-700 to-sky-300 bg-clip-text text-transparent text-5xl font-bold tracking-tight sm:text-7xl ">
            Features
          </h2>
          <Features />
        </section>

        <section id="about" className=" pt-28 lg:pt-10  mt-20">
          <h2 className="bg-gradient-to-t mb-10 pb-3 mx-auto text-center from-sky-700 to-sky-300 bg-clip-text text-transparent text-5xl font-bold tracking-tight sm:text-7xl ">
            About AtomOS
          </h2>
          <InfoSection imageOneSrc={desktop}>
            <span></span>
            <p>
AtomOS is a modified, lightweight, and optimized version of Windows. It is over three times lighter than the original Microsoft Windows, with performance improvements exceeding 30%. It comes completely free of bloatware, without Microsoft Windows Defender, and without Microsoft Windows updates. AtomOS uses three times less CPU and RAM compared to standard Windows, with fewer than 60 CPU processes—often as low as 40 or fewer.
            </p>
            <div>Go to Premium</div>
            <img
              className="sm:max-h-60 xl:max-h-80 max-h-44 lg:-bottom-5 sm:-left-5 shadow-lightWhiteShadow sm:shadow-hardWhiteShadow absolute  -bottom-20 left-10 rounded-xl "
              src={appImage}
              alt="computer"
            />
            <p className="mb-20"></p>
          </InfoSection>
        </section>
        <div id="prices" className="mt-20 pt-10">
          <PricePlans />
        </div>
        <FAQ />
        {/* <PricePlans /> */}
      </div>
      {/* <Footer /> */}
    </>
  );
}
