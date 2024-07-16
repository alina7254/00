import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch, FaBolt, FaBars, FaTimes, FaCaretDown } from "react-icons/fa";
import { LanguageSelector } from "./LanguageSelector";



const Navbar = ({ isSidebarOpen, toggleSidebar }) => {
  const navigate = useNavigate();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleNavigate = () => {
    navigate("/");
  };

  return (
    <div className="fixed z-50 w-full">
      <div className="navbar bg-primary p-4">
        <div className="flex justify-start navbar-start">
          <FaBolt className="w-5 h-10 text-white" />
          <h1
            onClick={handleNavigate}
            className="font-extrabold subpixel-antialiased tracking-wide btn btn-link font-press-start uppercase text-white text-md no-underline hover:no-underline"
          >
            lorem.ipsum
          </h1>

          <div className="dropdown">
            <button
              id="toggleButton"
              className="block mr-1"
              onClick={toggleSidebar}
            >
              {isSidebarOpen ? (
                <FaTimes className="w-5 h-5 text-white" />
              ) : (
                <FaBars className="w-5 h-5 text-white" />
              )}
            </button>
          </div>
        </div>
        <div className="navbar-end flex flex-row justify-end">
          <button className="md:hidden mr-4" onClick={toggleSearch}>
            <FaSearch className="w-5 h-5 text-white" />
          </button>

          <div className="form-control flex justify-end mr-4">
            <input
              type="text"
              placeholder="search"
              className={`input input-bordered w-24 md:w-auto ${isSearchOpen ? "block" : "hidden"
                } md:block`}
            />
          </div>

          <div className="dropdown dropdown-bottom dropdown-end flex justify-end mr-4">
            <div
              tabIndex={0}
              role="button"
              className="btn font-bold subpixel-antialiased tracking-wide btn btn-link font-press-start text-md uppercase text-white no-underline hover:no-underline"
            >
              info
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu shadow bg-base-200 text-secondary tracking-wide"
            >
              <li>
                <label htmlFor="rules_modal" className="text-align text-start font-roboto-mono uppercase text-secondary font-bold traking-wide ">
                  rules
                </label>
              </li>
              <li>
                <label htmlFor="stats_modal" className="text-align text-start font-roboto-mono uppercase text-secondary font-bold traking-wide">
                  statistics
                </label>
              </li>
            </ul>

            <input type="checkbox" id="rules_modal" className="modal-toggle" />
            <div className="modal" role="dialog">
              <div className="modal-box">
                <h1 className="font-roboto-mono font-bold text-secondaryfont-bold text-lg uppercase">basic rules</h1>
                <ul className="pr-8 pl-8 pt-4 list list-decimal font-roboto-mono text-secondary">
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nam vitae elementum mi. Vivamus facilisis porta augue, non gravida mi dignissim a.
                    Sed cursus tortor varius arcu sodales, nec vehicula ex tincidunt.
                    Curabitur vitae quam feugiat justo pulvinar vehicula in at ex.
                    Curabitur vel ante condimentum, pharetra lacus eu, ultricies turpis
                  </li>
                  <li>
                    Suspendisse semper auctor porta. Pellentesque eget massa at magna mollis hendrerit.
                    Aenean et tincidunt metus, a tincidunt neque. Curabitur placerat, risus eget sollicitudin sagittis, lectus massa vestibulum purus, vitae tempus eros quam eget libero.
                    Proin tempus dapibus tortor, feugiat imperdiet nunc mollis eget. Suspendisse at ex vehicula, rutrum tellus non, sollicitudin quam.
                    Sed tincidunt dui non diam dictum porta in at purus.
                  </li>
                  <li>
                    Sed sit amet lorem maximus, viverra nunc porttitor, tristique risus.
                    Praesent eu vulputate ipsum, at aliquet sapien.
                    Praesent sed justo eget mi iaculis porttitor a sed mi.
                  </li>
                </ul>
              </div>
              <label className="modal-backdrop" htmlFor="rules_modal">
              </label>
            </div>

            <input type="checkbox" id="stats_modal" className="modal-toggle" />
            <div className="modal" role="dialog">
              <div className="modal-box">
                <h1 className="font-roboto-mono text-secondary font-bold text-lg uppercase">statistics</h1>
                <p className="py-4 font-roboto-mono text-secondary">statistics</p>
              </div>
              <label className="modal-backdrop" htmlFor="stats_modal">
              </label>
            </div>
          </div>

          <div className="dropdown flex justify-end mr-4">
            <div
              tabIndex={0}
              role="button"
              className="btn font-bold subpixel-antialiased tracking-wide btn btn-link font-press-start text-md uppercase text-white no-underline hover:no-underline"
            >
              theme
              <FaCaretDown className="h-5 w-5 fill-current inline-block ml-1" />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-200 text-secondary"
            >
              <li>
                <input
                  type="radio"
                  name="theme-dropdown"
                  className="theme-controller btn btn-sm btn-block btn-ghost justify-start font-roboto-mono uppercase text-secondary"
                  aria-label="Default"
                  value="default"
                />
              </li>
              <li>
                <input
                  type="radio"
                  name="theme-dropdown"
                  className="theme-controller btn btn-sm btn-block btn-ghost justify-start font-roboto-mono uppercase text-secondary"
                  aria-label="Sunset"
                  value="sunset"
                />
              </li>
              <li>
                <input
                  type="radio"
                  name="theme-dropdown"
                  className="theme-controller btn btn-sm btn-block btn-ghost justify-start font-roboto-mono uppercase text-secondary"
                  aria-label="Emerald"
                  value="emerald"
                />
              </li>
              <li>
                <input
                  type="radio"
                  name="theme-dropdown"
                  className="theme-controller btn btn-sm btn-block btn-ghost justify-start font-roboto-mono uppercase text-secondary"
                  aria-label="Dim"
                  value="dim"
                />
              </li>
              <li>
                <input
                  type="radio"
                  name="theme-dropdown"
                  className="theme-controller btn btn-sm btn-block btn-ghost justify-start font-roboto-mono uppercase text-secondary"
                  aria-label="Cyberpunk"
                  value="cyberpunk"
                />
              </li>
              <li>
                <input
                  type="radio"
                  name="theme-dropdown"
                  className="theme-controller btn btn-sm btn-block btn-ghost justify-start font-roboto-mono uppercase text-secondary"
                  aria-label="Synthwave"
                  value="synthwave"
                />
              </li>
            </ul>
          </div>
          <LanguageSelector />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
