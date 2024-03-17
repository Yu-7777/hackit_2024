import { Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerContent, DrawerCloseButton, Button, useDisclosure } from "@chakra-ui/react";
import React from "react";
import InputBox from "./inputBox";

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
            <InputBox inputName={"バイト先"} round={undefined}/>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Sidepeak;
