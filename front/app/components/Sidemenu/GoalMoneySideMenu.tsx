import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import React from "react";
import SaveButton from "../SavaButton";

type Props = {
  data: {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
    btnRef: React.RefObject<HTMLButtonElement>;
  };
  headerName: string;
  saveButtonName: string;
  children: React.ReactNode;
};

const GoalMoneySideMenu: React.FC<Props> = ({
  data: { isOpen, onOpen, onClose, btnRef },
  headerName,
  saveButtonName,
  children,
}) => {
  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerContent>
          <DrawerHeader className="flex justify-between items-center bg-gray-200">
            <DrawerCloseButton />
            {headerName}
          </DrawerHeader>

          <DrawerBody>{children}</DrawerBody>

          <DrawerFooter>
            <SaveButton buttonName={saveButtonName} />
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default GoalMoneySideMenu;
