import { Button, Skeleton, useDisclosure, useToast } from "@chakra-ui/react";
import React from "react";
import GoalMoneySideMenu from "./GoalMoneySideMenu";
import InputBox from "../inputBox";
import SelectBox from "../SelectBox";
import { useRouter } from "next/navigation";

const AddShift = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef<HTMLButtonElement>(null);

  const router = useRouter()

  const [partTimeList, setPartTimeList] = React.useState<{value: string, content: string}[]>([]);
  const [partTime, setPartTime] = React.useState("");

  const [title, setTitle] = React.useState("");
  const [start, setStart] = React.useState("");
  const [end, setEnd] = React.useState("");
  const [rest, setRest] = React.useState("");
  const [memo, setMemo] = React.useState("");

  const [isLoaded, setIsLoaded] = React.useState(false);

  const toast = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (partTime === "" || title === "" || start === "" || end === "" || rest === "") {
      toast({
        title: "未入力の項目があります",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    if (start > end) {
      toast({
        title: "開始日時が終了日時より後になっています",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    if (isNaN(Number(rest))) {
      toast({
        title: "休憩時間は数字で入力してください",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/shifts`, {
      method: "POST",
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
          "rest_time": rest,
          "shift_memo": memo,
        }
      }),
    });

    window.location.reload();

    toast({
      title: "シフトを追加しました",
      status: "success",
      duration: 3000,
      isClosable: true,
    });

    onClose();
  }

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
    if (convertData.length !== 0) setPartTime(convertData[0].value);
    setIsLoaded(true);
  }

  React.useEffect(() => {
    fetchPartTime();
  }, []);

  return (
    <>
      <Button
        width="200px"
        colorScheme="white"
        textColor="black"
        fontWeight="normal"
        ref={btnRef}
        onClick={onOpen}
      >
        シフトの追加
      </Button>

      <GoalMoneySideMenu
        data={{ isOpen, onOpen, onClose, btnRef }}
        headerName={"シフトの追加"}
      >
        <Skeleton isLoaded={isLoaded}>
          <form onSubmit={handleSubmit}>
            <SelectBox round={""} title="バイト先" name="partTime" selectList={partTimeList} defaultSelectValue={null} value={partTime} setValue={setPartTime} />
            <InputBox round={""} inputName="タイトル" value={title} setValue={setTitle} formName="title"></InputBox>
            <InputBox round={""} inputName="開始日時" value={start} setValue={setStart} formName="start"></InputBox>
            <InputBox round={""} inputName="終了日時" value={end} setValue={setEnd} formName="end"></InputBox>
            <InputBox round={""} inputName="休憩時間" value={rest} setValue={setRest} formName="rest"></InputBox>
            <InputBox round={""} inputName="メモ" value={memo} setValue={setMemo} formName="memo"></InputBox>

            <p>
              ※ 開始日時、終了日時は「YYYY-MM-DDTHH:MM」の形式で入力してください。例）2021-01-01T10:00
            </p>

            <Button
              mt={4}
              colorScheme="teal"
              type="submit"
            >
              追加
            </Button>
          </form>
        </Skeleton>
      </GoalMoneySideMenu>
    </>
  );
};

export default AddShift;
