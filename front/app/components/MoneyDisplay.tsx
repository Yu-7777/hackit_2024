import React from "react";

const MoneyDisplay = ({ titleName, amountMoney }) => {
  return (
    <div className="ml-4 flex items-center rounded-md w-48 h-8 border border-gray-300 justify-between">
      <div className="ml-4">{titleName}</div>
      <div className="mr-4">{amountMoney}</div>
    </div>
  );
};

export default MoneyDisplay;
