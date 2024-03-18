"use client";

import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import SideMenu from "../components/Sidemenu";
import { ChakraProvider, Skeleton, Spinner } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import isUserSignIn from "../utils/isUserSignIn";

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from "@fullcalendar/interaction";
import ChooseShift from "../components/ChooseShift";

const Page = () => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const router = useRouter();
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [calendarData, setCalendarData] = React.useState<{title: string, date: string, id: string, color: string}[]>([]);
  const [chooseId, setChooseId] = React.useState<number>(-1);
  const [shiftData, setShiftData] = React.useState<any>({});
  const [goleMoney, setGoleMoney] = React.useState<number>(0);

  const [deletedShiftId, setDeletedShiftId] = React.useState<number>(-1);

  const fetchCalendarData = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/calendars`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("access-token")}`,
      },
    });

    if (!response.ok) throw new Error("Network response was not ok");

    const data = await response.json();

    const calendarData = data.calendar.shifts;

    setCalendarData(calendarData);
    setGoleMoney(data.goalAnnualIncome * 10000);
    setIsLoaded(true);
  };

  useEffect(() => {
    if (deletedShiftId === -1) return;

    const newCalendarData = calendarData.filter((data) => {
      return data.id !== String(deletedShiftId);
    });

    setCalendarData(newCalendarData);
    setDeletedShiftId(-1);
  }, [deletedShiftId, calendarData]);


  React.useEffect(() => {
    isUserSignIn(router, localStorage.getItem("access-token"));
    fetchCalendarData();
  }, [router]);

  useEffect(() => {
    fetchCalendarData();
  }, [deletedShiftId]);

  const toggleSideMenu = () => {
    setIsSideMenuOpen(!isSideMenuOpen);
    setChooseId(-1);
  };

  useEffect(() => {
    setIsSideMenuOpen(false);
  }, []);

  async function handleEventClick(arg: any) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/shifts/${arg.event.id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("access-token")}`,
      },
    });

    if (!response.ok) throw new Error("Network response was not ok");

    const shiftData = await response.json();

    setChooseId(arg.event.id);
    setShiftData(shiftData);
  }

  return (
    <>
      <Header isSideMenuOpen={isSideMenuOpen} toggleSideMenu={toggleSideMenu} />
      {isSideMenuOpen && <SideMenu events={calendarData} goleMoney={goleMoney} />}
      <div className="flex min-h-100vh">
        <div className="flex flex-col flex-grow">
          <Skeleton isLoaded={isLoaded}>
            <FullCalendar
              plugins={[ dayGridPlugin, interactionPlugin ]}
              initialView="dayGridMonth"
              events={calendarData}
              eventClick={handleEventClick}
            />
          </Skeleton>
        </div>
      </div>
      {chooseId !== -1 && !isSideMenuOpen && <ChooseShift shiftData={shiftData} setDeletedShiftId={setDeletedShiftId} />}
    </>
  );
};

export default Page;
