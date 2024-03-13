import React from "react";
import { Menu, MenuButton, MenuList, MenuItem, Button, background } from "@chakra-ui/react";
import CreateButton from "./CreateButton";

const SideMenu = () => {
  return (
    <div className="w-72 h-screen border border-gray-200 z-10 absolute" style={{background: "#fff"}}>
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
