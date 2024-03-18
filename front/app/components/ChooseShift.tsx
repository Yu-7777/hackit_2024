import React from "react";
import SelectBox from "./SelectBox";
import GoalMoneySideMenu from "./Sidemenu/GoalMoneySideMenu";
import InputBox from "./inputBox";
import { Box, Button, Hide, Select, Text, useDisclosure } from "@chakra-ui/react";

const ChooseShift = ({shiftData, setDeletedShiftId}: {shiftData: any, setDeletedShiftId: any}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef<HTMLButtonElement>(null);

  const [title, setTitle] = React.useState(shiftData.shift.shift_title);
  const [start, setStart] = React.useState(shiftData.shift.work_start);
  const [end, setEnd] = React.useState(shiftData.shift.work_end);
  const [rest, setRest] = React.useState(String(shiftData.shift.rest_time));
  const [wage, setWage] = React.useState(0);
  const [memo, setMemo] = React.useState(shiftData.shift.shift_memo);

  const [partTimeList, setPartTimeList] = React.useState<{value: string, content: string}[]>([]);
  const [partTime, setPartTime] = React.useState("");

  const fetchPartTime = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/part_times`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("access-token")}`,
      },
    });

    const data = await res.json();

    const convertData = data.map((data: any) => {
      return {
        value: String(data.id),
        content: data.name,
      };
    });

    setPartTimeList(convertData);
  }

  React.useEffect(() => {
    setPartTime(String(shiftData.part_time.id));

    if (start === "" || end === "" || Number(rest) === 0) return;

    // startとendをdate型に変更
    const start_date = new Date(start);
    const end_date = new Date(end);

    const diff = end_date.getTime() - start_date.getTime();
    
    const diffHour = diff / (1000 * 60 * 60);

    const restHour = Number(rest) / 60;

    const workHour = diffHour - restHour;

    setWage(shiftData.part_time.hourly_wage * workHour);

    onOpen();
  }, [shiftData, onOpen, start, end, rest]);

  React.useEffect(() => {
    fetchPartTime();
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    fetch(`${process.env.NEXT_PUBLIC_API_HOST}/shifts/${shiftData.shift.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("access-token")}`,
      },
      body: JSON.stringify({
        "shift": {
          "part_time_id": partTime,
          "shift_title": title,
          "work_start": start,
          "work_end": end,
          "rest_time": Number(rest),
          "shift_memo": memo,
        }
      }),
    });

    setDeletedShiftId(shiftData.shift.id);

    onClose();
  };

  const deleteSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/shifts/${shiftData.shift.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("access-token")}`,
      },
    });

    setDeletedShiftId(shiftData.shift.id);

    onClose();
  }

  return (
    <>
      <GoalMoneySideMenu
        data={{ isOpen, onOpen, onClose, btnRef }}
        headerName={"シフトの選択"}
      >
        <form onSubmit={handleSubmit}>
          <SelectBox round={""} title="バイト先名" name="partTime" selectList={partTimeList} defaultSelectValue={null} value={partTime} setValue={setPartTime} />
          <InputBox round={""} inputName="タイトル" value={title} setValue={setTitle} formName="title"></InputBox>
          <InputBox round={""} inputName="開始日時" value={start} setValue={setStart} formName="start"></InputBox>
          <InputBox round={""} inputName="終了日時" value={end} setValue={setEnd} formName="end"></InputBox>
          <InputBox round={""} inputName="休憩時間" value={rest} setValue={setRest} formName="rest"></InputBox>
          <InputBox round={""} inputName="メモ" value={memo} setValue={setMemo} formName="memo"></InputBox>

          <Box textAlign="center">
            <Button mt={4} colorScheme="teal" type="submit">
              保存
            </Button>
          </Box>
        </form>

        <Text textAlign="center" fontSize="2xl" mt={6}>
          給料: {wage}円
        </Text>

        <form onSubmit={deleteSubmit}>
          <Box textAlign="center">
            <Button mt={4} colorScheme="red" type="submit">
              削除
            </Button>
          </Box>
        </form>
      </GoalMoneySideMenu>
    </>
  );
};

export default ChooseShift;
