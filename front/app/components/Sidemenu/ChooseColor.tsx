import { Radio, RadioGroup, Stack, useDisclosure } from "@chakra-ui/react";
import React from "react";
import GoalMoneySideMenu from "./GoalMoneySideMenu";
import ChooseBox from "../ChooseBox";

const ChooseColor = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef<HTMLButtonElement>(null);
  const [value, setValue] = React.useState('red')

  return (
    <>
      <RadioGroup onChange={setValue} value={value} name="chooseColor">
        <Stack>
          <Radio value="red">レッド</Radio>
          <Radio value="blue">ブルー</Radio>
          <Radio value="green">グリーン</Radio>
          <Radio value="yellow">イエロー</Radio>
        </Stack>
      </RadioGroup>
    </>
  );
};

export default ChooseColor;