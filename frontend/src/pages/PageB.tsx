import React, { useState } from "react";
import Navbar from "../components/componentsList/Navbar";
import Sidebar from "../components/componentsList/Sidebar";
import HeaderThread from "../components/componentsList/HeaderThread";
import Post from "../components/componentsList/Post";
import BoardName from "../components/componentsList/BoardName";

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
          <BoardName></BoardName>
          <HeaderThread />
          <Post />
        </div>
      </div>
    </div>
  );
};

export default PageB;
