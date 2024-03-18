import React from "react";
import { Radio, RadioGroup } from "@chakra-ui/react";

const ChooseBox = ({ value, children }: { value: any, children: any }) => {
  return (
    <div className="h-12 border border-gray-200 flex items-center justify-between px-4">
      <span>{children}</span>
      <span>
        <Radio className="rounded-lg focus:ring-green-600" name={value} />
      </span>
    </div>
  );
};

export default ChooseBox;
