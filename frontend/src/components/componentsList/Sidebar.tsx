import React from "react";
import { useNavigate } from "react-router-dom";

function Sidebar({ isOpen }) {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <div
      className={`overflow-auto fixed z-40 h-screen bg-primary transition-transform duration-300 ${
        isOpen ? "transform translate-x-0" : "transform -translate-x-full"
      }`}
      style={{ width: "250px", top: 70, left: 0 }}
    >
      <div id="dropdownList">
        <table className="table bg-primary table-pin-rows p-4">
          <tbody>
            <tr onClick={() => handleClick("/b")}>
              <th className="p-8 subpixel-antialiased tracking-wide btn btn-link font-press-start font-bold text-xs uppercase text-white no-underline hover:no-underline">
                <p className="lowercase">/b/</p>lorem
              </th>
            </tr>
            <tr onClick={() => handleClick("/a")}>
              <th className="p-8 subpixel-antialiased tracking-wide btn btn-link font-press-start font-bold text-xs uppercase text-white no-underline hover:no-underline">
                <p className="lowercase">/a/</p>ipsum
              </th>
            </tr>
            <tr onClick={() => handleClick("/n")}>
              <th className="p-8 subpixel-antialiased tracking-wide btn btn-link font-press-start font-bold text-xs uppercase text-white no-underline hover:no-underline">
                <p className="lowercase">/n/</p>lorem
              </th>
            </tr>
            <tr onClick={() => handleClick("/s")}>
              <th className="p-8 subpixel-antialiased tracking-wide btn btn-link font-press-start font-bold text-xs uppercase text-white no-underline hover:no-underline">
                <p className="lowercase">/s/</p>ipsum
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Sidebar;


