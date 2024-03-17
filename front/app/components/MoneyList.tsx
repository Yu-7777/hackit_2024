import React from "react";

import { BsCurrencyYen, BsCoin, BsPiggyBank } from "react-icons/bs";
import MoneyDisplay from "./MoneyDisplay";
import MoneyIcons from "./MoneyIcons";

const MoneyList = ({ data } : { data : any}) => {
  const {goleMoney, todayMoney, prospectMoney} = data //dataに値を格納
  return (
    <>
      <div className="ml-4 mt-8 text-2xl">給料一覧</div>
      <div className="flex items-center">
        <MoneyIcons>
          <BsCurrencyYen />
        </MoneyIcons>
        <MoneyDisplay titleName={"目標："} amountMoney={goleMoney} />
      </div>
      <div className="flex items-center">
        <MoneyIcons>
          <BsCoin />
        </MoneyIcons>
        <MoneyDisplay titleName={"今日まで："} amountMoney={todayMoney} />
      </div>
      <div className="flex items-center">
        <MoneyIcons>
          <BsPiggyBank />
        </MoneyIcons>
        <MoneyDisplay titleName={"見込："} amountMoney={prospectMoney} />
      </div>
    </>
  );
};

export default MoneyList;
