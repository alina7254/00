import React from "react";
import img1 from "@/assets/burunduk6.png";
import ReplyBtn from "./ReplyBtn";

const HeaderThread = () => {
  return (
    <div className="flex flex-col">
      <div className="">
      <ReplyBtn></ReplyBtn>
      </div>
      <div className="chat chat-bubble flex flex-col bg-base-100">
        <div className="chat-header text-sm text-base-content">
          Аноним 18/04/2024 Чтв 14:55:29 №123456789{" "}
          <span className="uppercase text-primary font-bold">op</span>
        </div>
      </div>

      <div className="flex flex-row">
        <img src={img1} alt="бурундук.жпг" className="flex w-1/4 ml-4"></img>
        <span className="flex flex-col text-base-content ml-4">
          <blockquote className="leading-relaxed subpixel-antialiased tracking-wide press-start-2p-regular text-xs lg:text-sm text-primary uppercase">
            <p>День анона-бурундука</p>
          </blockquote>{" "}
          “Настоящий анон перебьется, он уйдет из городов в поля, в леса. Будет
          собирать грибы, ягоды, орехи — анон готов в минуту больших печалей
          превратиться в анон-бурундук, анон-хомяк, он будет запасать на зиму
          всякие корешки, всякие луковки.” - Неизвестный
        </span>
      </div>

      <div className="chat-footer w-1/4">
        <ReplyBtn></ReplyBtn>
      </div>
    </div>
  );
};

export default HeaderThread;
