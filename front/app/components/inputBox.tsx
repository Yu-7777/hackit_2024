import React from "react";

const InputBox = ({round = "rounded-none", inputName, value, setValue, formName}: { round: any, inputName: any, value: any, setValue: any, formName: any}) => {
  return (
    <div
      className={`h-12 border border-gray-200 flex items-center justify-between px-4 ${round} `}
    >
      <span className="w-20">{inputName}</span>
      <input
        type="text"
        className="w-32 h-full rounded-lg px-2 focus:outline-none"
        value={value}
        name={formName}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default InputBox;
