
function VideosSection() {
  return (
      <>
        <div className="relative features flex  mt-40  lg:flex-row flex-col lg:flex-wrap  justify-center  sm:gap-x-32 xl:gap-20">
          <div>
          <iframe 
                loading="lazy"
                className="mb-10 lg:mb-0 mx-auto lg:mx-5 shadow-lightBlueShadow rounded-xl my-20  w-full min-h-[200px] sm:min-h-[300px]  sm:min-w-[500px] 2xl:h-[400px] 2xl:w-[650px] "
                src="https://www.youtube.com/embed/a2LvxQtIdoo?si=io6cBvuc0XkeuBE5"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin" allowFullScreen
            ></iframe>
            <p className="sm:text-5xl 2xl:text-6xl text-2xl font-semibold text-left -ml-5 -mt-12 ">How it works?</p>
          </div>
          <div className="max-h-full">
          <iframe
                loading="lazy"
                className="mb-10 lg:mb-0 mx-auto lg:mx-5 shadow-lightBlueShadow rounded-xl my-20 w-full min-h-[200px] sm:min-h-[300px]  sm:min-w-[500px] 2xl:h-[400px] 2xl:w-[650px] "
                src="https://www.youtube.com/embed/a2LvxQtIdoo?si=io6cBvuc0XkeuBE5&controls=0"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share "
                referrerPolicy="strict-origin-when-cross-origin" allowFullScreen
            ></iframe>
            <p className="sm:text-5xl 2xl:text-6xl text-2xl font-semibold text-left -ml-5 -mt-12">How to use?</p>
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
  )
}

export default VideosSection