import React from "react";
import { Radio, RadioGroup, Stack } from "@chakra-ui/react";

const ChooseBox = ({ titleName, num }: { titleName: any, num : any }) => {
  const [value, setValue] = React.useState("1");
  return (
    <div className="h-12 border border-gray-200 flex items-center justify-between px-4">
      <span>{titleName}</span>
      <span>
        <RadioGroup onChange={setValue} value={value}>
          <Stack direction="row">
            <Radio
              value={num}
              size="lg"
              colorScheme="green"
            />
          </Stack>
        </RadioGroup>
      </span>
    </div>
  );
};

export default ChooseBox;
