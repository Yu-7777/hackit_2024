import { RadioGroup, Stack, useDisclosure } from "@chakra-ui/react";
import React from "react";
import InputBox from "../inputBox";

const PayValue = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef<HTMLButtonElement>(null);
  const [value, setValue] = React.useState('red')

  return (
    <>
      <RadioGroup onChange={setValue} value={value} name="chooseColor">
        <Stack>
          <InputBox round={""} inputName={"給料"}></InputBox>
        </Stack>
      </RadioGroup>
    </>
  );
};

export default PayValue;