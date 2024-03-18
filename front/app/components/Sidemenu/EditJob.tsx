import { Box, Button, Divider, Heading, Skeleton, useDisclosure, useToast } from "@chakra-ui/react";
import React from "react";
import GoalMoneySideMenu from "./GoalMoneySideMenu";
import InputBox from "../inputBox";
import SelectBox from "../SelectBox";
import ChooseColor from "./ChooseColor";
import PayDay from "./PayDay";
import PayValue from "./PayValue";
import { Form, Formik } from "formik";

const EditJob = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef<HTMLButtonElement>(null);

  const [partTimeList, setPartTimeList] = React.useState<{value: string, content: string}[]>([]);
  const [partTime, setPartTime] = React.useState("");

  const [isFirstLoaded, setIsFirstLoaded] = React.useState(false);
  const [isPartTimeLoaded, setIsPartTimeLoaded] = React.useState(false);

  /* バイトの編集項目 */
  const [partTimeId, setPartTimeId] = React.useState("");
  const [jobName, setJobName] = React.useState("");
  const [color, setColor] = React.useState("");
  const [colorList, setColorList] = React.useState<{value: string, content: string}[]>([]);
  const [closingDate, setClosingDate] = React.useState("");
  const [payDate, setPayDate] = React.useState("");
  const [wage, setWage] = React.useState("");

  const toast = useToast();

  const fetchPartTimeList = async () => {
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
    setIsFirstLoaded(true);
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (jobName === "" || color === "" || closingDate === "" || payDate === "" || wage === "") {
      toast({
        title: "未入力の項目があります",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/part_times/${partTime}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("access-token")}`,
      },
      body: JSON.stringify({
        "part_time": {
          "job_name": jobName,
          "hourly_wage": wage,
          "closing_date": closingDate,
          "transfer_date": payDate,
          "part_time_color_id": color,
        }
      }),
    });

    if (res.ok) {
      toast({
        title: "バイト先を編集しました",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      onClose();

      window.location.reload();
    }
  };

  const deleteSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/part_times/${partTime}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("access-token")}`,
      },
    });

    if (res.ok) {
      toast({
        title: "バイト先を削除しました",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      onClose();

      window.location.reload();
    }
  }

  const getPartTimeDetail = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/part_times/${partTime}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("access-token")}`,
      },
    });

    const data = (await res.json()).part_time;

    setPartTimeId(data.id);
    setJobName(data.job_name);
    setColor(String(data.part_time_color_id));
    setClosingDate(data.closing_date);
    setPayDate(data.transfer_date);
    setWage(data.hourly_wage);
  };


  const fetchColorList = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/colors`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("access-token")}`,
      },
    });

    if (!response.ok) throw new Error("Network response was not ok");

    const colorData = await response.json();

    const convertData = colorData.map((data: any) => {
      return {
        value: String(data.id),
        content: data.name,
      };
    });

    setColorList(convertData);
  };

  React.useEffect(() => {
    fetchPartTimeList();
    fetchColorList();
  }, []);

  React.useEffect(() => {
    if (partTime === "") return;

    setIsPartTimeLoaded(false);
    getPartTimeDetail();
    setIsPartTimeLoaded(true);
  }, [partTime]);

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
        バイト先の編集
      </Button>

      <GoalMoneySideMenu
        data={{ isOpen, onOpen, onClose, btnRef }}
        headerName={"バイト先の編集"}
      >
        <Heading as="h3" size="md" mb={4}>
          編集するバイト先の選択
        </Heading>
        <Skeleton isLoaded={isFirstLoaded}>
          <SelectBox round={""} title="バイト先" name="partTime" selectList={partTimeList} defaultSelectValue={null} value={partTime} setValue={setPartTime} />
        </Skeleton>

        <Divider my={4} />

        <Skeleton isLoaded={isPartTimeLoaded}>
          <form onSubmit={handleSubmit}>
            <input type="hidden" name="partTimeId" value={partTimeId} />
            <InputBox round={""} inputName={"バイト先"} value={jobName} setValue={setJobName} formName="jobName"></InputBox>
            <SelectBox round={""} title="掲示色" name="color" selectList={colorList} defaultSelectValue={null} value={color} setValue={setColor} />
            <InputBox round={""} inputName={"締日(日)"} value={closingDate} setValue={setClosingDate} formName="closingDate"></InputBox>
            <InputBox round={""} inputName={"給料日(日)"} value={payDate} setValue={setPayDate} formName="payDate"></InputBox>
            <InputBox round={""} inputName={"給料（円）"} value={wage} setValue={setWage} formName="wage"></InputBox>

            <Box textAlign="center">
              <Button
                mt={4}
                colorScheme="teal"
                type="submit"
              >
                編集
              </Button>
            </Box>
          </form>

          <form onSubmit={deleteSubmit}>
            <Box textAlign="center">
              <Button mt={4} colorScheme="red" type="submit">
                削除
              </Button>
            </Box>
          </form>
        </Skeleton>

      </GoalMoneySideMenu>
    </>
  );
};

export default EditJob;
