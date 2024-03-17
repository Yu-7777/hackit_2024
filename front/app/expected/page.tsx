"use client";

import React, { useEffect, useState } from "react";
import Circular from "../components/Circular";
import Header from "../components/Header";
import SideMenu from "../components/Sidemenu";
import MoneyDisplay from "./components/MoneyDisplay";
import ChooseMonth from "./components/ChooseMonth";

const Expected = () => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  const toggleSideMenu = () => {
    setIsSideMenuOpen(!isSideMenuOpen);
  };

  useEffect(() => {
    setIsSideMenuOpen(false);
  }, []);

  return (
    <>
      <Header isSideMenuOpen={isSideMenuOpen} toggleSideMenu={toggleSideMenu} />
      {isSideMenuOpen && <SideMenu />}
      <div className="flex flex-col items-center justify-center">
        <MoneyDisplay data={{ earnMoney: 54321, goleMoney: 54321 }} />
        <div className="mt-8 flex">
          <button className="w-16 h-8 rounded-l-lg border border-gray-300 hover:bg-gray-200 flex items-center justify-center text-base">
            年
          </button>
          <button className="w-16 h-8 border rounded-r-lg border-gray-300 hover:bg-gray-200 flex items-center justify-center text-base">
            月
          </button>
        </div>
        <ChooseMonth
          data={{ beforeMonth: "4月", nowMonth: "5月", nextMont: "6月" }}
        />
        <Circular
          data={{
            size: "350px",
            progressSize: "6xl",
            goalSize: "base",
            achievementSize: "4xl",
            mtsize: "4",
            progress: 40,
          }}
        />
      </div>
    </>
  );
};

export default Expected;
