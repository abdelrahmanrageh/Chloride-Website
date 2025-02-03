import { FaDiscord, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <div className="relative isolate overflow-hidden pb-5 pt-16 sm:pt-24 lg:pt-32">
        {/* ------------------------------------------ */}

        {/* logos and copyright */}
        <div className="mx-auto w-full max-w-screen-xl p-4 pt-6 lg:pt-8">
          <hr className="my-6 border-gray-200 w-full sm:mx-auto dark:border-gray-700 lg:my-8" />

          <div className="sm:flex sm:items-center sm:justify-between flex-col-reverse space-y-4">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-500  ">
              developed by{" "}
              <a
                className="underline"
                href="https://www.linkedin.com/in/abdelrahmanrageh/"
                target="_blank"
              >
                Abdelrahman Rageh{" "}
              </a>
            </span>
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-300">
              {"  "}
              {new Date().getFullYear()} ©{" "}
              <a href="https://flowbite.com/" className="hover:underline">
                AtomOS™
              </a>
              . All Rights Reserved.
            </span>

            {/* Logos */}
            <div className="flex mt-4 sm:justify-center sm:mt-0">
              {/* Youtube */}
              <a
                href="https://www.youtube.com/@projectatomos"
                target="_blank"
                rel="noreferrer noopener"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
              >
                <FaYoutube className="h-5 w-5" />
                <span className="sr-only">Twitter page</span>
              </a>
              {/* Youtube */}
              <a
                href="https://www.youtube.com/@ChlorideOS/videos"
                target="_blank"
                rel="noreferrer noopener"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
              >
                <FaYoutube className="h-5 w-5" />
                <span className="sr-only">Twitter page</span>
              </a>

              {/* discord */}
              <a
                href="https://discord.gg/9ZCgxhaYV6"
                target="_blank"
                rel="noreferrer noopener"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
              >
                <FaDiscord className="h-5 w-5" />
                <span className="sr-only">Discord server</span>
              </a>
            </div>
          </div>
        </div>

        {/* background blur */}
        <div
          className="absolute -right-20 mt-28 top-0 -z-10 blur-3xl xl:-top-6"
          aria-hidden="true"
        >
          <div
            className="aspect-[1155/678] w-[60rem] bg-gradient-to-tl from-[#e8ff80] to-[#ee5487] opacity-40 blur-3xl"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
    </>
  );
}
