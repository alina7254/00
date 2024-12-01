import React, { useState } from "react";
import {
  FaBold,
  FaItalic,
  FaQuoteRight,
  FaUnderline,
  FaStrikethrough,
  FaSuperscript,
  FaSubscript,
  FaQuestion,
  FaUpload,
  FaCaretDown,
} from "react-icons/fa";

const CreateBtn = () => {
  const [text, setText] = useState("");

  const doAddTags = (startTag: string, endTag: string, textareaId: string) => {
    const textarea = document.getElementById(textareaId) as HTMLTextAreaElement;
    const startPos = textarea.selectionStart;
    const endPos = textarea.selectionEnd;
    const selectedText = textarea.value.substring(startPos, endPos);
    const replacement = `${startTag}${selectedText}${endTag}`;
    setText(text.substring(0, startPos) + replacement + text.substring(endPos));
  };

  const handleSpoiler = () => {
    const textarea = document.getElementById(
      "textareaId"
    ) as HTMLTextAreaElement;
    const startPos = textarea.selectionStart;
    const endPos = textarea.selectionEnd;
    const selectedText = textarea.value.substring(startPos, endPos);
    const replacement = `[spoiler]${selectedText}[/spoiler]`;
    setText(text.substring(0, startPos) + replacement + text.substring(endPos));
  };

  return (
    <div className="flex flex-col">
      <label
        htmlFor="my_modal_6"
        className="btn btn-primary btn-wide press-start-2p-regular text-center uppercase tracking-wide"
      >
        create thread
      </label>

      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box">
          <h1 className="m-2 text-2xl font-bold press-start-2p-regular leading-none text-primary text-center">
            СОЗДАТЬ ТРЕД
          </h1>
          <p className="p-2">
            <label className="form-control w-full m-2">
              <label id="large" className="block w-full mb-2 text-secondary">
                Название треда
              </label>
              <input
                type="text"
                placeholder="Введите название..."
                className="input input-bordered w-full"
              />
            </label>

            <form className="m-2 w-full ">
              <label id="large" className="block mb-2 text-secondary">
                Раздел
              </label>
              <select
                id="large"
                className="block w-full px-4 py-3 text-secondary bg-base-200"
              >
                <option selected>
                  Выберете раздел
                  <FaCaretDown className="h-4 w-4 fill-secondary inline-block ml-1" />
                </option>
                <option value="US">/a/</option>
                <option value="CA">/ai/</option>
                <option value="FR">/b/</option>
                <option value="DE">/bo/</option>
              </select>
            </form>

            <form>
              <div className="w-full m-2 bg-base-200">
                <div className="flex items-center justify-between px-3 py-3">
                  <div className="flex flex-wrap items-center divide-white sm:divide-x sm:rtl:divide-x-reverse">
                    <div className="flex items-center justify-between w-full">
                      <div className="form-control">
                        <label className="label cursor-pointer">
                          <input
                            type="checkbox"
                            defaultChecked
                            className="checkbox checkbox-secondary checkbox-sm mr-1"
                          />
                          <span className="label-text text-xs font-semibold">ОП</span>
                        </label>
                      </div>
                      <div className="form-control">
                        <label className="label cursor-pointer">
                          <input
                            type="checkbox"
                            defaultChecked
                            className="checkbox checkbox-secondary checkbox-sm mr-1"
                          />
                          <span className="label-text text-xs font-semibold">Sage</span>
                        </label>
                      </div>

                      <div className="flex flex-wrap space-x-1">
                        <button
                          className="postform__mu postform__mu_type_b btn btn-outline btn-xs"
                          type="button"
                          onClick={() => doAddTags("[b]", "[/b]", "textareaId")}
                        >
                          <FaBold />
                        </button>
                        <button
                          className="postform__mu postform__mu_type_i btn btn-outline btn-xs"
                          type="button"
                          onClick={() => doAddTags("[i]", "[/i]", "textareaId")}
                        >
                          <FaItalic />
                        </button>
                        <button
                          className="postform__mu postform__mu_type_q btn btn-outline btn-xs"
                          type="button"
                          onClick={() => doAddTags("&gt;", "", "textareaId")}
                        >
                          <FaQuoteRight />
                        </button>
                        <button
                          className="postform__mu postform__mu_type_u btn btn-outline btn-xs"
                          type="button"
                          onClick={() => doAddTags("[u]", "[/u]", "textareaId")}
                        >
                          <FaUnderline />
                        </button>
                        <button
                          className="postform__mu postform__mu_type_o btn btn-outline btn-xs  text-secondary border-secondary hover:bg-secondary hover:text-white"
                          type="button"
                          onClick={() => doAddTags("[o]", "[/o]", "textareaId")}
                        >
                          <span className="overline">O</span>
                        </button>
                        <button
                          className="postform__mu postform__mu_type_sp btn btn-outline btn-xs relative"
                          type="button"
                          onClick={handleSpoiler}
                        >
                          <FaQuestion className="absolute flex items-center justify-center hover:opacity-100 opacity-0" />
                        </button>
                        <button
                          className="postform__mu postform__mu_type_s btn btn-outline btn-xs"
                          type="button"
                          onClick={() => doAddTags("[s]", "[/s]", "textareaId")}
                        >
                          <FaStrikethrough />
                        </button>
                        <button
                          className="postform__mu btn btn-outline btn-xs"
                          type="button"
                          onClick={() =>
                            doAddTags("[sup]", "[/sup]", "textareaId")
                          }
                        >
                          <span>
                            <FaSuperscript />
                          </span>
                        </button>
                        <button
                          className="postform__mu btn btn-outline btn-xs"
                          type="button"
                          onClick={() =>
                            doAddTags("[sub]", "[/sub]", "textareaId")
                          }
                        >
                          <span>
                            <FaSubscript />
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="px-4 py-2 bg-base-200">
                  <label id="editor" className="sr-only">
                    Publish post
                  </label>
                  <textarea
                    className="block w-full px-2 py-2 text-sm text-secondary bg-white"
                    placeholder="Введите текст..."
                    id="textareaId"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                  ></textarea>
                </div>
              </div>
              <div className="flex items-center justify-center w-full m-2">
                <label
                  id="dropzone-file"
                  className="flex flex-col items-center justify-center w-full"
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-5 bg-base-200 w-full">
                    <FaUpload className="w-6 h-6 text-secondary" />
                    <p className="m-2 text-sm text-secondary">
                      НАЖМИТЕ, ЧТОБЫ ЗАГРУЗИТЬ ИЛИ ПЕРЕТАЩИТЕ ФАЙЛ
                    </p>
                  </div>
                  <input id="dropzone-file" type="file" className="hidden" />
                </label>
              </div>
            </form>
          </p>
          <div className="modal-action">
            <button
              className="btn btn-primary p-2 w-[25%] press-start-2p-regular text-center text-sm"
            >
              ПОСТ
            </button>
            <label
              htmlFor="my_modal_6"
              className="btn btn-primary btn-outline p-2 w-[25%] press-start-2p-regular text-center text-sm"
            >
              ОТМЕНА
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateBtn;
