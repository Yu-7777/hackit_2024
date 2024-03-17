import React from "react";
import { Radio, RadioGroup } from "@chakra-ui/react";

const ChooseBox = ({ children }: { children: any }) => {
  return (
    <div className="h-12 border border-gray-200 flex items-center justify-between px-4">
      <span>{children}</span>
      <span>
        <Radio className="rounded-lg focus:ring-red-600" name="1" />
      </span>
    </div>
  );
};

export default ChooseBox;
