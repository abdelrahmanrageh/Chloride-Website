import {
  FaDiscord,
  FaFacebook,
  FaTelegram,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <>
      <div className="relative isolate overflow-hidden pb-5 pt-16 sm:pt-24 lg:pt-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* contact & info */}
          <div className="mx-auto grid items-end  max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {/* Contact us box */}
            <a
              href="mailto:projectchloride@gmail.com"
              className="max-w-xl lg:max-w-lg ring-1 p-5 rounded-xl hover:bg-[#ffffff0f] ring-gray-700 transition-all  cursor-pointer"
            >
              <MdEmail className="w-10 h-10 mb-8" />
              <h2 className="text-xl mb-1 font-semibold tracking-tight text-white sm:text-xl">
                Contact US
              </h2>
              <h3 className="text-md  tracking-tight text-gray-400 sm:text-sm">
                projectchloride@gmail.com
              </h3>
            </a>

            {/* Additional Infromation */}
            <div className="">
              <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                    Follow us
                  </h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                    <li className="">
                      <a
                        href="https://www.facebook.com/ProjectChloride"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="hover:underline mb-2 block"
                      >
                        Facebook
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/projectchlorideos"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="hover:underline mb-2 block"
                      >
                        Instagram
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://dsc.gg/chlorideos"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="hover:underline mb-2 block"
                      >
                        Discord
                      </a>
                    </li>
                  </ul>
                </div>
                {/* <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                    Legal
                  </h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                    <li className="mb-4">
                      <a href="#" className="hover:underline">
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:underline">
                        Terms &amp; Conditions
                      </a>
                    </li>
                  </ul>
                </div> */}
              </div>
            </div>
          </div>
        </div>

        {/* ------------------------------------------ */}

        {/* logos and copyright */}
        <div className="mx-auto w-full max-w-screen-xl p-4 pt-6 lg:pt-8">
          <hr className="my-6 border-gray-200 w-full sm:mx-auto dark:border-gray-700 lg:my-8" />
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
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-300">
              {"  "}
              {new Date().getFullYear()} ©{" "}
              <a href="https://flowbite.com/" className="hover:underline">
                ChlorideOS™
              </a>
              . All Rights Reserved.
            </span>

            {/* Logos */}
            <div className="flex mt-4 sm:justify-center sm:mt-0">
              {/* facebook */}
              <a
                href="https://www.facebook.com/ProjectChloride"
                className="text-gray-500  hover:text-gray-900 dark:hover:text-white"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FaFacebook className="h-5 w-5" />
                <span className="sr-only">Facebook page</span>
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

              {/* whatsapp */}
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://chat.whatsapp.com/EzDfW89EQt90yFHXTZFI2R"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
              >
                <FaWhatsapp className="h-5 w-5" />
                <span className="sr-only">Whatsapp Channel</span>
              </a>

              {/* discord */}
              <a
                href="https://discord.com/invite/64Dgbu6ZPg"
                target="_blank"
                rel="noreferrer noopener"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
              >
                <FaDiscord className="h-5 w-5" />
                <span className="sr-only">Discord server</span>
              </a>

              {/* telegram */}
              <a
                href="https://t.me/chlorideos"
                target="_blank"
                rel="noreferrer noopener"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
              >
                <FaTelegram className="h-5 w-5" />
                <span className="sr-only">Telegram Channel</span>
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
