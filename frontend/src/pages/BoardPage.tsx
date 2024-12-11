import React, { useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from "../components/componentsList/Navbar";
import Sidebar from "../components/componentsList/Sidebar";
import BtnCreate from "../components/componentsList/BtnCreate";
import Post from "../components/componentsList/Post";
import { getBoardName } from "../hooks/getBoardName";
import { Thread } from "../hooks/types";
import { useLocalStorage } from "../hooks/useLocalStorage";

const BoardPage: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [threads, setThreads] = useLocalStorage<Thread[]>("threads", []);
  const { currentBoard } = useParams<{ currentBoard: string }>();
  const navigate = useNavigate();

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const addNewPost = (threadId: number, content: string, blob: File | null, replyTo?: number) => {
    const savedThreads = JSON.parse(localStorage.getItem("threads") || "[]");
    const targetThread = savedThreads.find((t: Thread) => t.id === threadId);

    if (targetThread) {
      const newPost = {
        id: Date.now(),
        content,
        author: "anon",
        timestamp: new Date().toLocaleString(),
        op: false,
        blob: blob ? URL.createObjectURL(blob) : null,
        board: currentBoard,
        replyTo,
      }
      
      

      const updatedThread = {
        ...targetThread,
        posts: [...targetThread.posts, newPost],
      };

      const updatedThreads = savedThreads.map((t: Thread) =>
        t.id === threadId ? updatedThread : t
      );

      localStorage.setItem("threads", JSON.stringify(updatedThreads));
      setThreads(updatedThreads);

      navigate(`/${currentBoard}/${threadId}`);
    }
  };

  const handleNavigate = () => {
    navigate("/");
  };

  return (
    <div className="flex h-screen w-screen">
      <Sidebar isOpen={isSidebarOpen} />
      <div className="flex flex-col flex-grow">
        <Navbar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <div className={`searchable flex flex-col flex-grow transition-all duration-300 ${isSidebarOpen ? "ml-64" : "ml-0"}`}>
          <div className="mt-28 breadcrumbs self-center">
            <ul>
              <li>
                <a onClick={handleNavigate} style={{ textDecoration: "none" }} className="cursor-pointer">
                  <h1 className="p-2 tracking-wide font-press-start text-2xl text-primary font-black uppercase no-underline hover:no-underline">
                    home
                  </h1>
                </a>
              </li>
              <li>
                <h1 className="p-2 tracking-wide font-press-start text-2xl text-primary font-black uppercase">
                  {getBoardName(currentBoard)}
                </h1>
              </li>
            </ul>
          </div>
          <div className="p-2">
            <BtnCreate />
          </div>
          {threads
            .filter(thread => thread.currentBoard === currentBoard)
            .map(thread => {
              const totalImages = thread.posts.filter(post => post.blob).length;

              return (
                <Post
                  key={thread.id}
                  {...thread.posts[0]}
                  op={true}
                  postNumber={0} 
                  title={thread.title}
                  addNewPost={(content, blob) => addNewPost(thread.id, content, blob)}
                  totalPosts={thread.posts.length}
                  totalImages={totalImages} 
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default BoardPage;










