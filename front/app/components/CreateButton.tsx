"use client";

import React from "react";
import { BsCaretDownFill } from "react-icons/bs";

const CreateButton = ({ onClick }: { onClick: any }) => {
  return (
    <button
      className={`mt-4 ml-4 shadow-lg shadow-gray-400/50 w-28 h-12 rounded-full border border-gray-300 hover:bg-gray-200 flex items-center justify-center text-base`}
      onClick={onClick}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <span
          style={{
            marginRight: "4px",
            marginLeft: "4px",
            verticalAlign: "middle",
          }}
        >
          作成
        </span>
        <BsCaretDownFill style={{ width: "16px", height: "16px" }} />
      </div>
    </button>
  );
};

export default CreateButton;
