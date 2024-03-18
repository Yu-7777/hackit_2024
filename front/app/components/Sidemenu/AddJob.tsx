import { Button, Skeleton, useDisclosure, useToast } from "@chakra-ui/react";
import React from "react";
import GoalMoneySideMenu from "./GoalMoneySideMenu";
import InputBox from "../inputBox";
import SelectBox from "../SelectBox";
import ChooseColor from "./ChooseColor";
import PayDay from "./PayDay";
import PayValue from "./PayValue";
import { Form, Formik } from "formik";

const AddJob = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef<HTMLButtonElement>(null);
  const [jobName, setJobName] = React.useState("");
  const [color, setColor] = React.useState("");
  const [closingDate, setClosingDate] = React.useState("");
  const [payDate, setPayDate] = React.useState("");
  const [wage, setWage] = React.useState("");

  const [isLoaded, setIsLoaded] = React.useState(false);

  const [colorList, setColorList] = React.useState<{value: string, content: string}[]>([]);

  const toast = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
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

    fetch(`${process.env.NEXT_PUBLIC_API_HOST}/part_times`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("access-token")}`,
      },
      body: JSON.stringify({
        "part_time": {
          "job_name": jobName,
          "hourly_wage": wage,
          "transportation_allowance": 0,
          "Holiday_allowance": 0,
          "time_allowance_start": "17:00",
          "time_allowance_end": "20:00",
          "target_monthly_income": 100000,
          "closing_date": closingDate,
          "transfer_date": payDate,
          "up_manny": 0,
          "part_time_color_id": color,
        }
      }),
    });

    setJobName("");
    setColor("");
    setClosingDate("");
    setPayDate("");
    setWage("");

    toast({
      title: "バイト先を追加しました",
      status: "success",
      duration: 3000,
      isClosable: true,
    });

    onClose();
  }

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
    setColor(convertData[0].value);
    setIsLoaded(true);
  };

  React.useEffect(() => {
    fetchColorList();
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
        バイト先の追加
      </Button>

      <GoalMoneySideMenu
        data={{ isOpen, onOpen, onClose, btnRef }}
        headerName={"バイト先の追加"}
      >
        <Skeleton isLoaded={isLoaded}>
          <form onSubmit={handleSubmit}>
            <InputBox round={""} inputName={"バイト先"} value={jobName} setValue={setJobName} formName="jobName"></InputBox>
            <SelectBox round={""} title="掲示色" name="color" selectList={colorList} defaultSelectValue={null} value={color} setValue={setColor} />
            <InputBox round={""} inputName={"締日(日)"} value={closingDate} setValue={setClosingDate} formName="closingDate"></InputBox>
            <InputBox round={""} inputName={"給料日(日)"} value={payDate} setValue={setPayDate} formName="payDate"></InputBox>
            <InputBox round={""} inputName={"給料（円）"} value={wage} setValue={setWage} formName="wage"></InputBox>

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

export default AddJob;
