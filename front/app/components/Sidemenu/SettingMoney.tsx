import { Button, useDisclosure } from "@chakra-ui/react";
import React from "react";
import InputBox from "../inputBox";
import Sidepeak from "../Sidepeak";

const SettingMoney = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef<HTMLButtonElement>(null);

  return (
    <>
      <Sidepeak
        openResource={
          <Button width="200px" colorScheme="white" textColor="black" ref={btnRef} onClick={onOpen}>
            目標金額の変更
          </Button>
        }
        headerName={"目標の変更"}
      >
        <InputBox round={""} inputName={"目標"}></InputBox>
        <InputBox round={""} inputName={"今日まで"}></InputBox>
        <InputBox round={""} inputName={"見込"}></InputBox>
      </Sidepeak>
    </>
  );
};

export default SettingMoney;
