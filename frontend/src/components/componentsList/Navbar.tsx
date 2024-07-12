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
            className="btn font-semibold subpixel-antialiased tracking-widest btn btn-link press-start-2p-regular text-md uppercase text-white lg:text-2xl no-underline hover:no-underline"
          >
            hackee.chan
          </h1>

          <div className="dropdown">
            <button
              id="toggleButton"
              className="block mr-4"
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
        <LanguageSelector />
          <button className="md:hidden mr-4" onClick={toggleSearch}>
            <FaSearch className="w-5 h-5 text-white" />
          </button>

          <div className="form-control flex justify-end mr-4">
            <input
              type="text"
              placeholder="search"
              className={`input input-bordered w-24 md:w-auto ${
                isSearchOpen ? "block" : "hidden"
              } md:block`}
            />
          </div>

          <div className="dropdown dropdown-bottom dropdown-end flex justify-end mr-4">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost text-white text-xs uppercase sm:text-sm md:text-base lg:text-md tracking-wide press-start-2p-regular"
            >
              info
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu shadow p-2 bg-base-200 text-secondary tracking-wide"
            >
              <li>
                <label htmlFor="rules_modal" className="btn text-nowrap">
                  /п/равила
                </label>
              </li>
              <li>
                <label htmlFor="stats_modal" className="btn text-nowrap">
                  /с/татистика
                </label>
              </li>
            </ul>
            <input type="checkbox" id="rules_modal" className="modal-toggle" />
            <div className="modal" role="dialog">
              <div className="modal-box">
                <h1 className="text-lg font-bold">Общие правила</h1>
                <ul className="p-4 list list-decimal">
                  <li>
                    Не нарушайте законы России и страны, в которой Вы находитесь
                    в данный момент. Детская порнография и ее имитация, в т.ч. и
                    рисованная, наркотики, терроризм, суицид запрещены, даже
                    если они разрешены вашими местными законами.
                  </li>
                  <li>
                    Бурунду.чан является сайтом для лиц старше 18-ти лет.
                    Посещая его, вы подтверждаете свое совершеннолетие.
                  </li>
                  <li>
                    Деанонимизация, публикация персональных данных и агрессивное
                    преследование (травля) не приветствуются. Набеги на
                    внутренние разделы Бурунду.чан запрещены.
                  </li>
                </ul>
              </div>
              <label className="modal-backdrop" htmlFor="rules_modal">
                Close
              </label>
            </div>

            <input type="checkbox" id="stats_modal" className="modal-toggle" />
            <div className="modal" role="dialog">
              <div className="modal-box">
                <h1 className="font-bold text-lg">Статистика</h1>
                <p className="py-4">Статистика</p>
                <div className="modal-action">
                  <label htmlFor="stats_modal" className="btn">
                    Close!
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="dropdown flex justify-end mr-4">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost text-white text-xs uppercase sm:text-sm md:text-base lg:text-md press-start-2p-regular"
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
                  className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                  aria-label="Default"
                  value="default"
                />
              </li>
              <li>
                <input
                  type="radio"
                  name="theme-dropdown"
                  className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                  aria-label="Sunset"
                  value="sunset"
                />
              </li>
              <li>
                <input
                  type="radio"
                  name="theme-dropdown"
                  className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                  aria-label="Emerald"
                  value="emerald"
                />
              </li>
              <li>
                <input
                  type="radio"
                  name="theme-dropdown"
                  className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                  aria-label="Dim"
                  value="dim"
                />
              </li>
              <li>
                <input
                  type="radio"
                  name="theme-dropdown"
                  className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                  aria-label="Cyberpunk"
                  value="cyberpunk"
                />
              </li>
              <li>
                <input
                  type="radio"
                  name="theme-dropdown"
                  className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                  aria-label="Synthwave"
                  value="synthwave"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
