import FullCalendar from "@fullcalendar/react";
import Header from "./components/Header";
import SideMenu from "./components/Sidemenu";

const Page = () => {
  return (
    <>
      <Header></Header>
      <SideMenu></SideMenu>
      <FullCalendar></FullCalendar>
    </>
  );
};

export default Page;
