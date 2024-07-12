import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/componentsList/Navbar";
import Sidebar from "../components/componentsList/Sidebar";
import CreateBtn from "../components/componentsList/CreateBtn";
import img1 from "@/assets/burunduk7.png";

function MyComponent() {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleClick = () => {
    navigate("/b");
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen w-screen">
      <Sidebar isOpen={isSidebarOpen} />
      <div className="flex flex-col flex-grow">
        <Navbar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <div
          className={`flex flex-col flex-grow transition-all duration-300 ${isSidebarOpen ? "ml-64" : "ml-0"}`}
        >
          <div
            className="hero min-h-screen"
            style={{ backgroundImage: `url(${img1})` }}
          >
            <div className="hero-overlay bg-opacity-70"></div>
            <div className="hero-content text-balance text-white">
              <div className="max-w-md">
                <h1 className="uppercase tracking-wide copy-h1-alt flex justify-center mb-2 text-balance text-nowrap text-primary text-center text-3xl press-start-2p-regular">
                  Настоящий анон перебьется,
                </h1>
                <p className="leading-relaxed tracking-normal mb-4 text-wrap text-justify text-pretty">
                  {" "}
                  он уйдет из городов в поля, в леса. Будет собирать грибы,
                  ягоды, орехи — анон готов в минуту больших печалей
                  превратиться в анон-бурундук, анон-хомяк, он будет запасать
                  на зиму всякие корешки, всякие луковки.” - Неизвестный
                </p>
                <div className="flex flex-row space-x-2">
                  <CreateBtn></CreateBtn>
                  <button
                    onClick={handleClick}
                    className="btn btn-primary btn-outline btn-wide press-start-2p-regular text-center uppercase tracking-wide"
                  >
                    view more
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyComponent;

