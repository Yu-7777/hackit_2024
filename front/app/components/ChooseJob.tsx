import { Radio, RadioGroup, Stack, useDisclosure } from "@chakra-ui/react";
import React from "react";

const ChooseJob = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef<HTMLButtonElement>(null);
  const [value, setValue] = React.useState('red')

  return (
    <>
      <RadioGroup onChange={setValue} value={value} name="chooseColor">
        <Stack>
          <Radio value="1">極楽湯</Radio>
          <Radio value="2">フィットアカデミー</Radio>
        </Stack>
      </RadioGroup>
    </>
  );
};

export default ChooseJob;