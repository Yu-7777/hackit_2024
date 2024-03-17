import React from "react";

const InputBox = ({
  round = "rounded-none", inputName}: { round: any, inputName: any}) => {
  return (
    <div
      className={`h-12 border border-gray-200 flex items-center justify-between px-4 ${round} `}
    >
      <span className="w-20">{inputName}</span>
      <input
        type="text"
        className="w-32 h-full rounded-lg px-2 focus:outline-none"
      />
    </div>
  );
};

export default InputBox;
