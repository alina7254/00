import React, { useState } from "react";
import Navbar from "../components/componentsList/Navbar";
import Sidebar from "../components/componentsList/Sidebar";
import HeaderThread from "../components/componentsList/HeaderThread";
import Post from "../components/componentsList/Post";
import ReplyBtn from "../components/componentsList/ReplyBtn";


const PageB = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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
          <div className="flex flex-col mt-32">
          <h1 className="text-primary text-2xl tracking-widest press-start-2p-regular text-center font-semibold">
              /b/ - <span className="uppercase">random</span>
            </h1>
          </div>
          <div className="divider divider-base-200"></div>
          <ReplyBtn></ReplyBtn>
          <HeaderThread />
          <div className="divider divider-base-200"></div>
          <Post />
          <div className="divider divider-base-200"></div>
        </div>
      </div>
    </div>
  );
};

export default PageB;
