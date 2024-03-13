"use client";

import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import Header from "../components/Header";
import SideMenu from "../components/Sidemenu";
import dayGridPlugin from "@fullcalendar/daygrid"; // pluginは、あとから

const Page = () => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(true);

  const toggleSideMenu = () => {
    setIsSideMenuOpen(!isSideMenuOpen);
  };

  useEffect(() => {
    setIsSideMenuOpen(true);
  }, []);

  return (
    <>
      <Header isSideMenuOpen={isSideMenuOpen} toggleSideMenu={toggleSideMenu} />
      <div className="flex min-h-100vh">
        {isSideMenuOpen && <SideMenu />}
        <div className="flex flex-col flex-grow">
          <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" />
        </div>
      </div>
    </>
  );
};

export default Page;
