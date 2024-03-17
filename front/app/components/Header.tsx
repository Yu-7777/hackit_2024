"use client";

import Image from "next/image";
import {
  HamburgerIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  SettingsIcon,
  ChevronDownIcon,
} from "@chakra-ui/icons";
import { BsCalendar, BsGem, BsGraphUp } from "react-icons/bs";

import GrayRoundButton from "./GrayRoundButton";
import GraySquareButton from "./GraySquareButton";
import { Button, Menu, MenuButton, MenuItem, MenuList, useDisclosure, useToast } from "@chakra-ui/react";
import React from "react";
import { useRouter } from "next/navigation";

export const Header = ({ isSideMenuOpen, toggleSideMenu }: {isSideMenuOpen: any, toggleSideMenu: any}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const toast = useToast();
  const router = useRouter();

  /* ユーザのログアウト処理を実施する関数 */
  const userLogout = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/api/v1/auth/sign_out`, {
      method: "DELETE",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("access-token")}`,
      },
    });

    if (response.ok) {
      localStorage.removeItem("access-token");

      toast({
        title: "ログアウトしました",
        status: "success",
        duration: 3000,
        isClosable: true,
      });

      router.push("/login");
    } else {
      const data = await response.json();
      console.log(data);
      const errorMessages = data.errors;

      errorMessages.forEach((message: string) => {
        toast({
          title: "ログアウトエラー",
          description: message,
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      });
    }
  }

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
        <GraySquareButton onClick={handleButtonClick}>
          <BsGem />
        </GraySquareButton>
        <GraySquareButton
          onClick={handleButtonClick}
          borderRadius="rounded-r-lg"
        >
          <BsGraphUp />
        </GraySquareButton>
        <div className="ml-8">
          <Menu isLazy>
            <MenuButton className="w-12 h-12 rounded-full hover:bg-gray-200">
              <SettingsIcon boxSize={6} />
            </MenuButton>
            <MenuList>
              <MenuItem as="a" href="/user/setting">設定</MenuItem>
              <MenuItem as="button" onClick={userLogout}>ログアウト</MenuItem>
            </MenuList>
          </Menu>
        </div>
      </div>
    </header>
  );
};

export default Header;
