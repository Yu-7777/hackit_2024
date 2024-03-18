"use client";

import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import SideMenu from "../components/Sidemenu";
import { ChakraProvider, Spinner } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import isUserSignIn from "../utils/isUserSignIn";

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from "@fullcalendar/interaction";
import jaLocale from "@fullcalendar/core/locales/ja";
import Sidepeak from "../components/Sidepeak";
import InputBox from "../components/inputBox";

const Page = () => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const router = useRouter();
  const [isLoaded, setIsLoaded] = useState(false);
  const [calendarData, setCalendarData] = useState<{title: string, date: string, id: string, color: string}[]>([]);

  const fetchCalendarData = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/calendars`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("access-token")}`,
      },
    });

    if (!response.ok) throw new Error("Network response was not ok");

    const calendarData = (await response.json()).calendar.shifts;

    const convertData = calendarData.map((data: any) => {
      return {
        title: data.title,
        date: data.date,
        id: data.id,
        color: data.color,
      };
    });

    setCalendarData(convertData);
    setIsLoaded(true);

    console.log(convertData);
  };


  React.useEffect(() => {
    isUserSignIn(router, localStorage.getItem("access-token"));
    fetchCalendarData();
  }, [router]);

  const toggleSideMenu = () => {
    setIsSideMenuOpen(!isSideMenuOpen);
  };

  useEffect(() => {
    setIsSideMenuOpen(false);
  }, []);

  function handleDateClick(arg: any) {
    alert('date click! ' + arg.dateStr)
  }

  function handleEventClick(arg: any) {
    alert('event click! ' + arg.event.id)
  }

  return (
    <>
      <Header isSideMenuOpen={isSideMenuOpen} toggleSideMenu={toggleSideMenu} />
      {isSideMenuOpen && <SideMenu />}
      <div className="flex min-h-100vh">
        <div className="flex flex-col flex-grow">
          {!isLoaded && <Spinner />}
          {isLoaded && (
            <FullCalendar
              plugins={[ dayGridPlugin, interactionPlugin ]}
              initialView="dayGridMonth"
              events={calendarData}
              eventClick={handleEventClick}
            />
          )}
        </div>
      </div>
      <Sidepeak headerName={"シフトの追加"} openResource={undefined} >
        <InputBox round={""} inputName={"タイトル"}></InputBox>
      </Sidepeak>
    </>
  );
};

function renderEventContent(eventInfo: any) {
  return(
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  )
}

export default Page;
