import React from "react";

const GraySquareButton = ({ borderRadius, onClick, children } : { borderRadius: any, onClick: any, children: any }) => {
  return (
    <button
      className={`w-12 h-12 ${borderRadius} border border-gray-300 hover:bg-gray-200 flex items-center justify-center text-base`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default GraySquareButton;
