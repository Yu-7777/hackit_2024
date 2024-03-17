import React from "react";

const MoneyDisplay = ({ data }) => {
  const {earnMoney, goleMoney} = data //dataに値を格納
  return (
    <>
      <div className="mt-4 flex items-end">
        <div className="text-4xl">今月は　</div>
        <div className="text-6xl text-blue-600">{earnMoney}</div>
        <div className="text-4xl">　稼いでいます！</div>
      </div>
      <div className="mt-4 flex items-end">
        <div className="text-4xl">目標金額まであと　</div>
        <div className="text-6xl text-blue-600">{goleMoney}</div>
        <div className="text-4xl">　円！</div>
      </div>
    </>
  );
};

export default MoneyDisplay;
