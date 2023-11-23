"use client";
import { Button } from "@/components/index";

function Navbar() {
  return (
    <nav className="w-full">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center">
          <span className="font-arial font-extrabold self-center text-2xl whitespace-nowrap text-orange-primary">
            CARENT
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-solid-bg"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-solid-bg"
          aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
          <ul className="flex flex-col justify-center items-center font-medium mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
            <li>
              <a
                href="#"
                className=" font-medium block py-2 pl-3 pr-4 text-black rounded md:bg-transparent md:p-0 "
                aria-current="page">
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className=" font-medium block py-2 pl-3 pr-4 text-black rounded md:bg-transparent md:p-0 ">
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className=" font-medium block py-2 pl-3 pr-4 text-black rounded md:bg-transparent md:p-0 ">
                Booking
              </a>
            </li>
            <li>
              <a
                href="#"
                className=" font-medium block py-2 pl-3 pr-4 text-black rounded md:bg-transparent md:p-0 ">
                Cars
              </a>
            </li>
            <li>
              <a
                href="#"
                className=" font-medium block py-2 pl-3 pr-4 text-black rounded md:bg-transparent md:p-0 ">
                Contacts
              </a>
            </li>
            <li>
              <Button
                href={"login"}
                containerStyles={"ml-8"}
                title={"Login | Sign up"}
              />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
