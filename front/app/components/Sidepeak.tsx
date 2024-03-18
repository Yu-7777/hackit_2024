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
import React, { ReactElement } from "react";
import SaveButton from "./SavaButton";

type Props = {
  openResource: ReactElement;
  headerName: string;
  children: React.ReactNode;
};

const Sidepeak: React.FC<Props> = ({ openResource, headerName, children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef<HTMLButtonElement>(null);

  return (
    <>
      {openResource}
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
            <SaveButton />
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Sidepeak;
