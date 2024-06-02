
function PricePlans() {
  return (
    <>
      <div id="prices" className="relative flex justify-center  gap-x-5 gap-y-20 lg:mt-0 sm:mt-60 mt-40 py-20 prices lg:flex-row  flex-col items-center ">
        {/* standard plan */}
        <div className="w-full max-w-lg p-8 rounded-3xl  bg-gray-950 border-gray-800 shadow-lightBlueShadow">
          {/* title */}
          <h5 className="mb-4 text-2xl font-semibold text-gray-500 dark:text-gray-400">
            Standard plan
          </h5>
          <div className="flex items-baseline text-gray-900 dark:text-white">
          {/* Price */}
            <span className="text-5xl font-extrabold tracking-tight">FREE</span>
            <span className="text-3xl font-semibold"></span>
          </div>
          {/* List of features */}
          <ul role="list" className="space-y-5 my-7">
            <li className="flex items-center">
              <svg
                className="flex-shrink-0 w-4 h-4 text-lightBlue "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                30 tool
              </span>
            </li>
            <li className="flex">
              <svg
                className="flex-shrink-0 w-4 h-4 text-lightBlue "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="text-base font-normal leading-tight text-left  text-gray-500 dark:text-gray-400 ms-3">
                Ultimate CPU & RAM mode
              </span>
            </li>
            <li className="flex">
              <svg
                className="flex-shrink-0 w-4 h-4 text-lightBlue "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                ISO Windows
              </span>
            </li>
            <li className="flex line-through decoration-gray-500">
              <svg
                className="flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="text-base font-normal leading-tight text-gray-500 ms-3">
                +100 Wallpapers
              </span>
            </li>
            <li className="flex line-through decoration-gray-500">
              <svg
                className="flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="text-base font-normal leading-tight text-gray-500 ms-3">
                ClorideOS ISO
              </span>
            </li>
            <li className="flex line-through decoration-gray-500">
              <svg
                className="flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="text-base font-normal leading-tight text-gray-500 ms-3">
                Chloride Tool Box
              </span>
            </li>
            <li className="flex line-through decoration-gray-500">
              <svg
                className="flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="text-base font-normal leading-tight text-gray-500 ms-3">
              Enable turbo start up
              </span>
            </li>
            <li className="flex line-through decoration-gray-500">
              <svg
                className="flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="text-base font-normal leading-tight text-gray-500 ms-3">
              Wifi and ping Optimizer
              </span>
            </li>
            <li className="flex line-through decoration-gray-500">
              <svg
                className="flex-shrink-0 w-4 h-4  text-gray-400 dark:text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                {/* <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" /> */}
              </svg>
              
            </li>
            
          </ul>
          {/* Download Button */}
          <a
            href="https://mega.nz/folder/Qx0GwSSZ#1L0VauG-yqu8qJYAhnYO-A"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mt-2 focus:ring-4 focus:outline-none  bg-lightBlue hover:bg-blue-700 transition-all focus:ring-blue-900 font-medium rounded-3xl text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
          >
            Download
          </a>
          
        </div>

        {/* gold plan */}
        <div className="w-full max-w-lg p-8 rounded-3xl   bg-gray-950 border-gray-800 shadow-lightBlueShadow">
          {/* title */}
          <h5 className="mb-4 text-2xl text-[#FFE500] font-semibold ">
            Gold Plan
          </h5>
          <div className="flex items-baseline text-gray-900 dark:text-white">
            <span className="text-5xl font-extrabold tracking-tight">50</span>
            <span className="text-3xl font-semibold">EGP</span>
          </div>
          {/* List of features */}
          <ul role="list" className="space-y-5 my-7">
            <li className="flex items-center">
              <svg
                className="flex-shrink-0 w-4 h-4 text-lightBlue "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="text-base font-normal leading-tight text-gray-400 ms-3">
              Performance Turbo Optimizer
              </span>
            </li>
            <li className="flex">
              <svg
                className="flex-shrink-0 w-4 h-4 text-lightBlue "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="text-base font-normal text-left leading-tight text-gray-400 ms-3">
              Ram Turbo Optimizer 
              </span>
            </li>
            <li className="flex">
              <svg
                className="flex-shrink-0 w-4 h-4 text-lightBlue "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="text-base font-normal leading-tight text-gray-400 ms-3">
              Disable power saving features
              </span>
            </li>
            <li className="flex  decoration-gray-500">
              <svg
                className="flex-shrink-0 w-4 h-4 text-lightBlue "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="text-base font-normal leading-tight text-gray-400 ms-3">
              Remove all bloat ware apps

              </span>
            </li>
            <li className="flex  decoration-gray-500">
              <svg
                className="flex-shrink-0 w-4 h-4 text-lightBlue"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="text-base font-normal leading-tight text-gray-400 ms-3">
              Wifi and ping Optimizer

              </span>
            </li>
            <li className="flex  decoration-gray-500">
              <svg
                className="flex-shrink-0 w-4 h-4 text-lightBlue"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="text-base font-normal leading-tight text-gray-400 ms-3">
              Disable windows defender 
              </span>
            </li>
            <li className="flex  decoration-gray-500">
              <svg
                className="flex-shrink-0 w-4 h-4 text-lightBlue"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="text-base font-normal leading-tight text-gray-400 ms-3">
              Enable turbo start up

              </span>
            </li>
            <li className="flex  decoration-gray-500">
              <svg
                className="flex-shrink-0 w-4 h-4 text-lightBlue"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="text-base font-normal leading-tight text-gray-400 ms-3">
              Clean system cache


              </span>
            </li>
            <li className="flex  decoration-gray-500">
              <svg
                className="flex-shrink-0 w-4 h-4 text-lightBlue"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="text-base font-normal leading-tight text-gray-400 ms-3">
              50+ more features


              </span>
            </li>
            
          </ul>
          {/* Get  */}
          <a
            href="https://wa.me/201016754891?text=Hello%2C%20I%27m%20Interested%20in%20buying%20the%20premium%20version%20of%20ChlorideOS"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mt-1 focus:ring-4 focus:outline-none  bg-lightBlue hover:bg-blue-700 transition-all focus:ring-blue-900 font-medium rounded-3xl text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
          >
            Get
          </a>
        </div>

        {/* Chloride Tool Box  */}
        <div className="w-full max-w-lg p-8 rounded-3xl bg-gray-950 border-gray-800 shadow-lightBlueShadow">
          {/* title */}
          <h5 className="mb-4 text-2xl text-lightBlue font-semibold">
          Chloride Tool Box
          </h5>
          <div className="flex items-baseline text-gray-900 dark:text-white">
            <span className="text-5xl font-extrabold tracking-tight">100</span>
            <span className="text-3xl font-semibold">EGP</span>
            <span className="text-3xl ml-3 line-through text-gray-500 font-semibold">200</span>
            <span className=" text-gray-500 font-semibold">EGP</span>
          </div>

            <span className="block mb-10 text-left text-lightBlue font-semibold">Limited Time</span>
          {/* List of features */}
          <ul role="list" className="space-y-5 my-7">
            <li className="flex items-center">
              <svg
                className="flex-shrink-0 w-4 h-4 text-lightBlue "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="#FFE500"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="text-base font-normal leading-tight text-[#FFE500]  ms-3">
                All Gold Benefits
              </span>
            </li>
            <li className="flex items-center">
              <svg
                className="flex-shrink-0 w-4 h-4 text-lightBlue "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="text-base font-normal leading-tight text-gray-400 ms-3">
                +200 tools
              </span>
            </li>
            <li className="flex">
              <svg
                className="flex-shrink-0 w-4 h-4 text-lightBlue "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="text-base font-normal text-left leading-tight text-gray-400 ms-3">
                Ultimate CPU & RAM mode
              </span>
            </li>
            <li className="flex">
              <svg
                className="flex-shrink-0 w-4 h-4 text-lightBlue "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="text-base font-normal leading-tight text-gray-400 ms-3">
                ISO Windows
              </span>
            </li>
            <li className="flex  decoration-gray-500">
              <svg
                className="flex-shrink-0 w-4 h-4 text-lightBlue "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="text-base font-normal leading-tight text-gray-400 ms-3">
                +100 Wallpapers
              </span>
            </li>
            <li className="flex  decoration-gray-500">
              <svg
                className="flex-shrink-0 w-4 h-4 text-lightBlue"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="text-base font-normal leading-tight text-gray-400 ms-3">
                ClorideOS ISO
              </span>
            </li>
            <li className="flex  decoration-gray-500">
              <svg
                className="flex-shrink-0 w-4 h-4 text-lightBlue"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="text-base font-normal leading-tight text-gray-400 ms-3">
                ChlorideToolBox
              </span>
            </li>
            <li className="flex  decoration-gray-500">
              <svg
                className="flex-shrink-0 w-4 h-4 text-lightBlue"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="text-base font-normal leading-tight text-gray-400 ms-3">
                +50 Apps
              </span>
            </li>
            
          </ul>
          {/* Get  */}
          <a
            href="https://mega.nz/file/Rx9wXRiZ#BWnk9DQ9T3JTwF69QE2hnskT8l1uJR9-De5RcFhwtZ4"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mt-1 focus:ring-4 focus:outline-none  bg-lightBlue hover:bg-blue-700 transition-all focus:ring-blue-900 font-medium rounded-3xl text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
          >
            Get
          </a>
        </div>

        {/* backgound gradient */}
        <div
          className="absolute sm:-left-52 top-10 left-0 sm:top-20 -z-10  blur-3xl "
          aria-hidden="true"
          >
          <div
            className="aspect-[1155/678] w-[700px] bg-gradient-to-br from-yellow-100 via-emerald-100 to-red-500 opacity-20 "
            style={{
              clipPath: "circle(50% at 5% 51%)",
              
            }}
          />
        </div>
        <div
          className="absolute  right-0 sm:bottom-0 bottom-20 -z-10  blur-3xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[1155/678]  w-[900px]  bg-gradient-to-br from-yellow-100 via-orange-200 to-red-500 opacity-20 blur-3xl"
            style={{
              clipPath: "circle(47.9% at 84% 51%)",
              
            }}
            />
        </div>
      </div>
    </>
  );
}

export default PricePlans;
