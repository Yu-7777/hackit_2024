'use client'

import FullCalendar from "@fullcalendar/react";
import Header from "./components/Header";
import SideMenu from "./components/Sidemenu";
import dayGridPlugin from "@fullcalendar/daygrid"; // pluginは、あとから

const Page = () => {
  return (
    <>
      <Header></Header>
      <SideMenu></SideMenu>
      <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" />
    </>
  );
};

export default Page;
