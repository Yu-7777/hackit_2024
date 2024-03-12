import React from "react";

const GrayRoundButton = ({ icon: Icon, onClick }) => {
  return (
    <button
      className="w-12 h-12 rounded-full hover:bg-gray-200 flex items-center justify-center"
      onClick={onClick}
    >
      <Icon boxSize={20} />
    </button>
  );
};

export default GrayRoundButton;
