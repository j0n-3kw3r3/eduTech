import { Image } from "@nextui-org/react";
import logo from "../assets/image/logo.svg";
import logout from "../assets/icons/logout.svg";
import { useState } from "react";
import { FiBarChart, FiCalendar, FiDollarSign, FiFile, FiLayers } from "react-icons/fi";
import { MdOutlineDashboard } from "react-icons/md";
import Attendance from "../components/orgamism/parent/attendance";
import Dashboard from "../components/orgamism/parent/dashboard";
import Document from "../components/orgamism/parent/documents.jsx";
import Expense from "../components/orgamism/parent/expense";
import Results from "../components/orgamism/parent/results";
import Calender from "../components/orgamism/parent/calender";
import { Link } from "react-router-dom";

export default function Parentdashboard() {
  const [tab, setTab] = useState({
    dashboard: true,
    calender: false,
    document: false,
    expense: false,
    results: false,
    attendance: false,
  });

  const toggleDashboard = () => {
    setTab({
      dashboard: true,
      calender: false,
      document: false,
      expense: false,
      results: false,
      attendance: false,
    });
  };
  const toggleCalender = () => {
    setTab({
      dashbord: false,
      calender: true,
      document: false,
      expense: false,
      results: false,
      attendance: false,
    });
  };
  const toggleDocument = () => {
    setTab({
      dashbord: false,
      calender: false,
      document: true,
      expense: false,
      results: false,
      attendance: false,
    });
  };
  const toggleExpense = () => {
    setTab({
      dashbord: false,
      calender: false,
      document: false,
      expense: true,
      results: false,
      attendance: false,
    });
  };
  const toggleResults = () => {
    setTab({
      dashbord: false,
      calender: false,
      document: false,
      expense: false,
      results: true,
      attendance: false,
    });
  };
  const toggleAttendance = () => {
    setTab({
      dashbord: false,
      calender: false,
      document: false,
      expense: false,
      results: false,
      attendance: true,
    });
  };
  const ParentData = {
    name: "Jason Hughes",
    url: "https://i.pravatar.cc/150?u=a04258114e29026702d",
  };

  return (
    <div className="flex h-[100vh]">
      <div className="w-[15%] border-r h-full pl-4 pr-2 py-10">
        <div className="flex ">
          <Image className="rounded-lg" alt="" src={logo} classNames=" w-[3.4em]  " />
          <div className="width-[5.31rem] height-[1.88rem] leading-tight md:pt-4 pt-2 pl-2 flex flex-col ">
            <h1 className="md:text-lg text-primary  ">eDucura</h1>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-2">
          <div
            className={
              tab.dashboard == true
                ? "text-primary flex  gap-6 cursor-pointer items-center p-4 hover:bg-slate-400 hover:bg-opacity-5 "
                : "hover:bg-slate-400 hover:bg-opacity-5 p-4 cursor-pointer text-foreground flex gap-6 items-center"
            }
            onClick={toggleDashboard}
          >
            <MdOutlineDashboard />
            Dashboard
          </div>

          <div
            className={
              tab.calender == true
                ? "text-primary flex  gap-6 cursor-pointer items-center p-4 hover:bg-slate-400 hover:bg-opacity-5 "
                : "hover:bg-slate-400 hover:bg-opacity-5 p-4 cursor-pointer text-foreground flex gap-6 items-center"
            }
            onClick={toggleCalender}
          >
            <FiCalendar />
            Calender
          </div>

          <div
            className={
              tab.document == true
                ? "text-primary flex  gap-6 cursor-pointer items-center p-4 hover:bg-slate-400 hover:bg-opacity-5 "
                : "hover:bg-slate-400 hover:bg-opacity-5 p-4 cursor-pointer text-foreground flex gap-6 items-center"
            }
            onClick={toggleDocument}
          >
            <FiLayers />
            Document
          </div>

          <div
            className={
              tab.expense == true
                ? "text-primary flex  gap-6 cursor-pointer items-center p-4 hover:bg-slate-400 hover:bg-opacity-5 "
                : "hover:bg-slate-400 hover:bg-opacity-5 p-4 cursor-pointer text-foreground flex gap-6 items-center"
            }
            onClick={toggleExpense}
          >
            <FiDollarSign />
            Expense
          </div>
          <div
            className={
              tab.results == true
                ? "text-primary flex  gap-6 cursor-pointer items-center p-4 hover:bg-slate-400 hover:bg-opacity-5 "
                : "hover:bg-slate-400 hover:bg-opacity-5 p-4 cursor-pointer text-foreground flex gap-6 items-center"
            }
            onClick={toggleResults}
          >
            <FiFile />
            Results
          </div>
          <div
            className={
              tab.attendance == true
                ? "text-primary flex  gap-6 cursor-pointer items-center p-4 hover:bg-slate-400 hover:bg-opacity-5 "
                : "hover:bg-slate-400 hover:bg-opacity-5 p-4 cursor-pointer text-foreground flex gap-6 items-center"
            }
            onClick={toggleAttendance}
          >
            <FiBarChart />
            Attendance
          </div>
        </div>
        <Link to='/login' className="flex text-red-600 gap-6 mt-10 p-4 hover:bg-red-400 cursor-pointer ease-in-out duration-200 hover:bg-opacity-5">
          <Image src={logout} />
          Logout
        </Link>
      </div>
      <div className="p-4 pt-0 pr-14 w-full h-full overflow-y-auto ">
        {tab.dashboard && <Dashboard ParentData={ParentData} />}
        {tab.calender && <Calender ParentData={ParentData} />}
        {tab.document && <Document ParentData={ParentData} />}
        {tab.expense && <Expense ParentData={ParentData} />}
        {tab.results && <Results ParentData={ParentData} />}
        {tab.attendance && <Attendance ParentData={ParentData} />}
      </div>
    </div>
  );
}
