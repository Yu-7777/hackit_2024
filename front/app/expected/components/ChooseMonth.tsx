import React from "react";

const ChooseMonth = ({data}) => {
  const {beforeMonth, nowMonth, nextMont} = data // dataに値を格納
  return (
    <div className="my-4 flex justify-around w-80 h-12 items-end">
      <div className="text-3xl text-slate-400">{beforeMonth}</div>
      <div className="text-4xl">{nowMonth}</div>
      <div className="text-3xl text-slate-400">{nextMont}</div>
    </div>
  );
};

export default ChooseMonth;
