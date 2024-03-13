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
      <div style={{ display: "flex", height: "100vh" }}>
        <div
          style={{
            width: isSideMenuOpen ? "300px" : "0",
            transition: "width 0.5s",
            overflowX: "hidden",
          }}
        >
          {isSideMenuOpen && <SideMenu />}
        </div>
        <div
          style={{
            flexGrow: 1,
            height: "100%",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" />
        </div>
      </div>
    </>
  );
};

export default Page;
