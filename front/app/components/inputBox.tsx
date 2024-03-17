import React from "react";

const InputBox = ({ round = "rounded-none", inputName }) => {
  return (
    <div
      className={`h-12 border border-gray-200 flex items-center justify-between px-4 ${round} `}
    >
      <span className="w-16">{inputName}</span>
      <input
        type="text"
        className="w-32 h-full border border-gray-300 rounded-lg px-2 focus:outline-none"
      />
    </div>
  );
};

export default InputBox;
