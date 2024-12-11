import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/componentsList/Navbar";
import Sidebar from "../components/componentsList/Sidebar";
import Post from "../components/componentsList/Post";
import { PostProps, Thread } from "../hooks/types";
import { getBoardName } from "../hooks/getBoardName";
import BtnCreate from "../components/componentsList/BtnCreate";

const ThreadPage: React.FC = () => {
  const navigate = useNavigate();
  const { currentBoard, id } = useParams<{ currentBoard: string; id: string }>();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [thread, setThread] = useState<Thread | null>(null);

  useEffect(() => {
    const savedThreads = JSON.parse(localStorage.getItem("threads") || "[]");
    const currentThread = savedThreads.find((t: Thread) => t.id === Number(id));
    setThread(currentThread || null);
  }, [id]);

  const addNewPost = (content: string, blob: File | null, replyTo?: number) => {
    if (thread) {
      const newPost: PostProps = {
        id: Date.now(),
        content,
        author: "anon",
        timestamp: new Date().toLocaleString(),
        op: false,
        title: "",
        replyTo,
        blob: blob ? URL.createObjectURL(blob) : null,
        postNumber: 0,
        board: currentBoard,
      };

      const updatedPosts = [...thread.posts, newPost];
      const updatedThread = { ...thread, posts: updatedPosts};
      const savedThreads = JSON.parse(localStorage.getItem("threads") || "[]");
      const updatedThreads = savedThreads.map((t: Thread) =>
        t.id === thread.id ? updatedThread : t
      );

      localStorage.setItem("threads", JSON.stringify(updatedThreads));
      setThread(updatedThread);
    }
  };

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const handleNavigate = () => {
    navigate("/");
  };

  const navigateCurrentBoard = () => {
    navigate(`/${currentBoard}`);
  };

  return (
    <div className="flex h-screen w-screen">
      <Sidebar isOpen={isSidebarOpen} />
      <div className="flex flex-col">
        <Navbar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <div
          className={`searchable flex flex-col flex-grow transition-all duration-300 ${isSidebarOpen ? "ml-64" : "ml-0"
            }`}
        >
          <div className="mt-28 breadcrumbs self-center">
            <ul>
              <li>
                <a
                  onClick={handleNavigate}
                  style={{ textDecoration: "none" }}
                  className="cursor-pointer"
                >
                  <span
                    className="p-2 tracking-wide font-press-start text-2xl text-primary font-black  
                    uppercase text-nowrap"
                  >
                    home
                  </span>
                </a>
              </li>
              <li>
                <a
                  onClick={navigateCurrentBoard}
                  style={{ textDecoration: "none" }}
                  className="cursor-pointer"
                >
                  <span
                    className="p-2 tracking-wide font-press-start text-2xl text-primary font-black 
                    uppercase text-nowrap"
                  >
                    {getBoardName(currentBoard)}
                  </span>
                </a>
              </li>
              {thread && (
                <li>
                  <span
                    className="p-2 tracking-wide font-press-start text-2xl text-primary font-black uppercase"
                  >
                    «{thread.title}»
                  </span>
                </li>
              )}
            </ul>
          </div>
          <div className="p-2">
            <BtnCreate />
          </div>
          {thread ? (
            thread.posts.map((post, index) => (
              <Post
                key={post.id}
                {...post}
                op={index === 0}
                postNumber={index + 1}
                title={index === 0 ? thread.title : null}
                replyTo={post.replyTo}
                addNewPost={addNewPost}
              />
            ))
          ) : (
            <p className="text-center mt-8 uppercase text-xl font-bold text-secondary">
              Thread not found
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ThreadPage;





