import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";

const Circular = ({ size = "350px", progressSize = "6xl", goalSize = "lg", achievementSize = "4xl", mtsize = "1", progress = 40 }) => {
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
