import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import BtnSend from "./BtnSend";
import TextFormattingButtons from "./TextFormattingButtons";
import ImageUploader from "./ImageUploader.tsx";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { Thread } from "../../hooks/types";

const BtnCreate: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const [content, setText] = useState<string>("");
  const [blob, setImage] = useState<File | null>(null);
  const [threads, setThreads] = useLocalStorage<Thread[]>("threads", []);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { currentBoard } = useParams<{ currentBoard: string }>();
  const navigate = useNavigate();

  const createThread = (
    currentBoard: string,
    title: string,
    content: string,
    blob: File | null
  ) => {
    const newThreadId = Date.now();
    const newThread: Thread = {
      id: newThreadId,
      currentBoard: currentBoard || "",
      title,
      posts: [
        {
          id: newThreadId,
          content,
          author: "anon",
          timestamp: new Date().toLocaleString(),
          op: true,
          blob: blob ? URL.createObjectURL(blob) : null,
          postNumber: 0,
        },
      ],
      blob: null,
      time: ""
    };
    setThreads([newThread, ...threads]);
    navigate(`/${currentBoard}/${newThreadId}`);
  };

  const handleSend = () => {
    if (currentBoard && title.trim() && content.trim()) {
      createThread(currentBoard, title, content, blob);
      setTitle("");
      setText("");
      setImage(null);
      setIsModalOpen(false);
    } else {
      console.log("Please fill in all fields.");
    }
  };

  return (
    <div className="flex flex-col p-2 items-center">
      <button
        onClick={() => setIsModalOpen(true)}
        className="btn btn-primary btn-wide font-press-start uppercase tracking-wide rounded-md shadow-md"
      >
        Create Thread
      </button>

      {isModalOpen && (
        <div className="modal modal-open rounded-md shadow-md" onClick={() => setIsModalOpen(false)}>
          <div className="modal-box rounded-md shadow-md" onClick={(e) => e.stopPropagation()}>
            <h1 className="font-press-start font-bold text-center text-primary uppercase text-xl">
              Create Thread
            </h1>
            <div className="p-2">
              <label className="form-control w-full m-2">
                <span id="large" className="block w-full mb-2 text-secondary">
                  Thread Title
                </span>
                <input
                  type="text"
                  placeholder="Enter title"
                  className="input input-bordered w-full"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </label>

              <div className="w-full h-full m-2">
                <div className="p-4 bg-base-200">
                  <TextFormattingButtons
                    textareaId="contentTextarea"
                    doAddTags={(startTag, endTag) => {
                      const textarea = document.getElementById(
                        "contentTextarea"
                      ) as HTMLTextAreaElement;
                      if (textarea) {
                        const { selectionStart, selectionEnd } = textarea;
                        const updatedText = `${content.substring(
                          0,
                          selectionStart
                        )}${startTag}${content.substring(
                          selectionStart,
                          selectionEnd
                        )}${endTag}${content.substring(selectionEnd)}`;
                        setText(updatedText);
                      }
                    }}
                    handleSpoiler={() => console.log("Spoiler button clicked")}
                  />

                  <textarea
                    id="contentTextarea"
                    className="block w-full px-2 py-2 text-sm text-secondary bg-white"
                    placeholder="Enter text"
                    value={content}
                    onChange={(e) => setText(e.target.value)}
                  ></textarea>
                </div>
              </div>
              <div className="flex items-center justify-center w-full m-2">
                <ImageUploader blob={blob} setImage={setImage} />
              </div>
            </div>
            <div className="flex flex-row justify-center modal-action">
              <BtnSend onSend={handleSend} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BtnCreate;









