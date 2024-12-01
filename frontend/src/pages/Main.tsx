import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/componentsList/Navbar";
import Sidebar from "../components/componentsList/Sidebar";
import { calculateBoardSpeed, calculateCurrentUsers, calculateTotalThreads, getPopularThreads } from "../hooks/stats";
import { Thread } from "../hooks/types";
import { useLocalStorage } from "../hooks/useLocalStorage";

function MyComponent() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [threads] = useLocalStorage<Thread[]>("threads", []);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const totalThreads = calculateTotalThreads(threads);
  const boardSpeed = calculateBoardSpeed(threads);
  const currentUsers = calculateCurrentUsers(threads);
  const popularThreads = getPopularThreads(threads);

  const navigateBoard = (currentBoard: string) => {
    navigate(`/${currentBoard}`);
  };


  const navigateThread = (currentBoard: string, threadId: number) => {
    navigate(`/${currentBoard}/${threadId}`);
  };

  return (
    <div className="flex h-screen w-screen">
      <Sidebar isOpen={isSidebarOpen} />
      <div className="flex flex-col flex-grow">
        <Navbar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <div
          className={`flex flex-col flex-grow transition-all duration-300 ${isSidebarOpen ? "ml-64" : "ml-0"}`}
        >
          <div className="m-28">
            <div className="mb-4 grid">
              <div className="flex flex-col">
                <h6 className="block antialiased font-press-start text-3xl text-primary font-black leading-normal uppercase text-nowrap">
                  Day of Lorem Ipsum
                </h6>
                <h5 className="mb-2 font-roboto-mono font-bold text-secondary text-xl uppercase leading-normal tracking-wide">06/08/2024</h5>
              </div>
              <div className="relative flex flex-col bg-clip-border bg-base-200 text-secondary rounded-md shadow-md xl:col-span-2">
                <div className="bg-clip-border bg-transparent text-secondary shadow-none flex justify-between p-6">
                  <div>
                    <div className="artboard artboard-horizontal phone-1 flex flex-col items-center justify-center">568x320</div>
                  </div>

                  <button aria-expanded="false" aria-haspopup="menu" id=":r5:" className="relative middle none font-roboto-mono font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-8 max-w-[32px] h-8 max-h-[32px] rounded-lg text-xs text-blue-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30" type="button">

                    <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="currenColor" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" aria-hidden="true" className="h-6 w-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"></path>
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>

            <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-3">

              <div className="relative flex flex-col bg-base-200 text-secondary rounded-md shadow-md">
                <div className="p-4">
                  <p className="font-press-start text-xl text-primary font-black uppercase">
                    Board Speed
                  </p>
                  <h4 className="font-roboto-mono text-md font-bold text-secondary mt-2">
                    {boardSpeed} posts/hour
                  </h4>
                </div>
                <div className="border-t border-base-100 p-4">
                  <p className="font-roboto-mono text-base text-secondary">
                    <strong className="text-accent uppercase">View more</strong>
                  </p>
                </div>
              </div>

              <div className="relative flex flex-col bg-base-200 text-secondary rounded-md shadow-md">
                <div className="p-4">
                  <p className="font-press-start text-xl text-primary font-black uppercase">
                    Current Users
                  </p>
                  <h4 className="font-roboto-mono text-md font-bold text-secondary mt-2">
                    {currentUsers} users
                  </h4>
                </div>
                <div className="border-t border-base-100 p-4">
                  <p className="font-roboto-mono text-base text-secondary">
                    <strong className="text-accent uppercase">View more</strong>
                  </p>
                </div>
              </div>

              <div className="relative flex flex-col bg-base-200 text-secondary rounded-md shadow-md">
                <div className="p-4">
                  <p className="font-press-start text-xl text-primary font-black uppercase">
                    Total Threads
                  </p>
                  <h4 className="font-roboto-mono text-md font-bold text-secondary mt-2">
                    {totalThreads} threads
                  </h4>
                </div>
                <div className="border-t border-base-100 p-4">
                  <p className="font-roboto-mono text-base text-secondary">
                    <strong className="text-accent uppercase">View more</strong>
                  </p>
                </div>
              </div>
            </div>

            <div className="relative flex flex-col bg-base-200 text-secondary  text-center rounded-md shadow-md overflow-hidden">
              <div className="p-6 flex items-center justify-between  text-center">
                <h4 className="font-press-start text-xl text-primary font-black uppercase text-center">
                  Popular Threads
                </h4>
              </div>
              <div className="p-4 overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-base-200 text-accent">
                      <th className="p-4 font-roboto-mono text-sm uppercase text-center">Title</th>
                      <th className="p-4 font-roboto-mono text-sm uppercase text-center">Time</th>
                      <th className="p-4 font-roboto-mono text-sm uppercase text-center">Board</th>
                      <th className="p-4 font-roboto-mono text-sm uppercase text-center">Posts</th>
                      <th className="p-4 font-roboto-mono text-sm uppercase text-center">Thread_ID</th>
                    </tr>
                  </thead>
                  <tbody>
                    {popularThreads.map((thread) => {
                      const lastPost = thread.posts[thread.posts.length - 1];

                      return (
                        <tr
                          key={thread.id}
                          className="border-t border-base-100 bg-base-200"
                        >
                          <td
                            onClick={() => navigateThread(thread.currentBoard || "Unknown", thread.id)}
                            className="border-t border-base-100 p-4 text-center text-primary"
                          >
                            {thread.title}
                          </td>
                          <td className="border-t border-base-100 p-4 text-center text-secondary">{lastPost.timestamp}</td>
                          <td
                            onClick={() => navigateBoard(thread.currentBoard || "Unknown")}
                            className="border-t border-base-100 p-4 text-center text-primary lowercase"
                          >
                            /{thread.currentBoard || "Unknown"}/
                          </td>
                          <td className="border-t border-base-100 p-4 text-center text-accent">{thread.posts.length}</td>
                          <td
                            onClick={() => navigateThread(thread.currentBoard || "Unknown", thread.id)}
                            className="btn btn-line p-4 text-center text-primary"
                          >
                            {thread.id}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyComponent;


