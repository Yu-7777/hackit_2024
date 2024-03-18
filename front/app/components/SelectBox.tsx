import { ChevronRightIcon } from "@chakra-ui/icons";
import { Button, useDisclosure } from "@chakra-ui/react";
import React from "react";

const SelectBox = ({
  round,
  selectName,
  selectedName,
  children,
}: {
  round: any;
  selectName: any;
  selectedName: any;
  children: any;
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef<HTMLButtonElement>(null);

  return (
    <div
      className={`h-12 border border-gray-200 flex items-center justify-between px-4 ${round} `}
    >
      <span className="w-20">{selectName}</span>
      <Button
        rightIcon={<ChevronRightIcon />}
        colorScheme="white"
        textColor="black"
        fontWeight="nomal"
        ref={btnRef}
        onClick={onOpen}
      >
        {selectedName}
      </Button>
      {children}
    </div>
  );
};

export default SelectBox;
