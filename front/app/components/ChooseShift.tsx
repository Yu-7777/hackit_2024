import React from "react";
import SelectBox from "./SelectBox";
import GoalMoneySideMenu from "./Sidemenu/GoalMoneySideMenu";
import InputBox from "./inputBox";
import { Button, useDisclosure } from "@chakra-ui/react";
import ChooseJob from "./ChooseJob";

const ChooseShift = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef<HTMLButtonElement>(null);
  return (
    <>
      <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
        button
      </Button>
      <GoalMoneySideMenu
        data={{ isOpen, onOpen, onClose, btnRef }}
        headerName={"シフトの選択"}
        saveButtonName={"保存"}
      >
        <SelectBox round={""} selectName={"バイト先"} selectedName={"極楽湯"}>
          <ChooseJob />
        </SelectBox>
        <InputBox round={""} inputName={"タイトル"}></InputBox>
        <InputBox round={""} inputName={"開始日時"}></InputBox>
        <InputBox round={""} inputName={"終了日時"}></InputBox>
        <InputBox round={""} inputName={"休憩時間"}></InputBox>
        <InputBox round={""} inputName={"給料"}></InputBox>
        <InputBox round={""} inputName={"個別設定"}></InputBox>
        <InputBox round={""} inputName={"メモ"}></InputBox>
      </GoalMoneySideMenu>
    </>
  );
};

export default ChooseShift;
