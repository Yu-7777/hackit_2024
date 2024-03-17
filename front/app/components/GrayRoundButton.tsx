import React from "react";

const GrayRoundButton = ({ icon: Icon, onClick } : { icon : any, onClick : any}) => {
  return (
    <button
      className="w-12 h-12 rounded-full hover:bg-gray-200 flex items-center justify-center"
      onClick={onClick}
    >
      <Icon boxSize={8} />
    </button>
  );
};

export default GrayRoundButton;
