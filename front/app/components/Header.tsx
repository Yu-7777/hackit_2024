"use client";

import Image from "next/image";
import React from "react";
import {
  HamburgerIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
} from "@chakra-ui/icons";

import IconButton from "./Button";

const Header = () => {
  const handleButtonClick = () => {
    // ボタンがクリックされた時の処理
    console.log("ボタンがクリックされました");
  };

  return (
    <header className="h-16 w-full flex items-center px-4">
      <div className="order-first">
        <IconButton icon={HamburgerIcon} onClick={handleButtonClick} />
      </div>
      <div className="flex items-center ml-4">
        <Image src="/Q.png" alt="Q" width={32} height={32} />
        <p className="text-3xl ml-4">Q-ON!</p>
        <button className="w-16 h-12 rounded-lg border border-gray-300 hover:bg-gray-200 ml-8 mr-8 flex items-center justify-center text-base">
          今日
        </button>
      </div>
      <IconButton icon={ArrowLeftIcon} onClick={handleButtonClick} />
      <IconButton icon={ArrowRightIcon} onClick={handleButtonClick} />
      <p className="text-lg ml-8">2024年3月</p>
    </header>
  );
};

export default Header;
