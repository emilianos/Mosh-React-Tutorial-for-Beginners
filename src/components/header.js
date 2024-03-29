import React from "react";
import DarkMode from "./darkMode";

const Header = ({ totalCounters }) => {
  return (
    <>
      <nav className="flex items-center justify-between flex-wrap bg-teal-400 p-6 mb-8">
        <div className="flex items-center flex-shrink-0 text-white mr-2">
          <svg
            className="fill-current h-8 w-8 mr-2"
            width="54"
            height="54"
            viewBox="0 0 54 54"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
          </svg>
          <span className="font-semibold text-xl tracking-tight">Juicebox</span>
        </div>
        <div className="block flex-grow justify-between flex items-center w-auto">
          <div className="text-sm bg-red-500 text-white font-bold text-xs m-2 px-2 py-1 rounded-full">
            {totalCounters}
          </div>
          <div>
            <DarkMode />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
