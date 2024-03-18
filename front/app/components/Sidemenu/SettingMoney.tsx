import { Button, useDisclosure } from "@chakra-ui/react";
import React from "react";
import InputBox from "../inputBox";
import Sidepeak from "../Sidepeak";
import GoalMoneySideMenu from "./GoalMoneySideMenu";

const SettingMoney = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef<HTMLButtonElement>(null);

  return (
    <>
      <Button width="200px" colorScheme="white" textColor="black" fontWeight="nomal" ref={btnRef} onClick={onOpen}>
        目標金額の変更
      </Button>

      <GoalMoneySideMenu
        data={{ isOpen, onOpen, onClose, btnRef }}
        headerName={"目標の変更"}
        saveButtonName={"保存"}
      >
        <InputBox round={""} inputName={"目標"}></InputBox>
        <InputBox round={""} inputName={"今日まで"}></InputBox>
        <InputBox round={""} inputName={"見込"}></InputBox>
      </GoalMoneySideMenu>
    </>
  );
};

export default SettingMoney;
