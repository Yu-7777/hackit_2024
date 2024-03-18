"use client";

import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import SideMenu from "../components/Sidemenu";
import { ChakraProvider } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import isUserSignIn from "../utils/isUserSignIn";

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from "@fullcalendar/interaction";
import jaLocale from "@fullcalendar/core/locales/ja";
import Sidepeak from "../components/Sidepeak";

const Page = () => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const router = useRouter();

  React.useEffect(() => {
    isUserSignIn(router, localStorage.getItem("access-token"));
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
          <FullCalendar
            plugins={[ dayGridPlugin, interactionPlugin ]}
            initialView="dayGridMonth"
            events={[
              { title: 'event 1', date: '2024-03-10', id: '1' },
              { title: 'event 2', date: '2024-03-02', id: '2' },
            ]}
            eventClick={handleEventClick}
          />
        </div>
      </div>
      <Sidepeak></Sidepeak>
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
