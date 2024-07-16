import React, { useState } from "react";
import Navbar from "../components/componentsList/Navbar";
import Sidebar from "../components/componentsList/Sidebar";
import HeaderThread from "../components/componentsList/HeaderThread";
import Post from "../components/componentsList/Post";
import CreateBtn from "../components/componentsList/CreateBtn";

const PageS = () => {
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
                    <div className="flex mt-32 justify-center">
                        <h1 className="text-center tracking-wide block antialiased font-press-start text-2xl text-primary font-black leading-normal uppercase text-nowrap">
                            <span className="lowercase text-nowrap">/s/ </span> - science
                        </h1>
                    </div>
                    <CreateBtn></CreateBtn>
                    <HeaderThread />
                    <Post />
                </div>
            </div>
        </div>
    );
};

export default PageS;