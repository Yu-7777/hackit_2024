import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";

const Circular = ({ data }) => {
  const { size, progressSize, goalSize, achievementSize, mtsize, progress} = data; //dataに値を格納している

  return (
    <CircularProgress value={progress} color="green.400" size={size} thickness="8px">
      <CircularProgressLabel>
        <div className={`text-${goalSize}`}>目標金額まで</div>
        <div className={`text-${progressSize}`}>{progress}%</div>
        <div className={`text-${achievementSize} mt-${mtsize}`}>達成</div>
      </CircularProgressLabel>
    </CircularProgress>
  );
};

export default Circular;
