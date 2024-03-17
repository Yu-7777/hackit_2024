import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import InputBox from "@/app/components/inputBox";
import SaveButton from "@/app/components/SavaButton";

const Sidepeak = ({ headername = "情報の変更" }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef<HTMLButtonElement>(null);

  return (
    <>
      <Button ref={btnRef} colorScheme="teal" onClick={onOpen} >
        情報の変更
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
            <InputBox inputName={"タイトル"} round={"rounded-t-lg"} />
            <InputBox inputName={"１回の金額"} round={""} />
            <InputBox inputName={"回す回数"} round={""} />
            <InputBox inputName={"メモ"} round={"rounded-b-lg"} />
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
