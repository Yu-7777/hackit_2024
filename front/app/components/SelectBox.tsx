import { ChevronRightIcon } from "@chakra-ui/icons";
import { Button, Radio, RadioGroup, Stack, useDisclosure } from "@chakra-ui/react";
import React from "react";
import GoalMoneySideMenu from "./Sidemenu/GoalMoneySideMenu";

type selectBoxData = {
  content: string;
  value: string;
};

const SelectBox = ({
  round,
  title,
  name,
  selectList,
  defaultSelectValue = null,
  value,
  setValue
}: {
  round: any;
  title: string;
  name: string;
  selectList: selectBoxData[];
  defaultSelectValue: selectBoxData | null;
  value: any;
  setValue: any;
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef<HTMLButtonElement>(null);

  return (
    <div
      className={`h-12 border border-gray-200 flex items-center justify-between px-4 ${round} `}
    >
      <span className="w-20">{title}</span>
      <Button
        rightIcon={<ChevronRightIcon />}
        colorScheme="white"
        textColor="black"
        fontWeight="normal"
        ref={btnRef}
        onClick={onOpen}
      >
        {value === "" ? (defaultSelectValue ? defaultSelectValue.content : selectList[0].content) : selectList.find((select) => select.value === value)?.content }
      </Button>
      <GoalMoneySideMenu
        data={{ isOpen, onOpen, onClose, btnRef }}
        headerName={title}
      >
        <RadioGroup defaultValue={value === "" ? (defaultSelectValue ? defaultSelectValue.value : selectList[0].value) : selectList.find((select) => select.value === value)?.value } onChange={(e) => setValue(e)}>
          <Stack>
            {selectList.map((select, index) => {
              return (
                <Radio value={select.value} key={index} name={name}>
                  {select.content}
                </Radio>
              );
            })}
          </Stack>
        </RadioGroup>
      </GoalMoneySideMenu>
    </div>
  );
};

export default SelectBox;
