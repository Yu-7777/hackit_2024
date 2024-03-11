import React from 'react';

const IconButton = ({ icon: Icon, onClick }) => {
  return (
    <button
      className="w-12 h-12 rounded-full hover:bg-gray-200 flex items-center justify-center"
      onClick={onClick}
    >
      <Icon boxSize={6} />
    </button>
  );
};

export default IconButton;
