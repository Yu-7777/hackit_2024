import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  ChakraProvider,
} from "@chakra-ui/react";
import { AddIcon, ChevronDownIcon } from "@chakra-ui/icons";
import SalaryList from "./SalaryList";
import Circular from "./Circular";

const SideMenu = () => {
  return (
    <>
      <ChakraProvider>
        <div
          className="w-72 h-screen border border-gray-200 z-10 absolute"
          style={{ background: "#fff" }}
        >
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
              ml={5}
              mt={5}
            >
              <AddIcon /> 作成
            </MenuButton>
            <MenuList>
              <MenuItem>バイト先の追加</MenuItem>
              <MenuItem>シフトの追加</MenuItem>
              <MenuItem>目標金額の変更</MenuItem>
              <MenuItem>期待値の変更</MenuItem>
            </MenuList>
          </Menu>
          <SalaryList></SalaryList>
          <div className="ml-4 mt-8 text-2xl">目標までの達成度</div>
          <Circular
            size="250px"
            progressSize="4xl"
            goalSize="base"
            achievementSize="2xl"
          ></Circular>
        </div>
      </ChakraProvider>
    </>
  );
};

export default SideMenu;
