import React, { useState } from "react";
import ImageUploader from "./ImageUploader.tsx";
import BtnSend from "./BtnSend";
import { BtnReplyProps } from "../../hooks/types.ts";
import TextFormattingButtons from "./TextFormattingButtons.tsx";

const BtnReply: React.FC<BtnReplyProps> = ({ addNewPost, replyTo }) => {
  const [content, setText] = useState<string>("");
  const [blob, setImage] = useState<File | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const handleSend = () => {
    if (content.trim()) {
      addNewPost(content, blob, replyTo);
      setText("");
      setImage(null);
      setIsModalOpen(false);
    } else {
      console.log("Please enter some text.");
    }
  };

  const handleReplyClick = () => {
    setIsDropdownOpen(false);
    setIsModalOpen(true);
  };

  return (
    <div className="flex flex-row relative">
      <button
        className="font-roboto-mono font-bold uppercase transition-all rounded-lg text-xs text-primary"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        type="button"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          strokeWidth="3"
          stroke="currentColor"
          aria-hidden="true"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
          ></path>
        </svg>
      </button>

      {isDropdownOpen && (
        <div className="absolute top-10 left-0 z-10 bg-base-200 rounded-md text-secondary">
          <ul className="dropdown-content menu bg-base-200 shadow-md rounded-md">
            <li>
              <button onClick={handleReplyClick} type="button">
                reply
              </button>
            </li>
            <li>
              <button onClick={() => setIsDropdownOpen(false)} type="button">
                hidden
              </button>
            </li>
          </ul>
        </div>
      )}

      {isModalOpen && (
        <div className="modal modal-open rounded-md shadow-md" onClick={() => setIsModalOpen(false)}>
          <div className="modal-box rounded-md shadow-md" onClick={(e) => e.stopPropagation()}>
            <h3 className="font-press-start font-bold text-center text-primary text-xl uppercase mb-4">
              reply</h3>
              <div className="p-4 bg-base-200">
              <TextFormattingButtons
              textareaId="replyTextarea"
              doAddTags={(startTag, endTag) => {
                const textarea = document.getElementById("replyTextarea") as HTMLTextAreaElement;
                if (textarea) {
                  const { selectionStart, selectionEnd } = textarea;
                  const updatedText = `${content.substring(0, selectionStart)}${startTag}${content.substring(selectionStart, selectionEnd)}${endTag}${content.substring(selectionEnd)}`;
                  setText(updatedText);
                }
              }}
              handleSpoiler={() => console.log("Spoiler button clicked")}
            />

            <textarea
              id="replyTextarea"
              className="block w-full px-2 py-2 text-sm text-secondary bg-white"
              placeholder="Enter text"
              value={content}
              onChange={(e) => setText(e.target.value)}
            ></textarea>
              </div>
            <div className="flex items-center justify-center w-full m-2">
              <ImageUploader blob={blob} setImage={setImage} />
            </div>
            <div className="flex items-center justify-center modal-action">
              <BtnSend onSend={handleSend} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BtnReply;





