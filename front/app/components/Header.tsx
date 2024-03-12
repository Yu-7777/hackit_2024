"use client";

import Image from "next/image";
import React from "react";
import {
  HamburgerIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  CalendarIcon,
} from "@chakra-ui/icons";
import { BsGem, BsGraphUp, BsPersonFill } from "react-icons/bs";

import GrayRoundButton from "./GrayRoundButton";
import GraySquareButton from "./GraySquareButton";

const Header = () => {
  const handleButtonClick = () => {
    // ボタンがクリックされた時の処理
    console.log("ボタンがクリックされました");
  };

  return (
    <header className="h-16 w-full flex items-center px-4 border border-gray-200">
      <div className="order-first">
        <GrayRoundButton icon={HamburgerIcon} onClick={handleButtonClick} />
      </div>
      <div className="flex items-center ml-4">
        <Image src="/Q.png" alt="Q" width={32} height={32} />
        <p className="text-3xl ml-4">Q-ON!</p>
        <button className="w-16 h-12 rounded-lg border border-gray-300 hover:bg-gray-200 ml-8 mr-8 flex items-center justify-center text-base">
          今日
        </button>
      </div>
      <GrayRoundButton icon={ChevronLeftIcon} onClick={handleButtonClick} />
      <GrayRoundButton icon={ChevronRightIcon} onClick={handleButtonClick} />
      <p className="text-lg ml-8">2024年3月</p>
      <div className="flex justify-end">
        <GraySquareButton
          icon={CalendarIcon}
          onClick={handleButtonClick}
          borderRadius="rounded-l-lg"
        ></GraySquareButton>
        <GraySquareButton
          icon={BsGem}
          onClick={handleButtonClick}
        ></GraySquareButton>
        <GraySquareButton
          icon={BsGraphUp}
          onClick={handleButtonClick}
          borderRadius="rounded-r-lg"
        ></GraySquareButton>
        <GrayRoundButton icon={BsPersonFill} onClick={handleButtonClick} />
      </div>
    </header>
  );
};

export default Header;
