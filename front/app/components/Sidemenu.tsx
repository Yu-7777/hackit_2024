import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  ChakraProvider,
  MenuGroup,
} from "@chakra-ui/react";
import { AddIcon, ChevronDownIcon } from "@chakra-ui/icons";
import Circular from "./Circular";
import MoneyList from "./MoneyList";
import AddJob from "./Sidemenu/AddJob";
import AddShift from "./Sidemenu/AddShift";
import EditJob from "./Sidemenu/EditJob";

const SideMenu = ({events, goleMoney}: {events: any, goleMoney: number}) => {
  const calcMoneyList = () => {
    const calcMoney = (shifts: any) => {
      let val = 0;

      for (const event of shifts) {
        const startHour = Number(event.work_start.split(":")[0]);
        const startMinute = Number(event.work_start.split(":")[1]);
        const endHour = Number(event.work_end.split(":")[0]);
        const endMinute = Number(event.work_end.split(":")[1]);

        const start = startHour * 60 + startMinute;
        const end = endHour * 60 + endMinute;

        const diffHour = (end - start) / 60;

        val += diffHour * event.part_time.hourly_wage;
      }

      return val;
    }

    const todayShifts = events.filter((event: any) => {
      const today = new Date();
      const eventDate = new Date(event.date);

      return today >= eventDate;
    });

    return {
      goleMoney: Math.floor(goleMoney / 12),
      todayMoney: calcMoney(todayShifts),
      prospectMoney: calcMoney(events),
    }
  }

  return (
    <>
        <div
          className="w-72 h-screen border border-gray-200 z-10 absolute"
          style={{ background: "#fff" }}
        >
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
              ml={5}
              mt={5}
            >
              <AddIcon /> 作成
            </MenuButton>
            <MenuList>
              <MenuGroup title='バイト'>
                <MenuItem ><AddJob /></MenuItem>
                <MenuItem><EditJob /></MenuItem>
              </MenuGroup>
              <MenuGroup title="シフト">
                <MenuItem><AddShift /></MenuItem>
              </MenuGroup>
            </MenuList>
          </Menu>
          <MoneyList
            data={calcMoneyList()}
          ></MoneyList>
          <div className="ml-4 mt-8 text-2xl">目標までの達成度</div>
          <Circular
            data={{
              size: "250px",
              progressSize: "4xl",
              goalSize: "base",
              achievementSize: "2xl",
              mtsize: "1",
              progress: Math.round((calcMoneyList().todayMoney / calcMoneyList().goleMoney) * 100),
            }}
          ></Circular>
        </div>
    </>
  );
};

export default SideMenu;
