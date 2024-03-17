import React from "react";

const SaveButton = ({ buttonName = "保存" }) => {
  return (
    <button className="w-60 h-12 rounded-md bg-red-600 flex items-center justify-center text-white text-base font-semibold">
      {buttonName}
    </button>
  );
};

export default SaveButton;
