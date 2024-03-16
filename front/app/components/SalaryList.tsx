import React from "react";

import { BsCurrencyYen, BsCoin, BsPiggyBank } from "react-icons/bs";
import Icons from "./Icons";

const SalaryList = () => {
  return (
    <>
      <div className="ml-4 mt-8 text-2xl">給料一覧</div>
      <div className="flex items-center">
        <Icons>
          <BsCurrencyYen />
        </Icons>
        <div className="ml-4 flex items-center rounded-md w-48 h-8 border border-gray-300 justify-between">
          <div className="ml-4">目標：</div>
          <div className="mr-4">50000</div>
        </div>
      </div>
      <div className="flex items-center">
        <Icons>
          <BsCoin />
        </Icons>
        <div className="ml-4 flex items-center rounded-md w-48 h-8 border border-gray-300 justify-between">
          <div className="ml-4">今日まで：</div>
          <div className="mr-4">50000</div>
        </div>
      </div>
      <div className="flex items-center">
        <Icons>
          <BsPiggyBank />
        </Icons>
        <div className="ml-4 flex items-center rounded-md w-48 h-8 border border-gray-300 justify-between">
          <div className="ml-4">見込：</div>
          <div className="mr-4">50000</div>
        </div>
      </div>
    </>
  );
};

export default SalaryList;
