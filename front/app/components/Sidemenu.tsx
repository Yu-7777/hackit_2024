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
import Circular from "./Circular";
import MoneyList from "./MoneyList";
import SettingMoney from "./Sidemenu/SettingMoney";
import AddJob from "./Sidemenu/AddJob";

const SideMenu = () => {
  return (
    <>
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
              <MenuItem ><AddJob /></MenuItem>
              <MenuItem><SettingMoney /></MenuItem>
            </MenuList>
          </Menu>
          <MoneyList
            data={{
              goleMoney: 50000,
              todayMoney: 50000,
              prospectMoney: 50000,
            }}
          ></MoneyList>
          <div className="ml-4 mt-8 text-2xl">目標までの達成度</div>
          <Circular
            data={{
              size: "250px",
              progressSize: "4xl",
              goalSize: "base",
              achievementSize: "2xl",
              mtsize: "1",
              progress: 40,
            }}
          ></Circular>
        </div>
    </>
  );
};

export default SideMenu;
