// @flow strict
import Link from "next/link";
import { personalData } from "@/utils/data/personal-data";
import './navbar.css';


function Navbar() {


  return (
    <nav className="bg-transparent">
      <div className="flex items-center justify-between py-5">
        <div className="flex flex-shrink-0 items-center">
          <Link
            href="/"
            className=" text-[#1ec8ff] text-3xl font-bold">
            {personalData.name}
          </Link>
        </div>

        <ul className="mt-4 flex h-screen max-h-0 w-full flex-col items-start text-sm opacity-0 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0 md:opacity-100" id="navbar-default">
          <li>
            <a className="block px-4 py-2 no-underline outline-none hover:no-underline" href="#about">
              <div className="text-sm text-white transition-colors duration-300  underline-animation">ABOUT</div>
            </a>
          </li>
          <li>
            <a className="block px-4 py-2 no-underline outline-none hover:no-underline" href="#experience">
              <div className="text-sm text-white transition-colors duration-300  underline-animation">EXPERIENCE</div>
            </a>
          </li>
          <li>
            <a className="block px-4 py-2 no-underline outline-none hover:no-underline" href="#skills">
              <div className="text-sm text-white transition-colors duration-300 underline-animation">SKILLS</div>
            </a>
          </li>
          <li>
            <a className="block px-4 py-2 no-underline outline-none hover:no-underline" href="#education">
              <div className="text-sm text-white transition-colors duration-300  underline-animation">EDUCATION</div>
            </a>
          </li>
          {/* <li>
            <a className="block px-4 py-2 no-underline outline-none hover:no-underline" href="#blogs">
              <div className="text-sm text-white transition-colors duration-300  underline-animation"></div>
            </a>
          </li> */}
          <li>
            <a className="block px-4 py-2 no-underline outline-none hover:no-underline" href="#projects">
              <div className="text-sm text-white transition-colors duration-300  underline-animation">PROJECTS</div>
            </a>
          </li>
        </ul>
      </div>
    </nav>

    
  );
};

export default Navbar;