import React from "react";
import { BtnSendProps } from "../../hooks/types";

const BtnSend: React.FC<BtnSendProps> = ({ onSend }) => { 
    return (
        <div>
            <button
                className="btn btn-primary btn-wide font-press-start 
                uppercase tracking-wide rounded-md shadow-md"
                onClick={onSend}
            >
                send
            </button>
        </div>
    );
};

export default BtnSend;

