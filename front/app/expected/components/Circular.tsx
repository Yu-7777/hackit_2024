import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";

const Circular = () => {
  return (
    <CircularProgress value={40} color="green.400" size="350px" thickness="8px">
      <CircularProgressLabel>
        <div className="text-xl">目標金額まで</div>
        <div className="text-6xl">80%</div>
        <div className="text-4xl mt-4">達成</div>
      </CircularProgressLabel>
    </CircularProgress>
  );
};

export default Circular;
