import { useDisclosure } from "@chakra-ui/react";
import React from "react";
import GoalMoneySideMenu from "./GoalMoneySideMenu";
import ChooseBox from "../ChooseBox";

const ChooseColor = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef<HTMLButtonElement>(null);

  return (
    <>
      <GoalMoneySideMenu
        data={{ isOpen, onOpen, onClose, btnRef }}
        headerName={"掲示色の選択"}
        saveButtonName={"保存"}
      >
        <ChooseBox>レッド</ChooseBox>
        <ChooseBox>ブルー</ChooseBox>
        <ChooseBox>イエロー</ChooseBox>
        <ChooseBox>グリーン</ChooseBox>
      </GoalMoneySideMenu>
    </>
  );
};

export default ChooseColor;