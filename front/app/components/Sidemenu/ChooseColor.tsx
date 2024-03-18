import { useDisclosure } from "@chakra-ui/react";
import React from "react";
import GoalMoneySideMenu from "./GoalMoneySideMenu";
import ChooseBox from "../ChooseBox";

const ChooseColor = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef<HTMLButtonElement>(null);

  return (
    <>
      <ChooseBox>レッド</ChooseBox>
      <ChooseBox>ブルー</ChooseBox>
      <ChooseBox>イエロー</ChooseBox>
      <ChooseBox>グリーン</ChooseBox>
    </>
  );
};

export default ChooseColor;