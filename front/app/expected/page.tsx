"use client";

import React, { useEffect, useState } from "react";
import Circular from "../components/Circular";
import Header from "../components/Header";
import SideMenu from "../components/Sidemenu";

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
        <div className="mt-4 flex items-end">
          <div className="text-4xl">今月は　</div>
          <div className="text-6xl text-blue-600">98765</div>
          <div className="text-4xl">　稼いでいます！</div>
        </div>
        <div className="mt-4 flex items-end">
          <div className="text-4xl">目標金額まであと　</div>
          <div className="text-6xl text-blue-600">98765</div>
          <div className="text-4xl">　円！</div>
        </div>
        <div className="mt-8 flex">
          <button className="w-16 h-8 rounded-l-lg border border-gray-300 hover:bg-gray-200 flex items-center justify-center text-base">
            年
          </button>
          <button className="w-16 h-8 border rounded-r-lg border-gray-300 hover:bg-gray-200 flex items-center justify-center text-base">
            月
          </button>
        </div>
        <div className="my-4 flex justify-around w-80 h-12 items-end">
          <div className="text-3xl">4月</div>
          <div className="text-4xl">5月</div>
          <div className="text-3xl">6月</div>
        </div>
        <Circular
          mtsize = "4"
        ></Circular>
      </div>
    </>
  );
};

export default Expected;
