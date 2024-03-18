import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";

const SelectBox = ({ round, selectName, selectedName} : { round : any, selectName : any, selectedName : any }) => {
  
  return (
    <div
      className={`h-12 border border-gray-200 flex items-center justify-between px-4 ${round} `}
    >
      <span className="w-20">{selectName}</span>
      <Button
        rightIcon={<ArrowForwardIcon />}
        colorScheme="white"
        variant="outline"
      >
        {selectedName}
      </Button>
    </div>
  );
};

export default SelectBox;
