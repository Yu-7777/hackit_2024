import { Button, useDisclosure } from "@chakra-ui/react";
import React from "react";
import InputBox from "../inputBox";
import GoalMoneySideMenu from "./GoalMoneySideMenu";
import SelectBox from "../SelectBox";
import ChooseColor from "./ChooseColor";

const AddJob = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef<HTMLButtonElement>(null);

  return (
    <>
      <Button
        width="200px"
        colorScheme="white"
        textColor="black"
        fontWeight="normal"
        ref={btnRef}
        onClick={onOpen}
      >
        バイト先の追加
      </Button>

      <GoalMoneySideMenu
        data={{ isOpen, onOpen, onClose, btnRef }}
        headerName={"バイト先の追加"}
        saveButtonName={"保存"}
      >
        <InputBox round={""} inputName={"バイト先"}></InputBox>
        <SelectBox round={""} selectName={"掲示色"} selectedName={"レッド"}>
          <ChooseColor />
        </SelectBox>
        <InputBox round={""} inputName={"締日"}></InputBox>
        <SelectBox round={""} selectName={"給料日"} selectedName={"翌月20日"}>
          a
        </SelectBox>
        <SelectBox round={""} selectName={"全期間"} selectedName={"時給1150円"}>
          a
        </SelectBox>
      </GoalMoneySideMenu>
    </>
  );
};

export default AddJob;
