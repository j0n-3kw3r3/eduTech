import { Avatar, BreadcrumbItem, Breadcrumbs, Navbar, NavbarBrand, NavbarContent } from "@nextui-org/react";
import { FiBell, FiMail } from "react-icons/fi";
import { useState } from "react";
import "react-calendar/dist/Calendar.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Calendar from "react-calendar";
import { Calendar as BigCalendar, globalizeLocalizer } from "react-big-calendar";
import globalize from "globalize";

const localizer = globalizeLocalizer(globalize);

export default function Calender() {
  const [value, onChange] = useState(new Date());
  return (
    <div>
      <Navbar isBordered className=" mb-4 ">
        <NavbarContent justify="start">
          <NavbarBrand>Calender</NavbarBrand>
        </NavbarContent>
        <NavbarContent as="div" className="items-center" justify="end">
          <div className="mr-4 flex gap-4 ">
            <FiBell className="text-foreground cursor-pointer" size={20} />
            <FiMail className="text-foreground cursor-pointer" size={20} />
          </div>
          <Avatar
            as="button"
            className="transition-transform"
            color="primary"
            name="Jason Hughes"
            size="sm"
            src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
          />
          <div className="curor-pointer ">
            <div className="text-primary cursor-pointer ">Jason Hughes</div>
            <div className="text-foreground text-xs cursor-pointer ">Parent</div>
          </div>
        </NavbarContent>
      </Navbar>
      <Breadcrumbs>
        <BreadcrumbItem color="black">Parent</BreadcrumbItem>
        <BreadcrumbItem color="primary">Calender</BreadcrumbItem>
      </Breadcrumbs>
      <div className="flex gap-6 mt-4">
        <div className="shadow w-[100%] h-fit  ">
          <BigCalendar
            localizer={localizer}
            // events={myEventsList}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500 }}
          />
        </div>
        <div className="w-[25%] flex flex-col gap-4">
          <Calendar onChange={onChange} value={value} />
          <div className="border p-4 bg-white">
            <h1 className="font-bold text-xl">Activities</h1>
            <div className="border-b mt-2">
              <div className="bg-[#81FF7F] w-fit p-2 text-white rounded-lg ">4 April, 2024</div>
              <h1 className="mt-2">Sport</h1>
              <p className="text-slate-400 text-sm pb-2 ">
                School Sports will be coming up at the school stadium by 10:00am
              </p>
            </div>
            <div className="border-b mt-2">
              <div className="bg-[#FF8A00] text-white w-fit p-2 rounded-lg ">30 May, 2024</div>
              <h1 className="mt-2">CA Test</h1>
              <p className="text-slate-400 text-sm pb-2 ">Continous Assesment Test commences </p>
            </div>
            <div className="border-b mt-2">
              <div className="bg-[#81FF7F] w-fit p-2 rounded-lg text-white ">4 April, 2024</div>
              <h1 className="mt-2">Sport</h1>
              <p className="text-slate-400 text-sm pb-2 ">
                School Sports will be coming up at the school stadium by 10:00am
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
