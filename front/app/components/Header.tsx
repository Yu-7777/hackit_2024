"use client";

import Image from "next/image";
import {
  HamburgerIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  SettingsIcon,
} from "@chakra-ui/icons";
import { BsCalendar, BsGem, BsGraphUp } from "react-icons/bs";

import GrayRoundButton from "./GrayRoundButton";
import GraySquareButton from "./GraySquareButton";
import { useDisclosure } from "@chakra-ui/react";
import React from "react";

export const Header = ({ isSideMenuOpen, toggleSideMenu } : { isSideMenuOpen : any, toggleSideMenu : any}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  // Header をエクスポートする
  const handleButtonClick = () => {
    // ボタンがクリックされた時の処理
    console.log("ボタンがクリックされました");
  };

  return (
    <header className="h-16 w-full flex items-center px-4 border border-gray-200">
      <div className="order-first">
        <GrayRoundButton icon={HamburgerIcon} onClick={toggleSideMenu} />
      </div>
      <div className="flex items-center ml-4">
        <Image src="/Q.png" alt="Q" width={32} height={32} />
        <p className="text-3xl ml-4">Q-ON!</p>
      </div>
      <div className="md:ml-auto flex justify-center">
        <GraySquareButton
          onClick={handleButtonClick}
          borderRadius="rounded-l-lg"
        >
          <BsCalendar />
        </GraySquareButton>
        <GraySquareButton onClick={handleButtonClick} borderRadius="rounded-none">
          <BsGem />
        </GraySquareButton>
        <GraySquareButton
          onClick={handleButtonClick}
          borderRadius="rounded-r-lg"
        >
          <BsGraphUp />
        </GraySquareButton>
        <div className="ml-8">
          <GrayRoundButton icon={SettingsIcon} onClick={handleButtonClick} />
        </div>
      </div>
    </header>
  );
};

export default Header;
