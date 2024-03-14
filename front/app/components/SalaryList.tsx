import React from "react";

import { BsCurrencyYen, BsCoin, BsPiggyBank } from "react-icons/bs";
import Icons from "./Icons";

const SalaryList = () => {
  return (
    <>
      <div className="ml-4 mt-8 text-2xl">給料一覧</div>
      <Icons>
        <BsCurrencyYen />
      </Icons>
      <Icons>
        <BsCoin />
      </Icons>
      <Icons>
        <BsPiggyBank />
      </Icons>
    </>
  );
};

export default SalaryList;
