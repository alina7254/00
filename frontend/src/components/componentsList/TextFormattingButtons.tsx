import React from 'react';
import { TextFormattingButtonsProps } from '../../hooks/types';
import {
  FaBold,
  FaItalic,
  FaQuoteRight,
  FaUnderline,
  FaStrikethrough,
  FaSuperscript,
  FaSubscript,
} from 'react-icons/fa';

const TextFormattingButtons: React.FC<TextFormattingButtonsProps> = ({ textareaId }) => {
  const doAddTags = (startTag: string, endTag: string) => {
    const textarea = document.getElementById(textareaId) as HTMLTextAreaElement;

    if (textarea) {
      const { selectionStart, selectionEnd, value } = textarea;
      
      if (selectionStart !== null && selectionEnd !== null) {
        const beforeSelection = value.substring(0, selectionStart);
        const selectedText = value.substring(selectionStart, selectionEnd);
        const afterSelection = value.substring(selectionEnd);

        const updatedText = `${beforeSelection}${startTag}${selectedText}${endTag}${afterSelection}`;
        textarea.value = updatedText;

        const newCursorPosition = selectionEnd + startTag.length + endTag.length;
        textarea.setSelectionRange(newCursorPosition, newCursorPosition);
      } else {
        const cursorPosition = selectionStart ?? value.length;
        const updatedText = `${value.substring(0, cursorPosition)}${startTag}${endTag}${value.substring(cursorPosition)}`;
        textarea.value = updatedText;
        const newCursorPosition = cursorPosition + startTag.length;
        textarea.setSelectionRange(newCursorPosition, newCursorPosition);
      }
      textarea.focus();
    }
  };

  return (
    <div className="flex flex-wrap space-x-1 mb-4 text-formatting-buttons justify-between">
      <button
        className="postform__mu postform__mu_type_b btn btn-outline btn-xs"
        type="button"
        onClick={() => doAddTags("[b]", "[/b]")}
      >
        <FaBold />
      </button>
      <button
        className="postform__mu postform__mu_type_i btn btn-outline btn-xs"
        type="button"
        onClick={() => doAddTags("[i]", "[/i]")}
      >
        <FaItalic />
      </button>
      <button
        className="postform__mu postform__mu_type_q btn btn-outline btn-xs"
        type="button"
        onClick={() => doAddTags("[quote]", "[/quote]")}
      >
        <FaQuoteRight />
      </button>
      <button
        className="postform__mu postform__mu_type_u btn btn-outline btn-xs"
        type="button"
        onClick={() => doAddTags("[u]", "[/u]")}
      >
        <FaUnderline />
      </button>
      <button
        className="postform__mu postform__mu_type_s btn btn-outline btn-xs"
        type="button"
        onClick={() => doAddTags("[s]", "[/s]")}
      >
        <FaStrikethrough />
      </button>
      <button
        className="postform__mu btn btn-outline btn-xs"
        type="button"
        onClick={() => doAddTags("[sup]", "[/sup]")}
      >
        <FaSuperscript />
      </button>
      <button
        className="postform__mu btn btn-outline btn-xs"
        type="button"
        onClick={() => doAddTags("[sub]", "[/sub]")}
      >
        <FaSubscript />
      </button>
    </div>
  );
};

export default TextFormattingButtons;


