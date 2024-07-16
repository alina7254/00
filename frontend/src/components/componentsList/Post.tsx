import React from "react";
import ReplyBtn from "./ReplyBtn";

const Post = () => {
  return (
    <div className="flex flex-col w-[25%] p-4">
      <div className="chat chat-bubble bg-base-200 bg-clip-border">
        <div className="chat-header text-xm text-base-content">
          <span className="flex flex-row">
            Anon 18/04/2024 Mon 14:55:29 №123456789
          </span>
        </div>
        <p className="flex flex-col text-secondary bg-base-200">
          <button className="btn btn-link no-underline uppercase font-roboto-mono text-base text-primary text-right tracking-wide">
            {">>20224045"}
          </button>
          Curabitur vitae quam feugiat justo pulvinar vehicula in at ex.
        </p>
        <div className="chat-footer">
         <ReplyBtn></ReplyBtn>
        </div>
      </div>
    </div>
  );
};
export default Post;
