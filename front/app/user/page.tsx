"use client";

import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import Header from "../components/Header";
import SideMenu from "../components/Sidemenu";
import dayGridPlugin from "@fullcalendar/daygrid"; // pluginは、あとから
import { ChakraProvider } from "@chakra-ui/react";

const Page = () => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  const toggleSideMenu = () => {
    setIsSideMenuOpen(!isSideMenuOpen);
  };

  useEffect(() => {
    setIsSideMenuOpen(false);
  }, []);

  return (
    <>
      <Header isSideMenuOpen={isSideMenuOpen} toggleSideMenu={toggleSideMenu} />
      {isSideMenuOpen && <SideMenu />}
      <div className="flex min-h-100vh">
        <div className="flex flex-col flex-grow">
          <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" />
        </div>
      </div>
    </>
  );
};

export default Page;
