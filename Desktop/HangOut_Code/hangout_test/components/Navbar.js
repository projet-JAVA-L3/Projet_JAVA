import React, { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <nav className="container mx-auto relative flex justify-between shadow-lg">
        <Link href="/">
          <a className="text-2xl font-bold py-2 pl-4 lg:pl-2">
            <div id="logo">
              <img className="logo h-10" src="Logo.svg" />
            </div>
          </a>
        </Link>
        <div className="lg:hidden">
          <button
            className="p-2 text-blue-500 focus:outline-none"
            onClick={() => setOpen(!open)}
          >
            <svg className="w-8 h-8" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"
              />
            </svg>
          </button>

          <div
            className={[
              open ? "block" : "hidden",
              "absolute z-50 top-full left-0 right-0 w-full p-4 rounded-b-3xl shadow-lg border bg-white",
            ].join(" ")}
          >
            <ul className="">
              <li className="py-2">
                <a className="flex gap-4 py-2 uppercase" href="/">
                  <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z"
                    />
                  </svg>
                  Acceuil
                </a>
              </li>
              <li className="py-2">
                <Link href="/presentation">
                  <a className="flex gap-4 py-2 uppercase">
                    <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M12,1L9,9L1,12L9,15L12,23L15,15L23,12L15,9L12,1Z"
                      />
                    </svg>
                    Présentation
                  </a>
                </Link>
              </li>
              <li className="py-2">
                <Link href="/aide">
                  <a className="flex gap-4 py-2 uppercase">
                    <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z"
                      />
                    </svg>
                    Contact
                  </a>
                </Link>
              </li>
              <li className="py-2">
                <Link href="/aide">
                  <a className="flex gap-4 py-2 uppercase">
                    <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M19.79,15.41C20.74,13.24 20.74,10.75 19.79,8.59L17.05,9.83C17.65,11.21 17.65,12.78 17.06,14.17L19.79,15.41M15.42,4.21C13.25,3.26 10.76,3.26 8.59,4.21L9.83,6.94C11.22,6.35 12.79,6.35 14.18,6.95L15.42,4.21M4.21,8.58C3.26,10.76 3.26,13.24 4.21,15.42L6.95,14.17C6.35,12.79 6.35,11.21 6.95,9.82L4.21,8.58M8.59,19.79C10.76,20.74 13.25,20.74 15.42,19.78L14.18,17.05C12.8,17.65 11.22,17.65 9.84,17.06L8.59,19.79M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,8A4,4 0 0,0 8,12A4,4 0 0,0 12,16A4,4 0 0,0 16,12A4,4 0 0,0 12,8Z"
                      />
                    </svg>
                    Aide
                  </a>
                </Link>
              </li>
              <li className="flex flex-col md:flex-row gap-4">
                <Link href="/signin">
                  <a className="flex flex-col md:flex-row gap-4">
                    <button className="focus:outline-none text-white px-4 py-2 font-bold flex-1 flex gap-2 items-center bg-gradient-to-r from-blue-400 to-blue-800 rounded-xl">
                      <svg
                        className="w-6 h-6 text-white"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M12,19.2C9.5,19.2 7.29,17.92 6,16C6.03,14 10,12.9 12,12.9C14,12.9 17.97,14 18,16C16.71,17.92 14.5,19.2 12,19.2M12,5A3,3 0 0,1 15,8A3,3 0 0,1 12,11A3,3 0 0,1 9,8A3,3 0 0,1 12,5M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z"
                        />
                      </svg>
                      Se connecter
                    </button>
                  </a>
                </Link>
                <Link href="/signup">
                  <a className="flex flex-col md:flex-row gap-4">
                    <button className="focus:outline-none text-blue-600 px-4 py-2 font-bold border border-blue-600 flex-1 flex gap-2 items-center rounded-xl">
                      <svg
                        className="w-6 h-6 text-blue-600"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M7.07,18.28C7.5,17.38 10.12,16.5 12,16.5C13.88,16.5 16.5,17.38 16.93,18.28C15.57,19.36 13.86,20 12,20C10.14,20 8.43,19.36 7.07,18.28M18.36,16.83C16.93,15.09 13.46,14.5 12,14.5C10.54,14.5 7.07,15.09 5.64,16.83C4.62,15.5 4,13.82 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,13.82 19.38,15.5 18.36,16.83M12,6C10.06,6 8.5,7.56 8.5,9.5C8.5,11.44 10.06,13 12,13C13.94,13 15.5,11.44 15.5,9.5C15.5,7.56 13.94,6 12,6M12,11A1.5,1.5 0 0,1 10.5,9.5A1.5,1.5 0 0,1 12,8A1.5,1.5 0 0,1 13.5,9.5A1.5,1.5 0 0,1 12,11Z"
                        />
                      </svg>
                      S'inscrire
                    </button>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="hidden lg:flex justify-between">
          <div>
            <ul className="flex items-center">
              <li className="px-2 py-2 uppercase text-blue-600">
                <Link href="/">
                <a className="">
                  Acceuil
                </a>
                </Link>
              </li>
              <li className="px-2 py-2 uppercase">
                <Link href="/presentation">
                <a className="">
                  Présentation
                </a>
                </Link>
              </li>
              <li className="px-2 py-2 uppercase">
                <Link href="/aide">
                <a className="">
                  Contact
                </a>
                </Link>
              </li>
              <li className="px-2 py-2 uppercase">
                <Link href="/aide">
                <a className="">
                  Aide
                </a>
                </Link>
                
              </li>
              <li className="px-2 py-2 flex gap-2 ml-4">
                <Link href="/signup">
                <a>
                  <button className="focus:outline-none flex-auto text-blue-600 px-4 py-2 font-bold border border-blue-600 flex gap-2 items-center rounded-xl focus:outline-none">
                    <svg className="w-6 h-6" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M7.07,18.28C7.5,17.38 10.12,16.5 12,16.5C13.88,16.5 16.5,17.38 16.93,18.28C15.57,19.36 13.86,20 12,20C10.14,20 8.43,19.36 7.07,18.28M18.36,16.83C16.93,15.09 13.46,14.5 12,14.5C10.54,14.5 7.07,15.09 5.64,16.83C4.62,15.5 4,13.82 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,13.82 19.38,15.5 18.36,16.83M12,6C10.06,6 8.5,7.56 8.5,9.5C8.5,11.44 10.06,13 12,13C13.94,13 15.5,11.44 15.5,9.5C15.5,7.56 13.94,6 12,6M12,11A1.5,1.5 0 0,1 10.5,9.5A1.5,1.5 0 0,1 12,8A1.5,1.5 0 0,1 13.5,9.5A1.5,1.5 0 0,1 12,11Z"
                      />
                    </svg>
                    S'inscrire
                  </button>
                </a>
                </Link>
                <Link href="/signin">
                <a>
                  <button className="focus:outline-none flex-auto text-white px-4 py-2 font-bold flex gap-2 items-center bg-gradient-to-r from-blue-400 to-blue-800 rounded-xl focus:outline-none">
                    <svg className="w-6 h-6" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M12,19.2C9.5,19.2 7.29,17.92 6,16C6.03,14 10,12.9 12,12.9C14,12.9 17.97,14 18,16C16.71,17.92 14.5,19.2 12,19.2M12,5A3,3 0 0,1 15,8A3,3 0 0,1 12,11A3,3 0 0,1 9,8A3,3 0 0,1 12,5M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z"
                      />
                    </svg>
                    Se connecter
                  </button>
                </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
