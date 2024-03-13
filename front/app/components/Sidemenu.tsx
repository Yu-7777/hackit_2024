import React from "react";
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import CreateButton from "./CreateButton";
import { ChevronDownIcon } from "@chakra-ui/icons";

const SideMenu = () => {
  return (
    <div className="flex flex-col w-72 height: 100% border border-gray-200">
      <Menu>
  <MenuButton as={CreateButton} >
    Actions
  </MenuButton>
  <MenuList>
    <MenuItem>Download</MenuItem>
    <MenuItem>Create a Copy</MenuItem>
    <MenuItem>Mark as Draft</MenuItem>
    <MenuItem>Delete</MenuItem>
    <MenuItem>Attend a Workshop</MenuItem>
  </MenuList>
</Menu>
    </div>
  );
};

export default SideMenu;
