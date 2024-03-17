import { Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerContent, DrawerCloseButton, Button, useDisclosure } from "@chakra-ui/react";
import React from "react";
import InputBox from "./inputBox";
import ChooseBox from "./ChooseBox";
import SaveButton from "./SavaButton";

const Sidepeak = ({ headername = "シフトの追加" }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef<HTMLButtonElement>(null);

  return (
    <>
      <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
        Open
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerContent>
          <DrawerHeader className="flex justify-between items-center bg-gray-200">
            <DrawerCloseButton />
            {headername}
          </DrawerHeader>
          <ChooseBox titleName={"ブルー"} num={"1"} ></ChooseBox>
          <ChooseBox titleName={"ブルー"} num={"2"} ></ChooseBox>
          <ChooseBox titleName={"ブルー"} num={"3"} ></ChooseBox>
          <DrawerFooter>
            <SaveButton />
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Sidepeak;
