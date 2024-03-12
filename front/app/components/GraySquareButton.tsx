import React from "react";

const GraySquareButton = ({
  borderRadius = "rounded-none", icon: Icon, onClick }) => {
  return (
    <button
      className={`w-12 h-12 ${borderRadius} border border-gray-300 hover:bg-gray-200 flex items-center justify-center text-base`}
      onClick={onClick}
    >
      <Icon boxSize={20} />
    </button>
  );
};

export default GraySquareButton;
