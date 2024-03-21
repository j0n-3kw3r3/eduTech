import { Image } from "@nextui-org/react";
import { useLocation } from "react-router-dom";
import file from "../../assets/icons/file.svg";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, ArcElement, Tooltip, Legend, LinearScale, CategoryScale } from "chart.js";

ChartJS.register(BarElement, ArcElement, Tooltip, Legend, LinearScale, CategoryScale);

export default function Warddetails() {
  const location = useLocation();
  const studentData = location.state?.studentData;
  const data = {
    labels: ["Present", "Absent"],
    datasets: [
      {
        label: "",
        data: [studentData?.attendance?.present, studentData?.attendance?.absent],
        borderWidth: 1,
        barThickness: 50,
        backgroundColor: ["#2BC05E", "#ED4444"],
      },
    ],
  };

  return (
    <div className="grid grid-cols-2 gap-4 p-6 ">
      <div className="flex w-full cursor-pointer  gap-4 border p-4 rounded-sm h-fit ">
        <Image src={studentData.image} radius="full" />
        <div className="flex flex-col gap-2">
          <div className="grid grid-cols-2 w-full gap-10 ">
            <p className="font-bold">Name:</p>
            <p>{studentData.name}</p>
          </div>
          <div className="grid grid-cols-2 w-full gap-10 ">
            <p className="font-bold">Gender:</p>
            <p>{studentData.gender}</p>
          </div>
          <div className="grid grid-cols-2 w-full gap-10 ">
            <p className="font-bold">Class:</p>
            <p>{studentData.class}</p>
          </div>
          <div className="grid grid-cols-2 w-full gap-10 ">
            <p className="font-bold">Admission No:</p>
            <p>{studentData.admissionNo}</p>
          </div>
          <div className="grid grid-cols-2 w-full gap-10 ">
            <p className="font-bold">Admission Date:</p>
            <p>{studentData.dateOfAdmission}</p>
          </div>
          <div className="grid grid-cols-2 w-full gap-10 ">
            <p className="font-bold">School:</p>
            <p>{studentData.school}</p>
          </div>
        </div>
      </div>
      <div className=" w-full cursor-pointer  gap-4 border p-4 rounded-sm ">
        <h1 className="font-bold mb-2 ">Books</h1>
        <div className="grid grid-cols-2 gap-4 ">
          {studentData?.documents?.map((item, index) => (
            <div className="shadow-lg flex gap-4 items-center p-4 border " key={index}>
              <Image src={file} radius="none" />
              <p>{item.subject}</p>
            </div>
          ))}
        </div>
      </div>
      <div className=" w-full cursor-pointer  gap-4 border p-4 rounded-sm ">
        <h1 className="font-bold mb-2 ">Attendance</h1>
        <Bar data={data} />
      </div>
      <div className=" w-full cursor-pointer  gap-4 border p-4 rounded-sm ">
        <h1 className="font-bold mb-2 ">Results</h1>
        <div className="grid grid-cols-2 gap-4 ">
          {studentData?.results?.map((item, index) => (
            <div className="shadow-lg flex gap-4 items-center p-4 border " key={index}>
              <Image src={file} radius="none" />
              <p>{item.subject} ({item.grade})</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
