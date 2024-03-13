import React from "react";
import { Menu, MenuButton, MenuList, MenuItem, Button, ChakraProvider, Box, Text } from "@chakra-ui/react";
import { AddIcon, ChevronDownIcon } from "@chakra-ui/icons";

const SideMenu = () => {
  return (
    <ChakraProvider>
      <div className="w-72 h-screen border border-gray-200 z-10 absolute" style={{background: "#fff"}}>
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />} ml={5} mt={5}>
              <AddIcon /> 作成
          </MenuButton>
          <MenuList>
            <MenuItem>バイト先の追加</MenuItem>
            <MenuItem>シフトの追加</MenuItem>
            <MenuItem>目標金額の変更</MenuItem>
            <MenuItem>期待値の変更</MenuItem>
          </MenuList>
        </Menu>
      </div>
    </ChakraProvider>
  );
};

export default SideMenu;
