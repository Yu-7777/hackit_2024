import { Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerContent, DrawerCloseButton, Button, useDisclosure } from "@chakra-ui/react";
import React from "react";
import InputBox from "./inputBox";
import SaveButton from "./SavaButton";
import SelectBox from "./SelectBox";

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

          <DrawerBody>
            <SelectBox inputName={"バイト先"} round={""}/>
            <InputBox inputName={"タイトル"} round={""}/>
            <InputBox inputName={"開始時間"} round={""}/>
            <InputBox inputName={"終了時間"} round={""}/>
            <InputBox inputName={"休憩時間"} round={""}/>
            <InputBox inputName={"給料"} round={""}/>
            <InputBox inputName={"個別設定"} round={""}/>
            <InputBox inputName={"メモ"} round={""}/>
          </DrawerBody>

          <DrawerFooter>
            <SaveButton />
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Sidepeak;
